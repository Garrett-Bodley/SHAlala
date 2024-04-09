import { FC, ChangeEvent } from "react";
import { useSHAlala } from './SHAlalaProvider'

interface ScaleSelectProps {
  isChecked: boolean;
  handleCheckedOnChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const ScaleSelect: FC<ScaleSelectProps> = ({
  isChecked,
  handleCheckedOnChange,
}) => {
  const { scale, setScale, SCALES } = useSHAlala()

  const handleOnChange = (e: ChangeEvent<HTMLSelectElement>) => {
    console.log(e.target.value)
    setScale(e.target.value)
  }

  return (
    <div style={{ marginTop: "10px" }}>
      <h3>Configure</h3>
      <label htmlFor="scaleSelect">Select a scale:</label>
      <select id="scaleSelect" value={scale} onChange={handleOnChange}>
        {Object.keys(SCALES).map((key, idx) =>
          <option key={idx} value={key}>{key}</option>
        )}
      </select>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={handleCheckedOnChange}
        id="playShortHashCheckbox"
      />
      <label htmlFor="playShortHashCheckbox">play the short hash</label>
    </div>
  );
};

export default ScaleSelect;
