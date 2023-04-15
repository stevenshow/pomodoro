import { MdPowerSettingsNew, MdRestartAlt } from "react-icons/md";

const StartButton = ({ onClick, running }) => {
  return (
    <button
      className={`${
        running ? "border-blue-500" : "border-gray-500"
      } flex h-48 w-48 items-center justify-center rounded-full border-2 border-blue-500`}
      onClick={onClick}
    >
      <MdPowerSettingsNew className="h-14 w-14 text-blue-500" />
    </button>
  );
};

export default StartButton;
