import { useState } from "react";
import { HexColorPicker } from "react-colorful";
import { useSnapshot } from "valtio";
export default function ColorPicker(props) {
  const snap = useSnapshot(props.state);

  const [color, setColor] = useState(snap.colors[snap.current]);

  const handleColorChange = (newColor) => {
    setColor(newColor);
    props.updateColor(snap.current, newColor);
  };

  const handleInputChange = (event) => {
    const inputColor = event.target.value;
    setColor(inputColor);
    props.updateColor(snap.current, inputColor);
  };

  return (
    <div
      className={snap.current !== null ? "color-picker" : "color-picker hidden"}
    >
      <HexColorPicker color={color} onChange={handleColorChange} />
      <input
        type="text"
        value={color}
        onChange={handleInputChange}
        maxLength={7}
        style={{ marginTop: "10px", padding: "5px", width: "100px" }}
      />
      <h1>{snap.current}</h1>
    </div>
  );
}
