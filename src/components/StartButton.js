import { MdPowerSettingsNew } from 'react-icons/md';

const StartButton = ({ onClick, running }) => {
	return (
		<button
			className={`${
				running ? 'border-blue-500' : 'border-gray-500'
			} w-48 h-48 rounded-full border-2 border-blue-500 flex items-center justify-center`}
			onClick={onClick}
		>
			<MdPowerSettingsNew className='text-blue-500 w-14 h-14' />
		</button>
	);
};

export default StartButton;
