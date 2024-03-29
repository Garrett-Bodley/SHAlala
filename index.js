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
  document
    .getElementById("range-input")
    .addEventListener("input", handleRangeOnInput);
});

async function initTone() {
  toneStart = true;
  await Tone.start();
  Tone.Transport.bpm.value = 120;
}

async function handleRangeOnInput(e) {
  e.preventDefault();
  if (toneStart == false) initTone();

  let newRangeValue = e.target.value;
  document.getElementById("range-value").innerText = newRangeValue;
  // Tone.Transport.bpm.value = newRangeValue;
  Tone.Transport.bpm.rampTo(newRangeValue, 0.1);
  console.log({ newRangeValue });
}

async function handleOnSubmit(e) {
  e.preventDefault();
  if (toneStart == false) initTone();

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
        .map((char) => NOTE_MAPPING[char])
    );
  }
  return chords;
}

function playNotes(hash) {
  const chords = hashToChords(hash);
  console.log(chords);

  console.log({ chords });

  if (synth) {
    synth.dispose();
  }
  synth = new Tone.PolySynth(Tone.Synth).toDestination();
  Tone.Transport.clear(0)
  // events = chords.map(chord => {
  //   new Tone.Event(time => {
  //     synth.triggerAttackRelease(chord, '4n', time)
  //   })
  // })

  const sequence = new Tone.Sequence(
    (time, chord) => {
      // 'chord' is an element of the 'chords' array
      synth.triggerAttackRelease(chord, "1n", time);
    },
    chords, // The array of chords to be played by the sequence
    "1m" // The interval at which each chord is played ("1m" = once per measure)
  );

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
