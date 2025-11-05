import React from "react";

type ToggleSwitchProps = {
  value: boolean;
  onChange: (val: boolean) => void;
};

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({ value, onChange }) => {
  return (
    <button
      type="button"
      onClick={() => onChange(!value)}
      className={`w-14 h-7 flex items-center rounded-full p-1 transition-colors duration-300 ${
        value ? "bg-green-500 justify-end" : "bg-gray-300 justify-start"
      }`}
    >
      <div
        className={`w-6 h-6 bg-white rounded-full shadow-md transform transition-transform`}
      />
    </button>
  );
};

export default ToggleSwitch;
