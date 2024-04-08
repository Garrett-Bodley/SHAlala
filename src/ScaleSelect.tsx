import { FC, ChangeEvent } from "react";

interface ScaleSelectProps {
  scale: string;
  handleScaleOnChange: (e: ChangeEvent<HTMLSelectElement>) => void;
  isChecked: boolean;
  handleCheckedOnChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const ScaleSelect: FC<ScaleSelectProps> = ({
  scale,
  handleScaleOnChange,
  isChecked,
  handleCheckedOnChange,
}) => {
  return (
    <div style={{ marginTop: "10px" }}>
      <h3>Configure</h3>
      <label htmlFor="scaleSelect">Select a scale:</label>
      <select id="scaleSelect" value={scale} onChange={handleScaleOnChange}>
        <option value="ionian">Ionian</option>
        <option value="dorian">Dorian</option>
        <option value="phrygian">Phrygian</option>
        <option value="lydian">Lydian</option>
        <option value="mixolydian">Mixolydian</option>
        <option value="aeolian">Aeolian</option>
        <option value="locrian">Locrian</option>
        <option value="chromatic">Chromatic</option>
        <option value="diminished">Diminished</option>
        <option value="wholetone">Whole tone</option>
        <option value="minorpenta">Minor Pentatonic</option>
        <option value="majorpenta">Major Pentatonic</option>
        <option value="mccoy">McCoy Tyner (world's worst imitation)</option>
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
