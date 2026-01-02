import { useState, useContext, useEffect } from "react";
import "./ToggleSwitch.css";
import CurrentTemperatureUnitContext from "../../contexts/CurrentTemperatureUnitContext";

/**
 *
 * @author [Shraddha](https://github.com/5hraddha)
 */
const ToggleSwitch = () => {
  const { currentTemperatureUnit, handleToggleSwitchChange } = useContext(
    CurrentTemperatureUnitContext
  );

  const [isChecked, setIsChecked] = useState(currentTemperatureUnit === "C");
  useEffect(
    () => setIsChecked(currentTemperatureUnit === "C"),
    [currentTemperatureUnit]
  );

  return (
    <div className="toggle-switch">
      <label className="toggle-switch__label">
        <input
          className="toggle-switch__input"
          type="checkbox"
          name="toggle-switch-checkbox"
          value={currentTemperatureUnit}
          onChange={handleToggleSwitchChange}
          checked={isChecked}
        />
        <span className="toggle-switch__circle" />
        <span className="toggle-switch__value toggle-switch__value_left">
          F
        </span>
        <span className="toggle-switch__value toggle-switch__value_right">
          C
        </span>
      </label>
    </div>
  );
};

export default ToggleSwitch;
