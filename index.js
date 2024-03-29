hash = ''

NOTE_MAPPING = {
  0: 'C4',
  1: 'D4',
  2: 'E4',
  3: 'F4',
  4: 'G4',
  5: 'A4',
  6: 'B4',
  7: 'C5',
  8: 'D5',
  9: 'E5',
  a: 'F5',
  b: 'G5',
  c: 'A5',
  d: 'B5',
  e: 'C6',
  f: 'D6'
}

tone_init = false

document.addEventListener('DOMContentLoaded', (_e) => {
  // Adds an event listener to the form for the submit event
  Tone.start()
  document.getElementById('form').addEventListener('submit', function(e) {
      // Prevents the default form submission action
      e.preventDefault();
      handleOnSubmit();
  });
});

async function handleOnSubmit() {
  const inputText = document.getElementById('form-input').value;
  const encoder = new TextEncoder();
  const data = encoder.encode(inputText);
  const hashBuffer = await crypto.subtle.digest('SHA-1', data);
  const hashArray = Array.from(new Uint8Array(hashBuffer)); // convert buffer to byte array
  const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join(''); // convert bytes to hex string
  hash = hashHex;
  logHash();
  document.getElementById('sha').textContent = 'SHA1 Hash: ' + hashHex;
  playNotes(hash)
}

async function computeSHA(text){
  const encoder = new TextEncoder();
  const data = encoder.encode(inputText);
  const hashBuffer = await crypto.subtle.digest('SHA-1', data);
  const hashArray = Array.from(new Uint8Array(hashBuffer)); // convert buffer to byte array
  const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join(''); // convert bytes to hex string
  return hashHex
}

function logHash(){
  console.log({hash})
}



function playNotes(hash) {

  const chords = [];

  for (let i = 0; i < hash.length; i += 8) {
    chords.push(hash.slice(i, i + 8).split('').map((char) => NOTE_MAPPING[char]));
  }

  console.log(chords);


  console.log({chords})
  Tone.Transport.bpm.value = 120;
  const synth = new Tone.PolySynth(Tone.Synth).toDestination();
  Tone.Transport.start();
  Tone.Transport.schedule(time => playChords(time, chords, synth))


}

function playChords(time, chords, synth){
  chords.forEach((chord, index) => {
    synth.triggerAttackRelease(chord, "4n", index * (60 / 120));
  });
}