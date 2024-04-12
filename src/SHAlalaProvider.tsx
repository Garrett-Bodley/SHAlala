import React, { useContext, useState, useRef, useEffect } from "react";
import * as Tone from "tone";
import { SCALES, NOTE_DURATIONS } from './scales.tsx'

interface ISHAlalaContext {
  initialized: boolean;
  string: string;
  setString: React.Dispatch<React.SetStateAction<string>>
  tempo: number;
  updateTempo: (val: number) => void;
  scale: string;
  setScale: React.Dispatch<React.SetStateAction<string>>;
  playTheShortHash: boolean;
  setPlayTheShortHash: React.Dispatch<React.SetStateAction<boolean>>
  SCALES: typeof SCALES
  hash: string;
  playHash: () => void;
}

export const useSHAlala = (): ISHAlalaContext => {
  const context =  useContext(SHAlalaContext);
  if (!context) {
    throw new Error('useTone must be used within a ToneProvider that provides ISHAlalaContext');
  }
  return context;
};

const SHAlalaContext = React.createContext<ISHAlalaContext | null>(null);

const SHAlalaProvider: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  const noteSynthRef = useRef(new Tone.PolySynth(Tone.Synth).toDestination())
  const droneSynthRef = useRef(new Tone.PolySynth(Tone.Synth).toDestination())
  const timer = useRef<number | null>(null)
  const [initialized, setInitialized] = useState<boolean>(false);
  const [tempo, setTempo] = useState<number>(180);
  const [scale, setScale] = useState<string>('Ionian')
  const [playTheShortHash, setPlayTheShortHash] = useState<boolean>(true)
  const [string, setString] = useState<string>('')
  const [hash, setHash] = useState<string>('')

  const updateTempo = (val: number) => {
    setTempo(val);
    // console.log({val})
    // Tone.Transport.bpm.value = val
    // if(timer.current != null){ clearTimeout(timer.current) }
    // timer.current = setTimeout(() => { Tone.Transport.bpm.rampTo(val, 0.1) }, 1000);
    // Tone.getTransport().bpm.setValueAtTime(val, Tone.getTransport().now())
  };

  useEffect(() => {
    Tone.Transport.bpm.rampTo(tempo, 0.1)
  }, [tempo])

  const initTone = async () => {
    setInitialized(true);
    await Tone.start();
    Tone.Destination.volume.value = parseFloat('-3');
    Tone.Transport.bpm.value = 180;
  }

  const playHash = async () => {
    if(!initialized) await initTone();
    const hash = await computeSHA1(string, null);
    const hashToPlay = playTheShortHash ? hash.slice(0, 8) : hash
    console.log({string, hash, hashToPlay})
    setHash(hash)
    const notesToPlay = hashToNotesAndRhythm(hash, hashToPlay, scale)
    console.log({notesToPlay})
    playNotePart(notesToPlay);
  }

  const playNotePart = async (notesToPlay:any) => {
    // await clearEvents(events);
    // killDrone();
    Tone.Transport.stop();
    Tone.Transport.cancel(0);
    await noteSynthRef.current.releaseAll();
    await droneSynthRef.current.releaseAll();

    let startTime = 0;
    console.log(notesToPlay)

    const totalDuration = notesToPlay.reduce((accum:number, note:any) => {
      return accum + Tone.Time(note.duration).toSeconds()
    }, 0)
    console.log({totalDuration})

    // droneSynthRef.current.triggerAttack('Ab2')
    Tone.Transport.scheduleOnce(time => {
      droneSynthRef.current.triggerAttackRelease('Ab2', totalDuration, time);
    }, 0)

    notesToPlay.forEach((note:any) => {
      if (note.note !== ''){
        Tone.Transport.scheduleOnce(time => {
          noteSynthRef.current.triggerAttackRelease(note.note, note.duration, time)
        }, startTime);
      }
      startTime += Tone.Time(note.duration).toSeconds();
    })

    // Tone.Transport.scheduleOnce(time => {
    //   Tone.Transport.stop(time);
    // }, totalDuration)

    Tone.Transport.start();
  }

  const computeSHA1 = async(string:string, file:File|null) => {
    const textBuffer = new TextEncoder().encode(string);
    const fileBuffer = await readFileAsBuffer(file)
    const joinedBuffer = concatBuffers(fileBuffer, textBuffer)
    const hashBuffer = await crypto.subtle.digest("SHA-1", joinedBuffer);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray
      .map((b) => b.toString(16).padStart(2, "0"))
      .join(""); // convert bytes to hex string
    return hashHex;
  }

  const readFileAsBuffer = async (file: File|null) => {
    return new Promise<Uint8Array>((resolve, reject) => {
      if(!file) return resolve(new Uint8Array)
      const reader = new FileReader();
      reader.onload = () => resolve(new Uint8Array(reader.result as ArrayBuffer));
      reader.onerror = () => reject(reader.error);
      reader.readAsArrayBuffer(file);
    })
  }

  function concatBuffers(buf1: Uint8Array, buf2:  Uint8Array){
    if (!buf1) return buf2
    if (!buf2) return buf1
    const combined = new Uint8Array(buf1.byteLength + buf2.byteLength)
    combined.set(new Uint8Array(buf1), 0)
    combined.set(new Uint8Array(buf2), buf1.byteLength)
    return combined.buffer
  }

  const hashToNotesAndRhythm = (hash: string, hashToPlay: string, scale: string) => {
    const prevBPM = Tone.Transport.bpm.value
    Tone.Transport.bpm.value = 180;
    let totalDuration = 0
    let currentDuration
    const notes = hashToPlay.split("").map((char, idx) => {
      if (idx == 0){
        currentDuration = NOTE_DURATIONS[Number(`0x${hash}`) % NOTE_DURATIONS.length]
      }else{
        currentDuration = NOTE_DURATIONS[Math.round(totalDuration * 10) % NOTE_DURATIONS.length]
      }
      totalDuration += Tone.Time(currentDuration).toSeconds()
      return { note: SCALES[scale][char], duration: currentDuration }
    })
    Tone.Transport.bpm.value = prevBPM
    return notes
  }

  const API: ISHAlalaContext = {
    initialized,
    string,
    setString,
    tempo,
    updateTempo,
    scale,
    setScale,
    SCALES,
    playTheShortHash,
    setPlayTheShortHash,
    hash,
    playHash
  };

  return <SHAlalaContext.Provider value={API}>{children}</SHAlalaContext.Provider>;
};

export default SHAlalaProvider;
