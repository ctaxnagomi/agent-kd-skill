---
name: create-hermes-skill
description: "Create your own Hermes SKILL.md with dictionary-based input correction and validation."
version: 1.0.0
author: Hermes Agent
license: MIT
platforms: [linux, macos, windows]
metadata:
  hermes:
    tags: [skill-authoring, creation, validation, dictionary, hermes]
---

# Create Hermes Skill

Author new SKILL.md files for Hermes Agent with built-in dictionary correction. Validates frontmatter, corrects typos, and ensures your skill follows Hermes standards.

## When to Use

- Creating a new skill from scratch
- Want to ensure your SKILL.md is valid
- Need help with Hermes skill format
- Correcting common mistakes in skill files

## Prerequisites

- Hermes Agent installed (v0.12.0+)
- Text editor or terminal access
- Basic understanding of YAML frontmatter
- Markdown knowledge

## Procedure

### Step 1: Gather Requirements

1. What does the skill do?
2. When should it trigger?
3. What tools does it need?
4. What are the step-by-step instructions?

### Step 2: Use the Dictionary

Before writing, apply these corrections to your input:

**Common Typos:**

| Wrong | Correct |
|-------|---------|
| skillname | skill-name |
| descriptionn | description |
| triger | trigger |
| prerequisits | prerequisites |
| verifycation | verification |
| procedur | procedure |
| pitfals | pitfalls |
| funciton | function |
| paramter | parameter |
| retrun | return |
| asyncronous | asynchronous |
| dependancy | dependency |
| inheritence | inheritance |
| recieve | receive |
| occurances | occurrences |
| consistant | consistent |
| seperate | separate |
| neccessary | necessary |
| accomodate | accommodate |
| acheive | achieve |
| aquire | acquire |
| arguement | argument |
| assasination | assassination |
| basicly | basically |
| believe | believe |
| calender | calendar |
| catagory | category |
| commited | committed |
| concensus | consensus |
| definately | definitely |
| desparate | desperate |
| disapear | disappear |
| embarass | embarrass |
| existance | existence |
| familar | familiar |
| finaly | finally |
| follwing | following |
| foriegn | foreign |
| giveing | giving |
| grammer | grammar |
| harrassment | harassment |
| independednt | independent |
| interupt | interrupt |
| knowlege | knowledge |
| libary | library |
| liscense | license |
| maintenence | maintenance |
| manageing | managing |
| milisecond | millisecond |
| neigbor | neighbor |
| noticable | noticeable |
| occured | occurred |
| perfomance | performance |
| persistant | persistent |
| posession | possession |
| preceed | precede |
| priviledge | privilege |
| probaly | probably |
| promiss | promise |
| psuedo | pseudo |
| reciept | receipt |
| refered | referred |
| relevent | relevant |
| rember | remember |
| repitition | repetition |
| requirment | requirement |
| rescind | rescind |
| responsability | responsibility |
| restaraunt | restaurant |
| seach | search |
| similarily | similarly |
| sincere | sincere |
| specifc | specific |
| successfull | successful |
| supercede | supersede |
| surprize | surprise |
| temperture | temperature |
| their | their/there/they're |
| there | there/their/they're |
| threshold | threshold |
| tommorow | tomorrow |
| tongiht | tonight |
| truely | truly |
| unfortunatly | unfortunately |
| untill | until |
| wierd | weird |

**Grammar Rules:**

| Wrong | Correct |
|-------|---------|
| its | it's (when meaning "it is") |
| your | you're (when meaning "you are") |
| theyre | they're |
| could of | could have |
| should of | should have |
| would of | would have |
| alot | a lot |
| noone | no one |
| eachother | each other |

### Step 3: Write the SKILL.md

Follow this template:

```markdown
---
name: my-skill-name
description: "Brief description (max 60 chars)"
version: 1.0.0
author: Your Name
license: MIT
platforms: [linux, macos, windows]
metadata:
  hermes:
    tags: [category, keyword, keyword]
---

# Skill Title

Brief intro.

## When to Use

Trigger conditions.

## Procedure

1. Step one
2. Step two

## Pitfalls

- Known failure modes

## Verification

How to confirm it worked.
```

### Step 4: Validate

1. Frontmatter is valid YAML
2. Description is under 60 characters
3. Name uses lowercase with hyphens
4. No typos from dictionary above
5. All sections present (When to Use, Procedure, Pitfalls, Verification)

### Step 5: Test

1. Save to `~/.hermes/skills/<category>/<skill-name>/SKILL.md`
2. Run `/skills` in Hermes to confirm it appears
3. Trigger the skill and verify behavior

## Pitfalls

- Missing frontmatter fields
- Description too long (over 60 chars)
- No trigger conditions
- Skipping verification section
- Not testing before publishing

## Verification

- Skill appears in `/skills` list
- Skill triggers correctly
- All steps work as documented
- No typos in final output

---

## How to use?

### 1. Download
Go to the [AGENT KD SKILL gallery](https://ctaxnagomi.github.io/agent-kd-skill/) and find this skill card. Click **Download** to save the SKILL.md file.

### 2. Install
Copy the downloaded SKILL.md into your agent's skills directory:

| Agent | Path |
|-------|------|
| **Hermes** | ~/.hermes/skills/hermes/create-hermes-skill/SKILL.md |
| **opencode** | ~/.config/opencode/skills/create-hermes-skill/SKILL.md |
| **Claude Code** | ~/.claude/skills/create-hermes-skill/SKILL.md |

### 3. Use
Restart your agent session. The skill will auto-load when you want to create a new skill.

### 4. Verify
Ask your agent to help create a skill. If it uses the dictionary and validates input, you're all set.
