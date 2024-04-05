function updateClocks() {
    const now = new Date();
  
    // Digital clock
    const digitalClock = document.getElementById('digital-clock');
    digitalClock.textContent = now.toLocaleTimeString();
  
    // Analog clock
    const hourHand = document.getElementById('hour');
    const minuteHand = document.getElementById('minute');
    const secondHand = document.getElementById('second');
  
    const hours = now.getHours() % 12; // Convert to 12-hour format
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
  
    const hourDegrees = (hours * 30) + (0.5 * minutes); // 30 degrees per hour, 0.5 degrees per minute
    const minuteDegrees = (minutes * 6) + (0.1 * seconds); // 6 degrees per minute, 0.1 degrees per second
    const secondDegrees = (seconds * 6) // 6 degrees per second
  
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;
    minuteHand.style.transform = `rotate(${minuteDegrees}deg)`;
    secondHand.style.transform = `rotate(${secondDegrees}deg)`;
  }
  
  // Run the function every second
  setInterval(updateClocks, 1000);
  
  // Run once immediately to avoid delay
  updateClocks();
  