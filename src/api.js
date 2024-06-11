import axios from 'axios';

const API_URL = 'http://localhost:5000';

export const scheduleReminder = (title, reminderTime) => {
  return axios.post(`${API_URL}/schedule-reminder`, { title, reminderTime });
};
