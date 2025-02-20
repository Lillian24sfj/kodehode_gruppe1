import { useEffect, useRef, useState } from 'react';
import styles from "./DateAndTime.module.css";

export function DateAndTime() {
  const dateControlRef = useRef<HTMLInputElement>(null);
  const [dayOfWeek, setDayOfWeek] = useState<string>('');
  const [selectedDate, setSelectedDate] = useState<string>('');

  useEffect(() => {
    const dateControl = dateControlRef.current;
    if (dateControl) {
      // Set the date to today and time to 08:30
      const today = new Date();
      today.setHours(8, 30, 0, 0);
      const formattedDate = today.toISOString().slice(0, 16);
      dateControl.value = formattedDate;

      // Update the day display initially
      updateDayDisplay(formattedDate);
      setSelectedDate(formattedDate);
    }
  }, []);

  const handleDateChange = () => {
    const dateControl = dateControlRef.current;
    if (dateControl) {
      const newDate = dateControl.value;
      setSelectedDate(newDate);
      updateDayDisplay(newDate);
    }
  };

  const handleCopyClick = () => {
    if (selectedDate) {
      navigator.clipboard.writeText(selectedDate).then(() => {
        alert('Date and time copied to clipboard');
      }).catch(err => {
        console.error('Unable to copy: ', err);
      });
    } else {
      alert('Please select a date first');
    }
  };

  function getDayOfWeek(dateString: string) {
    const date = new Date(dateString);
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return days[date.getDay()];
  }

  function updateDayDisplay(dateString: string) {
    const dayOfWeek = getDayOfWeek(dateString);
    setDayOfWeek(dayOfWeek);
  }

  return (
    <div className={styles.DateAndTimeContainer}>
      <input className={styles.DateAndTimeInput}
        type="datetime-local" 
        ref={dateControlRef}
        onChange={handleDateChange}
      />
      <button className={styles.DateAndTimeButton} onClick={handleCopyClick}>Copy Date</button>
      {dayOfWeek && <p id="dayDisplay">This date is a {dayOfWeek}</p>}
    </div>
  );
}
