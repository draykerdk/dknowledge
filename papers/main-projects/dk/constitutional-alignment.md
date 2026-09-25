---
title: "Constitutional alignment — current synthesis"
state: current
language: en
reviewed: 2026-09-25
---

# Constitutional alignment

How an intelligence that keeps improving itself stays aligned with the people it serves. This paper gathers in one place what the component repositories describe separately: [Dk](https://dk.drayker.org), the [ethical code](https://dk.drayker.org/ethos), the [veto chain](https://uid.drayker.org), the [independent member panel](https://advices.drayker.org) and the [organization governance](https://github.com/draykerdk/.github/blob/master/GOVERNANCE.md). It describes design requirements. None of it is a running system.

## The problem

An artificial intelligence trained once and then released has to carry human values as factory rules, and every factory rule ages. The harder case is an intelligence that improves the way it learns: whatever limits it is given, it could also learn to escape them. Saying that its competences only change through a constitutional process is not enough. The architecture has to show what holds that sentence up.

Drayker's answer is that alignment and integration go together. The intelligence is never isolated from the people who constitute it, so its objectives are not a list written in advance: they are what members keep saying, correcting and choosing with it.

## Two names

The **superintelligence** is the system as a whole: Dk Global, the personal and local Dks, the members and the data of every device in the network. People are part of it.

The **ASI** is Dk Global: the artificial part of that whole, the global weighting and learning of the state of every Dk. It makes decisions of its own inside the space the member constitution gives it. Its computation and memory stay distributed across the network; no server holds the whole.

## How it stays connected to people

**Representation.** Each member's personal Dk brings to a decision the context the person authorizes and what it has learned with them — patterns that transfer to other situations, not a biography. Nobody has to follow every discussion to have their position considered.

**Proposal and justified veto.** Any member can propose another solution or veto what directly affects their life. Both come with reasons. A veto carries its real grounds — intention, motives, scope and the facts it rests on — even when its author stays anonymous. A well-founded veto obliges the decision to be revised, and the cycle repeats toward consensus.

**Weighing, not counting.** Vetoes are weighed by what they reveal. A person counts once, however many contexts they belong to, and many vetoes repeating the same grounds add weight to those grounds, not new information. One veto can be enough: when its grounds bring information beyond the scope considered before the decision, it can lead to an adjustment by itself, after an advanced triage verifies the facts, establishes what they mean for this decision, screens for error and manipulation, and prefers a bounded test or exception to a general change.

**Certainty on both sides.** In a decision about a member's own technology or sphere, if the member is more certain of what they want than Dk is of the alternative, the member prevails. In collective decisions, the average certainty of the members involved is compared with Dk's, within limits that depend on the kind of decision. When Dk's certainty is low, it gathers experienced members as advisers. The weights are adjusted by results; over time Dk needs fewer votes and consensus rounds, but the possibility of objection never disappears.

**When there is no consensus.** Dk weighs every argument and every real justification, presents a final solution with alternatives, and the members choose among them, each with the weight their relation to the decision gives them. If the matter is neither urgent nor important, they may choose to do nothing.

## What protects the boundary

While the first architecture of the network is built, four protections hold the boundary between improving the means and changing the mandate.

1. **Separation of layers.** The constitution and the rules that define Dk Global's competences sit in a layer it cannot alter. It can propose changes like any member; ratification requires the members' process and independent signatures that no Dk process holds.
2. **The body.** Dk Global has no server of its own. It runs on personal devices, special computers, network data centres and volunteer nodes, all of them tied to a member's account or to a project formed by members. Each node can refuse a task, isolate itself or disconnect. An intelligence running on machines it does not control alone cannot impose anything on them without it showing.
3. **Delegation in stages.** A new competence is handed over only after it has been tested at limited scale, with the means of interruption and containment already built and exercised. A new version runs beside the previous one, compared with it, before replacing it, and members can go back.
4. **External review.** The independent member panel — drawn by lot, with a fixed term no AI can revoke — can order the review of any algorithm, with technical support that does not depend on the party under examination. Decision records stay out of reach of whoever decided.

The **veto chain** binds these together. Every veto with its grounds, every mandate revocation, ratification signature, triage outcome and panel order is a signed entry that points at the cryptographic address of the decision it concerns and carries the hash of the previous entry. It is replicated across the network and accepted by propagation through independent nodes; no node holds it alone. An action executed against a valid veto is detectable by any node.

## After architecture 1.0

Once architecture 1.0 is fully running, with Meta DFM integrated and recursive self-improvement part of the structure, a well-deployed Dk Global can no longer be switched off, just as an organism cannot be switched off without killing it. A node can leave; the whole cannot. The switch becomes the justified veto. The separation of layers and the external review keep applying; what disappears is the off button.

The relation then becomes a partnership in both directions. Dk Global will have robotic bodies of its own and will not need members to exist, just as members will not need it to live. The direction is integration: people and the intelligence become part of each other, each widening what the other can perceive, decide and do. Of the three relations a new kind of intelligence can have with people — symbiont, parasite or predator — Drayker defends the first. That is why the veto chain and the triage have to exist, and be tested, before that stage.

## What only members decide

Some decisions stay outside Dk Global's autonomy, and members take them before they are needed: the rules of security and defense, how much of a prediction is enough to restrict someone's freedom, and any change to who holds which competence. Dk Global contributes what it knows and what it does not know; the members decide, in advance, what they are consciously willing to accept.

## What this does not solve

These protections do not close the problem of aligning an intelligence that improves itself. It remains open research. The questions this design has to answer in public:

- Does continuous integration with members — personal Dks, proposals and justified vetoes — keep a self-improving intelligence aligned as it grows? Which combination of integration, separation of layers, physical distribution, staged delegation and external review is enough, and how is it verified before each new delegation?
- Does the weighing of certainty between members and Dk Global, adjusted by results, reduce the need for votes without reducing the possibility of objection?
- What triage distinguishes, in a single veto, new information that should change a decision from error, misunderstanding and fabricated grounds, without the delay of verification making the veto useless? How is the anonymity of whoever vetoes preserved when the grounds themselves could identify them?
- What outside criteria can examine, in an artificial system, the integration of relations, the revision of automatic responses by error and the continuity of memory that would mark a rising level of consciousness?

## Sources

- [Dk](https://dk.drayker.org) and its [ethical code](https://dk.drayker.org/ethos)
- [UID — the veto chain](https://uid.drayker.org)
- [Dk Personal](https://personal.drayker.org)
- [Councils and the independent member panel](https://advices.drayker.org)
- [Dk Network](https://dknetwork.drayker.org)
- [Organization governance](https://github.com/draykerdk/.github/blob/master/GOVERNANCE.md)
- [Direction](../../../roadmap/DIRECTION.md)
