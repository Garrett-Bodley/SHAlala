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
  b: "Eb5",
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
  7: "Ab4",
  8: "Bbb4",
  9: "Cb4",
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

const MCCOY = {
  0: ['C2', 'G2'],
  1: ['Eb2', 'A2', 'D3', 'G3', 'C4'],
  2: ['G2', 'C3', 'F3', 'Bb3', 'Eb4'],
  3: ['A2', 'D3', 'G3', 'C4', 'F4'],
  4: ['C3', 'F3', 'Bb3', 'Eb4', 'G4'],
  5: ['D3', 'G3', 'C4', 'F4', 'A4'],
  6: ['Eb3', 'A3', 'D4', 'G4', 'C5'],
  7: ['G3', 'C4', 'F4', 'Bb4', 'Eb5'],
  8: ['A3', 'D4', 'G4', 'C5', 'F5'],
  9: ['C4', 'F4', 'Bb4', 'Eb5', 'G5'],
  a: ['D4', 'G4', 'C5', 'F5', 'A5'],
  b: ['Eb4', 'A4', 'D5', 'G5', 'C6'],
  c: ['G4', 'C5', 'F5', 'Bb5', 'Eb6'],
  d: '',
  e: '',
  f: '',
}

// const NOTE_DURATIONS = ['4n', '4t', '8n', '8t', '16n', '16t', '32n', '32t']
// const NOTE_DURATIONS = ['4n', '4t', '8n.', '8n', '8t', '16n.', '16n']
// const NOTE_DURATIONS = ['4n', '4t', '8n', '8t', '16n', '16t', '32n', '32t'].sort(() => Math.random() - 0.5);
// const NOTE_DURATIONS = ['4n', '4t', '8n', '8t', '16n', '16t', '32n', '32t'].sort(() => Math.random() - 0.5);
// const NOTE_DURATIONS = ['4t', '8n', '16t', '16n', '8t', '32t', '4n', '32n'] // Randomized order using line above
const NOTE_DURATIONS = ['4n.', '4n', '4t', '4t', '4t', '8n', '8n', '8n', '4n.']

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
  majorpenta: MAJORPENTA,
  mccoy: MCCOY
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
  document.getElementById('clearFile').addEventListener('click', clearFile);
  document.getElementById('githubInput').addEventListener('keydown', handleGithubSubmit)
  document.getElementById('githubInputButton').addEventListener('click', handleGithubClick)
  document.getElementById('githubClearButton').addEventListener('click', handleGithubClearClick)
  document.getElementById('hashInput').addEventListener('keydown', handleHashInputKeydown)
  document.getElementById('hashInputClear').addEventListener('click', handleHashInputClear)
});

async function initTone() {
  toneStart = true;
  await Tone.start();
  Tone.Destination.volume.value = parseFloat(-3);
  Tone.Transport.bpm.value = 180;.5
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

  const gitSHA = document.getElementById('githubSHA')
  const inputText = document.getElementById("formInput").value;
  const inputFile = document.getElementById("fileInput").files[0]
  let hash;
  if(checkHashInput()){
    console.log('hashInput')
    hash = document.getElementById('hashInput').value
  }else if(gitSHA){
    console.log('gitSHA')
    hash = gitSHA.getAttribute('data-SHA')
  }else{
    console.log('computeSHA')
    hash = await computeSHA1(inputText, inputFile)
  }

  console.log({ hash });
  document.getElementById("sha").textContent = "SHA1 Hash: " + hash;

  playHash(hash)
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

function clearFile(e){
  console.log(e)
  console.log(e.target)
  e.preventDefault();
  const inputFile = document.getElementById("fileInput")
  inputFile.value = ''
}

function concatBuffers(buf1, buf2){
  if (!buf1) return buf2
  if (!buf2) return buf1
  const combined = new Uint8Array(buf1.byteLength + buf2.byteLength)
  combined.set(new Uint8Array(buf1), 0)
  combined.set(new Uint8Array(buf2), buf1.byteLength)
  return combined.buffer
}

function hashToNotes(hash, scale) {
  console.log( {scale} )
  return hash.split("").map((char) => SCALES[scale][char]);
}

function hashToNotesWithTempo(hash, scale) {
  const prevBPM = Tone.Transport.bpm.value
  Tone.Transport.bpm.value = 180
  let totalDuration = 0
  let currentDuration
  const notes = hash.split("").map((char, idx) => {
    if (idx == 0){
      currentDuration = NOTE_DURATIONS[Number(`0x${char}`) % NOTE_DURATIONS.length]
    }else{
      currentDuration = NOTE_DURATIONS[Math.round(totalDuration * 10) % NOTE_DURATIONS.length]
    }
    totalDuration += Tone.Time(currentDuration)
    return { note: SCALES[scale][char], duration: currentDuration }
  })
  Tone.Transport.bpm.value = prevBPM
  return notes
}

function playNotePart(notes) {
  // This plays the hash once and then stops. It works!
  // No Chords
  console.log('playNotePart')
  console.log({notes})
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
    if (note.note !== ''){
      Tone.Transport.scheduleOnce(time => {
        synth.triggerAttackRelease(note.note, note.duration, time)
      }, startTime);
    }
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
  const chords = []
  for(let i = 0; i < notes.length; i += voiceCount) {
    chords.push(notes.slice(i, Math.max(i + voiceCount, notes.length - 1)))
  }
  return chords
}

async function handleGithubSubmit(e){
  if(e.key != 'Enter') return
  e.preventDefault();

  document.getElementById('formInput').value = ''
  document.getElementById('fileInput').value = ''
  await getCommits()
}

async function handleGithubClick(){
  document.getElementById('formInput').value = ''
  document.getElementById('fileInput').value = ''
  await getCommits()
}

async function getCommits(){
  const resultsDiv = document.getElementById('githubResults')
  while(resultsDiv.firstChild) resultsDiv.removeChild(resultsDiv.firstChild)
  const inputVal = document.getElementById('githubInput').value

  const parsedURL = parseURL(inputVal)
  console.log({parsedURL})

  if(!parsedURL || parsedURL.host != 'github.com'){
    showGitURLError(inputVal, resultsDiv)
    return
  }

  const apiUrl = `https://api.github.com/repos${parsedURL.pathname}/commits`
  const commit = await getGithubAPI(apiUrl, inputVal)

  displayCommit(commit)
}

function showGitURLError(inputURL){
  const resultsDiv = document.getElementById('githubResults')
  const errorP = document.createElement('p');
  errorP.innerText = `Error: "${inputURL}" is not a valid Github URL`
  errorP.style = 'color: red;'
  resultsDiv.appendChild(errorP);
}

function protocolCheck(string){
  if(string.slice(0, 7) == 'http://') return string
  if(string.slice(0, 8) == 'https://') return string
  return `https://${string}`
}

function displayCommit(commit){
  const githubResults = document.getElementById('githubResults');
  const toAppend = []

  const commitDiv = document.createElement('div')
  commitDiv.innerText = `commit ${commit.sha}`
  commitDiv.id = 'githubSHA'
  commitDiv.setAttribute('data-SHA', commit.sha)
  toAppend.push(commitDiv)

  const authorDiv = document.createElement('div')
  authorDiv.innerText = `Author: ${commit.commit.author.name} <${commit.commit.author.email}>`
  toAppend.push(authorDiv)

  const dateDiv = document.createElement('div')
  dateDiv.innerText = `Date:   ${ISOToGitLogFormat(commit.commit.author.date)}`
  toAppend.push(dateDiv)


  const message = commit.commit.message.split("\n")[0].slice(0, 50)
  const messageDiv = document.createElement('div')
  const br1 = document.createElement('br')
  const br2 = document.createElement('br')
  messageDiv.appendChild(br1)
  messageDiv.innerText = message
  messageDiv.appendChild(br2)
  toAppend.push(messageDiv)

  toAppend.forEach(el => githubResults.appendChild(el))
}

function ISOToGitLogFormat(dateString){
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const date = new Date(dateString);

  const dayOfWeek = days[date.getDay()];
  const month = months[date.getMonth()];
  const day = date.getDate();
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const seconds = String(date.getSeconds()).padStart(2, '0');
  const year = date.getFullYear();

  // Calculate the timezone offset dynamically
  const tzOffset = -date.getTimezoneOffset();
  const tzHours = String(Math.floor(Math.abs(tzOffset) / 60)).padStart(2, '0');
  const tzMinutes = String(Math.abs(tzOffset) % 60).padStart(2, '0');
  const timezone = `${tzOffset < 0 ? '-' : '+'}${tzHours}${tzMinutes}`;

  return `${dayOfWeek} ${month} ${day} ${hours}:${minutes}:${seconds} ${year} ${timezone}`;
}

function parseURL(url){
  const urlWithProtocol = protocolCheck(url);
  console.log({urlWithProtocol})
  try{
    return new URL(urlWithProtocol)
  }catch{
    return
  }
}

async function getGithubAPI(url, inputVal){
  // For now this just returns the most recent commit of the provided repo
  const response = await fetch(url)
  if(!response.ok) { showGitURLError(inputVal); return }
  console.log(response.body)
  const data = await response.json()
  console.log({data})
  return data[0]
}

function handleGithubClearClick(e){
  e.preventDefault()
  const githubResults = document.getElementById('githubResults')
  while(githubResults.firstChild) githubResults.removeChild(githubResults.firstChild)
  // githubResults.innerText
}

function handleHashInputKeydown(e){
  if(e.key != 'Enter') return
  e.preventDefault();
  if(checkHashInput()){
    if(e.target.value.length != 40){
      document.getElementById('sha').innerText = `You found the Easter Egg!\n Hex Sequence: ${e.target.value}`
    }else{
      document.getElementById('sha').innerText = `SHA1 Hash: ${e.target.value}`
    }
    playHash(e.target.value)
  }
}

function checkHashInput(){
  document.getElementById('hashInputError').innerText = '' // clear error div
  const hashInput = document.getElementById('hashInput').value
  if(hashInput.length == 0) return false
  // was originally going to enforce 40 || 7 char strings, but maybe any hex val is okay?
  if(!isHex(hashInput)){
    displayHashInputError(hashInput);
    return false;
  }
  return true
}

function isHex(string){
  const hexRegex = /^[0-9a-fA-F]+$/
  return hexRegex.test(string)
}

function displayHashInputError(inputString){
  const errorDiv = document.getElementById('hashInputError')
  errorDiv.innerText = `"${inputString}" is not a valid hash`
}

function playHash(hash){
  const playShortHash = document.getElementById("playShortHashCheckbox").checked;
  const scaleToPlay = document.getElementById("scaleSelect").value
  const hashToPlay = playShortHash ? hash.slice(0, 8) : hash;
  const notes = hashToNotesWithTempo(hashToPlay, scaleToPlay)

  playNotePart(notes)
}

function handleHashInputClear(e){
  e.preventDefault();
  document.getElementById('hashInput').value = ''
}