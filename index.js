const CHROMATIC = {
  0: "Ab3",
  1: "A3",
  2: "Bb3",
  3: "B3",
  4: "C4",
  5: "Db4",
  6: "D4",
  7: "Eb4",
  8: "E4",
  9: "F4",
  a: "Gb4",
  b: "G4",
  c: "Ab4",
  d: "A4",
  e: "Bb5",
  f: "B5"
};

const IONIAN = {
  0: "Ab3",
  1: "Bb3",
  2: "C4",
  3: "Db4",
  4: "Eb4",
  5: "F4",
  6: "G4",
  7: "Ab4",
  8: "Bb4",
  9: "C5",
  a: "Db5",
  b: "Eb5",
  c: "F5",
  d: "G5",
  e: "Ab5",
  f: "Bb5"
};

const DORIAN = {
  0: "Ab3",
  1: "Bb3",
  2: "Cb3",
  3: "Db4",
  4: "Eb4",
  5: "F4",
  6: "Gb4",
  7: "Ab4",
  8: "Bb4",
  9: "Cb4",
  a: "Db5",
  b: "Eb5",
  c: "F5",
  d: "Gb5",
  e: "Ab5",
  f: "Bb5"
};

const PHRYGIAN = {
  0: "Ab3",
  1: "Bbb3",
  2: "Cb3",
  3: "Db4",
  4: "Eb4",
  5: "Fb4",
  6: "Gb4",
  7: "Ab4",
  8: "Bbb4",
  9: "Cb4",
  a: "Db5",
  b: "Eb5",
  c: "Fb5",
  d: "Gb5",
  e: "Ab5",
  f: "Bb5"
};

const LYDIAN = {
  0: "Ab3",
  1: "Bb3",
  2: "C4",
  3: "D4",
  4: "Eb4",
  5: "F4",
  6: "G4",
  7: "Ab4",
  8: "Bb4",
  9: "C5",
  a: "D5",
  b: "Eb5",
  c: "F5",
  d: "G5",
  e: "Ab5",
  f: "Bb5"
};

const MIXOLYDIAN = {
  0: "Ab3",
  1: "Bb3",
  2: "C4",
  3: "Db4",
  4: "Eb4",
  5: "F4",
  6: "Gb4",
  7: "Ab4",
  8: "Bb4",
  9: "C5",
  a: "Db5",
  b: "Eb5",
  c: "F5",
  d: "Gb5",
  e: "Ab5",
  f: "Bb5"
};

const AEOLIAN = {
  0: "Ab3",
  1: "Bb3",
  2: "Cb3",
  3: "Db4",
  4: "Gb4",
  5: "Fb4",
  6: "Gb4",
  7: "Ab4",
  8: "Bb4",
  9: "Cb4",
  a: "Db5",
  b: "Gb5",
  c: "Fb5",
  d: "Gb5",
  e: "Ab5",
  f: "Bb5"
};

const LOCRIAN = {
  0: "Ab3",
  1: "Bbb3",
  2: "Cb3",
  3: "Db4",
  4: "Ebb4",
  5: "Fb4",
  6: "Gb4",
  7: "Ab5",
  8: "Bbb5",
  9: "Cb5",
  a: "Db5",
  b: "Ebb5",
  c: "Fb5",
  d: "Gb5",
  e: "Ab5",
  f: "Bb5"
};

const DIMINISHED = {
  0: "Ab3",
  1: "Bb3",
  2: "B3",
  3: "C#4",
  4: "D4",
  5: "E4",
  6: "F4",
  7: "G4",
  8: "Ab4",
  9: "Bb4",
  a: "B4",
  b: "C#5",
  c: "D5",
  d: "E5",
  e: "F5",
  f: "G5"
}

const WHOLETONE = {
  0: "Ab3",
  1: "Bb3",
  2: "C4",
  3: "D4",
  4: "E4",
  5: "Gb4",
  6: "Ab4",
  7: "Bb4",
  8: "C5",
  9: "D5",
  a: "E5",
  b: "Gb5",
  c: "Ab5",
  d: "Bb5",
  e: "C6",
  f: "D6"
}

const MINORPENTA = {
  0: "Ab2",
  1: "Cb2",
  2: "Db3",
  3: "Eb3",
  4: "Gb3",
  5: "Ab3",
  6: "Cb3",
  7: "Db4",
  8: "Eb4",
  9: "Gb4",
  a: "Ab4",
  b: "Cb4",
  c: "Db5",
  d: "Eb5",
  e: "Gb5",
  f: "Ab5"
}

const MAJORPENTA = {
  0: "Ab2",
  1: "Bb2",
  2: "C3",
  3: "Eb3",
  4: "F3",
  5: "Ab3",
  6: "Bb3",
  7: "C4",
  8: "Eb4",
  9: "F4",
  a: "Ab4",
  b: "Bb4",
  c: "C5",
  d: "Eb5",
  e: "F5",
  f: "Ab5"
}

// const NOTE_DURATIONS = ['4n', '4t', '8n', '8t', '16n', '16t', '32n', '32t']
// const NOTE_DURATIONS = ['4n', '4t', '8n.', '8n', '8t', '16n.', '16n']
// const NOTE_DURATIONS = ['4n', '4t', '8n', '8t', '16n', '16t', '32n', '32t'].sort(() => Math.random() - 0.5);
// const NOTE_DURATIONS = ['4n', '4t', '8n', '8t', '16n', '16t', '32n', '32t'].sort(() => Math.random() - 0.5);
// const NOTE_DURATIONS = ['4t', '8n', '16t', '16n', '8t', '32t', '4n', '32n'] // Randomized order using line above
const NOTE_DURATIONS = ['4n.', '4n', '4t', '8n.', '8n', '8t', '16n.', '16n']

// All rhythm options excluding anything >= half note triplet
// const NOTE_DURATIONS = ['4n.', '4n', '4t', '8n.', '8n', '8t', '16n.', '16n', '16t', '32n.', '32n', '32t']

const SCALES = {
  ionian: IONIAN,
  dorian: DORIAN,
  phrygian: PHRYGIAN,
  lydian: LYDIAN,
  mixolydian: MIXOLYDIAN,
  aeolian: AEOLIAN,
  locrian: LOCRIAN,
  chromatic: CHROMATIC,
  diminished: DIMINISHED,
  wholetone: WHOLETONE,
  minorpenta: MINORPENTA,
  majorpenta: MAJORPENTA
}

let toneStart = false;
let synth;
let drone;
let chordSynths = []

document.addEventListener("DOMContentLoaded", (_e) => {
  document.getElementById("form").addEventListener("submit", handleOnSubmit);
  document
    .getElementById("range-input")
    .addEventListener("input", handleRangeOnInput);
  document.getElementById('stop').addEventListener('click', stopSound);
});

async function initTone() {
  toneStart = true;
  await Tone.start();
  Tone.Destination.volume.value = parseFloat(-20);
  Tone.Transport.bpm.value = 180;
}

async function handleRangeOnInput(e) {
  e.preventDefault();
  if (toneStart == false) await initTone();

  let newRangeValue = e.target.value;
  document.getElementById("range-value").innerText = `${newRangeValue} BPM`;
  Tone.Transport.bpm.rampTo(newRangeValue, 0.1);
  // console.log({ newRangeValue });
}

async function handleOnSubmit(e) {
  e.preventDefault();
  if (toneStart == false) await initTone();

  const inputText = document.getElementById("form-input").value;
  const inputFile = document.getElementById("fileInput").files[0]
  const hash = await computeSHA1(inputText, inputFile)

  console.log({ hash });
  document.getElementById("sha").textContent = "SHA1 Hash: " + hash;

  // const synth = new Tone.Synth().toDestination();

  const playShortHash = document.getElementById("playShortHashCheckbox").checked;
  const scaleToPlay = document.getElementById("scaleSelect").value

  const hashToPlay = playShortHash ? hash.slice(0, 8) : hash;
  // const notes = hashToNotes(hashToPlay, scaleToPlay)
  const notes = hashToNotesWithTempo(hashToPlay, scaleToPlay)

  playNotePart(notes)
  // const notes = [...hashToPlay].map((char, charIdx) => {
  //   let timing;
  //   if (charIdx === 0) {
  //     timing = 0;
  //   } else if(charIdx === hashToPlay.length - 1) {
  //     timing = 0.05
  //   } else {
  //     // use a floor so that values are never 0
  //     timing = Math.max(0.001, Number(`0x${hashToPlay[charIdx+1]}`) / 48);
  //   }
  //   return { pitch: DORIAN[char], timing }
  // });

  // function play() {
  //     let delay = Tone.now();
  //     for(let i = 0; i < notes.length; i++) {
  //         delay += notes[i].timing;
  //         synth.triggerAttackRelease(notes[i].pitch, '8n', delay);
  //     }
  // }
  // play();
}

async function computeSHA1(text, file) {
  const textBuffer = new TextEncoder().encode(text);
  const fileBuffer = await readFileAsBuffer(file)
  const joinedBuffer = concatBuffers(fileBuffer, textBuffer)
  const hashBuffer = await crypto.subtle.digest("SHA-1", joinedBuffer);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const hashHex = hashArray
    .map((b) => b.toString(16).padStart(2, "0"))
    .join(""); // convert bytes to hex string
  return hashHex;
}

async function readFileAsBuffer(file){
  return new Promise((resolve, reject) => {
    if(!file) resolve(new Uint8Array)
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = () => reject(reader.error);
    reader.readAsArrayBuffer(file);
  })
}

function concatBuffers(buf1, buf2){
  if (!buf1) return buf2
  if (!buf2) return buf1
  const combined = new Uint8Array(buf1.byteLength + buf2.byteLength)
  combined.set(buf1, 0)
  combined.set(buf2, buf1.byteLength)
  return combined.buffer
}

function hashToNotes(hash, scale) {
  console.log( {scale} )
  return hash.split("").map((char) => SCALES[scale][char]);
}

function hashToNotesWithTempo(hash, scale) {
  let totalDuration = 0
  let currentDuration
  return hash.split("").map((char, idx) => {
    if (idx == 0){
      currentDuration = NOTE_DURATIONS[Number(`0x${char}`) % NOTE_DURATIONS.length]
    }else{
      currentDuration = NOTE_DURATIONS[Math.round(totalDuration * 10) % NOTE_DURATIONS.length]
    }
    totalDuration += Tone.Time(currentDuration)
    return { note: SCALES[scale][char], duration: currentDuration }
  })
}

function playNotePart(notes) {
  // This plays the hash once and then stops. It works!
  // No Chords
  console.log('playNotePart')

  Tone.Transport.stop();
  Tone.Transport.cancel(0);
  synth?.dispose();
  drone?.dispose();
  synth = new Tone.PolySynth(Tone.Synth).toDestination();
  drone = new Tone.PolySynth(Tone.Synth).toDestination();

  let startTime = 0;

  const totalDuration = notes.reduce((accum, note) => {
    return accum + Tone.Time(note.duration)
  }, 0)
  console.log({totalDuration})

  drone.triggerAttack('Ab2')
  Tone.Transport.scheduleOnce(_time => {
    drone.triggerRelease('Ab2');
  }, totalDuration)

  notes.forEach((note) => {
    Tone.Transport.scheduleOnce(time => {
      synth.triggerAttackRelease(note.note, note.duration, time)
    }, startTime);
    startTime += Tone.Time(note.duration).toSeconds();
  })

  Tone.Transport.start();
}

function stopSound(e){
  e.preventDefault();
  synth?.dispose()
  drone?.dispose()
  Tone.Transport.cancel()
  Tone.Transport.stop()
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
  chords = makeChordsFromNotes(hashNotes, 4)
  console.log( { chords })

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

function makeChordsFromNotes(notes, voiceCount) {
  chords = []
  for(let i = 0; i < notes.length; i += voiceCount) {
    chords.push(notes.slice(i, Math.max(i + voiceCount, notes.length - 1)))
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
