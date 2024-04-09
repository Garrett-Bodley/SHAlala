import React, { useContext, useState } from "react";
import * as Tone from "tone";
import { SCALES, NOTE_DURATIONS } from './scales.tsx'

interface ISHAlalaContext {
  initialized: boolean;
  // setInitialized: React.Dispatch<React.SetStateAction<boolean>>;
  tempo: number;
  updateTempo: (val: number) => void;
  scale: string;
  setScale: React.Dispatch<React.SetStateAction<string>>;
  playTheShortHash: boolean;
  setPlayTheShortHash: React.Dispatch<React.SetStateAction<boolean>>
  SCALES: typeof SCALES
  noteSynth: Tone.PolySynth;
  droneSynth: Tone.PolySynth;
  hashObj: IhashObj;
  playHash: () => void;
}

interface IhashObj {
  hash: string;
  hashToPlay: string;
}

const defaultHashObj = {
  hash: 'da39a3ee5e6b4b0d3255bfef95601890afd80709',
  hashToPlay: 'da39a3ee'
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
  let noteSynth = new Tone.PolySynth(Tone.Synth).toDestination();
  let droneSynth = new Tone.PolySynth(Tone.Synth).toDestination();
  const [initialized, setInitialized] = useState<boolean>(false);
  const [tempo, setTempo] = useState<number>(180);
  const [scale, setScale] = useState<string>('Ionian')
  const [playTheShortHash, setPlayTheShortHash] = useState<boolean>(true)
  const [hashObj, setHashObj] = useState<IhashObj>(defaultHashObj)

  const updateTempo = (val: number) => {
    setTempo(val);
    Tone.Transport.bpm.rampTo(val, 0.1);
  };

  const initTone = async () => {
    setInitialized(true);
    await Tone.start();
    Tone.Destination.volume.value = parseFloat('-3');
    Tone.Transport.bpm.value = 180;
  }

  const playHash = async () => {
    if(!initialized) await initTone();
    const notesToPlay = hashToNotesAndRhythm(hashObj, scale)
    playNotePart(notesToPlay);
  }

  const playNotePart = (notesToPlay:any) => {
    Tone.Transport.stop();
    Tone.Transport.cancel(0);
    noteSynth?.dispose();
    droneSynth?.dispose();
    noteSynth = new Tone.PolySynth(Tone.Synth).toDestination();
    droneSynth = new Tone.PolySynth(Tone.Synth).toDestination();

    let startTime = 0;
    console.log(notesToPlay)

    const totalDuration = notesToPlay.reduce((accum:number, note:any) => {
      return accum + Tone.Time(note.duration).toSeconds()
    }, 0)
    console.log({totalDuration})

    droneSynth.triggerAttack('Ab2')
    Tone.Transport.scheduleOnce(_time => {
      droneSynth.triggerRelease('Ab2');
    }, totalDuration)

    notesToPlay.forEach((note:any) => {
      if (note.note !== ''){
        Tone.Transport.scheduleOnce(time => {
          noteSynth.triggerAttackRelease(note.note, note.duration, time)
        }, startTime);
      }
      startTime += Tone.Time(note.duration).toSeconds();
    })

    Tone.Transport.scheduleOnce(time => {
      Tone.Transport.stop(time);
    }, totalDuration)

    Tone.Transport.start();
  }

  const hashToNotesAndRhythm = (hashObj:IhashObj, scale: string) => {
    const prevBPM = Tone.Transport.bpm.value
    Tone.Transport.bpm.value = 180;
    let totalDuration = 0
    let currentDuration
    const notes = hashObj.hashToPlay.split("").map((char, idx) => {
      if (idx == 0){
        currentDuration = NOTE_DURATIONS[Number(`0x${hashObj.hash}`) % NOTE_DURATIONS.length]
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
    tempo,
    updateTempo,
    scale,
    setScale,
    SCALES,
    playTheShortHash,
    setPlayTheShortHash,
    noteSynth,
    droneSynth,
    hashObj,
    playHash
  };

  return <SHAlalaContext.Provider value={API}>{children}</SHAlalaContext.Provider>;
};

export default SHAlalaProvider;
