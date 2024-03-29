IONIAN = {
  0: "C4",
  1: "D4",
  2: "E4",
  3: "F4",
  4: "G4",
  5: "A4",
  6: "B4",
  7: "C5",
  8: "D5",
  9: "E5",
  a: "F5",
  b: "G5",
  c: "A5",
  d: "B5",
  e: "C6",
  f: "D6",
};

DORIAN = {
  0: "C4",
  1: "D4",
  2: "Eb4",
  3: "F4",
  4: "G4",
  5: "A4",
  6: "Bb4",
  7: "C5",
  8: "D5",
  9: "Eb5",
  a: "F5",
  b: "G5",
  c: "A5",
  d: "Bb5",
  e: "C6",
  f: "D6",
}

PHRYGIAN = {
  0: "C4",
  1: "Db4",
  2: "Eb4",
  3: "F4",
  4: "G4",
  5: "Ab4",
  6: "Bb4",
  7: "C5",
  8: "Db5",
  9: "Eb5",
  a: "F5",
  b: "G5",
  c: "Ab5",
  d: "Bb5",
  e: "C6",
  f: "D6",
}

LYDIAN = {
  0: "C4",
  1: "D4",
  2: "E4",
  3: "F#4",
  4: "G4",
  5: "A4",
  6: "B4",
  7: "C5",
  8: "D5",
  9: "E5",
  a: "F#5",
  b: "G5",
  c: "A5",
  d: "B5",
  e: "C6",
  f: "D6",
}

MIXOLYDIAN = {
  0: "C4",
  1: "D4",
  2: "E4",
  3: "F4",
  4: "G4",
  5: "A4",
  6: "Bb4",
  7: "C5",
  8: "D5",
  9: "E5",
  a: "F5",
  b: "G5",
  c: "A5",
  d: "Bb5",
  e: "C6",
  f: "D6",
}

AEOLIAN = {
  0: "C4",
  1: "D4",
  2: "Eb4",
  3: "F4",
  4: "G4",
  5: "Ab4",
  6: "Bb4",
  7: "C5",
  8: "D5",
  9: "Eb5",
  a: "F5",
  b: "G5",
  c: "Ab5",
  d: "Bb5",
  e: "C6",
  f: "D6",
}

LOCRIAN = {
  0: "C4",
  1: "Db4",
  2: "Eb4",
  3: "F4",
  4: "Gb4",
  5: "Ab4",
  6: "Bb4",
  7: "C5",
  8: "Db5",
  9: "Eb5",
  a: "F5",
  b: "Gb5",
  c: "Ab5",
  d: "Bb5",
  e: "C6",
  f: "Db6",
}

MODES = [IONIAN, DORIAN, PHRYGIAN, LYDIAN, MIXOLYDIAN, AEOLIAN, LOCRIAN]

let toneStart = false;
let synth;
let drone;

document.addEventListener("DOMContentLoaded", (_e) => {
  document.getElementById("form").addEventListener("submit", handleOnSubmit);
  document
    .getElementById("range-input")
    .addEventListener("input", handleRangeOnInput);
});

async function initTone() {
  toneStart = true;
  await Tone.start();
  Tone.Destination.volume.value = parseFloat(-20);
  Tone.Transport.bpm.value = 120;
}

async function handleRangeOnInput(e) {
  e.preventDefault();
  if (toneStart == false) await initTone();

  let newRangeValue = e.target.value;
  document.getElementById("range-value").innerText = newRangeValue;
  // Tone.Transport.bpm.value = newRangeValue;
  Tone.Transport.bpm.rampTo(newRangeValue, 0.1);
  console.log({ newRangeValue });
}

async function handleOnSubmit(e) {
  e.preventDefault();
  if (toneStart == false) await initTone();

  const inputText = document.getElementById("form-input").value;
  hash = await computeSHA1(inputText);
  logHash();
  document.getElementById("sha").textContent = "SHA1 Hash: " + hash;
  playNotes(hash);
}

async function computeSHA1(text) {
  const data = new TextEncoder().encode(text);
  const hashBuffer = await crypto.subtle.digest("SHA-1", data);
  const hashArray = Array.from(new Uint8Array(hashBuffer)); // convert buffer to byte array
  const hashHex = hashArray
    .map((b) => b.toString(16).padStart(2, "0"))
    .join(""); // convert bytes to hex string
  return hashHex;
}

function logHash() {
  console.log({ hash });
}

function hashToChords(hash) {
  const chords = [];
  Tone.Transport.clear();
  for (let i = 0; i < hash.length; i += 8) {
    chords.push(
      hash
        .slice(i, i + 8)
        .split("")
        .map((char) => MODES[Math.floor(Math.random() * MODES.length)][char])
    );
  }
  return chords;
}

function hashToNotes(hash) {
  return hash.split("").map((char) => LYDIAN[char])
  // return hash.split("").map((char) => MODES[Math.floor(Math.random() * MODES.length)][char])
}

function playNotes(hash) {
  const notes = hashToNotes(hash);
  console.log(notes);

  console.log({ notes });

  if (synth) synth.dispose();
  if (drone) drone.dispose()

  synth = new Tone.PolySynth(Tone.Synth).toDestination();
  drone = new Tone.PolySynth(Tone.Synth).toDestination();
  Tone.Transport.clear(0)

  const sequence = new Tone.Sequence(
    (time, note) => {
      // 'note' is an element of the 'notes' array
      synth.triggerAttackRelease(note, "8t", time);
    },
    notes, // The array of chords to be played by the sequence
    "8t" // The interval at which each chord is played ("1m" = once per measure)
  );
  drone.triggerAttack(['C2', 'C3'], Tone.now())

  sequence.start();
  Tone.Transport.start();

  // Tone.Transport.clear(0);
  // Tone.Transport.start();
  // Tone.Transport.schedule((time) => playChords(time, chords, synth), "4n");
  // const totalTime = chords.length * Tone.Time("4n").toSeconds();
  // Tone.Transport.schedule((time) => Tone.Transport.stop(), `${totalTime}`)
}

function playChords(time, chords, synth) {
  chords.forEach((chord, index) => {
    const startTime = time + index * Tone.Time("4n").toSeconds();
    synth.triggerAttackRelease(chord, "4n", startTime);
  });
}
