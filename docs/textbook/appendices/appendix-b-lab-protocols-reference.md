# Appendix B: Lab Protocols Reference

> *Appendices*
>
> **Organoid Intelligence: Biological Computing In Living Systems**
> Copyright © 2026 DaScient, LLC

---

## Introduction

This appendix compiles detailed, bench-ready laboratory protocols for generating, maintaining, interfacing with, and characterizing brain organoids used in Organoid Intelligence (OI) research. Each protocol is designed for reproducibility and includes complete materials lists, step-by-step instructions, critical notes, quality control checkpoints, and cross-references to relevant textbook chapters.

### General Safety Considerations

> **⚠ Safety Notice:** All procedures involving human-derived cells (iPSCs, organoids) must be conducted under Biosafety Level 2 (BSL-2) conditions in accordance with institutional biosafety committee (IBC) approval. Adhere to universal precautions for handling human biological materials at all times.

- **Personal protective equipment (PPE):** Lab coat, nitrile gloves, safety glasses; face shield when handling liquid nitrogen.
- **Chemical hazards:** DMSO, paraformaldehyde (PFA), and Matrigel require specific handling precautions (see individual protocol SDS sheets).
- **Viral vectors:** AAV handling requires BSL-2 with IBC-approved protocols; some serotypes may require BSL-2+ containment depending on institutional policy.
- **Cryogenic hazards:** Liquid nitrogen (LN₂) requires cryogenic gloves, face shield, and adequate ventilation to prevent asphyxiation.
- **Laser/light safety:** Optogenetic light sources require appropriate laser safety classification and eye protection (OD 5+ for relevant wavelengths).

### General Notes

- All cell culture reagents should be pre-warmed to 37 °C unless otherwise specified.
- Media volumes are given for standard 6-well plate format; scale proportionally for other formats.
- Centrifugation steps assume a swing-bucket rotor unless otherwise noted.
- "RT" denotes room temperature (20–25 °C). "ON" denotes overnight.
- Catalog numbers are provided as representative examples; equivalent products from other vendors may be substituted with appropriate validation.

---

## B.1 iPSC Culture and Maintenance

> **Cross-reference:** See Chapter 4, Section 4.2 for the biological principles underlying iPSC technology and Chapter 2, Section 2.4 for historical context on reprogramming.

### B.1.1 Thawing iPSC Lines

**Materials and Reagents**

| Reagent / Material | Specification | Catalog # (Example) |
|---|---|---|
| mTeSR™ Plus medium | Complete, with supplements | STEMCELL Tech 100-0276 |
| Matrigel hESC-Qualified Matrix | Growth factor reduced | Corning 354277 |
| DMEM/F-12 | For Matrigel dilution | Gibco 11320-033 |
| Y-27632 (ROCK inhibitor) | 10 mM stock in DPBS | Tocris 1254 |
| DPBS (no Ca²⁺/Mg²⁺) | Sterile | Gibco 14190-144 |
| 6-well tissue culture plates | Nunclon Delta treated | Thermo 140675 |
| Cryovial with frozen iPSCs | — | — |

**Procedure**

1. **Prepare Matrigel-coated plates (day before or ≥1 h prior):**
   - Thaw a Matrigel aliquot on ice (approximately 30–60 min).
   - Dilute Matrigel 1:80 in cold DMEM/F-12 (e.g., 125 µL Matrigel in 10 mL DMEM/F-12).
   - Add 1 mL per well of a 6-well plate; swirl to coat evenly.
   - Incubate at 37 °C for ≥1 h or at 4 °C overnight.

2. **Prepare thawing medium:**
   - Warm mTeSR Plus to 37 °C.
   - Add Y-27632 to a final concentration of 10 µM.

3. **Thaw cells:**
   - Remove cryovial from LN₂ storage and place in a 37 °C water bath.
   - Swirl gently until only a small ice crystal remains (~1–2 min). **Do not over-warm.**
   - Transfer vial contents dropwise into 5 mL warm DMEM/F-12 in a 15 mL conical tube.
   - Centrifuge at 200 × *g* for 3 min at RT.
   - Aspirate supernatant carefully without disturbing the pellet.

4. **Plate cells:**
   - Resuspend the pellet gently in 2 mL mTeSR Plus + 10 µM Y-27632.
   - Aspirate Matrigel solution from coated wells.
   - Add 2 mL mTeSR Plus + Y-27632 per well; seed resuspended cells into one well.
   - Place plate in a 37 °C, 5% CO₂ humidified incubator.
   - Rock plate gently in a cross pattern to distribute cells evenly. **Do not swirl.**

5. **Post-thaw care:**
   - Replace medium with fresh mTeSR Plus (without Y-27632) after 24 h.
   - Feed daily thereafter. Passage at 70–80% confluence (typically 4–6 days post-thaw).

> **Critical Note:** Cell viability post-thaw should exceed 70%. If viability is consistently low, check freezing protocol, passage number, and LN₂ storage integrity.

**Expected Results:** Colonies should attach within 24 h and display characteristic iPSC morphology—tight, phase-bright colonies with well-defined borders and high nucleus-to-cytoplasm ratio.

---

### B.1.2 Routine Passaging (EDTA Method)

**Materials and Reagents**

| Reagent / Material | Specification | Catalog # (Example) |
|---|---|---|
| 0.5 mM EDTA in DPBS | Sterile, no Ca²⁺/Mg²⁺ | Prepared in-house or Invitrogen 15575-020 |
| mTeSR™ Plus medium | Complete | STEMCELL Tech 100-0276 |
| DPBS (no Ca²⁺/Mg²⁺) | Sterile | Gibco 14190-144 |
| Matrigel-coated plates | Pre-coated (see B.1.1) | — |

**Procedure**

1. Aspirate spent medium and rinse wells once with 1 mL DPBS.
2. Add 1 mL of 0.5 mM EDTA/DPBS per well. Incubate at RT for 5–8 min.
   - Monitor under microscope: colonies should appear to "loosen" at edges but not fully detach.
3. Aspirate EDTA. **Do not rinse.**
4. Add 1 mL mTeSR Plus and gently pipette up and down 3–5 times to dislodge colony fragments.
   - Aim for clusters of 5–10 cells; avoid generating a single-cell suspension.
5. Transfer cell suspension to Matrigel-coated wells at a split ratio of 1:6 to 1:10 (passage-dependent).
6. Add mTeSR Plus to a final volume of 2 mL per well.
7. Place plate in incubator; rock in a cross pattern.

> **Critical Note:** EDTA passaging preserves colony integrity and selects against differentiated cells. If significant spontaneous differentiation is observed (>10% of surface area), manually scrape differentiated regions before passaging.

**Passage schedule:** Every 4–5 days at 70–80% confluence. Record passage number; iPSCs are typically used between passages 20–60 for organoid generation.

---

### B.1.3 Cryopreservation

**Materials and Reagents**

| Reagent / Material | Specification | Catalog # (Example) |
|---|---|---|
| mFreSR™ | Defined cryopreservation medium | STEMCELL Tech 05855 |
| CoolCell® LX or Mr. Frosty™ | Controlled-rate freezing container | Corning 432002 |
| Cryovials | 1.8 mL, sterile | Nunc 375418 |
| Cell scraper | Sterile | Corning 3010 |

**Procedure**

1. Grow iPSCs to 70–80% confluence with minimal differentiation.
2. Feed cells with fresh mTeSR Plus 2 h before harvesting.
3. Aspirate medium; rinse once with DPBS.
4. Add 1 mL mFreSR per well (pre-cooled to 4 °C).
5. Gently scrape cells using a cell scraper; pipette gently to obtain small clusters.
6. Transfer 1 mL cell suspension per cryovial. Label with cell line, passage number, date, and operator initials.
7. Place cryovials in CoolCell container; transfer to −80 °C freezer immediately.
8. After 24 h at −80 °C, transfer vials to LN₂ vapor-phase storage (−150 °C to −196 °C) for long-term banking.

> **Critical Note:** Do not leave cells in cryopreservation medium at RT for more than 5 min before placing at −80 °C. DMSO toxicity increases with time and temperature.

---

### B.1.4 Quality Control (Karyotyping, Pluripotency Markers)

**Karyotyping**

- Perform G-banding karyotype analysis every 10 passages or before initiating organoid differentiation campaigns.
- Minimum 20 metaphase spreads analyzed per sample.
- **Acceptable result:** Normal 46,XX or 46,XY karyotype with no recurrent structural or numerical abnormalities.
- Common iPSC-associated gains: trisomy 12, gain of 20q11.21—these lines should be discarded.
- Alternative: SNP array (e.g., Illumina Infinium) for higher-resolution copy number variant (CNV) detection.

**Pluripotency Marker Verification**

| Marker | Method | Expected Result |
|---|---|---|
| OCT4 (POU5F1) | Immunocytochemistry (ICC) or flow cytometry | >95% positive |
| SOX2 | ICC or flow cytometry | >95% positive |
| NANOG | ICC or flow cytometry | >90% positive |
| TRA-1-60 | Flow cytometry | >90% positive |
| TRA-1-81 | Flow cytometry | >85% positive |
| SSEA-4 | Flow cytometry | >90% positive |

**Additional QC Assays**

- **Mycoplasma testing:** Perform by PCR (e.g., LookOut® Mycoplasma PCR Detection Kit, Sigma MP0035) every 2 weeks and upon thaw. All cultures must test negative.
- **Trilineage differentiation:** Confirm capacity to generate ectoderm (TUJ1⁺), mesoderm (SMA⁺), and endoderm (AFP⁺) via directed differentiation or embryoid body assay.
- **STR profiling:** Verify cell line identity upon receipt and periodically (e.g., annually) to prevent cross-contamination.

> **Cross-reference:** Chapter 4, Section 4.3 discusses iPSC quality criteria in the context of organoid reproducibility.

---

## B.2 Cerebral Organoid Generation (Lancaster Protocol)

> **Cross-reference:** See Chapter 4, Section 4.4 for the scientific rationale and Chapter 2, Section 2.5 for the historical development of the Lancaster protocol. Chapter 13 addresses manufacturing scale-up considerations.

This protocol follows the unguided, self-organizing approach described by Lancaster et al. (2013) with modifications for improved reproducibility.

### B.2.1 Embryoid Body Formation (Days 0–6)

**Materials and Reagents**

| Reagent / Material | Specification | Catalog # (Example) |
|---|---|---|
| mTeSR™ Plus | Complete | STEMCELL Tech 100-0276 |
| Accutase® | Cell dissociation reagent | STEMCELL Tech 07920 |
| EB formation medium | DMEM/F-12 + 20% KSR + 1% NEAA + 0.1 mM 2-ME + 1% GlutaMAX | See below |
| DMEM/F-12 | Base medium | Gibco 11320-033 |
| KnockOut™ Serum Replacement (KSR) | 20% (v/v) | Gibco 10828-028 |
| MEM Non-Essential Amino Acids (NEAA) | 100× | Gibco 11140-050 |
| 2-Mercaptoethanol (2-ME) | 55 mM stock | Gibco 21985-023 |
| GlutaMAX™ | 100× | Gibco 35050-061 |
| Y-27632 | 10 mM stock | Tocris 1254 |
| bFGF (FGF2) | 4 µg/mL stock | PeproTech 100-18B |
| 96-well ultra-low attachment U-bottom plates | Lipidure-coated or equivalent | Corning 7007 |

**EB Formation Medium Preparation**

| Component | Volume (for 50 mL) | Final Concentration |
|---|---|---|
| DMEM/F-12 | 38.5 mL | — |
| KSR | 10 mL | 20% |
| NEAA (100×) | 500 µL | 1× |
| GlutaMAX (100×) | 500 µL | 1× |
| 2-Mercaptoethanol (55 mM) | 91 µL | 0.1 mM |

**Procedure**

1. **Dissociate iPSCs to single cells:**
   - Aspirate medium from confluent (70–80%) iPSC culture.
   - Rinse once with DPBS.
   - Add 1 mL Accutase per well; incubate at 37 °C for 5–7 min until cells detach.
   - Gently pipette to generate a single-cell suspension.
   - Transfer to 5 mL DMEM/F-12; centrifuge at 200 × *g* for 3 min.
   - Resuspend in EB formation medium + 10 µM Y-27632 + 4 ng/mL bFGF.

2. **Count cells and seed:**
   - Count viable cells using Trypan blue exclusion; viability should be >90%.
   - Seed **9,000 cells per well** in 150 µL EB formation medium + 10 µM Y-27632 + 4 ng/mL bFGF into 96-well U-bottom ultra-low attachment plates.
   - Centrifuge plates at 100 × *g* for 1 min to collect cells at the bottom.

3. **Culture EBs:**
   - Day 0–2: Do not disturb. Incubate at 37 °C, 5% CO₂.
   - Day 2: Replace 100 µL medium with fresh EB formation medium (without Y-27632, without bFGF).
   - Day 4: Replace 100 µL medium with fresh EB formation medium.
   - Day 6: EBs should be 400–600 µm in diameter with smooth, bright edges.

> **Critical Note:** Precise cell counting is essential. Seeding densities outside the 8,000–10,000 cell range result in EBs that are too small (premature differentiation) or too large (central necrosis). Use an automated cell counter for consistency.

**Quality Checkpoint (Day 6):** EBs should be spherical, optically dense at center, with smooth borders. Discard EBs that are irregular, translucent, or cystic.

---

### B.2.2 Neural Induction (Days 6–11)

**Materials and Reagents**

| Reagent / Material | Specification | Catalog # (Example) |
|---|---|---|
| Neural Induction Medium (NIM) | DMEM/F-12 + 1× N-2 supplement + 1% NEAA + 1% GlutaMAX + 1 µg/mL heparin | See below |
| N-2 Supplement | 100× | Gibco 17502-048 |
| Heparin sodium salt | 1 mg/mL stock in DPBS | Sigma H3149 |
| 24-well ultra-low attachment plates | — | Corning 3473 |

**Neural Induction Medium Preparation**

| Component | Volume (for 50 mL) | Final Concentration |
|---|---|---|
| DMEM/F-12 | 48.5 mL | — |
| N-2 Supplement (100×) | 500 µL | 1× |
| NEAA (100×) | 500 µL | 1× |
| GlutaMAX (100×) | 500 µL | 1× |
| Heparin (1 mg/mL) | 50 µL | 1 µg/mL |

**Procedure**

1. On Day 6, transfer individual EBs from 96-well plates to 24-well ultra-low attachment plates using a wide-bore P1000 tip (cut ~3 mm from tip).
2. Place one EB per well in 500 µL Neural Induction Medium.
3. Feed every other day by replacing 250 µL with fresh NIM.
4. By Day 11, EBs should display optically translucent edges indicating neuroepithelial expansion.

> **Critical Note:** Bright, refractile edges on EBs at Day 9–11 indicate successful neural induction. EBs lacking these structures should be excluded from further processing.

**Quality Checkpoint (Day 11):** >80% of EBs should show neuroepithelial budding (translucent radial outgrowths). Immunostaining of sacrificed EBs should confirm PAX6⁺/SOX2⁺ neural progenitors.

---

### B.2.3 Matrigel Embedding and Expansion (Days 11–15)

**Materials and Reagents**

| Reagent / Material | Specification | Catalog # (Example) |
|---|---|---|
| Matrigel | Growth factor reduced | Corning 354230 |
| Differentiation Medium (DM) | 1:1 DMEM/F-12:Neurobasal + 0.5× N-2 + 1× B-27 (−VitA) + 0.5% NEAA + 0.1 mM 2-ME + 1% GlutaMAX + 2.5 µg/mL insulin | See below |
| Neurobasal Medium | — | Gibco 21103-049 |
| B-27 Supplement (−Vitamin A) | 50× | Gibco 12587-010 |
| Insulin (human recombinant) | 25 mg/mL stock | Sigma I9278 |
| Parafilm | — | — |
| Embedding sheet (Parafilm dimples) | See procedure | — |

**Differentiation Medium (DM, minus Vitamin A) Preparation**

| Component | Volume (for 50 mL) | Final Concentration |
|---|---|---|
| DMEM/F-12 | 24.25 mL | — |
| Neurobasal | 24.25 mL | — |
| N-2 Supplement (100×) | 250 µL | 0.5× |
| B-27 (−Vitamin A, 50×) | 1 mL | 1× |
| NEAA (100×) | 250 µL | 0.5× |
| GlutaMAX (100×) | 500 µL | 1× |
| 2-Mercaptoethanol (55 mM) | 91 µL | 0.1 mM |
| Insulin (25 mg/mL) | 5 µL | 2.5 µg/mL |

**Procedure**

1. **Prepare Parafilm embedding dimples:**
   - Place a sheet of Parafilm on a 200 µL tip box grid.
   - Press gently with a gloved finger into each grid hole to create ~5 mm dimples.
   - UV-sterilize for 30 min in the biosafety cabinet.

2. **Embed EBs in Matrigel:**
   - Thaw Matrigel on ice. Keep cold throughout.
   - Transfer one EB into each Parafilm dimple using a cut P1000 tip; remove excess medium.
   - Add ~30 µL cold Matrigel over each EB, positioning the EB at the center of the droplet.
   - Transfer the Parafilm sheet to a 37 °C incubator for 20–30 min to polymerize.

3. **Transfer to culture:**
   - Gently dislodge embedded organoids from Parafilm into 6-well ultra-low attachment plates using a sterile spatula.
   - Add 3 mL DM (−Vitamin A) per well; place 3–5 organoids per well.
   - Culture in stationary conditions at 37 °C, 5% CO₂ for 4 days.
   - Feed every other day by replacing half the medium.

> **Critical Note:** Matrigel must remain ice-cold during embedding to prevent premature polymerization. Work quickly; process no more than 6 organoids at a time.

**Quality Checkpoint (Day 15):** Organoids should show radial expansion with visible neuroepithelial loops (rosette-like structures). Size should be 1–2 mm.

---

### B.2.4 Orbital Shaker Culture and Maturation (Day 15+)

**Materials and Reagents**

| Reagent / Material | Specification | Catalog # (Example) |
|---|---|---|
| Differentiation Medium (+VitA) | Same as DM above but with B-27 (+Vitamin A) | Gibco 17504-044 for B-27 (+VitA) |
| Orbital shaker | Fits inside incubator; 80–85 rpm | Infors HT Celltron |
| 10 cm low-attachment dishes | Ultra-low attachment | Corning 3262 |

**Procedure**

1. On Day 15, transfer organoids to 10 cm ultra-low attachment dishes (5–10 organoids per dish) in 10 mL Differentiation Medium (+Vitamin A).
2. Place on an orbital shaker inside the incubator at **85 rpm**.
3. **Feeding schedule:**
   - Days 15–40: Full medium change every 3–4 days.
   - Days 40–60: Full medium change every 5–7 days (medium volume increased to 15 mL).
   - Day 60+: Medium change every 7 days.
4. **Long-term culture:**
   - Organoids may be maintained for 6–12+ months.
   - Monitor for excessive size (>5 mm may develop necrotic cores without vascularization strategies).
   - Consider supplementing with 1% Matrigel in medium for enhanced survival after Day 60.

> **Critical Note:** Shaker speed is critical: too slow (<70 rpm) causes organoid clumping and insufficient nutrient exchange; too fast (>100 rpm) causes mechanical damage and dissociation. Verify rpm with a tachometer.

---

### B.2.5 Quality Control Checkpoints

| Timepoint | Assessment | Method | Criteria |
|---|---|---|---|
| Day 6 | EB morphology | Brightfield microscopy | Spherical, 400–600 µm, smooth borders |
| Day 11 | Neural induction | Brightfield + ICC (PAX6, SOX2) | >80% EBs with neuroepithelium |
| Day 15 | Matrigel expansion | Brightfield | Radial expansion, rosette structures |
| Day 30 | Neural progenitors | ICC (SOX2, TBR2, PAX6) | Defined VZ/SVZ-like zones |
| Day 60 | Neuronal maturation | ICC (TUJ1, MAP2, CTIP2, SATB2) | Cortical-layer markers present |
| Day 90+ | Functional maturity | MEA recording, calcium imaging | Spontaneous activity; see B.5, B.7 |

> **Cross-reference:** Chapter 4, Section 4.5 provides a comprehensive discussion of quality metrics and reproducibility standards for cerebral organoids.

---

## B.3 Directed Cortical Organoid Protocol (Dual SMAD Inhibition)

> **Cross-reference:** See Chapter 4, Section 4.6 for comparison of guided vs. unguided organoid methods. Chapter 11 discusses how directed cortical organoids serve as substrates for active inference studies.

This protocol generates regionally specified cortical organoids using dual SMAD inhibition (Dorsomorphin + SB-431542), adapted from Paşca et al. (2015) and Qian et al. (2016).

### B.3.1 Neural Patterning (Days 0–18)

**Materials and Reagents**

| Reagent / Material | Specification | Catalog # (Example) |
|---|---|---|
| DMEM/F-12 | Base medium | Gibco 11320-033 |
| KSR | 15% (v/v) | Gibco 10828-028 |
| Dorsomorphin (DM) | 5 µM; BMP pathway inhibitor | Sigma P5499 |
| SB-431542 | 10 µM; TGF-β/Activin/Nodal inhibitor | Tocris 1614 |
| Y-27632 | 10 µM (Day 0 only) | Tocris 1254 |
| NEAA (100×) | 1× | Gibco 11140-050 |
| GlutaMAX (100×) | 1× | Gibco 35050-061 |
| 2-Mercaptoethanol (55 mM) | 0.1 mM final | Gibco 21985-023 |
| N-2 Supplement (100×) | See transition schedule | Gibco 17502-048 |
| B-27 Supplement (+Vitamin A, 50×) | See transition schedule | Gibco 17504-044 |
| 96-well ultra-low attachment U-bottom plates | — | Corning 7007 |

**KSR→N2B27 Transition Schedule**

| Days | KSR (%) | N-2 | B-27 | Dorsomorphin | SB-431542 |
|---|---|---|---|---|---|
| 0–5 | 15% | — | — | 5 µM | 10 µM |
| 6–7 | 12.5% | — | — | 5 µM | 10 µM |
| 8–9 | 10% | 0.25× | — | 5 µM | 10 µM |
| 10–11 | 7.5% | 0.5× | — | 5 µM | 10 µM |
| 12–13 | 5% | 0.75× | 0.5× | 5 µM | 10 µM |
| 14–15 | 2.5% | 1× | 1× | 5 µM | — |
| 16–18 | — | 1× | 1× | — | — |

**Procedure**

1. Dissociate iPSCs to single cells with Accutase (as in B.2.1).
2. Seed 9,000 cells per well in 96-well U-bottom ultra-low attachment plates in KSR medium + 10 µM Y-27632 + 5 µM Dorsomorphin + 10 µM SB-431542.
3. Follow the KSR→N2B27 transition schedule above, performing half-medium changes every other day.
4. By Day 10, aggregates should display bright, neuroepithelial-like morphology.
5. On Day 18, transfer to 6-well ultra-low attachment plates for expansion.

> **Critical Note:** Dual SMAD inhibition must be initiated from Day 0 for efficient neural conversion. Dorsomorphin and SB-431542 are dissolved in DMSO; final DMSO concentration in medium must not exceed 0.1%.

**Quality Checkpoint (Day 18):** >90% of aggregates should be PAX6⁺/OTX2⁺ (confirming forebrain identity). FOXG1 expression indicates telencephalic specification.

---

### B.3.2 Progenitor Expansion (Days 18–35)

**Materials and Reagents**

| Reagent / Material | Specification | Catalog # (Example) |
|---|---|---|
| Expansion Medium | DMEM/F-12:Neurobasal (1:1) + 1× N-2 + 1× B-27 (−VitA) + 1% GlutaMAX + 20 ng/mL EGF + 20 ng/mL FGF2 | — |
| EGF (human recombinant) | 100 µg/mL stock | PeproTech AF-100-15 |
| FGF2 (human recombinant) | 100 µg/mL stock | PeproTech 100-18B |

**Procedure**

1. Transfer Day 18 aggregates to 6-well ultra-low attachment plates (4–6 per well) in 3 mL Expansion Medium.
2. Place on orbital shaker at 85 rpm.
3. Feed every 2–3 days with full medium change.
4. EGF and FGF2 promote progenitor proliferation and expansion of the ventricular zone (VZ)-like region.
5. Organoids should grow from ~1 mm to 2–3 mm during this period.

> **Critical Note:** Do not extend growth factor exposure beyond Day 35, as prolonged mitogen signaling impairs neuronal differentiation and cortical layering.

---

### B.3.3 Cortical Maturation (Days 35+)

**Materials and Reagents**

| Reagent / Material | Specification | Catalog # (Example) |
|---|---|---|
| Maturation Medium | DMEM/F-12:Neurobasal (1:1) + 1× N-2 + 1× B-27 (+VitA) + 1% GlutaMAX + 20 ng/mL BDNF + 20 ng/mL NT-3 + 200 µM ascorbic acid + 1 mM db-cAMP | — |
| BDNF (human recombinant) | 20 µg/mL stock | PeproTech 450-02 |
| NT-3 (human recombinant) | 20 µg/mL stock | PeproTech 450-03 |
| L-Ascorbic acid 2-phosphate | 100 mM stock | Sigma A8960 |
| Dibutyryl-cAMP (db-cAMP) | 500 mM stock in DMSO | Sigma D0627 |

**Procedure**

1. On Day 35, switch to Maturation Medium (withdraw EGF and FGF2).
2. Continue orbital shaker culture at 85 rpm.
3. Feed every 3–4 days with full medium change.
4. **Maturation milestones:**
   - Day 35–50: Deep-layer neurons emerge (CTIP2⁺, TBR1⁺).
   - Day 50–70: Upper-layer neurons appear (SATB2⁺, BRN2⁺).
   - Day 70–100: Astrocyte markers (GFAP⁺, S100β⁺) and onset of spontaneous electrophysiological activity.
   - Day 100+: Oligodendrocyte precursors (OLIG2⁺) may appear; mature synaptic networks.

> **Cross-reference:** Chapter 12, Section 12.3 discusses the information-theoretic characterization of neural activity patterns emerging during cortical organoid maturation.

---

## B.4 Assembloid Generation

> **Cross-reference:** See Chapter 4, Section 4.8 for the biological rationale behind multi-regional organoid assembloids. Chapter 14, Section 14.2 discusses assembloids in the context of organoid networks.

### B.4.1 Dorsal-Ventral Assembloid Fusion

**Materials and Reagents**

- **Dorsal forebrain organoids** (prepared as in B.3, Day 40–60)
- **Ventral forebrain organoids** (generated using SHH agonist protocol):
  - Additional reagents: SAG (Smoothened Agonist, 1 µM; Millipore 566660), IWP-2 (WNT inhibitor, 5 µM; Tocris 3533)
- Maturation Medium (see B.3.3)
- 96-well U-bottom ultra-low attachment plates or custom PDMS molds

**Ventral Forebrain Organoid Patterning (Overview)**

Use the same base protocol as B.3, but replace Dorsomorphin with:
- **SAG** (1 µM) from Day 0–18 to activate SHH signaling (ventral patterning).
- **IWP-2** (5 µM) from Day 0–18 to inhibit WNT signaling.

These organoids will express ventral markers: NKX2.1⁺, DLX2⁺, and generate GABAergic interneuron progenitors.

**Fusion Procedure**

1. At Day 40–60, select one dorsal and one ventral organoid of similar size (1.5–2.5 mm).
2. Transfer both organoids to a single well of a 96-well U-bottom ultra-low attachment plate in 200 µL Maturation Medium.
3. Place the plate in the incubator **without shaking** for 48–72 h to allow initial adhesion.
   - Organoids should make contact within 24 h and begin fusing.
4. On Day 3 post-fusion, gently transfer the assembloid to a 24-well plate with 1 mL Maturation Medium.
5. Resume orbital shaker culture at 75 rpm (reduced speed for assembloids).
6. Feed every 3 days.

> **Critical Note:** Size matching is essential for balanced fusion. Asymmetric assembloids result in one domain dominating. Aim for <20% diameter difference.

**Expected Results:** By 2–4 weeks post-fusion, interneurons (labeled by ventral reporter or identified by DLX2/GAD1 staining) migrate tangentially from the ventral into the dorsal domain—recapitulating *in vivo* interneuron migration.

---

### B.4.2 Cortico-Striatal Assembloid Protocol

**Materials and Reagents**

- **Cortical organoids** (B.3 protocol, Day 50–70)
- **Striatal organoids** generated using:
  - Activin A (25 ng/mL; PeproTech 120-14E) from Day 12–24
  - SAG (1 µM) from Day 0–12
  - SR11237 (retinoid X receptor agonist, 0.1 µM; Tocris 3014) from Day 4–18
- These express DARPP32⁺, FOXP1⁺, and GSX2⁺ striatal identity markers.

**Fusion Procedure**

1. Follow the same fusion approach as B.4.1, placing one cortical and one striatal organoid in a single well.
2. Allow 48–72 h static fusion.
3. Transfer to 24-well plate; resume orbital shaker culture at 75 rpm.
4. By 3–4 weeks post-fusion, cortical projection neurons extend axons into the striatal domain, forming functional cortico-striatal circuits.

> **Cross-reference:** Chapter 14, Section 14.3 details how cortico-striatal assembloids enable studies of reward learning circuits relevant to OI feedback systems.

---

### B.4.3 Fusion Verification and Quality Control

| Assessment | Method | Timepoint | Success Criterion |
|---|---|---|---|
| Physical fusion | Brightfield microscopy | 48–72 h | Continuous tissue bridge, no gap |
| Domain identity | IHC for dorsal (TBR1) and ventral (NKX2.1) markers | 1–2 weeks | Distinct, non-overlapping domains |
| Interneuron migration | IHC for DLX2, GAD1 in dorsal domain | 2–4 weeks | Migrating interneurons in dorsal territory |
| Axonal projections | GFP reporter or L1CAM staining | 3–4 weeks | Axonal processes crossing boundary |
| Functional integration | Calcium imaging or MEA | 4–6 weeks | Correlated activity across domains |

---

## B.5 MEA Recording Protocols

> **Cross-reference:** See Chapter 7 for comprehensive coverage of electrophysiological interfaces and Chapter 12 for information-theoretic analysis of neural recordings.

### B.5.1 MEA Chip Preparation and Coating

**Materials and Reagents**

| Reagent / Material | Specification | Catalog # (Example) |
|---|---|---|
| MEA chips | 60-electrode or HD-MEA (e.g., 4,096 electrodes) | Multi Channel Systems 60MEA200/30iR-Ti; MaxWell Biosystems MaxOne |
| Poly-D-lysine (PDL) | 0.1 mg/mL in borate buffer | Sigma P6407 |
| Laminin (mouse) | 20 µg/mL in DPBS | Sigma L2020 |
| Tergazyme® enzymatic cleaner | 1% (w/v) in DI water | Alconox 1304 |
| Plasma cleaner | O₂ plasma at 50 W | Harrick Plasma PDC-32G |

**Procedure**

1. **Clean MEA chips (new or reused):**
   - Soak in 1% Tergazyme at RT for 2–4 h; sonicate for 5 min.
   - Rinse 5× with deionized water; air dry.
   - O₂ plasma clean at 50 W for 2 min (improves surface hydrophilicity).

2. **Coat MEA surface:**
   - Apply 100 µL of 0.1 mg/mL PDL to the electrode array area; incubate at 37 °C for 2 h.
   - Rinse 3× with sterile water; air dry in biosafety cabinet for 15 min.
   - Apply 100 µL of 20 µg/mL laminin; incubate at 37 °C for 2–4 h or at 4 °C overnight.
   - Aspirate laminin; do not rinse. Use immediately or within 24 h.

> **Critical Note:** Electrode impedance should be measured before and after coating. Acceptable impedance range for TiN electrodes: 30–100 kΩ at 1 kHz. Reject chips with >20% electrodes outside this range.

---

### B.5.2 Organoid Plating onto MEAs

**Procedure**

1. Select organoids at Day 60–120 (or older) with confirmed spontaneous activity (validated by calcium imaging per B.7).
2. Aspirate laminin from the MEA surface; add 20 µL Maturation Medium to keep the surface wet.
3. Using a cut P1000 tip, place a single organoid onto the center of the electrode array.
4. Allow organoid to settle for 5 min; gently aspirate excess medium, leaving a thin film to promote adhesion.
5. Incubate at 37 °C for 30 min to initiate attachment.
6. Slowly add 500 µL warm Maturation Medium to the MEA chamber—avoid direct pipetting onto the organoid.
7. Return to incubator and allow 48–72 h for stable adhesion before recording.

> **Critical Note:** Some organoids may not adhere on first attempt. If the organoid floats off, gently reposition and add a 10 µL droplet of Matrigel (1:4 diluted in medium) at the organoid-MEA interface to promote adhesion.

---

### B.5.3 Baseline Recording Protocol

**Equipment Setup**

| Parameter | Setting |
|---|---|
| Recording system | Multi Channel Systems MEA2100 or MaxWell Biosystems MaxOne |
| Sampling rate | 20 kHz (minimum); 25–30 kHz recommended |
| High-pass filter | 200 Hz (for spike detection) or 0.1 Hz (for LFP) |
| Low-pass filter | 3 kHz (anti-aliasing) |
| Recording duration | 10–30 min per session |
| Temperature | 37 °C (use integrated heater) |
| CO₂ / pH control | Use HEPES-buffered medium (25 mM) if no CO₂ control on MEA stage |

**Procedure**

1. Equilibrate MEA on the recording stage at 37 °C for 5 min before recording.
2. Record 5 min of **spontaneous baseline activity** before any stimulation or drug application.
3. Record for a minimum of 10 min to capture network bursting dynamics with sufficient statistical power.
4. For longitudinal studies, record at the same time of day (±2 h) to control for circadian-like oscillations in organoid activity.
5. Save raw data in a lossless format (e.g., HDF5, .h5) with complete metadata (date, organoid ID, age, medium lot, passage).

> **Cross-reference:** Chapter 7, Section 7.4 discusses signal-to-noise considerations and optimal recording configurations for organoid MEA experiments.

---

### B.5.4 Stimulation Protocols (Electrical)

**Biphasic Voltage Stimulation (Standard)**

| Parameter | Value |
|---|---|
| Waveform | Biphasic, cathodic-first |
| Phase duration | 200 µs per phase |
| Inter-phase interval | 50 µs |
| Amplitude range | ±100 to ±800 mV (titrate per organoid) |
| Stimulation frequency | 0.1–1 Hz for single-pulse; 5–40 Hz for tetanic |
| Stimulation electrodes | Select 1–4 electrodes with strong baseline signal |

**Procedure**

1. Establish a 5 min baseline recording.
2. Apply a stimulus amplitude series (100, 200, 400, 600, 800 mV) at 0.5 Hz, recording evoked responses.
3. Identify the **threshold amplitude** (minimum amplitude eliciting a consistent evoked response on ≥3 neighboring electrodes).
4. For plasticity experiments (LTP/LTD-like protocols):
   - **Tetanic stimulation:** 100 pulses at 20 Hz, repeated 3× with 30 s intervals.
   - **Theta-burst stimulation (TBS):** 5 pulses at 100 Hz, repeated at 5 Hz for 10 bursts, repeated 3× with 20 s intervals.
5. Record post-stimulation activity for 30–60 min to monitor plasticity-related changes.

> **Critical Note:** Charge injection limits must not be exceeded—maintain charge density below 30 µC/cm² per phase for TiN electrodes to prevent electrode damage and tissue injury. Calculate: $Q = I \times t / A$, where $A$ is electrode area.

> **Cross-reference:** Chapter 7, Section 7.6 covers stimulation paradigms for inducing Hebbian plasticity in organoid networks.

---

### B.5.5 Data Acquisition Settings

**Recommended Settings Summary**

| Application | Sampling Rate | HP Filter | LP Filter | Duration |
|---|---|---|---|---|
| Spike detection | 25 kHz | 200 Hz | 3 kHz | 10–30 min |
| Local field potential (LFP) | 10 kHz | 0.1 Hz | 300 Hz | 30–60 min |
| Stimulation-evoked response | 25 kHz | 10 Hz | 3 kHz | 5 min per condition |
| Long-term monitoring | 10 kHz | 200 Hz | 3 kHz | 1–24 h |

**File Management**

- Raw data file sizes: ~2 GB per 10 min at 25 kHz × 60 channels.
- HD-MEA systems generate up to 100 GB per 10 min session; use on-chip processing or compressed formats.
- Maintain a rigorous naming convention: `{date}_{organoidID}_{age}d_{condition}_{recording#}.h5`

---

### B.5.6 Spike Detection and Sorting Pipeline

**Step 1: Preprocessing**

1. Apply a 4th-order Butterworth bandpass filter: 200–3,000 Hz.
2. Estimate noise per channel: $\sigma_n = \text{median}(|x|) / 0.6745$ (robust median absolute deviation).
3. Set detection threshold at $-5\sigma_n$ (negative polarity) or $\pm 5\sigma_n$ (bipolar).

**Step 2: Spike Detection**

1. Detect threshold crossings with a minimum refractory period of 1.0 ms.
2. Extract spike waveform snippets: 1.0 ms pre-peak to 2.0 ms post-peak (total ~3 ms window at 25 kHz = 75 samples).
3. Align spikes to negative peak.

**Step 3: Spike Sorting**

1. **Recommended tools:** Kilosort 3/4 (GPU-accelerated), MountainSort, or SpyKING CIRCUS.
2. Perform PCA on spike waveforms; use first 3–6 principal components.
3. Cluster using automated algorithms followed by manual curation.
4. Classify units:
   - **Single-unit:** L-ratio < 0.05, isolation distance > 20, ISI violation rate < 1%.
   - **Multi-unit:** Units not meeting single-unit criteria but with consistent waveform morphology.
5. Export spike times, cluster assignments, and quality metrics.

**Step 4: Network Analysis**

1. Compute per-channel metrics: firing rate (Hz), burst rate, inter-spike interval (ISI) distribution.
2. Network-level metrics: cross-correlation, functional connectivity matrices, network burst detection (e.g., Chiappalone method: ≥25% of active channels firing within a 100 ms window).
3. For information-theoretic analysis, compute transfer entropy between electrode pairs (see Chapter 12, Section 12.4).

> **Cross-reference:** Chapter 10, Section 10.5 describes how spike-sorted organoid data are used as input to reservoir computing frameworks.

---

## B.6 Optogenetic Protocols

> **Cross-reference:** See Chapter 9 for a comprehensive treatment of optogenetic communication with organoid systems.

### B.6.1 Viral Vector Preparation (AAV)

**Materials and Reagents**

| Reagent / Material | Specification | Catalog # (Example) |
|---|---|---|
| AAV vector | Serotype: AAV9 or AAV-DJ; carrying hSyn-ChR2(H134R)-EYFP or hSyn-GCaMP7f | Addgene 26973-AAV9 (ChR2) |
| Opti-MEM I | Reduced serum medium | Gibco 31985-070 |
| Polybrene (optional) | 8 µg/mL | Sigma TR-1003-G |

**Titer Specification**

- Working titer: 1 × 10¹⁰ to 1 × 10¹² viral genomes (vg)/mL.
- Determine titer by qPCR (ITR-based) or ddPCR for each production lot.
- Use certified, quality-controlled AAV preparations (e.g., Addgene, Penn Vector Core, or institutional viral core facility).

> **⚠ Biosafety:** AAV handling requires IBC approval and BSL-2 precautions. All AAV waste (tips, tubes, plates) must be decontaminated with 10% bleach (30 min contact time) before disposal. Refer to your institution's IBC protocol for AAV-specific requirements.

---

### B.6.2 Organoid Transduction

**Procedure**

1. Select organoids at Day 40–80 for transduction.
2. Transfer individual organoids to 24-well plate wells with 200 µL Maturation Medium.
3. Add AAV at a multiplicity of infection (MOI) of 1 × 10⁵ vg/cell (estimated cell count per organoid: ~10⁵–10⁶ cells at Day 60).
   - Example: For a 500,000-cell organoid at MOI 10⁵: add 5 × 10¹⁰ vg total.
4. Incubate at 37 °C for 6–8 h with gentle rocking every 2 h.
5. Add 800 µL fresh Maturation Medium; continue culture.
6. Full medium change at 24 h post-transduction.
7. Allow 10–14 days for AAV transgene expression before experiments.
8. Confirm expression by fluorescence microscopy (EYFP or GFP reporter).

> **Critical Note:** Expression efficiency varies with organoid size and density. Larger organoids (>3 mm) may show limited core transduction; consider mechanical bisection or longer incubation for improved penetration.

**Expected Results:** At Day 10–14 post-transduction, 30–70% of neurons in the outer 200–500 µm should express the reporter, depending on serotype and titer.

---

### B.6.3 Light Stimulation Setup

**Equipment**

| Component | Specification |
|---|---|
| Light source | 470 nm LED (for ChR2) or 590 nm LED (for NpHR/Arch) |
| Optical fiber | 200 µm core, 0.39 NA, FC/PC connector |
| Fiber positioning | Micromanipulator-mounted fiber, 200–500 µm above organoid surface |
| Power meter | Thorlabs PM100D with S121C sensor |
| Pulse generator | Master-8 or Arduino-based TTL system |

**Calibration**

1. Measure irradiance at the fiber tip using a power meter.
2. Target irradiance: **1–10 mW/mm²** for ChR2 activation (adjust based on expression level).
3. Calculate irradiance: $E = P / A$, where $P$ = measured power (mW) and $A = \pi r^2$ (fiber tip area, mm²).
4. For a 200 µm core fiber: $A = \pi (0.1)^2 = 0.0314$ mm².
5. Verify: No thermal artifacts—temperature increase at the organoid surface should be <1 °C (monitor with thermocouple).

---

### B.6.4 All-Optical Electrophysiology Protocol

This protocol enables simultaneous optical stimulation (ChR2) and optical readout (GCaMP or voltage indicator) in the same organoid.

**Dual-Construct Strategy**

| Construct | Promoter | Reporter/Actuator | Excitation | Emission |
|---|---|---|---|---|
| ChR2(H134R)-mCherry | hSyn (or CaMKII for excitatory) | Channelrhodopsin-2 + mCherry | 470 nm (activation) | 610 nm (reporter) |
| GCaMP7f | hSyn | Calcium indicator | 488 nm (imaging) | 515 nm |

> **Critical Note:** Spectral crosstalk between ChR2 excitation (470 nm) and GCaMP excitation (488 nm) must be managed. Use temporally interleaved stimulation and imaging windows (e.g., 5 ms light pulse → 50 ms imaging window → repeat). Alternatively, use red-shifted opsins (e.g., Chrimson, 590 nm activation) to eliminate spectral overlap with GCaMP.

**Procedure**

1. Transduce organoids with both AAV-hSyn-ChR2-mCherry and AAV-hSyn-GCaMP7f (stagger transduction by 3–5 days to reduce immune response).
2. Allow 14 days for expression.
3. Mount organoid on the imaging stage (inverted fluorescence microscope with sCMOS camera).
4. Configure light path:
   - Stimulation: 470 nm LED, 5 ms pulses, 1–10 mW/mm², delivered via fiber or widefield.
   - Imaging: 488 nm excitation (attenuated to <0.5 mW/mm² to minimize ChR2 activation), GFP emission filter (500–550 nm bandpass).
5. Acquire GCaMP images at 20–50 Hz.
6. Deliver stimulation patterns; record evoked calcium transients.

---

### B.6.5 Safety and Biosafety Considerations

| Hazard | Control Measure |
|---|---|
| AAV exposure (skin, mucous membrane) | BSL-2 practices; double glove; work in certified BSC |
| Laser/LED eye damage | Laser safety eyewear (OD 5+ at 470/590 nm); never look into beam path |
| UV light (curing/sterilization) | UV-blocking shields; minimize skin exposure |
| Phototoxicity to organoids | Limit continuous illumination to <30 s; use minimum effective power |
| Transgene recombination risk | Use self-complementary AAV or non-integrating vectors |

> **Cross-reference:** Chapter 9, Section 9.7 covers biosafety frameworks for optogenetic research in living systems, and Chapter 19 addresses the broader ethical implications of controlling neural activity in organoids.

---

## B.7 Calcium Imaging

> **Cross-reference:** See Chapter 7, Section 7.5 for the principles of calcium imaging in organoid systems and Chapter 12 for computational analysis of calcium dynamics.

### B.7.1 Chemical Indicator Loading (Fluo-4, Cal-520)

**Materials and Reagents**

| Reagent / Material | Specification | Catalog # (Example) |
|---|---|---|
| Fluo-4 AM | 1 mM stock in DMSO | Invitrogen F14201 |
| Cal-520 AM | 1 mM stock in DMSO | AAT Bioquest 21130 |
| Pluronic® F-127 | 20% (w/v) in DMSO | Invitrogen P3000MP |
| ACSF (artificial CSF) | 125 mM NaCl, 2.5 mM KCl, 1.25 mM NaH₂PO₄, 25 mM NaHCO₃, 2 mM CaCl₂, 1 mM MgCl₂, 25 mM glucose; pH 7.4; bubbled with 95% O₂/5% CO₂ | Prepared in-house |

**Procedure**

1. Prepare loading solution: Dilute Fluo-4 AM (or Cal-520 AM) to **5 µM** in warm ACSF; add Pluronic F-127 to 0.02% (v/v) to aid membrane permeation.
2. Transfer organoid to a glass-bottom imaging dish.
3. Incubate in loading solution at 37 °C for 30–45 min (Fluo-4) or 60 min (Cal-520) in the dark.
4. Wash 3× with warm ACSF (5 min per wash) to remove extracellular dye.
5. Allow 15–20 min de-esterification at 37 °C before imaging.

> **Critical Note:** Chemical indicators are surface-limited in large organoids (penetration depth ~100–200 µm). For deep imaging, use genetically encoded indicators (B.7.2) or organoid slicing.

---

### B.7.2 Genetically Encoded Indicator (GCaMP) Protocol

**Materials and Reagents**

| Reagent / Material | Specification | Catalog # (Example) |
|---|---|---|
| AAV-hSyn-GCaMP7f | Titer: ≥1 × 10¹² vg/mL | Addgene 104488-AAV9 |
| AAV-CAG-GCaMP6s | For pan-cellular expression | Addgene 100844-AAV9 |

**Procedure**

1. Transduce organoids as described in B.6.2 using AAV-hSyn-GCaMP7f.
2. Wait 14–21 days for stable expression.
3. Verify expression by live fluorescence microscopy: GCaMP-expressing neurons should show dim basal fluorescence with transient brightenings corresponding to spontaneous activity.
4. For chronic imaging studies, GCaMP expression is stable for months without significant phototoxicity when imaging protocols limit exposure.

**GCaMP Variant Selection Guide**

| Variant | Kinetics | Sensitivity | Best For |
|---|---|---|---|
| GCaMP6s | Slow (τ_decay ~1.5 s) | Very high (ΔF/F₀ ~20× per AP) | Detecting sparse activity |
| GCaMP6f | Fast (τ_decay ~0.4 s) | Moderate (ΔF/F₀ ~10× per AP) | Resolving individual APs at low rates |
| GCaMP7f | Fast (τ_decay ~0.3 s) | High (ΔF/F₀ ~30× per AP) | Recommended default for organoid work |
| jGCaMP8f | Ultrafast (τ_decay ~0.1 s) | High | High-frequency activity |

---

### B.7.3 Imaging Parameters and Acquisition

**Equipment**

| Component | Specification |
|---|---|
| Microscope | Inverted widefield or spinning disk confocal |
| Objective | 4× (FOV: entire organoid), 10× (cellular resolution), 20× (subcellular) |
| Camera | sCMOS (e.g., Hamamatsu ORCA-Flash4.0 or Fusion BT) |
| Excitation | 488 nm LED or laser (attenuated) |
| Emission filter | GFP bandpass: 500–550 nm |
| Stage heater | 37 °C |
| Perfusion system | Gravity-fed ACSF perfusion at 1–2 mL/min (optional) |

**Acquisition Parameters**

| Parameter | Widefield (Population) | Confocal (Cellular) |
|---|---|---|
| Frame rate | 10–20 Hz | 5–10 Hz |
| Exposure time | 30–50 ms | 50–100 ms |
| Excitation power | 0.5–2 mW/mm² | 0.1–0.5 mW |
| Z-planes | Single plane | 3–5 planes, 10 µm spacing |
| Recording duration | 5–30 min | 5–15 min |
| Pixel size | 3–6 µm/px (4×) | 0.5–1 µm/px (20×) |

> **Critical Note:** Minimize phototoxicity by using the lowest excitation power that provides adequate signal-to-noise ratio (SNR > 5 for reliable transient detection). Monitor for photobleaching: >20% decrease in baseline fluorescence over 10 min indicates excessive illumination.

---

### B.7.4 Data Analysis Pipeline

**Step 1: Motion Correction**

- Apply rigid-body registration using NoRMCorre or CaImAn motion correction module.
- For organoids with significant tissue movement, consider non-rigid correction.

**Step 2: ROI Segmentation**

1. **Manual:** Draw ROIs around individual cell bodies using ImageJ/FIJI.
2. **Automated:** Use CaImAn (CNMF-E algorithm) or Suite2p for automatic ROI detection.
   - Parameters for organoid data: `min_corr = 0.8`, `min_pnr = 8`, `gSig = (5,5)` for 20× imaging.

**Step 3: Signal Extraction and ΔF/F₀ Calculation**

$$
\frac{\Delta F}{F_0} = \frac{F(t) - F_0}{F_0}
$$

Where $F_0$ is the baseline fluorescence, estimated as the 10th percentile of the fluorescence trace over a rolling 30 s window.

**Step 4: Event Detection**

- Apply a threshold of $\Delta F / F_0 > 3\sigma$ (where $\sigma$ is the noise standard deviation of the baseline period).
- Detect calcium transient onsets and compute event frequency, amplitude, and duration.

**Step 5: Network Analysis**

- Compute pairwise Pearson correlation between all ROI calcium traces.
- Threshold correlation matrix (e.g., $r > 0.3$) to generate functional connectivity graph.
- Identify network communities using Louvain modularity detection or spectral clustering.
- Quantify synchrony index: fraction of cells co-active within a sliding 500 ms window.

> **Cross-reference:** Chapter 12, Section 12.6 provides the mathematical framework for information-theoretic analysis of calcium imaging data, including mutual information and Granger causality.

---

## B.8 Immunohistochemistry and Imaging

> **Cross-reference:** See Chapter 4, Section 4.9 for discussion of cellular composition analysis in organoids.

### B.8.1 Fixation and Cryosectioning

**Materials and Reagents**

| Reagent / Material | Specification | Catalog # (Example) |
|---|---|---|
| Paraformaldehyde (PFA) | 4% (w/v) in PBS, EM grade | Electron Microscopy Sciences 15710 |
| Sucrose | 30% (w/v) in PBS | — |
| OCT compound | Embedding medium | Sakura 4583 |
| Cryomolds | Standard | Sakura 4557 |
| Cryostat | Set to −20 °C | Leica CM1950 |
| Superfrost Plus slides | Charged | Fisher 12-550-15 |

**Procedure**

1. **Fixation:**
   - Transfer organoid to a 1.5 mL tube.
   - Fix in 1 mL of 4% PFA at 4 °C for 30 min (organoids <1 mm) to 2 h (organoids 2–4 mm).
   - **Do not over-fix:** excessive fixation reduces antibody accessibility.
   - Wash 3× with PBS (10 min each, gentle rocking).

2. **Cryoprotection:**
   - Transfer to 30% sucrose/PBS at 4 °C until the organoid sinks (typically 24–48 h).

3. **Embedding:**
   - Fill a cryomold with OCT compound.
   - Position the organoid at the center; orient with forceps.
   - Snap-freeze on dry ice or in isopentane cooled by liquid nitrogen.
   - Store blocks at −80 °C until sectioning.

4. **Cryosectioning:**
   - Cut 12–20 µm sections on a cryostat at −20 °C.
   - Collect sections onto Superfrost Plus slides.
   - Air dry slides at RT for 30 min.
   - Store slides at −80 °C with desiccant until staining.

---

### B.8.2 Immunostaining Protocol

**Materials and Reagents**

| Reagent / Material | Specification | Catalog # (Example) |
|---|---|---|
| PBS | 1×, pH 7.4 | — |
| Triton X-100 | 0.3% in PBS (permeabilization) | Sigma T8787 |
| Normal donkey serum (NDS) | 10% in PBS + 0.1% Triton | Jackson ImmunoResearch 017-000-121 |
| Primary antibodies | See B.8.3 | — |
| Secondary antibodies | Alexa Fluor conjugated (donkey), 1:500 | Invitrogen |
| DAPI | 1 µg/mL in PBS | Invitrogen D1306 |
| ProLong Gold or Diamond | Antifade mounting medium | Invitrogen P36930 |
| Coverslips | #1.5 (0.17 mm) | — |
| Hydrophobic barrier pen | PAP pen | Vector Labs H-4000 |

**Procedure**

1. **Permeabilization:** Incubate slides in 0.3% Triton X-100/PBS for 15 min at RT.
2. **Blocking:** Apply 10% NDS in PBS + 0.1% Triton X-100 for 1 h at RT.
3. **Primary antibody incubation:**
   - Dilute primary antibodies in blocking solution (see B.8.3 for concentrations).
   - Apply 100–200 µL per slide; cover with Parafilm to prevent drying.
   - Incubate at 4 °C overnight (16–18 h).
4. **Washing:** 3× PBS, 5 min each.
5. **Secondary antibody incubation:**
   - Dilute secondary antibodies (Alexa Fluor-conjugated) at 1:500 in blocking solution.
   - Incubate at RT for 1–2 h in the dark.
6. **Washing:** 3× PBS, 5 min each, protected from light.
7. **Nuclear counterstain:** Incubate in 1 µg/mL DAPI/PBS for 5 min.
8. **Mounting:** Apply one drop of ProLong Gold; cover with #1.5 coverslip. Cure at RT in the dark for 24 h before imaging.

---

### B.8.3 Common Antibody Panels for Organoid Characterization

**Panel 1: Neural Progenitors**

| Antibody | Host | Dilution | Catalog # (Example) | Identifies |
|---|---|---|---|---|
| PAX6 | Rabbit | 1:300 | BioLegend 901301 | Dorsal progenitors |
| SOX2 | Goat | 1:200 | R&D AF2018 | Neural stem cells |
| NESTIN | Mouse | 1:500 | Millipore MAB5326 | Neural progenitors |
| TBR2 (EOMES) | Rabbit | 1:300 | Abcam ab23345 | Intermediate progenitors |
| KI67 | Mouse | 1:500 | BD 550609 | Proliferating cells |

**Panel 2: Cortical Neurons (Layer Identity)**

| Antibody | Host | Dilution | Catalog # (Example) | Identifies |
|---|---|---|---|---|
| TBR1 | Rabbit | 1:300 | Abcam ab31940 | Deep-layer (VI) neurons |
| CTIP2 (BCL11B) | Rat | 1:300 | Abcam ab18465 | Deep-layer (V) neurons |
| SATB2 | Mouse | 1:200 | Abcam ab51502 | Upper-layer (II–IV) neurons |
| BRN2 (POU3F2) | Rabbit | 1:200 | Cell Signaling 12137 | Upper-layer neurons |
| MAP2 | Chicken | 1:2000 | Abcam ab5392 | Mature dendrites |
| TUJ1 (TUBB3) | Mouse | 1:1000 | BioLegend 801201 | Neurons (pan-neuronal) |

**Panel 3: Glial Cells**

| Antibody | Host | Dilution | Catalog # (Example) | Identifies |
|---|---|---|---|---|
| GFAP | Rabbit | 1:1000 | Dako Z0334 | Astrocytes |
| S100β | Mouse | 1:500 | Sigma S2532 | Astrocytes |
| OLIG2 | Rabbit | 1:300 | Millipore AB9610 | Oligodendrocyte precursors |
| IBA1 | Rabbit | 1:500 | Wako 019-19741 | Microglia (if present) |

**Panel 4: Synaptic Markers**

| Antibody | Host | Dilution | Catalog # (Example) | Identifies |
|---|---|---|---|---|
| SYN1 (Synapsin-1) | Rabbit | 1:500 | Millipore AB1543 | Presynaptic terminals |
| PSD-95 (DLG4) | Mouse | 1:200 | NeuroMab 75-028 | Excitatory postsynaptic |
| VGLUT1 | Guinea pig | 1:500 | Millipore AB5905 | Glutamatergic |
| GAD67 | Mouse | 1:500 | Millipore MAB5406 | GABAergic |

---

### B.8.4 Confocal Imaging Parameters

**Equipment:** Laser scanning confocal (e.g., Zeiss LSM 880, Leica SP8, Nikon A1R) or spinning disk confocal.

**Recommended Settings**

| Parameter | Value |
|---|---|
| Objective | 10× (overview), 20× (cellular), 40×/63× oil (synaptic puncta) |
| Pinhole | 1 AU (Airy unit) for optimal sectioning |
| Z-step size | 1–2 µm (20×), 0.3–0.5 µm (63×) |
| Averaging | 2× line averaging for improved SNR |
| Bit depth | 12-bit or 16-bit |
| Pixel dwell time | 1–4 µs |
| Sequential scanning | Use for multi-color panels to avoid bleed-through |

| Fluorophore | Excitation Laser | Emission Window |
|---|---|---|
| DAPI | 405 nm | 420–470 nm |
| Alexa Fluor 488 | 488 nm | 500–550 nm |
| Alexa Fluor 568 | 561 nm | 575–625 nm |
| Alexa Fluor 647 | 633 nm | 650–720 nm |

> **Critical Note:** Always acquire images at consistent laser power, gain, and offset settings across experimental conditions when performing quantitative comparisons. Include negative controls (no primary antibody) in every staining batch.

---

## B.9 Organoid Cryopreservation and Biobanking

> **Cross-reference:** See Chapter 13, Section 13.5 for biobanking strategies at manufacturing scale.

### B.9.1 Slow-Freeze Protocol

**Materials and Reagents**

| Reagent / Material | Specification | Catalog # (Example) |
|---|---|---|
| Cryopreservation Medium | Maturation Medium + 10% DMSO | — |
| CoolCell® LX container | Controlled-rate freezing (−1 °C/min) | Corning 432002 |
| Cryovials | 2 mL, sterile | Nunc 375418 |

**Procedure**

1. Select organoids at a defined developmental stage (recommend Day 30–60).
2. Transfer individual organoids to cryovials containing 1 mL ice-cold Cryopreservation Medium.
3. Seal vials; place in CoolCell container.
4. Transfer to −80 °C freezer for 24 h (controlled rate: −1 °C/min).
5. Transfer to LN₂ vapor-phase storage for long-term banking.
6. Record: organoid ID, cell line, protocol, age, size, date, operator.

---

### B.9.2 Vitrification Protocol

**Materials and Reagents**

| Reagent / Material | Specification | Catalog # (Example) |
|---|---|---|
| VS1 (Equilibration Solution) | Maturation Medium + 10% ethylene glycol + 10% DMSO | — |
| VS2 (Vitrification Solution) | Maturation Medium + 20% ethylene glycol + 20% DMSO + 0.5 M sucrose | — |
| Cryostraws or cryovials | — | — |

**Procedure**

1. Incubate organoid in VS1 at RT for 15 min.
2. Transfer to VS2 at 4 °C for 5 min. **Do not exceed 5 min** (cryoprotectant toxicity).
3. Load organoid into a cryostraw or cryovial with minimal VS2 volume.
4. Plunge directly into LN₂ (ultra-rapid cooling; >1,000 °C/min).
5. Transfer to LN₂ storage.

> **Critical Note:** Vitrification produces superior morphological preservation compared to slow-freezing but requires precise timing. Practice the procedure with surplus organoids before banking valuable lines.

---

### B.9.3 Thawing and Recovery Assessment

**Procedure**

1. **For slow-frozen organoids:**
   - Remove from LN₂; place in 37 °C water bath until just thawed (~2 min).
   - Transfer organoid to 5 mL warm Maturation Medium + 10 µM Y-27632.
   - Centrifuge at 100 × *g* for 2 min; aspirate supernatant.
   - Resuspend in fresh Maturation Medium + Y-27632; transfer to ultra-low attachment plate.

2. **For vitrified organoids:**
   - Remove from LN₂; immediately place in pre-warmed Thawing Solution 1 (Maturation Medium + 1 M sucrose) at 37 °C for 3 min.
   - Transfer to Thawing Solution 2 (0.5 M sucrose) for 5 min.
   - Transfer to Thawing Solution 3 (0.25 M sucrose) for 5 min.
   - Transfer to Maturation Medium + 10 µM Y-27632.

3. **Recovery assessment (72 h post-thaw):**

| Metric | Method | Acceptable Criterion |
|---|---|---|
| Viability | Live/Dead staining (Calcein AM/EthD-1) | >60% viable cells |
| Morphology | Brightfield microscopy | Intact structure, minimal fragmentation |
| Electrophysiology | MEA or calcium imaging (Day 7–14 post-thaw) | Recovery of spontaneous activity |
| Marker expression | ICC (SOX2, MAP2, GFAP) | Preserved cell-type composition |

---

## B.10 Troubleshooting Guide

| Problem | Section | Likely Cause(s) | Solution(s) |
|---|---|---|---|
| iPSCs fail to attach after thaw | B.1.1 | Poor Matrigel coating; Y-27632 omitted; low viability | Verify Matrigel lot; always add ROCK inhibitor; check viability (>70%) |
| Excessive iPSC differentiation | B.1.2 | Over-confluence; poor-quality Matrigel; high passage | Passage at 70–80%; fresh Matrigel lots; use early-passage cells |
| EBs are irregular or cystic | B.2.1 | Incorrect cell count; poor iPSC quality; plate not ultra-low attachment | Use automated cell counter; confirm pluripotency markers; verify plate type |
| No neuroepithelium at Day 11 | B.2.2 | Failed neural induction; medium components degraded | Prepare fresh NIM; check N-2 supplement lot; extend induction 2 days |
| Matrigel solidifies before embedding | B.2.3 | Matrigel warmed; slow technique | Keep Matrigel on ice; pre-chill pipette tips; work in batches of 6 |
| Organoids fuse/clump on shaker | B.2.4 | Too many per dish; shaker speed too low | Max 8 per 10 cm dish; verify 85 rpm; separate clumped organoids early |
| Necrotic cores in organoids | B.2.4 | Insufficient nutrient diffusion in organoids >3 mm | Use orbital shaker; supplement with 1% Matrigel; consider organoid slicing |
| Dual SMAD inhibition fails | B.3.1 | Inhibitor stock degraded; incorrect concentration | Prepare fresh Dorsomorphin/SB stocks; verify by HPLC if possible |
| Assembloid fusion fails | B.4.1 | Size mismatch; plates are adherent type | Size-match within 20%; use ultra-low attachment plates; extend static period |
| No MEA signal | B.5.2–B.5.3 | Poor organoid adhesion; immature organoid; electrode fouling | Replate with Matrigel assist; use older organoids (>Day 90); re-clean MEA chip |
| Stimulation causes electrode damage | B.5.4 | Charge density too high | Calculate $Q = I \times t / A$; reduce amplitude; check charge limits for electrode material |
| Low AAV transduction efficiency | B.6.2 | Low titer; poor viral penetration; organoid too dense | Verify titer by qPCR; increase MOI; bisect large organoids before transduction |
| ChR2 activation during GCaMP imaging | B.6.4 | Spectral crosstalk | Switch to red-shifted opsin (Chrimson); use temporal interleaving; reduce 488 nm power |
| Weak calcium signal | B.7.1 | Poor dye loading; immature organoid | Increase loading time; optimize Pluronic concentration; use GCaMP instead |
| High background in IHC | B.8.2 | Insufficient blocking; secondary antibody concentration | Increase blocking to 2 h; titrate secondary; add 0.1% Tween-20 to washes |
| Organoids fragment during cryopreservation | B.9.1 | Cooling rate too fast; DMSO concentration wrong | Use controlled-rate freezer; verify 10% DMSO; consider vitrification |
| No activity recovery post-thaw | B.9.3 | Excessive cryodamage; thaw too slow | Thaw rapidly at 37 °C; optimize cryoprotectant; assess at Day 14+ post-thaw |

---

## References

1. Lancaster, M. A., et al. (2013). Cerebral organoids model human brain development and microcephaly. *Nature*, 501(7467), 373–379.
2. Lancaster, M. A., & Knoblich, J. A. (2014). Generation of cerebral organoids from human pluripotent stem cells. *Nature Protocols*, 9(10), 2329–2340.
3. Paşca, A. M., et al. (2015). Functional cortical neurons and astrocytes from human pluripotent stem cells in 3D culture. *Nature Methods*, 12(7), 671–678.
4. Qian, X., et al. (2016). Brain-region-specific organoids using mini-bioreactors for modeling ZIKV exposure. *Cell*, 165(5), 1238–1254.
5. Bagley, J. A., et al. (2017). Fused cerebral organoids model interactions between brain regions. *Nature Methods*, 14(7), 743–751.
6. Birey, F., et al. (2017). Assembly of functionally integrated human forebrain spheroids. *Nature*, 545(7652), 54–59.
7. Kagan, B. J., et al. (2022). In vitro neurons learn and exhibit sentience when embodied in a simulated game-world. *Neuron*, 110(23), 3952–3969.
8. Smirnova, L., et al. (2023). Organoid intelligence (OI): the new frontier in biocomputing and intelligence-in-a-dish. *Frontiers in Science*, 1, 1017235.
9. Dana, H., et al. (2019). High-performance calcium sensors for imaging activity in neuronal populations and microcompartments. *Nature Methods*, 16(7), 649–657.
10. Pachitariu, M., et al. (2017). Suite2p: beyond 10,000 neurons with standard two-photon microscopy. *bioRxiv*, 061507.

---

*Appendix B · Organoid Intelligence*
*Previous: [Appendix A: Glossary of Key Terms ←](appendix-a-glossary-of-key-terms.md)*
*Next: [Appendix C: Mathematical Foundations →](appendix-c-mathematical-foundations.md)*

---

**Copyright © 2026 DaScient, LLC. All rights reserved.**
Licensed under the [Apache License 2.0](../../../LICENSE).
