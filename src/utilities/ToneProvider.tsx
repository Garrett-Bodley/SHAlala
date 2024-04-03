import React, { useContext, useState } from "react";
import * as Tone from "tone";

interface IToneContext {
  noteSynth: Tone.PolySynth;
  droneSynth: Tone.PolySynth;
}

export const useTone = () => {
  return useContext(ToneContext);
};

const ToneContext = React.createContext<IToneContext | null>(null);

const ToneProvider: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  const noteSynth = new Tone.PolySynth(Tone.Synth).toDestination();
  const droneSynth = new Tone.PolySynth(Tone.Synth).toDestination();

  const API: IToneContext = {
    noteSynth,
    droneSynth,
  };

  return <ToneContext.Provider value={API}>{children}</ToneContext.Provider>;
};

export default ToneProvider
