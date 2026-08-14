/* zip.js — minimal, dependency-free ZIP writer (STORED entries, UTF-8 names).
   Creates .zip files that any OS/unzipper can open. No compression, by design:
   the bundled SKILL.md files are small text documents.
   Usage:
     var blob = makeZip([{ name: "folder/file.md", text: "..." }, ...]);
     downloadBlob(blob, "bundle.zip"); */
(function (global) {
  "use strict";

  var CRC_TABLE = (function () {
    var table = new Int32Array(256);
    for (var n = 0; n < 256; n++) {
      var c = n;
      for (var k = 0; k < 8; k++) {
        c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
      }
      table[n] = c;
    }
    return table;
  })();

  function crc32(bytes) {
    var c = -1;
    for (var i = 0; i < bytes.length; i++) {
      c = (c >>> 8) ^ CRC_TABLE[(c ^ bytes[i]) & 0xff];
    }
    return (c ^ -1) >>> 0;
  }

  var encoder = new TextEncoder();

  function u16(arr, v) {
    arr.push(v & 0xff, (v >>> 8) & 0xff);
  }

  function u32(arr, v) {
    arr.push(v & 0xff, (v >>> 8) & 0xff, (v >>> 16) & 0xff, (v >>> 24) & 0xff);
  }

  function makeZip(files) {
    var now = new Date();
    var dosTime =
      ((now.getHours() << 11) |
        (now.getMinutes() << 5) |
        (now.getSeconds() >> 1)) &
      0xffff;
    var dosDate =
      (((now.getFullYear() - 1980) << 9) |
        ((now.getMonth() + 1) << 5) |
        now.getDate()) &
      0xffff;

    var local = [];
    var central = [];
    var offset = 0;

    files.forEach(function (file) {
      var name = encoder.encode(file.name);
      var data = typeof file.text === "string" ? encoder.encode(file.text) : file.data;
      var crc = crc32(data);
      var size = data.length;

      var lh = [0x50, 0x4b, 0x03, 0x04]; // local file header
      u16(lh, 20); // version needed
      u16(lh, 0x0800); // flags: UTF-8 names
      u16(lh, 0); // method: store
      u16(lh, dosTime);
      u16(lh, dosDate);
      u32(lh, crc);
      u32(lh, size);
      u32(lh, size);
      u16(lh, name.length);
      u16(lh, 0); // extra length
      for (var i = 0; i < name.length; i++) lh.push(name[i]);
      local.push({ header: lh, data: data });

      var ch = [0x50, 0x4b, 0x01, 0x02]; // central directory header
      u16(ch, 20); // version made by
      u16(ch, 20); // version needed
      u16(ch, 0x0800); // flags
      u16(ch, 0); // method
      u16(ch, dosTime);
      u16(ch, dosDate);
      u32(ch, crc);
      u32(ch, size);
      u32(ch, size);
      u16(ch, name.length);
      u16(ch, 0); // extra length
      u16(ch, 0); // comment length
      u16(ch, 0); // disk number
      u16(ch, 0); // internal attrs
      u32(ch, 0); // external attrs
      u32(ch, offset); // local header offset
      for (var j = 0; j < name.length; j++) ch.push(name[j]);
      central.push(ch);

      offset += lh.length + size;
    });

    var bytes = [];
    local.forEach(function (e) {
      for (var i = 0; i < e.header.length; i++) bytes.push(e.header[i]);
      for (var j = 0; j < e.data.length; j++) bytes.push(e.data[j]);
    });
    var centralStart = bytes.length;
    central.forEach(function (e) {
      for (var i = 0; i < e.length; i++) bytes.push(e[i]);
    });
    var centralSize = bytes.length - centralStart;

    // end of central directory
    u32(bytes, 0x06054b50);
    u16(bytes, 0); // disk number
    u16(bytes, 0); // cd start disk
    u16(bytes, files.length);
    u16(bytes, files.length);
    u32(bytes, centralSize);
    u32(bytes, centralStart);
    u16(bytes, 0); // comment length

    return new Blob([new Uint8Array(bytes)], { type: "application/zip" });
  }

  function downloadBlob(blob, filename) {
    var url = URL.createObjectURL(blob);
    var a = document.createElement("a");
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    setTimeout(function () {
      URL.revokeObjectURL(url);
    }, 1000);
  }

  global.makeZip = makeZip;
  global.downloadBlob = downloadBlob;
})(window);
