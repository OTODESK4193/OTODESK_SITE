# Ambience — Fact Sheet

A one-page reference. Paste into a reply if an editor asks for "more details," or keep it as your own canonical product description.

## At a glance
- **Name:** Ambience
- **Developer:** OTODESK (solo, self-taught)
- **Type:** Algorithmic reverb (effect)
- **Version:** 1.0.1
- **Price:** Free
- **License:** GPLv3 (open-source)
- **Format:** VST3
- **OS:** Windows 10 / 11 (64-bit), AVX2 required
- **Tested host:** Ableton Live 11 / 12 (other DAWs unverified; macOS / AU not supported)
- **Framework:** JUCE 8.0.x

## One-line pitch
World-class halls in 16 channels of FDN — research-grade algorithmic reverb, completely free.

## Core engine
- **16-channel Feedback Delay Network** with a Fast Walsh–Hadamard Transform feedback matrix for dense, colorless diffusion
- Delay lines tuned to **mutually coprime primes** on a log scale — no comb-filter artifacts at any room size
- **7 algorithms:** ROOM1, ROOM2, HALL1, HALL2, PLATE, SPRING, GOLDFOIL — each with distinct routing, allpass structure, and ER pattern

## Acoustic accuracy
- **Välimäki–Liski 10-band GEQ absorption** per channel, solved via Weighted Least Squares for accurate, frequency-dependent RT60
- **ISM-based early reflections**, tuned per algorithm
- **16 independent bandlimited-noise LFOs**, initialized with a Golden-Ratio Weyl sequence for non-periodic modulation
- Live **D50 / C50 / C80 / EDT** acoustic metric readouts

## Character & control
- **ADAA saturator:** Warm (Vicanek), Tape (Padé), Tube (asymmetric ADAA), Hard (ADAA clip)
- **Pro Mode:** per-band RT60 multipliers (31 Hz – 16 kHz), Low/Mid/High Tilt EQ, saturation type selection
- Live RT60 graph overlays the effective curve on the preset reference

## 21 factory presets (selected)
Abbey Road Studio 2 · Abbey Road Studio 1 · Capitol Studio A · Skywalker Sound · Carnegie Hall · Tokyo Opera City · Konzerthaus Berlin · Vienna Musikverein · Boston Symphony Hall · Amsterdam Concertgebouw · EMT 140 (vocal / snare) · Dark Plate · Surf Guitar (spring) · AKG BX-20 (deep spring) · Gothic Cathedral · Stone Chamber · Infinite Space

## Real-time / DAW safety
- Zero heap allocation on the audio thread
- Dirty-flag parameter dispatch (heavy GEQ math runs only on change)
- Ableton jitter / hot-reset protection, ScopedNoDenormals, sample-accurate gain smoothing

## The story (for the human-interest angle)
A hobbyist producer, not a trained audio engineer, rebuilt reverb DSP from academic papers — using AI as a sparring partner and sheer persistence through countless build errors. Ambience is the flagship of 12 free, open-source plugins released in one year.

## Links
- Feature page: https://otodesk4193.github.io/ambience.html
- Demo (before/after): https://youtu.be/9UfD9NzSE3c
- Download / source: https://github.com/OTODESK4193/Ambience1.0.1
- All plugins: https://otodesk4193.github.io/
- X: https://x.com/kijyoumusic
- note (dev diary): https://note.com/pain_modulation
