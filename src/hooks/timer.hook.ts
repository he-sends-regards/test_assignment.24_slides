type Time = number;

type UseTimer = (initialTimeSeconds: Time, callback: (value: Time) => void) => void;

/*
  That's impossible to implement timer hook
  with abstract type in task description
  (useTimer = (initial: Time): Time => ... )
  because we cannot dynamically return many
  values in asynchronous function.
  Callback was used to update current time value.
*/
const useTimer: UseTimer = (initialTimeSeconds, callback) => {
  let currentTimeSec = initialTimeSeconds;

  setInterval(() => {
    if (currentTimeSec > 0) {
      currentTimeSec -= 1;

      callback(currentTimeSec);
    } else clearInterval();
  }, 1000);
};

export default useTimer;
