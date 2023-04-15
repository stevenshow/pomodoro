import { useEffect, useState } from "react";
import StartButton from "@/components/StartButton";
import RestartButton from "@/components/RestartButton";
import PauseButton from "@/components/PauseButton";

export default function Home() {
  const [timeRemaining, setTimeRemaining] = useState(25 * 60); // 25 minutes in seconds
  const [timerRunning, setTimerRunning] = useState(false);
  const [timerId, setTimerId] = useState(null);
  const [timerType, setTimerType] = useState("pomodoro");

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

  useEffect(() => {
    document.title = `${minutes}:${seconds < 10 ? "0" : ""}${seconds} | ${
      timerType === "pomodoro" ? "Focus Up" : "Relax Yourself"
    }`;
  }, [timeRemaining]);

  useEffect(() => {
    if (timeRemaining === 0) {
      // Request permission for notifications
      Notification.requestPermission().then((permission) => {
        // If permission is granted, show the notification
        if (permission === "granted") {
          new Notification(
            `${timerType === "pomodoro" ? "Break Time!" : "Get Back to Work!"}`
          );
        }
      });
    }
  }, [timeRemaining]);

  useEffect(() => {
    // Check if the browser supports notifications
    if ("Notification" in window) {
      // Request permission for notifications
      Notification.requestPermission().then((permission) => {});
    }
  }, []);

  const minutes = Math.floor(timeRemaining / 60);
  const seconds = timeRemaining % 60;

  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <div className="mb-5 flex space-x-5">
        <button
          className={`rounded border-2 p-1 text-xl ${
            timerType === "pomodoro" ? "border-slate-500" : "border-transparent"
          }`}
          onClick={() => setTimerType("pomodoro")}
        >
          Pomodoro
        </button>
        <button
          className={`rounded border-2 p-1 text-xl ${
            timerType === "long" ? "border-slate-500" : "border-transparent"
          }`}
          onClick={() => setTimerType("long")}
        >
          Long Break
        </button>
        <button
          className={`rounded border-2 p-1 text-xl ${
            timerType === "short" ? "border-slate-500" : "border-transparent"
          }`}
          onClick={() => setTimerType("short")}
        >
          Short Break
        </button>
      </div>

      <div className="flex items-center justify-center">
        <span className="text-6xl">
          {minutes < 10 ? `0${minutes}` : minutes}
        </span>
        <span className="mx-2 text-6xl">:</span>
        <span className="text-6xl">
          {seconds < 10 ? `0${seconds}` : seconds}
        </span>
      </div>
      <div className="mt-5">
        <StartButton onClick={startTimer} running={timerRunning} />
        <div className="mt-5 flex justify-between">
          <RestartButton onClick={restartTimer} />
          <PauseButton onClick={pauseTimer} />
        </div>
      </div>
    </div>
  );
}
