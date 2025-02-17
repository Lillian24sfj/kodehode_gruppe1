export function DateAndTime() {
  const dateControl = document.querySelector('input[type="datetime-local"]') as HTMLInputElement;
  
  // Looking for element named dayDisplay
  const dayDisplay = document.getElementById('dayDisplay');

  if (dateControl) {
    // Set time date or current time
    // const now = new Date();
    // const year = now.getFullYear();
    // const month = String(now.getMonth() + 1).padStart(2, '0');
    // const day = String(now.getDate()).padStart(2, '0');
    // const hours = String(now.getHours()).padStart(2, '0');
    // const minutes = String(now.getMinutes()).padStart(2, '0');
    dateControl.value = "2017-06-01T08:30";
  } else {
    console.error('Datetime-local input element not found');
    return null;
  }

  dateControl.addEventListener('change', () => {
    const selectedDate = dateControl.value;
    navigator.clipboard.writeText(selectedDate).then(() => {
      alert('Date and time copied to clipboard!');
    })
      .catch(err => {
        console.error('Unable to copy: ', err);
      });
    
    updateDayDisplay(selectedDate);
  });

  function getDayOfWeek(dateString:string) {
    const date = new Date(dateString);
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return days[date.getDay()];
  }

  function updateDayDisplay(dateString: string) {
    if (dayDisplay) {
      const dayOfWeek = getDayOfWeek(dateString);
      dayDisplay.textContent = `This date is a ${dayOfWeek}`;
    } else {
      console.error("Day display element not found");
    }
  }

  return dateControl;
}

