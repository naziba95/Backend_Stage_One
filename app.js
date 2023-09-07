const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Create an array for days of the week
const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

// Define a function to get the current day of the week
function getCurrentDayOfWeek() {
  const currentDate = new Date();
  const currentDay = daysOfWeek[currentDate.getUTCDay()];
  return currentDay;
}

// Define a function to get the current UTC time
function getCurrentUtcTime() {
  // Get the current UTC time as an ISO string
  const currentUtcTime = new Date().toISOString();
  return currentUtcTime;
}

// GET endpoint to handle requests
app.get('/api', (req, res) => {
  const slackName = req.query.slack_name;
  const track = req.query.track || 'unknown track';

  // Create the JSON response
  const jsonResponse = {
    slack_name: slackName,
    current_day: getCurrentDayOfWeek(),
    utc_time: getCurrentUtcTime(),
    track: track,
    github_file_url: 'https://github.com/username/repo/blob/main/file_name.ext',
    github_repo_url: 'https://github.com/naziba95/Backend_Stage_One',
    status_code: 200,
  };

  // return the JSON response
  res.json(jsonResponse);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});