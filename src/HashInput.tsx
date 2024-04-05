import { FC, ChangeEvent, MouseEvent } from "react";

interface HashInputProps {
  hashInput: string;
  handleHashInputOnChange: (e: ChangeEvent<HTMLInputElement>) => void;
  clearHashInput: (e: MouseEvent<HTMLButtonElement>) => void;
}

const HashInput: FC<HashInputProps> = ({
  hashInput,
  handleHashInputOnChange,
  clearHashInput,
}) => {
  return (
    <>
      <h3>Provide a Hash</h3>
      <div>
        <label htmlFor="hashInput">Hash input: </label>
        <input
          id="hashInput"
          placeholder="enter SHA1 here"
          type="text"
          value={hashInput}
          onChange={handleHashInputOnChange}
        />
        <button type="button" id="hashInputClear" onClick={clearHashInput}>
          X
        </button>
        <br />
        <p style={{ margin: "0", fontSize: ".8em" }}>
          (All other inputs are ignored when this is used)
        </p>
        <div id="hashInputError" style={{ color: "red" }}></div>
      </div>
    </>
  );
};

export default HashInput;
