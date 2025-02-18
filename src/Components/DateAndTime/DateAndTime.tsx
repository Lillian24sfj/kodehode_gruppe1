import { useEffect, useRef, useState } from 'react';

export function DateAndTime() {
  const dateControlRef = useRef<HTMLInputElement>(null);
  const [dayOfWeek, setDayOfWeek] = useState<string>('');

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

      const handleChange = () => {
        const selectedDate = dateControl.value;
        navigator.clipboard.writeText(selectedDate).then(() => {
          alert('Date and time copied to clipboard!');
        }).catch(err => {
          console.error('Unable to copy: ', err);
        });
        
        updateDayDisplay(selectedDate);
      };

      dateControl.addEventListener('change', handleChange);

      return () => {
        dateControl.removeEventListener('change', handleChange);
      };
    }
  }, []);

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
    <div>
      <input 
        type="datetime-local" 
        ref={dateControlRef}
      />
      {dayOfWeek && <p id="dayDisplay">This date is a {dayOfWeek}</p>}
    </div>
  );
}
