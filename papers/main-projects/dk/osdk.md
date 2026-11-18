---
title: "OSDK — current synthesis"
state: current
language: en
reviewed: 2026-11-18
---

# OSDK

The adaptive runtime, compiler virtual machine, device abstraction layer, and future sovereign operating system connecting heterogeneous physical hardware to `BSDK` and `Dk Network`. This paper synthesizes the [OSDK](https://osdk.drayker.org) architecture. It describes design requirements and developmental stages, not a shippable OS image today.

## From adaptive virtual machine to native OS and BIOS

`OSDK` does not require the world to discard existing operating systems before participation begins. It follows a deliberate three-stage coupling ladder:

1. **Stage 1 — Adaptive DFM virtual machine & compiler:** runs atop existing hosts (`Linux`, `macOS`, `Windows`, mobile runtimes, servers), translating high-level DFM function/module graphs (`BSDK` as low-level "assembly", `OSDK` as adaptive runtime optimizing scheduling via AutoML/deep learning).
2. **Stage 2 — Universal hardware and super-app coupler:** manages shared compute/storage allocations natively beneath legacy user-space apps and bridges `UID` applications (`DkApps`).
3. **Stage 3 — Dedicated native OS and BIOS:** assumes direct bare-metal control over processors, accelerators (GPUs, ASICs, future quantum backends), and thin nodes — tailored especially for Drayker stations, volunteer servers in bandwidth-scarce regions, embedded infrastructure, and robotics.

## Asymmetric confinement of legacy software and the classical web

Transitional coexistence with conventional web apps, proprietary browsers, and legacy binaries introduces severe exfiltration and resource-drain risks. `OSDK` enforces an explicit **one-way isolation boundary**:

- External legacy web services, browsers, and untrusted user software execute strictly inside an **isolated external VM** managed by `OSDK`.
- That sandbox may consume **only the local physical machine's own host resources** when talking to the classical internet.
- It possesses zero routing capability or permission handle to draw shared compute, bandwidth, storage, or member state from the `Dk Network`.

## Zero-driver autonomous introspection of new hardware

Conventional driver ecosystems force every robot, prosthetic, industrial actuator, or custom sensor board to wait on vendor-specific binaries. `OSDK` applies interactive hardware introspection:

- When encountering newly engineered hardware with no preexisting driver module, `OSDK` probes buses, electrical signatures, and telemetry responses within bounded safe energy limits;
- Maps physical actuators and feedback channels automatically into composable DFM functions and verifiable modules;
- Exposes the newly abstracted device immediately for local control or authorized distributed orchestration across robots, laboratories, and manufacturing stations.

## Sovereign IoT and three-point local edge ownership

Within homes, studios, and local labs, `OSDK` unifies sensors, wearable monitors, compute boxes, and personal workstations across a **minimum 3-point local mesh** anchored directly to the member's `Personal Dk` and personal `Dknowledge` — guaranteeing data possession, offline operation on power/link disruption, and cryptographic audit over every external transmission.

## Sources

- [OSDK component](https://osdk.drayker.org)
- [BSDK and DFM](./bsdk-dfm.md)
- [UID and DkApp](./uid-dkapp.md)
- [Dk Network](./dk-network.md)
