import "./App.css";
import { useState, ChangeEvent, MouseEvent } from "react";

import HashInput from "./HashInput.tsx";
import GithubInput from "./GithubInput.tsx";
import StringFileInput from "./StringFileInput.tsx";
import ToneProvider from "./utilities/ToneProvider.tsx";

function App() {
  const [hashInput, setHashInput] = useState<string>("");
  const [githubInput, setGithubInput] = useState<string>("");
  const [stringInput, setStringInput] = useState<string>("");
  const [fileInput, setFileInput] = useState<File | null>(null);

  const handleHashInputOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setHashInput(e.target.value);
  };

  const clearHashInput = (_e: MouseEvent<HTMLButtonElement>) => {
    setHashInput("");
  };

  const handleGithubOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setGithubInput(e.target.value);
  };

  const clearGithubInput = (_e: MouseEvent<HTMLButtonElement>) => {
    setGithubInput("");
  };

  const handleStringOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setStringInput(e.target.value);
  };

  const clearStringInput = (_e: MouseEvent<HTMLButtonElement>) => {
    setStringInput("");
  };

  const handleFileOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.currentTarget.files
    if (files) setFileInput(files[0])
  }

  const clearFileInput = () => {
    setFileInput(null);
  }



  return (
    <>
      <h1>SHAlala</h1>
      <h2>Turn Your SHA1 into Music If You Want to Do That For Some Reason</h2>
      <ToneProvider>
        <HashInput
          hashInput={hashInput}
          handleHashInputOnChange={handleHashInputOnChange}
          clearHashInput={clearHashInput}
        />
        <hr/>
        <GithubInput
          githubInput={githubInput}
          handleGithubOnChange={handleGithubOnChange}
          clearGithubInput={clearGithubInput}
          />
        <hr/>
        <StringFileInput
          stringInput={stringInput}
          handleStringOnChange={handleStringOnChange}
          clearStringInput={clearStringInput}
          fileInput={fileInput}
          handleFileOnChange={handleFileOnChange}
          clearFileInput={clearFileInput}
          />
        <hr/>
      </ToneProvider>
    </>
  );
}

export default App;
