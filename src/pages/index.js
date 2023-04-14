import { useEffect, useState } from 'react';
import StartButton from '@/components/StartButton';
import RestartButton from '@/components/RestartButton';
import PauseButton from '@/components/PauseButton';

export default function Home() {
	const [timeRemaining, setTimeRemaining] = useState(25 * 60); // 25 minutes in seconds
	const [timerRunning, setTimerRunning] = useState(false);
	const [timerId, setTimerId] = useState(null);

	const startTimer = () => {
		if (!timerRunning) {
			setTimerRunning(true);
			const id = setInterval(() => {
				setTimeRemaining((prevTime) => prevTime - 1);
			}, 1000);
			setTimerId(id);
		} else {
			pauseTimer();
		}
	};

	const pauseTimer = () => {
		clearInterval(timerId);
		setTimerRunning(false);
	};

	const restartTimer = () => {
		clearInterval(timerId);
		setTimeRemaining(25 * 60);
		setTimerRunning(false);
	};

	// Handle timer completion
	useEffect(() => {
		if (timeRemaining <= 0) {
			clearInterval(timerId);
			setTimerRunning(false);
		}
	}, [timeRemaining, timerId]);

	const minutes = Math.floor(timeRemaining / 60);
	const seconds = timeRemaining % 60;

	return (
		<div className='flex flex-col items-center justify-center min-h-screen'>
			<div className='flex items-center justify-center'>
				<span className='text-6xl'>
					{minutes < 10 ? `0${minutes}` : minutes}
				</span>
				<span className='text-6xl mx-2'>:</span>
				<span className='text-6xl'>
					{seconds < 10 ? `0${seconds}` : seconds}
				</span>
			</div>
			<div className='mt-8'>
				<StartButton onClick={startTimer} running={timerRunning} />
				<div className='flex mt-5 justify-between'>
					<RestartButton onClick={restartTimer} />
					<PauseButton onClick={pauseTimer} />
				</div>
			</div>
		</div>
	);
}
