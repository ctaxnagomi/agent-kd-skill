---
{
  "name": "scaffold-exercises",
  "description": "Create exercise directory structures with sections, problems, solutions, and explainers that pass linting. Use when scaffolding exercises, creating exercise stubs, or setting up a new course section.",
  "credit": "Matt Pocock (mattpocock/skills)"
}
---

# Scaffold Exercises

Create exercise directory structures with sections, problems, solutions, and explainers that pass linting.

## Directory naming
- Sections: XX-section-name/ inside exercises/
- Exercises: XX.YY-exercise-name/ inside a section

## Exercise variants
- problem/ — student workspace with TODOs
- solution/ — reference implementation
- explainer/ — conceptual material

## Required files
Each subfolder needs a readme.md that is non-empty with no broken links.

## Workflow
1. Parse the plan
2. Create directories
3. Create stub readmes
4. Run lint
5. Fix any errors

## Credit

This skill is based on the work of **Matt Pocock** ([@mattpocock](https://github.com/mattpocock)). Original source: [mattpocock/skills](https://github.com/mattpocock/skills). Licensed under MIT.
