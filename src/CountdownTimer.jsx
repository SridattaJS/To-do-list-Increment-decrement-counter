import React, { useState, useEffect } from 'react';

function CountdownTimer() {
  const [countdown, setCountdown] = useState(60); // Start from 10 seconds

  useEffect(() => {
    if (countdown > 0) {
      const timerId = setInterval(() => {
        setCountdown((prevCountdown) => prevCountdown - 1);
      }, 1000);

      // Clear interval on component unmount or when countdown reaches 0
      return () => clearInterval(timerId);
    }
  }, [countdown]);

  return (
    <div style={styles.timerContainer}>
      <h2 style={styles.timerTitle}>Countdown Timer</h2>
      <div style={styles.countdownBox}>
        {countdown > 0 ? countdown : "Time's up!"}
      </div>
    </div>
  );
}

const styles = {
  timerContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#ffe0b2',
    padding: '20px',
    marginTop: '20px',
    borderRadius: '10px',
  },
  timerTitle: {
    fontSize: '1.5rem',
    color: '#d35400',
  },
  countdownBox: {
    fontSize: '2.5rem',
    color: '#e74c3c',
    marginTop: '10px',
    padding: '10px',
    border: '2px solid #e74c3c',
    borderRadius: '5px',
    backgroundColor: '#fefefe',
  },
};

export default CountdownTimer;
