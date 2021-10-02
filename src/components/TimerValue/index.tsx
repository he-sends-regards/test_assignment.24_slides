import { FC, useEffect, useState } from 'react';
import useTimer from '../../hooks/timer.hook';
import './style.css';

interface IProps {
  initialValue: number;
}

/*
  Decided not to separate UI and logic
  due to component's simplicity
*/
const TimerValue: FC<IProps> = () => {
  const [currentTime, setCurrentTime] = useState(10);
  const onTimeChange = (value: number) => {
    if (currentTime > 0) {
      setCurrentTime(value);
    }
  };

  useEffect(() => {
    useTimer(currentTime, onTimeChange);
  }, []);

  return (
    <div className="timer_value-container">
      <span>
        Countdown timer value: <strong>{currentTime}</strong>
      </span>
    </div>
  );
};
export default TimerValue;
