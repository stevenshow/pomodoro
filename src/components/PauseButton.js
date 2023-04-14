import { MdOutlinePause } from 'react-icons/md';

const PauseButton = ({ onClick }) => {
	return (
		<button
			className='w-12 h-12 rounded-full border-2 border-blue-500 flex items-center justify-center'
			onClick={onClick}
		>
			<MdOutlinePause className='text-blue-500 w-6 h-6' />
		</button>
	);
};

export default PauseButton;
