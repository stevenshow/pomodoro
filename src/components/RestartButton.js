import { MdRestartAlt } from 'react-icons/md';

const RestartButton = ({ onClick }) => {
	return (
		<button
			className='w-12 h-12 rounded-full border-2 border-blue-500 flex items-center justify-center'
			onClick={onClick}
		>
			<MdRestartAlt className='text-blue-500 w-6 h-6' />
		</button>
	);
};

export default RestartButton;
