import { FC, ChangeEvent, MouseEvent, useRef } from "react";
import { useSHAlala } from "./SHAlalaProvider";

interface StringFileInputProps {
  handleFileOnChange: (e: ChangeEvent<HTMLInputElement>) => void;
  clearFileInput: () => void;
}

const StringFileInput: FC<StringFileInputProps> = ({
  handleFileOnChange,
  clearFileInput,
}) => {
  const fileRef = useRef<HTMLInputElement>(null);

  const handleOnClick = (_e: MouseEvent<HTMLButtonElement>) => {
    if (fileRef.current) fileRef.current.value = "";
    clearFileInput();
  };

  const { string, setString } = useSHAlala()

  const handleStringOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setString(e.target.value);
  }

  const clearString = (_e: React.MouseEvent<HTMLButtonElement>) => {
    setString('')
  }

  return (
    <>
      <h3>Generate a Hash</h3>
      <p style={{ margin: "0px" }}>
        Text and File inputs are concatenated when generating the SHA1
      </p>
      <div>
        <label htmlFor="formInput">Text Input: </label>
        <input
          id="formInput"
          type="text"
          placeholder="enter text here"
          value={string}
          onChange={handleStringOnChange}
        />
        <button onClick={clearString} type="button">
          X
        </button>
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
        <button type="button" id="clearFile" onClick={handleOnClick}>
          X
        </button>
      </div>
    </>
  );
};

export default StringFileInput;
