---
title: "Dk Network — current synthesis"
state: current
language: en
reviewed: 2026-11-18
---

# Dk Network

The distributed topology, replication rules, offline resilience, and self-hardening mechanisms proposed for running `Dk`, `BSDK`, and `DkApps` without single points of failure. This paper synthesizes the architectural design behind [dk-network](https://dknetwork.drayker.org). It describes network research and requirements, not an operational network.

## Seven-layer architecture and bootstrap cycle

Data, compute, and governance flow through seven structured layers:

1. **`BSDK` / DFM core:** immutable functions, cellular primitives, and execution invariants.
2. **Generic physical transport and compute:** bandwidth, storage, local execution across heterogeneous links.
3. **Kernel coupling (`OSDK` / Coupler):** safe hardware abstraction and resource sandboxing.
4. **Distributed network routing:** packet authentication, redundancy, and geographic spread.
5. **Identity and contextual permissions (`UID`):** authorization boundaries and veto chains.
6. **Applications (`DkApp` / `PAP`):** composed organizational and user workflows.
7. **Continuous optimization and integration:** evolutionary profiling and secondary-to-main promotion.

New applications (`DkApps`) bootstrap in four guarded stages, starting inside the **secondary test network** with verification by at least three independent route nodes before touching main-network execution.

## Main network, secondary network, and islanded resilience

The topology deliberately isolates production reliability from active self-modification across two coupled planes and three internal abstraction tiers:

- **Layer 1 (Operation / Abstraction):** deterministic runtime serving everyday verified workloads.
- **Layer 2 (Virtualization & Evolutionary Metaprogramming):** runs in the secondary network, recombining functions, executing differential stress tests, and vetting updates before promotion.
- **Layer 3 (External Interface & Security Boundary):** mediates incoming external requests, classical internet gateways, and threat isolation.
- **Interplanetary and disconnected resilience ("regeneration DNA"):** if a local cluster or off-planet settlement loses connectivity with the global core for extended periods, Layer 1 carries the minimal generational blueprint needed to instantiate an autonomous local `Dk` node set. When connectivity returns, diverged state enters Layer 2 for cryptographic audit, conflict triage, and federated merge rather than blind overwrite.

## Five transit node roles

Hardware devices move dynamically across five specialized roles based on member authorization, capacity, and connectivity:

1. **Full Nodes:** hold full local/global state using hybrid `Dk`-assisted semantic compression to reduce bandwidth overhead.
2. **App Full Nodes:** mirror the complete functional state of specific `DkApps` so communities can operate seamlessly in disconnected local meshes.
3. **App Nodes:** everyday user/organization devices executing subscribed modules and holding personal context locally.
4. **Cache Nodes:** lightweight ephemeral nodes assisting first entry, relay caching, and peak load absorption.
5. **QuantumC / ASNC Nodes:** future specialized high-throughput ASIC and quantum co-processor nodes handling intensive evolutionary proofs and simulations.

## Geographic 3/6-point replication and binary bubble search

Centralized cloud availability zones still fail together under power, legal, or routing shocks. `Dk Network` distributes every critical structure by geographic and random separation:

- **3-point floor, 6-point high precision, 5 backups:** standard structures execute across at least three independent geographic/random clusters, scaling to three full nodes plus redundant secondary checks (six verification points) with five backup lineages for high-stakes modules — tolerating Byzantine faults and reconstructing missing links directly from predecessor states.
- **Binary bubble-chain lookup:** distributed queries traverse categorical hash-partitioned *bubble chains* via binary splits, allowing independent partial results to compute in parallel and reassemble deterministically without leaking unrequested neighboring state.
- **Offline local mesh (Bluetooth / local radio / satellite):** when backbone internet drops, nearby devices synchronize `DkApp` shards over direct peer links while mutually authenticating packet hashes and contributing proportional local compute.

## Autonomous attack-and-regeneration (internal Red Team)

Security treats failure as continuous rather than exceptional. Dedicated adversarial agents inside the secondary network probe live protocols for protocol confusion, Sybil clustering, or resource exhaustion. Verified vulnerabilities trigger candidate fixes benchmarked in isolated simulation and deployed through local-global evolutionary consensus — preserving controlled protocol forks whenever legacy hardware genuinely performs better under an earlier validated path.

## Regional scarcity weighting and non-voting rewards

Not all contributed capacity carries equal systemic value. Supplying compute, storage, or relay bandwidth inside resource-scarce regions earns higher operational weight than adding excess capacity inside saturated data centers. In line with Drayker's constitutional separation of powers, contributing infrastructure earns **Reward** — the sole transferable priority signal within the network for queue scheduling and operational capacity, strictly stripped of any constitutional voting weight.

## Sources

- [Dk Network component](https://dknetwork.drayker.org)
- [BSDK and DFM](./bsdk-dfm.md)
- [Living cryptography](./living-cryptography.md)
- [OSDK](./osdk.md)
