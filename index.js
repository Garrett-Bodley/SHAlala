NOTE_MAPPING = {
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

let toneStart = false;
let synth;

document.addEventListener("DOMContentLoaded", (_e) => {
  document.getElementById("form").addEventListener("submit", handleOnSubmit);
  document.getElementById("range-input").addEventListener("input", handleRangeOnInput)
});

function initTone() {
  toneStart = true;
  Tone.start();
  Tone.Transport.bpm.value = 120;
  synth = new Tone.PolySynth(Tone.Synth).toDestination();
}

function handleRangeOnInput(e) {
  e.preventDefault();
  if(toneStart == false) initTone();

  newRangeValue = e.target.value;
  document.getElementById("range-value").innerText = newRangeValue;
  // Tone.Transport.bpm.value = newRangeValue;
  Tone.Transport.bpm.rampTo(newRangeValue, 0.1)
  console.log({newRangeValue})
}

async function handleOnSubmit(e) {
  e.preventDefault();
  if(toneStart == false) initTone();

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

function hashToChords(hash){
  const chords = [];
  Tone.Transport.clear();
  for (let i = 0; i < hash.length; i += 8) {
    chords.push(
      hash
        .slice(i, i + 8)
        .split("")
        .map((char) => NOTE_MAPPING[char])
    );
  }
  return chords
}

function playNotes(hash) {
  const chords = hashToChords(hash);
  console.log(chords);

  console.log({ chords });
  Tone.Transport.start();
  Tone.Transport.schedule((time) => playChords(time, chords, synth));
}

function playChords(time, chords, synth) {
  chords.forEach((chord, index) => {
    const startTime = time + index * Tone.Time("4n").toSeconds();
    synth.triggerAttackRelease(chord, "4n", startTime);
  });
}
