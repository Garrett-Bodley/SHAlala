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
  f: "B5",
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
  f: "Bb5",
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
  f: "Bb5",
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
  f: "Bb5",
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
  f: "Bb5",
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
  f: "Bb5",
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
  f: "Bb5",
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
  f: "Bb5",
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
  f: "G5",
};

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
  f: "D6",
};

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
  f: "Ab5",
};

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
  f: "Ab5",
};

const MCCOY = {
  0: ["C2", "G2"],
  1: ["Eb2", "A2", "D3", "G3", "C4"],
  2: ["G2", "C3", "F3", "Bb3", "Eb4"],
  3: ["A2", "D3", "G3", "C4", "F4"],
  4: ["C3", "F3", "Bb3", "Eb4", "G4"],
  5: ["D3", "G3", "C4", "F4", "A4"],
  6: ["Eb3", "A3", "D4", "G4", "C5"],
  7: ["G3", "C4", "F4", "Bb4", "Eb5"],
  8: ["A3", "D4", "G4", "C5", "F5"],
  9: ["C4", "F4", "Bb4", "Eb5", "G5"],
  a: ["D4", "G4", "C5", "F5", "A5"],
  b: ["Eb4", "A4", "D5", "G5", "C6"],
  c: ["G4", "C5", "F5", "Bb5", "Eb6"],
  d: "",
  e: "",
  f: "",
};

// const NOTE_DURATIONS = ['4n', '4t', '8n', '8t', '16n', '16t', '32n', '32t']
// const NOTE_DURATIONS = ['4n', '4t', '8n.', '8n', '8t', '16n.', '16n']
// const NOTE_DURATIONS = ['4n', '4t', '8n', '8t', '16n', '16t', '32n', '32t'].sort(() => Math.random() - 0.5);
// const NOTE_DURATIONS = ['4n', '4t', '8n', '8t', '16n', '16t', '32n', '32t'].sort(() => Math.random() - 0.5);
// const NOTE_DURATIONS = ['4t', '8n', '16t', '16n', '8t', '32t', '4n', '32n'] // Randomized order using line above
const NOTE_DURATIONS = ["4n.", "4n", "4t", "4t", "4t", "8n", "8n", "8n", "4n."];

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
  mccoy: MCCOY,
};

let toneStart = false;
let toneLoading = false;

const instruments = [
  "piano",
  "guitar-electric",
  "guitar-acoustic",
  "harmonium",
  "xylophone",
  "harp",
  "clarinet",
  "violin",
  "cello",
];
const synths = {};

let synth;
let drone;
let chordSynths = [];
let commits = [];

document.addEventListener("DOMContentLoaded", (_e) => {
  document.addEventListener('scroll', initTone());
  document.addEventListener('click', initTone());
  document.getElementById("form").addEventListener("submit", handleOnSubmit);
  document
    .getElementById("range-input")
    .addEventListener("input", handleRangeOnInput);
  document.getElementById("stop").addEventListener("click", stopSound);
  document.getElementById("clearFile").addEventListener("click", clearFile);
  document
    .getElementById("githubInput")
    .addEventListener("keydown", handleGithubSubmit);
  document
    .getElementById("githubInputButton")
    .addEventListener("click", handleGithubClick);
  document
    .getElementById("githubClearButton")
    .addEventListener("click", handleGithubClearClick);
  document
    .getElementById("hashInput")
    .addEventListener("keydown", handleHashInputKeydown);
  document
    .getElementById("hashInputClear")
    .addEventListener("click", handleHashInputClear);
});

async function initTone() {
  if (toneStart) return;
  if(toneLoading) return;
  toneLoading = true;
  await Tone.start();
  Tone.Destination.volume.value = parseFloat(-17);
  Tone.Transport.bpm.value = 180;

  Array.from(document.getElementById("instrumentSelect").children).forEach(
    (option) => {
      let instrument = option.value;
      synths[instrument] = SampleLibrary.load({
        instruments: instrument,
      }).toDestination();
    }
  );
  // debugger
  // instruments.forEach(instrument => {
  //   synths[instrument] = SampleLibrary.load({
  //     instruments: instrument
  //   }).toDestination();
  // })

  drone = SampleLibrary.load({
    instruments: "bass-electric",
  }).toDestination();

  await Tone.loaded();

  // await Promise.all([toneStartPromise, Tone.loaded()])
  console.log('tone has loaded')
  toneLoading = false;
  toneStart = true;
}

async function handleRangeOnInput(e) {
  e.preventDefault();

  let newRangeValue = e.target.value;
  document.getElementById("range-value").innerText = `${newRangeValue} BPM`;
  Tone.Transport.bpm.rampTo(newRangeValue, 0.1);
}

async function handleOnSubmit(e) {
  e.preventDefault();

  const gitSHA = document.getElementById("githubSHA");
  const inputText = document.getElementById("formInput").value;
  const inputFile = document.getElementById("fileInput").files[0];
  let hash;
  if (checkHashInput()) {
    console.log("hashInput");
    hash = document.getElementById("hashInput").value;
    if (hash.length === 40) {
      document.getElementById("sha").textContent = "SHA1 Hash: " + hash;
    } else {
      document.getElementById(
        "sha"
      ).innerText = `You found the Easter Egg!\n Hex Sequence: ${hash}`;
    }
  } else if (gitSHA) {
    console.log("gitSHA");
    hash = gitSHA.getAttribute("data-SHA");
    document.getElementById("sha").textContent = "SHA1 Hash: " + hash;
  } else {
    console.log("computeSHA");
    hash = await computeSHA1(inputText, inputFile);
    document.getElementById("sha").textContent = "SHA1 Hash: " + hash;
  }

  console.log({ hash });

  await playHash(hash);
}

async function computeSHA1(text, file) {
  const textBuffer = new TextEncoder().encode(text);
  const fileBuffer = await readFileAsBuffer(file);
  const joinedBuffer = concatBuffers(fileBuffer, textBuffer);
  const hashBuffer = await crypto.subtle.digest("SHA-1", joinedBuffer);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const hashHex = hashArray
    .map((b) => b.toString(16).padStart(2, "0"))
    .join(""); // convert bytes to hex string
  return hashHex;
}

async function readFileAsBuffer(file) {
  return new Promise((resolve, reject) => {
    if (!file) resolve(new Uint8Array());
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = () => reject(reader.error);
    reader.readAsArrayBuffer(file);
  });
}

function clearFile(e) {
  console.log(e);
  console.log(e.target);
  e.preventDefault();
  const inputFile = document.getElementById("fileInput");
  inputFile.value = "";
}

function concatBuffers(buf1, buf2) {
  if (!buf1) return buf2;
  if (!buf2) return buf1;
  const combined = new Uint8Array(buf1.byteLength + buf2.byteLength);
  combined.set(new Uint8Array(buf1), 0);
  combined.set(new Uint8Array(buf2), buf1.byteLength);
  return combined.buffer;
}

function hashToNotes(hash, scale) {
  console.log({ scale });
  return hash.split("").map((char) => SCALES[scale][char]);
}

function hashToSeed(hash) {
  // converting a 40char hex string into a number generates a value that is far too large.
  // Instead we convert chunks of the hash into integer values and sum them
  if (hash.length < 8) return parseInt(hash, 16);
  const chunkSize = 5;
  let seed = 0;
  for (let i = 0; i < hash.length; i += chunkSize) {
    const chunk = hash.slice(i, i + chunkSize);
    seed += parseInt(chunk, 16) % Number.MAX_SAFE_INTEGER;
    seed = seed % Number.MAX_SAFE_INTEGER;
  }
  return seed;
}

function hashToNotesWithTempo(hashToPlay, hash, scale) {
  const prevBPM = Tone.Transport.bpm.value;
  const seed = hashToSeed(hash);
  console.log(seed);
  Tone.Transport.bpm.value = 180;
  let totalDuration = 0;
  let currentDuration;
  const notes = hashToPlay.split("").map((char, idx) => {
    currentDuration =
      NOTE_DURATIONS[
        ((seed + Math.round(totalDuration * 10)) & Number.MAX_SAFE_INTEGER) %
          NOTE_DURATIONS.length
      ];
    totalDuration += Tone.Time(currentDuration);
    return { note: SCALES[scale][char], duration: currentDuration };
  });
  Tone.Transport.bpm.value = prevBPM;
  return notes;
}

async function playNotePart(notes) {
  // This plays the hash once and then stops. It works!
  // No Chords
  const scaleToPlay = document.getElementById("scaleSelect").value;
  const synthToPlay = document.getElementById("instrumentSelect").value;
  // synth = scaleToPlay === 'mccoy' ? synths['piano'] : synths[synthToPlay]
  synth = synths[synthToPlay];
  console.log("playNotePart");
  console.log({ notes });
  Tone.Transport.stop();
  Tone.Transport.cancel(0);
  synth.releaseAll();
  drone.releaseAll();

  // synth = new Tone.PolySynth(Tone.Synth).toDestination();
  // drone = new Tone.PolySynth(Tone.Synth).toDestination();

  let startTime = 0;

  const totalDuration = notes.reduce((accum, note) => {
    return accum + Tone.Time(note.duration);
  }, 0);
  console.log({ totalDuration });

  // Hacky fix bc Mccoy stuff is in C and I didn't have time to transpose it yet.
  if (scaleToPlay != "mccoy") {
    Tone.Transport.scheduleOnce((_time) => {
      drone.triggerAttackRelease("Ab1", totalDuration);
    }, startTime);
  }

  notes.forEach((note) => {
    if (note.note !== "") {
      Tone.Transport.scheduleOnce((time) => {
        synth.triggerAttackRelease(note.note, note.duration, time);
      }, startTime);
    }
    startTime += Tone.Time(note.duration).toSeconds();
  });

  Tone.Transport.start();
}

function stopSound(e) {
  e.preventDefault();
  Object.values(synths).forEach((sampler) => sampler.releaseAll());
  drone.releaseAll();
  Tone.Transport.cancel(0);
  Tone.Transport.stop();
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
  console.log("playChordPart");
  hashNotes = hashToNotes(hash);
  chords = makeChordsFromNotes(hashNotes, 4);
  console.log({ chords });

  if (drone) drone.dispose();
  chordSynths.forEach((synth) => synth.dispose());

  chordSynths = chords.map(() =>
    new Tone.PolySynth(Tone.Synth).toDestination()
  );

  drone = new Tone.PolySynth(Tone.Synth).toDestination();
  Tone.Transport.stop();
  Tone.Transport.clear(0);

  let startTime = 0;
  let duration = "8t";
  console.log({ chords });
  chords.forEach((chord, idx) => {
    Tone.Transport.scheduleOnce((time) => {
      chordSynths[idx].triggerAttackRelease(chord, duration, time);
    }, startTime);
    startTime += Tone.Time(duration).toSeconds();
  });

  drone.triggerAttack(["C2", "C3"], Tone.now());
  Tone.Transport.start();
}

function makeChordsFromNotes(notes, voiceCount) {
  const chords = [];
  for (let i = 0; i < notes.length; i += voiceCount) {
    chords.push(notes.slice(i, Math.max(i + voiceCount, notes.length - 1)));
  }
  return chords;
}

async function handleGithubSubmit(e) {
  if (e.key != "Enter") return;
  e.preventDefault();

  document.getElementById("formInput").value = "";
  document.getElementById("fileInput").value = "";
  await getCommits();
}

async function handleGithubClick() {
  document.getElementById("formInput").value = "";
  document.getElementById("fileInput").value = "";
  await getCommits();
}

async function getCommits() {
  const resultsDiv = document.getElementById("githubResults");
  while (resultsDiv.firstChild) resultsDiv.removeChild(resultsDiv.firstChild);
  const inputVal = document.getElementById("githubInput").value;

  const parsedURL = parseURL(inputVal);
  console.log({ parsedURL });

  if (!parsedURL || parsedURL.host != "github.com") {
    showGitURLError(inputVal, resultsDiv);
    return;
  }

  const apiUrl = `https://api.github.com/repos${removeTrailingSlashes(
    parsedURL.pathname
  )}/commits`;
  console.log({ apiUrl });
  commits = await getGithubAPI(apiUrl, inputVal);

  displayCommit(0);
}

function removeTrailingSlashes(urlString) {
  let res = urlString;
  while (res[res.length - 1] === "/") {
    res = res.slice(0, res.length - 1);
  }
  return res;
}

function showGitURLError(inputURL) {
  const resultsDiv = document.getElementById("githubResults");
  const errorP = document.createElement("p");
  errorP.innerText = `Error: "${inputURL}" is not a valid Github URL`;
  errorP.style = "color: red;";
  resultsDiv.appendChild(errorP);
}

function protocolCheck(string) {
  if (string.slice(0, 7) == "http://") return string;
  if (string.slice(0, 8) == "https://") return string;
  return `https://${string}`;
}

function displayCommit(commitIdx) {
  clearGithubResults();
  const githubResults = document.getElementById("githubResults");
  githubResults.data;
  const toAppend = [];
  const commit = commits[commitIdx];
  const commitDiv = document.createElement("div");
  commitDiv.innerText = `commit ${commit.sha}`;
  commitDiv.id = "githubSHA";
  commitDiv.setAttribute("data-SHA", commit.sha);
  commitDiv.setAttribute("data-idx", commitIdx);
  toAppend.push(commitDiv);

  const authorDiv = document.createElement("div");
  authorDiv.innerText = `Author: ${commit.commit.author.name} <${commit.commit.author.email}>`;
  toAppend.push(authorDiv);

  const dateDiv = document.createElement("div");
  dateDiv.innerText = `Date:   ${ISOToGitLogFormat(commit.commit.author.date)}`;
  toAppend.push(dateDiv);

  const message = commit.commit.message.split("\n")[0].slice(0, 50);
  const messageDiv = document.createElement("div");
  const br1 = document.createElement("br");
  messageDiv.appendChild(br1);
  const br2 = document.createElement("br");
  messageDiv.innerText = message;
  messageDiv.appendChild(br2);
  toAppend.push(messageDiv);

  const navDiv = document.createElement("div");

  const leftButton = document.createElement("button");
  leftButton.type = "button";
  leftButton.innerText = "<";
  leftButton.addEventListener("click", prevCommit);
  navDiv.appendChild(leftButton);

  const textNode = document.createTextNode(
    ` ${parseInt(commitIdx) + 1}/${commits.length} `
  );
  navDiv.appendChild(textNode);

  const rightButton = document.createElement("button");
  rightButton.type = "button";
  rightButton.innerText = ">";
  rightButton.addEventListener("click", nextCommit);

  navDiv.appendChild(rightButton);
  toAppend.push(navDiv);

  toAppend.forEach((el) => githubResults.appendChild(el));
  playHash(commit.sha)
}

function nextCommit() {
  const nextIdx =
    parseInt(document.getElementById("githubSHA").getAttribute("data-idx")) + 1;
  console.log(document.getElementById("githubSHA").getAttribute("data-idx"));
  displayCommit(nextIdx % commits.length);
}

function prevCommit() {
  const prevIdx =
    parseInt(document.getElementById("githubSHA").getAttribute("data-idx")) - 1;
  console.log(document.getElementById("githubSHA").getAttribute("data-idx"));
  prevIdx < 0
    ? displayCommit(commits.length + prevIdx)
    : displayCommit(prevIdx);
}

function ISOToGitLogFormat(dateString) {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const date = new Date(dateString);

  const dayOfWeek = days[date.getDay()];
  const month = months[date.getMonth()];
  const day = date.getDate();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  const year = date.getFullYear();

  // Calculate the timezone offset dynamically
  const tzOffset = -date.getTimezoneOffset();
  const tzHours = String(Math.floor(Math.abs(tzOffset) / 60)).padStart(2, "0");
  const tzMinutes = String(Math.abs(tzOffset) % 60).padStart(2, "0");
  const timezone = `${tzOffset < 0 ? "-" : "+"}${tzHours}${tzMinutes}`;

  return `${dayOfWeek} ${month} ${day} ${hours}:${minutes}:${seconds} ${year} ${timezone}`;
}

function parseURL(url) {
  const urlWithProtocol = protocolCheck(url);
  console.log({ urlWithProtocol });
  try {
    return new URL(urlWithProtocol);
  } catch {
    return;
  }
}

async function getGithubAPI(url, inputVal) {
  // For now this just returns the most recent commit of the provided repo
  const response = await fetch(url);
  if (!response.ok) {
    showGitURLError(inputVal);
    return;
  }
  console.log(response.body);
  const data = await response.json();
  console.log({ data });
  return data;
}

function handleGithubClearClick(e) {
  e.preventDefault();
  document.getElementById("githubInput").value = "";
  commits = [];
  clearGithubResults();
}

function clearGithubResults() {
  const githubResults = document.getElementById("githubResults");
  while (githubResults.firstChild)
    githubResults.removeChild(githubResults.firstChild);
}

async function handleHashInputKeydown(e) {
  if (e.key != "Enter") return;
  e.preventDefault();
  if (checkHashInput()) {
    if (e.target.value.length != 40) {
      document.getElementById(
        "sha"
      ).innerText = `You found the Easter Egg!\n Hex Sequence: ${e.target.value}`;
    } else {
      document.getElementById("sha").innerText = `SHA1 Hash: ${e.target.value}`;
    }
    await playHash(e.target.value);
  }
}

function checkHashInput() {
  document.getElementById("hashInputError").innerText = ""; // clear error div
  const hashInput = document.getElementById("hashInput").value;
  if (hashInput.length == 0) return false;
  // was originally going to enforce 40 || 7 char strings, but maybe any hex val is okay?
  if (!isHex(hashInput)) {
    displayHashInputError(hashInput);
    return false;
  }
  return true;
}

function isHex(string) {
  const hexRegex = /^[0-9a-fA-F]+$/;
  return hexRegex.test(string);
}

function displayHashInputError(inputString) {
  const errorDiv = document.getElementById("hashInputError");
  errorDiv.innerText = `"${inputString}" is not a valid hash`;
}

async function playHash(hash) {
  // if (toneLoading) return;
  if (toneStart == false) await initTone();
  const playShortHash = document.getElementById(
    "playShortHashCheckbox"
  ).checked;
  const scaleToPlay = document.getElementById("scaleSelect").value;
  const hashToPlay = playShortHash ? hash.slice(0, 8) : hash;
  const notes = hashToNotesWithTempo(hashToPlay, hash, scaleToPlay);

  await playNotePart(notes);
}

function handleHashInputClear(e) {
  e.preventDefault();
  document.getElementById("hashInput").value = "";
}

// https://nbrosowsky.github.io/tonejs-instruments/samples/

/**
 * @fileoverview A sample library and quick-loader for tone.js
 *
 * @author N.P. Brosowsky (nbrosowsky@gmail.com)
 * https://github.com/nbrosowsky/tonejs-instruments
 */

var SampleLibrary = {
  minify: false,
  ext: ".[mp3|ogg]", // use setExt to change the extensions on all files // do not change this variable //
  baseUrl: "https://nbrosowsky.github.io/tonejs-instruments/samples/",
  list: [
    "bass-electric",
    "bassoon",
    "cello",
    "clarinet",
    "contrabass",
    "flute",
    "french-horn",
    "guitar-acoustic",
    "guitar-electric",
    "guitar-nylon",
    "harmonium",
    "harp",
    "organ",
    "piano",
    "saxophone",
    "trombone",
    "trumpet",
    "tuba",
    "violin",
    "xylophone",
  ],
  onload: null,

  setExt: function (newExt) {
    var i;
    for (i = 0; i <= this.list.length - 1; i++) {
      for (var property in this[this.list[i]]) {
        this[this.list[i]][property] = this[this.list[i]][property].replace(
          this.ext,
          newExt
        );
      }
    }
    this.ext = newExt;
    return console.log("sample extensions set to " + this.ext);
  },

  load: function (arg) {
    var t, rt, i;
    arg ? (t = arg) : (t = {});
    t.instruments = t.instruments || this.list;
    t.baseUrl = t.baseUrl || this.baseUrl;
    t.onload = t.onload || this.onload;

    // update extensions if arg given
    if (t.ext) {
      if (t.ext != this.ext) {
        this.setExt(t.ext);
      }
      t.ext = this.ext;
    }

    rt = {};

    // if an array of instruments is passed...
    if (Array.isArray(t.instruments)) {
      for (i = 0; i <= t.instruments.length - 1; i++) {
        var newT = this[t.instruments[i]];
        //Minimize the number of samples to load
        if (this.minify === true || t.minify === true) {
          var minBy = 1;
          if (Object.keys(newT).length >= 17) {
            minBy = 2;
          }
          if (Object.keys(newT).length >= 33) {
            minBy = 4;
          }
          if (Object.keys(newT).length >= 49) {
            minBy = 6;
          }

          var filtered = Object.keys(newT).filter(function (_, i) {
            return i % minBy != 0;
          });
          filtered.forEach(function (f) {
            delete newT[f];
          });
        }

        rt[t.instruments[i]] = new Tone.Sampler(newT, {
          baseUrl: t.baseUrl + t.instruments[i] + "/",
          onload: t.onload,
        });
      }

      return rt;

      // if a single instrument name is passed...
    } else {
      newT = this[t.instruments];

      //Minimize the number of samples to load
      if (this.minify === true || t.minify === true) {
        minBy = 1;
        if (Object.keys(newT).length >= 17) {
          minBy = 2;
        }
        if (Object.keys(newT).length >= 33) {
          minBy = 4;
        }
        if (Object.keys(newT).length >= 49) {
          minBy = 6;
        }

        filtered = Object.keys(newT).filter(function (_, i) {
          return i % minBy != 0;
        });
        filtered.forEach(function (f) {
          delete newT[f];
        });
      }

      var s = new Tone.Sampler(newT, {
        baseUrl: t.baseUrl + t.instruments + "/",
        onload: t.onload,
      });

      return s;
    }
  },

  "bass-electric": {
    "A#1": "As1.[mp3|ogg]",
    "A#2": "As2.[mp3|ogg]",
    "A#3": "As3.[mp3|ogg]",
    "A#4": "As4.[mp3|ogg]",
    "C#1": "Cs1.[mp3|ogg]",
    "C#2": "Cs2.[mp3|ogg]",
    "C#3": "Cs3.[mp3|ogg]",
    "C#4": "Cs4.[mp3|ogg]",
    E1: "E1.[mp3|ogg]",
    E2: "E2.[mp3|ogg]",
    E3: "E3.[mp3|ogg]",
    E4: "E4.[mp3|ogg]",
    G1: "G1.[mp3|ogg]",
    G2: "G2.[mp3|ogg]",
    G3: "G3.[mp3|ogg]",
    G4: "G4.[mp3|ogg]",
  },

  bassoon: {
    A4: "A4.[mp3|ogg]",
    C3: "C3.[mp3|ogg]",
    C4: "C4.[mp3|ogg]",
    C5: "C5.[mp3|ogg]",
    E4: "E4.[mp3|ogg]",
    G2: "G2.[mp3|ogg]",
    G3: "G3.[mp3|ogg]",
    G4: "G4.[mp3|ogg]",
    A2: "A2.[mp3|ogg]",
    A3: "A3.[mp3|ogg]",
  },

  cello: {
    E3: "E3.[mp3|ogg]",
    E4: "E4.[mp3|ogg]",
    F2: "F2.[mp3|ogg]",
    F3: "F3.[mp3|ogg]",
    F4: "F4.[mp3|ogg]",
    "F#3": "Fs3.[mp3|ogg]",
    "F#4": "Fs4.[mp3|ogg]",
    G2: "G2.[mp3|ogg]",
    G3: "G3.[mp3|ogg]",
    G4: "G4.[mp3|ogg]",
    "G#2": "Gs2.[mp3|ogg]",
    "G#3": "Gs3.[mp3|ogg]",
    "G#4": "Gs4.[mp3|ogg]",
    A2: "A2.[mp3|ogg]",
    A3: "A3.[mp3|ogg]",
    A4: "A4.[mp3|ogg]",
    "A#2": "As2.[mp3|ogg]",
    "A#3": "As3.[mp3|ogg]",
    B2: "B2.[mp3|ogg]",
    B3: "B3.[mp3|ogg]",
    B4: "B4.[mp3|ogg]",
    C2: "C2.[mp3|ogg]",
    C3: "C3.[mp3|ogg]",
    C4: "C4.[mp3|ogg]",
    C5: "C5.[mp3|ogg]",
    "C#3": "Cs3.[mp3|ogg]",
    "C#4": "Cs4.[mp3|ogg]",
    D2: "D2.[mp3|ogg]",
    D3: "D3.[mp3|ogg]",
    D4: "D4.[mp3|ogg]",
    "D#2": "Ds2.[mp3|ogg]",
    "D#3": "Ds3.[mp3|ogg]",
    "D#4": "Ds4.[mp3|ogg]",
    E2: "E2.[mp3|ogg]",
  },

  clarinet: {
    D4: "D4.[mp3|ogg]",
    D5: "D5.[mp3|ogg]",
    D6: "D6.[mp3|ogg]",
    F3: "F3.[mp3|ogg]",
    F4: "F4.[mp3|ogg]",
    F5: "F5.[mp3|ogg]",
    "F#6": "Fs6.[mp3|ogg]",
    "A#3": "As3.[mp3|ogg]",
    "A#4": "As4.[mp3|ogg]",
    "A#5": "As5.[mp3|ogg]",
    D3: "D3.[mp3|ogg]",
  },

  contrabass: {
    C2: "C2.[mp3|ogg]",
    "C#3": "Cs3.[mp3|ogg]",
    D2: "D2.[mp3|ogg]",
    E2: "E2.[mp3|ogg]",
    E3: "E3.[mp3|ogg]",
    "F#1": "Fs1.[mp3|ogg]",
    "F#2": "Fs2.[mp3|ogg]",
    G1: "G1.[mp3|ogg]",
    "G#2": "Gs2.[mp3|ogg]",
    "G#3": "Gs3.[mp3|ogg]",
    A2: "A2.[mp3|ogg]",
    "A#1": "As1.[mp3|ogg]",
    B3: "B3.[mp3|ogg]",
  },

  flute: {
    A6: "A6.[mp3|ogg]",
    C4: "C4.[mp3|ogg]",
    C5: "C5.[mp3|ogg]",
    C6: "C6.[mp3|ogg]",
    C7: "C7.[mp3|ogg]",
    E4: "E4.[mp3|ogg]",
    E5: "E5.[mp3|ogg]",
    E6: "E6.[mp3|ogg]",
    A4: "A4.[mp3|ogg]",
    A5: "A5.[mp3|ogg]",
  },

  "french-horn": {
    D3: "D3.[mp3|ogg]",
    D5: "D5.[mp3|ogg]",
    "D#2": "Ds2.[mp3|ogg]",
    F3: "F3.[mp3|ogg]",
    F5: "F5.[mp3|ogg]",
    G2: "G2.[mp3|ogg]",
    A1: "A1.[mp3|ogg]",
    A3: "A3.[mp3|ogg]",
    C2: "C2.[mp3|ogg]",
    C4: "C4.[mp3|ogg]",
  },

  "guitar-acoustic": {
    F4: "F4.[mp3|ogg]",
    "F#2": "Fs2.[mp3|ogg]",
    "F#3": "Fs3.[mp3|ogg]",
    "F#4": "Fs4.[mp3|ogg]",
    G2: "G2.[mp3|ogg]",
    G3: "G3.[mp3|ogg]",
    G4: "G4.[mp3|ogg]",
    "G#2": "Gs2.[mp3|ogg]",
    "G#3": "Gs3.[mp3|ogg]",
    "G#4": "Gs4.[mp3|ogg]",
    A2: "A2.[mp3|ogg]",
    A3: "A3.[mp3|ogg]",
    A4: "A4.[mp3|ogg]",
    "A#2": "As2.[mp3|ogg]",
    "A#3": "As3.[mp3|ogg]",
    "A#4": "As4.[mp3|ogg]",
    B2: "B2.[mp3|ogg]",
    B3: "B3.[mp3|ogg]",
    B4: "B4.[mp3|ogg]",
    C3: "C3.[mp3|ogg]",
    C4: "C4.[mp3|ogg]",
    C5: "C5.[mp3|ogg]",
    "C#3": "Cs3.[mp3|ogg]",
    "C#4": "Cs4.[mp3|ogg]",
    "C#5": "Cs5.[mp3|ogg]",
    D2: "D2.[mp3|ogg]",
    D3: "D3.[mp3|ogg]",
    D4: "D4.[mp3|ogg]",
    D5: "D5.[mp3|ogg]",
    "D#2": "Ds2.[mp3|ogg]",
    "D#3": "Ds3.[mp3|ogg]",
    "D#4": "Ds3.[mp3|ogg]",
    E2: "E2.[mp3|ogg]",
    E3: "E3.[mp3|ogg]",
    E4: "E4.[mp3|ogg]",
    F2: "F2.[mp3|ogg]",
    F3: "F3.[mp3|ogg]",
  },

  "guitar-electric": {
    "D#3": "Ds3.[mp3|ogg]",
    "D#4": "Ds4.[mp3|ogg]",
    "D#5": "Ds5.[mp3|ogg]",
    E2: "E2.[mp3|ogg]",
    "F#2": "Fs2.[mp3|ogg]",
    "F#3": "Fs3.[mp3|ogg]",
    "F#4": "Fs4.[mp3|ogg]",
    "F#5": "Fs5.[mp3|ogg]",
    A2: "A2.[mp3|ogg]",
    A3: "A3.[mp3|ogg]",
    A4: "A4.[mp3|ogg]",
    A5: "A5.[mp3|ogg]",
    C3: "C3.[mp3|ogg]",
    C4: "C4.[mp3|ogg]",
    C5: "C5.[mp3|ogg]",
    C6: "C6.[mp3|ogg]",
    "C#2": "Cs2.[mp3|ogg]",
  },

  "guitar-nylon": {
    "F#2": "Fs2.[mp3|ogg]",
    "F#3": "Fs3.[mp3|ogg]",
    "F#4": "Fs4.[mp3|ogg]",
    "F#5": "Fs5.[mp3|ogg]",
    G3: "G3.[mp3|ogg]",
    G5: "G3.[mp3|ogg]",
    "G#2": "Gs2.[mp3|ogg]",
    "G#4": "Gs4.[mp3|ogg]",
    "G#5": "Gs5.[mp3|ogg]",
    A2: "A2.[mp3|ogg]",
    A3: "A3.[mp3|ogg]",
    A4: "A4.[mp3|ogg]",
    A5: "A5.[mp3|ogg]",
    "A#5": "As5.[mp3|ogg]",
    B1: "B1.[mp3|ogg]",
    B2: "B2.[mp3|ogg]",
    B3: "B3.[mp3|ogg]",
    B4: "B4.[mp3|ogg]",
    "C#3": "Cs3.[mp3|ogg]",
    "C#4": "Cs4.[mp3|ogg]",
    "C#5": "Cs5.[mp3|ogg]",
    D2: "D2.[mp3|ogg]",
    D3: "D3.[mp3|ogg]",
    D5: "D5.[mp3|ogg]",
    "D#4": "Ds4.[mp3|ogg]",
    E2: "E2.[mp3|ogg]",
    E3: "E3.[mp3|ogg]",
    E4: "E4.[mp3|ogg]",
    E5: "E5.[mp3|ogg]",
  },

  harmonium: {
    C2: "C2.[mp3|ogg]",
    C3: "C3.[mp3|ogg]",
    C4: "C4.[mp3|ogg]",
    C5: "C5.[mp3|ogg]",
    "C#2": "Cs2.[mp3|ogg]",
    "C#3": "Cs3.[mp3|ogg]",
    "C#4": "Cs4.[mp3|ogg]",
    "C#5": "Cs5.[mp3|ogg]",
    D2: "D2.[mp3|ogg]",
    D3: "D3.[mp3|ogg]",
    D4: "D4.[mp3|ogg]",
    D5: "D5.[mp3|ogg]",
    "D#2": "Ds2.[mp3|ogg]",
    "D#3": "Ds3.[mp3|ogg]",
    "D#4": "Ds4.[mp3|ogg]",
    E2: "E2.[mp3|ogg]",
    E3: "E3.[mp3|ogg]",
    E4: "E4.[mp3|ogg]",
    F2: "F2.[mp3|ogg]",
    F3: "F3.[mp3|ogg]",
    F4: "F4.[mp3|ogg]",
    "F#2": "Fs2.[mp3|ogg]",
    "F#3": "Fs3.[mp3|ogg]",
    G2: "G2.[mp3|ogg]",
    G3: "G3.[mp3|ogg]",
    G4: "G4.[mp3|ogg]",
    "G#2": "Gs2.[mp3|ogg]",
    "G#3": "Gs3.[mp3|ogg]",
    "G#4": "Gs4.[mp3|ogg]",
    A2: "A2.[mp3|ogg]",
    A3: "A3.[mp3|ogg]",
    A4: "A4.[mp3|ogg]",
    "A#2": "As2.[mp3|ogg]",
    "A#3": "As3.[mp3|ogg]",
    "A#4": "As4.[mp3|ogg]",
  },

  harp: {
    C5: "C5.[mp3|ogg]",
    D2: "D2.[mp3|ogg]",
    D4: "D4.[mp3|ogg]",
    D6: "D6.[mp3|ogg]",
    D7: "D7.[mp3|ogg]",
    E1: "E1.[mp3|ogg]",
    E3: "E3.[mp3|ogg]",
    E5: "E5.[mp3|ogg]",
    F2: "F2.[mp3|ogg]",
    F4: "F4.[mp3|ogg]",
    F6: "F6.[mp3|ogg]",
    F7: "F7.[mp3|ogg]",
    G1: "G1.[mp3|ogg]",
    G3: "G3.[mp3|ogg]",
    G5: "G5.[mp3|ogg]",
    A2: "A2.[mp3|ogg]",
    A4: "A4.[mp3|ogg]",
    A6: "A6.[mp3|ogg]",
    B1: "B1.[mp3|ogg]",
    B3: "B3.[mp3|ogg]",
    B5: "B5.[mp3|ogg]",
    B6: "B6.[mp3|ogg]",
    C3: "C3.[mp3|ogg]",
  },

  organ: {
    C3: "C3.[mp3|ogg]",
    C4: "C4.[mp3|ogg]",
    C5: "C5.[mp3|ogg]",
    C6: "C6.[mp3|ogg]",
    "D#1": "Ds1.[mp3|ogg]",
    "D#2": "Ds2.[mp3|ogg]",
    "D#3": "Ds3.[mp3|ogg]",
    "D#4": "Ds4.[mp3|ogg]",
    "D#5": "Ds5.[mp3|ogg]",
    "F#1": "Fs1.[mp3|ogg]",
    "F#2": "Fs2.[mp3|ogg]",
    "F#3": "Fs3.[mp3|ogg]",
    "F#4": "Fs4.[mp3|ogg]",
    "F#5": "Fs5.[mp3|ogg]",
    A1: "A1.[mp3|ogg]",
    A2: "A2.[mp3|ogg]",
    A3: "A3.[mp3|ogg]",
    A4: "A4.[mp3|ogg]",
    A5: "A5.[mp3|ogg]",
    C1: "C1.[mp3|ogg]",
    C2: "C2.[mp3|ogg]",
  },

  piano: {
    A7: "A7.[mp3|ogg]",
    A1: "A1.[mp3|ogg]",
    A2: "A2.[mp3|ogg]",
    A3: "A3.[mp3|ogg]",
    A4: "A4.[mp3|ogg]",
    A5: "A5.[mp3|ogg]",
    A6: "A6.[mp3|ogg]",
    "A#7": "As7.[mp3|ogg]",
    "A#1": "As1.[mp3|ogg]",
    "A#2": "As2.[mp3|ogg]",
    "A#3": "As3.[mp3|ogg]",
    "A#4": "As4.[mp3|ogg]",
    "A#5": "As5.[mp3|ogg]",
    "A#6": "As6.[mp3|ogg]",
    B7: "B7.[mp3|ogg]",
    B1: "B1.[mp3|ogg]",
    B2: "B2.[mp3|ogg]",
    B3: "B3.[mp3|ogg]",
    B4: "B4.[mp3|ogg]",
    B5: "B5.[mp3|ogg]",
    B6: "B6.[mp3|ogg]",
    C7: "C7.[mp3|ogg]",
    C1: "C1.[mp3|ogg]",
    C2: "C2.[mp3|ogg]",
    C3: "C3.[mp3|ogg]",
    C4: "C4.[mp3|ogg]",
    C5: "C5.[mp3|ogg]",
    C6: "C6.[mp3|ogg]",
    C7: "C7.[mp3|ogg]",
    "C#7": "Cs7.[mp3|ogg]",
    "C#1": "Cs1.[mp3|ogg]",
    "C#2": "Cs2.[mp3|ogg]",
    "C#3": "Cs3.[mp3|ogg]",
    "C#4": "Cs4.[mp3|ogg]",
    "C#5": "Cs5.[mp3|ogg]",
    "C#6": "Cs6.[mp3|ogg]",
    D7: "D7.[mp3|ogg]",
    D1: "D1.[mp3|ogg]",
    D2: "D2.[mp3|ogg]",
    D3: "D3.[mp3|ogg]",
    D4: "D4.[mp3|ogg]",
    D5: "D5.[mp3|ogg]",
    D6: "D6.[mp3|ogg]",
    "D#7": "Ds7.[mp3|ogg]",
    "D#1": "Ds1.[mp3|ogg]",
    "D#2": "Ds2.[mp3|ogg]",
    "D#3": "Ds3.[mp3|ogg]",
    "D#4": "Ds4.[mp3|ogg]",
    "D#5": "Ds5.[mp3|ogg]",
    "D#6": "Ds6.[mp3|ogg]",
    E7: "E7.[mp3|ogg]",
    E1: "E1.[mp3|ogg]",
    E2: "E2.[mp3|ogg]",
    E3: "E3.[mp3|ogg]",
    E4: "E4.[mp3|ogg]",
    E5: "E5.[mp3|ogg]",
    E6: "E6.[mp3|ogg]",
    F7: "F7.[mp3|ogg]",
    F1: "F1.[mp3|ogg]",
    F2: "F2.[mp3|ogg]",
    F3: "F3.[mp3|ogg]",
    F4: "F4.[mp3|ogg]",
    F5: "F5.[mp3|ogg]",
    F6: "F6.[mp3|ogg]",
    "F#7": "Fs7.[mp3|ogg]",
    "F#1": "Fs1.[mp3|ogg]",
    "F#2": "Fs2.[mp3|ogg]",
    "F#3": "Fs3.[mp3|ogg]",
    "F#4": "Fs4.[mp3|ogg]",
    "F#5": "Fs5.[mp3|ogg]",
    "F#6": "Fs6.[mp3|ogg]",
    G7: "G7.[mp3|ogg]",
    G1: "G1.[mp3|ogg]",
    G2: "G2.[mp3|ogg]",
    G3: "G3.[mp3|ogg]",
    G4: "G4.[mp3|ogg]",
    G5: "G5.[mp3|ogg]",
    G6: "G6.[mp3|ogg]",
    "G#7": "Gs7.[mp3|ogg]",
    "G#1": "Gs1.[mp3|ogg]",
    "G#2": "Gs2.[mp3|ogg]",
    "G#3": "Gs3.[mp3|ogg]",
    "G#4": "Gs4.[mp3|ogg]",
    "G#5": "Gs5.[mp3|ogg]",
    "G#6": "Gs6.[mp3|ogg]",
  },

  saxophone: {
    "D#5": "Ds5.[mp3|ogg]",
    E3: "E3.[mp3|ogg]",
    E4: "E4.[mp3|ogg]",
    E5: "E5.[mp3|ogg]",
    F3: "F3.[mp3|ogg]",
    F4: "F4.[mp3|ogg]",
    F5: "F5.[mp3|ogg]",
    "F#3": "Fs3.[mp3|ogg]",
    "F#4": "Fs4.[mp3|ogg]",
    "F#5": "Fs5.[mp3|ogg]",
    G3: "G3.[mp3|ogg]",
    G4: "G4.[mp3|ogg]",
    G5: "G5.[mp3|ogg]",
    "G#3": "Gs3.[mp3|ogg]",
    "G#4": "Gs4.[mp3|ogg]",
    "G#5": "Gs5.[mp3|ogg]",
    A4: "A4.[mp3|ogg]",
    A5: "A5.[mp3|ogg]",
    "A#3": "As3.[mp3|ogg]",
    "A#4": "As4.[mp3|ogg]",
    B3: "B3.[mp3|ogg]",
    B4: "B4.[mp3|ogg]",
    C4: "C4.[mp3|ogg]",
    C5: "C5.[mp3|ogg]",
    "C#3": "Cs3.[mp3|ogg]",
    "C#4": "Cs4.[mp3|ogg]",
    "C#5": "Cs5.[mp3|ogg]",
    D3: "D3.[mp3|ogg]",
    D4: "D4.[mp3|ogg]",
    D5: "D5.[mp3|ogg]",
    "D#3": "Ds3.[mp3|ogg]",
    "D#4": "Ds4.[mp3|ogg]",
  },

  trombone: {
    "A#3": "As3.[mp3|ogg]",
    C3: "C3.[mp3|ogg]",
    C4: "C4.[mp3|ogg]",
    "C#2": "Cs2.[mp3|ogg]",
    "C#4": "Cs4.[mp3|ogg]",
    D3: "D3.[mp3|ogg]",
    D4: "D4.[mp3|ogg]",
    "D#2": "Ds2.[mp3|ogg]",
    "D#3": "Ds3.[mp3|ogg]",
    "D#4": "Ds4.[mp3|ogg]",
    F2: "F2.[mp3|ogg]",
    F3: "F3.[mp3|ogg]",
    F4: "F4.[mp3|ogg]",
    "G#2": "Gs2.[mp3|ogg]",
    "G#3": "Gs3.[mp3|ogg]",
    "A#1": "As1.[mp3|ogg]",
    "A#2": "As2.[mp3|ogg]",
  },

  trumpet: {
    C6: "C6.[mp3|ogg]",
    D5: "D5.[mp3|ogg]",
    "D#4": "Ds4.[mp3|ogg]",
    F3: "F3.[mp3|ogg]",
    F4: "F4.[mp3|ogg]",
    F5: "F5.[mp3|ogg]",
    G4: "G4.[mp3|ogg]",
    A3: "A3.[mp3|ogg]",
    A5: "A5.[mp3|ogg]",
    "A#4": "As4.[mp3|ogg]",
    C4: "C4.[mp3|ogg]",
  },

  tuba: {
    "A#2": "As2.[mp3|ogg]",
    "A#3": "As3.[mp3|ogg]",
    D3: "D3.[mp3|ogg]",
    D4: "D4.[mp3|ogg]",
    "D#2": "Ds2.[mp3|ogg]",
    F1: "F1.[mp3|ogg]",
    F2: "F2.[mp3|ogg]",
    F3: "F3.[mp3|ogg]",
    "A#1": "As1.[mp3|ogg]",
  },

  violin: {
    A3: "A3.[mp3|ogg]",
    A4: "A4.[mp3|ogg]",
    A5: "A5.[mp3|ogg]",
    A6: "A6.[mp3|ogg]",
    C4: "C4.[mp3|ogg]",
    C5: "C5.[mp3|ogg]",
    C6: "C6.[mp3|ogg]",
    C7: "C7.[mp3|ogg]",
    E4: "E4.[mp3|ogg]",
    E5: "E5.[mp3|ogg]",
    E6: "E6.[mp3|ogg]",
    G4: "G4.[mp3|ogg]",
    G5: "G5.[mp3|ogg]",
    G6: "G6.[mp3|ogg]",
  },

  xylophone: {
    C8: "C8.[mp3|ogg]",
    G4: "G4.[mp3|ogg]",
    G5: "G5.[mp3|ogg]",
    G6: "G6.[mp3|ogg]",
    G7: "G7.[mp3|ogg]",
    C5: "C5.[mp3|ogg]",
    C6: "C6.[mp3|ogg]",
    C7: "C7.[mp3|ogg]",
  },
};
