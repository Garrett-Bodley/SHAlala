import { FC, ChangeEvent, MouseEvent, useRef } from "react";

interface StringFileInputProps {
  stringInput: string;
  handleStringOnChange: (e: ChangeEvent<HTMLInputElement>) => void;
  clearStringInput: (e: MouseEvent<HTMLButtonElement>) => void;
  fileInput: File | null;
  handleFileOnChange: (e: ChangeEvent<HTMLInputElement>) => void;
  clearFileInput: () => void;
}

const StringFileInput: FC<StringFileInputProps> = ({
  stringInput,
  handleStringOnChange,
  clearStringInput,
  fileInput,
  handleFileOnChange,
  clearFileInput,
}) => {
  const fileRef = useRef<HTMLInputElement>(null);

  const handleOnClick = (_e: MouseEvent<HTMLButtonElement>) => {
    console.log('handleOnClick')
    if(fileRef.current) fileRef.current.value = '';
    clearFileInput();
  }

  return (
    <>
      <h3>Generate a Hash</h3>
      <p style={{ margin: "0px" }}>
        Text and File inputs are concatenated when generating the SHA1
      </p>
      <div>
        <label htmlFor="formInput">Text Input:</label>
        <input
          id="formInput"
          type="text"
          placeholder="enter text here"
          value={stringInput}
          onChange={handleStringOnChange}
        />
        <button onClick={clearStringInput}>X</button>
      </div>
      <div>
        <label htmlFor="fileInput">
          Upload a file (Does not get sent to a server):
        </label>
        <input
          id="fileInput"
          type="file"
          style={{ paddingTop: "5px" }}
          ref={fileRef}
          onChange={handleFileOnChange}
        />
        <button
          type="button"
          id="clearFile"
          onClick={handleOnClick}
        >
          X
        </button>
      </div>
    </>
  );
};

export default StringFileInput;
