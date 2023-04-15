import { useState } from "react";
import { MdPowerSettingsNew } from "react-icons/md";

const StartButton = ({ onClick }) => {
  return (
    <button
      className="flex h-48 w-48 items-center justify-center rounded-full border-2 border-blue-500"
      onClick={onClick}
    >
      <MdPowerSettingsNew className="h-14 w-14 text-blue-500" />
    </button>
  );
};

export default StartButton;
