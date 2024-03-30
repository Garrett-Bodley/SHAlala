const IONIAN = {
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

const DORIAN = {
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
};

const PHRYGIAN = {
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
};

const LYDIAN = {
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
};

const MIXOLYDIAN = {
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
};

const AEOLIAN = {
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
};

const LOCRIAN = {
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
};

const MODES = [IONIAN, DORIAN, PHRYGIAN, LYDIAN, MIXOLYDIAN, AEOLIAN, LOCRIAN];

let toneStart = false;
let synth;

let chordSynths = []

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
  Tone.Transport.bpm.value = 200;
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
  const hash = await computeSHA1(inputText);

  console.log({ hash });
  document.getElementById("sha").textContent = "SHA1 Hash: " + hash;

  const synth = new Tone.Synth().toDestination();

  const notes = [...hash].map((char, charIdx) => (
    { pitch: DORIAN[char], timing: charIdx === 0? 0 : 0.1 }
  ));

  function play() {
      let delay = Tone.now();
      for(let i = 0; i < notes.length; i++) {
          delay += notes[i].timing;
          synth.triggerAttackRelease(notes[i].pitch, '8n', delay);  
      }
  }
  play();
  
  return;

  playNotePart(hash);
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

// function hashToChords(hashString) {
//   const chords = [];
//   for (let i = 0; i < hashString.length; i += 8) {
//     chords.push(
//       hashString
//         .slice(i, i + 8)
//         .split("")
//         .map((char) => MODES[Math.floor(Math.random() * MODES.length)][char])
//     );
//   }
//   return chords;
// }

function hashToNotes(hash) {
  return hash.split("").map((char) => DORIAN[char]);
  // return hash.split("").map((char) => MODES[Math.floor(Math.random() * MODES.length)][char])
}

function playNotePart(hash) {
  // This plays the hash once and then stops. It works!
  // No Chords
  console.log('playNotePart')
  const notes = hashToNotes(hash);
  if (synth) synth.dispose();
  if (drone) drone.dispose();
  synth = new Tone.PolySynth(Tone.Synth).toDestination();
  drone = new Tone.PolySynth(Tone.Synth).toDestination();
  Tone.Transport.stop();
  Tone.Transport.clear(0);

  let startTime = 0;
  let duration = '8t'

  notes.forEach(note => {
    Tone.Transport.scheduleOnce(time => {
      synth.triggerAttackRelease(note, duration, time)
    }, startTime);
    startTime += Tone.Time(duration).toSeconds();
  })

  // Tone.Transport.scheduleOnce(time => {
  //   notes.forEach(note => {
  //     synth.triggerAttackRelease(note, '8t', time)
  //   });
  // }, 0);
  drone.triggerAttack(['C2', 'C3'], Tone.now());
  Tone.Transport.start();
}

function playNoteSequence(hash) {
  // This loops through the hash notes. Plays one note at a time.
  // No chords. It works!
  const notes = hashToNotes(hash);
  console.log({ notes });

  if (synth) synth.dispose();
  if (drone) drone.dispose();

  synth = new Tone.PolySynth(Tone.Synth).toDestination();
  drone = new Tone.PolySynth(Tone.Synth).toDestination();
  Tone.Transport.clear(0);

  const sequence = new Tone.Sequence(
    (time, note) => {
      // 'note' is an element of the 'notes' array
      synth.triggerAttackRelease(note, "8n", time);
    },
    notes, // The array of chords to be played by the sequence
    "8n" // The interval at which each chord is played ("1m" = once per measure)
  );
  drone.triggerAttack(["C2", "C3"], Tone.now());

  sequence.start();
  Tone.Transport.start();

  // Tone.Transport.clear(0);
  // Tone.Transport.start();
  // Tone.Transport.schedule((time) => playChords(time, chords, synth), "4n");
  // const totalTime = chords.length * Tone.Time("4n").toSeconds();
  // Tone.Transport.schedule((time) => Tone.Transport.stop(), `${totalTime}`)
}

function playChordPart(hash) {
  // Plays five chords in a row and then stops. It works!
  console.log('playChordPart')
  hashNotes = hashToNotes(hash);
  chords = makeChordsFromNotes(hashNotes)

  if (drone) drone.dispose();
  chordSynths.forEach( synth => synth.dispose() )

  chordSynths = chords.map( () => new Tone.PolySynth(Tone.Synth).toDestination())

  drone = new Tone.PolySynth(Tone.Synth).toDestination();
  Tone.Transport.stop();
  Tone.Transport.clear(0);

  let startTime = 0;
  let duration = '8t'
  console.log({ chords })
  chords.forEach((chord, idx) => {
    Tone.Transport.scheduleOnce(time => {
      chordSynths[idx].triggerAttackRelease(chord, duration, time)
    }, startTime);
    startTime += Tone.Time(duration).toSeconds();
  })

  drone.triggerAttack(['C2', 'C3'], Tone.now());
  Tone.Transport.start();
}

function makeChordsFromNotes(notes) {
  chords = []
  for(let i = 0; i < notes.length; i += 8) {
    chords.push(notes.slice(i, i + 8))
  }
  return chords
}

// // Maybe deprecating? Idk if this is good for anything
// function playChords(time, chords, synth) {
//   chords.forEach((chord, index) => {
//     const startTime = time + index * Tone.Time("4n").toSeconds();
//     synth.triggerAttackRelease(chord, "4n", startTime);
//   });
// }
