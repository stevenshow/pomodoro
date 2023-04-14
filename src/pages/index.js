import { useEffect, useState } from 'react';
import StartButton from '@/components/StartButton';
import RestartButton from '@/components/RestartButton';
import PauseButton from '@/components/PauseButton';

export default function Home() {
	const [timeRemaining, setTimeRemaining] = useState(25 * 60); // 25 minutes in seconds
	const [timerRunning, setTimerRunning] = useState(false);
	const [timerId, setTimerId] = useState(null);
	const [timerType, setTimerType] = useState('pomodoro');

	const timerDurations = {
		pomodoro: 25 * 60,
		long: 15 * 60,
		short: 5 * 60,
	};

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
		setTimeRemaining(timerDurations[timerType]);
		setTimerRunning(false);
	};

	// Handle timer completion
	useEffect(() => {
		if (timeRemaining <= 0) {
			clearInterval(timerId);
			setTimerRunning(false);
		}
	}, [timeRemaining, timerId]);

	useEffect(() => {
		if (timerDurations[timerType]) {
			setTimeRemaining(timerDurations[timerType]);
			restartTimer(timerId);
		}
	}, [timerType]);

	const minutes = Math.floor(timeRemaining / 60);
	const seconds = timeRemaining % 60;

	return (
		<div className='flex flex-col items-center justify-center min-h-screen'>
			<div className='flex space-x-10 mb-5'>
				<button
					className={`text-xl p-1 rounded border-2 ${
						timerType === 'pomodoro' ? 'border-slate-500' : 'border-transparent'
					}`}
					onClick={() => setTimerType('pomodoro')}
				>
					Pomodoro
				</button>
				<button
					className={`text-xl p-1 rounded border-2 ${
						timerType === 'long' ? 'border-slate-500' : 'border-transparent'
					}`}
					onClick={() => setTimerType('long')}
				>
					Long Break
				</button>
				<button
					className={`text-xl p-1 rounded border-2 ${
						timerType === 'short' ? 'border-slate-500' : 'border-transparent'
					}`}
					onClick={() => setTimerType('short')}
				>
					Short Break
				</button>
			</div>

			<div className='flex items-center justify-center'>
				<span className='text-6xl'>
					{minutes < 10 ? `0${minutes}` : minutes}
				</span>
				<span className='text-6xl mx-2'>:</span>
				<span className='text-6xl'>
					{seconds < 10 ? `0${seconds}` : seconds}
				</span>
			</div>
			<div className='mt-5'>
				<StartButton onClick={startTimer} running={timerRunning} />
				<div className='flex mt-5 justify-between'>
					<RestartButton onClick={restartTimer} />
					<PauseButton onClick={pauseTimer} />
				</div>
			</div>
		</div>
	);
}
