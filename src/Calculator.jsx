import { useEffect, useState } from "react";
import { Screen } from "./Screen";
import { Button } from "./Button";

export const Calculator = () => {
  const [value, setValue] = useState("");
  return (
    <div className="calculator">
      <Screen value={value} />
      <div className="buttons">
        <div className="row">
          <Button label="AC" value={value} setValue={setValue} />
          <Button label="+-" value={value} setValue={setValue} />
          <Button label="%" value={value} setValue={setValue} />
          <Button label="/" value={value} setValue={setValue} />
        </div>
        <div className="row">
          <Button label="7" value={value} setValue={setValue} />
          <Button label="8" value={value} setValue={setValue} />
          <Button label="9" value={value} setValue={setValue} />
          <Button label="*" value={value} setValue={setValue} />
        </div>
        <div className="row">
          <Button label="4" value={value} setValue={setValue} />
          <Button label="5" value={value} setValue={setValue} />
          <Button label="6" value={value} setValue={setValue} />
          <Button label="-" value={value} setValue={setValue} />
        </div>
        <div className="row">
          <Button label="1" value={value} setValue={setValue} />
          <Button label="2" value={value} setValue={setValue} />
          <Button label="3" value={value} setValue={setValue} />
          <Button label="+" value={value} setValue={setValue} />
        </div>
        <div className="row">
          <Button label="0" value={value} setValue={setValue} />
          <Button label="." value={value} setValue={setValue} />
          <Button label="=" value={value} setValue={setValue} />
        </div>
      </div>
    </div>
  );
};
