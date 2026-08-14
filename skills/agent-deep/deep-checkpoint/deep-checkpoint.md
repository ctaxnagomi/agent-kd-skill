---
{
  "name": "deep-checkpoint",
  "description": "Save deep-run state at checkpoints so a long investigation can resume from the last fold, not from scratch. Interruptible and resumable deep work. Trigger keywords: checkpoint, resume, save state, restart, long-running, interrupt."
}
---

# Deep-agent checkpointing

An efficiency skill for making long deep runs resumable by persisting their state at defined checkpoints.

## Use case

Use this skill when:

- A deep run spans many steps and could be interrupted (timeout, cost, error).
- You want to pause and resume work across sessions.
- A crash should cost a small delta, not the whole run.
- Parallel or iterative runs share a common state file.

## Core principle

A run is resumable if its state is persisted at intervals. The checkpoint captures what is known, what is open, and where reading stopped — enough to continue, not to replay.

## Playbook

1. **Define checkpoint boundaries** — after each fold, chunk group, or step budget.
2. **Persist a compact state file** — summary, index, progress, open questions, budget used.
3. **Include enough to continue** — the next target, not the full transcript.
4. **Write atomically** — a checkpoint either fully lands or doesn't.
5. **Resume from the latest valid checkpoint** — rebuild hot context from it.
6. **Verify resume cheaply** — a quick self-check that the state is coherent.

## Rules

- Checkpoints are lossy by design: facts, decisions, and pointers — not raw logs.
- State files are small and versioned; supersede, don't append forever.
- Every checkpoint records budget spent so far, for calibration.
- Resume must not replay work that the checkpoint already settled.

## Checkpoint shape

```json
{ "run": "deep-investigate-x", "fold": 4,
  "summary": "...", "index": "...",
  "next": "read tier-A source s3",
  "spent": "42k tokens", "open": [...] }
```

## Cost expectation

Checkpointing converts catastrophic re-runs into cheap resumes, typically saving 30-80% on interrupted deep work and making long investigations safe to run.
