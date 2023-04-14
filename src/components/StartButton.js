import { MdPowerSettingsNew } from 'react-icons/md';

const StartButton = () => {
	return (
		<button className='w-16 h-16 rounded-full border-2 border-blue-500 flex items-center justify-center'>
			<MdPowerSettingsNew className='text-blue-500 w-6 h-6' />
		</button>
	);
};

export default StartButton;
