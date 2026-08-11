# Contributing to Dknowledger

[Português](./CONTRIBUTING.PT.md) · **English**

Dknowledger is an open public knowledge base. Useful contributions include correcting a claim, connecting a source, filling an empty paper, improving navigation and bringing a translation back in sync.

## The current Git flow

1. Open or reference an issue describing the gap and the evidence behind the change.
2. Create a focused branch from `master`.
3. Change the smallest coherent set of documents.
4. Run the repository checks when the site or generated catalog changes:

   ```sh
   node tools/build-catalog.js
   node tools/site-check.js
   ```

5. Open a pull request to `master` and connect it to the issue.

There is no active `peer-review` or `community-review` branch. During the founding phase, contributions remain open while the embassy and the ambassador may also edit, integrate and correct material directly through the ordinary Git flow. The versioned governance source is [`draykerdk/.github`](https://github.com/draykerdk/.github).

## Evidence rules

- Distinguish what is available now from what is proposed or historical.
- Link claims to a repository, document, issue, pull request, test or deployment when one exists.
- Do not present an old roadmap as a current schedule.
- Do not publish private vault content, personal context, credentials or agent memory.
- Preserve dates and replacement history when updating older material.

## Good first contributions

- One of the 16 English paper shells has only a title: write its scope and connect its sources.
- Compare a translated document with its English source and update what drifted.
- Find a claim that no longer matches a component contract and open a correction issue.
- Improve the generated catalog or the accessibility of [dknowledge.drayker.org](https://dknowledge.drayker.org).

If the right repository is unclear, start in the [General Forum](https://github.com/draykerdk/general-forum/issues/new/choose).
