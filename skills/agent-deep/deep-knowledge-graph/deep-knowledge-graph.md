---
{
  "name": "deep-knowledge-graph",
  "description": "Build a lightweight entity-and-relation graph of the research domain as you go, so connections surface and gaps become visible. Graph notes beat linear notes for complex topics. Trigger keywords: knowledge graph, entity relations, research map, connections, concept graph."
}
---

# Deep-agent knowledge graph

An efficiency skill for structuring deep-run findings as entities and relations, making complex domains navigable and gap-aware.

## Use case

Use this skill when:

- The domain has many entities, actors, or concepts and their relationships matter.
- Linear notes bury the connections that define the answer.
- You want to see at a glance what is known and what is missing.
- The answer is fundamentally relational ("how does X relate to Y?").

## Core principle

Represent findings as nodes (entities) and edges (relations). The graph is the working map: connections surface automatically, and missing edges mark the research gaps.

## Playbook

1. **Extract entities** — people, products, events, concepts, files, claims.
2. **Extract relations** — directed edges with a label and a source.
3. **Keep the graph lightweight** — text lines, not a DB; a keyed list is enough.
4. **Link new facts into the graph** — each finding attaches to existing nodes.
5. **Read the graph for gaps** — nodes with no edges, or questions that connect to nothing.
6. **Use the graph as the synthesis outline** — structure the final answer along its main paths.

## Rules

- Every node and edge carries a source pointer.
- One canonical node per entity; merge duplicates as they appear.
- Edges are labeled relations, not just "related."
- The graph stays the synthesis source of truth; prose is derived from it.

## Graph line format

```md
N: Anthropic | type:org | src:s1
N: Claude Code | type:product | src:s1
E: Anthropic --owns--> Claude Code | src:s1
```

## Cost expectation

Graph-structured notes surface connections without re-reading, typically improving answer quality and cutting synthesis effort 30-50% on relational topics.
