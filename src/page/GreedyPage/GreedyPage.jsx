import React, { useState } from 'react';
import './GreedyPage.css'; // Add some basic styles

const activities = [
  { id: 1, start: 1, end: 3 },
  { id: 2, start: 2, end: 5 },
  { id: 3, start: 4, end: 7 },
  { id: 4, start: 1, end: 8 },
  { id: 5, start: 5, end: 9 },
  { id: 6, start: 8, end: 10 },
  { id: 7, start: 9, end: 11 },
];

const greedyActivitySelector = (activities) => {
  let selectedActivities = [];
  let lastEndTime = 0;

  activities.sort((a, b) => a.end - b.end);

  for (let activity of activities) {
    if (activity.start >= lastEndTime) {
      selectedActivities.push(activity);
      lastEndTime = activity.end;
    }
  }

  return selectedActivities;
};

const GreedyPage = () => {
  const [selected, setSelected] = useState([]);

  const handleSelectActivities = () => {
    const selectedActivities = greedyActivitySelector(activities);
    setSelected(selectedActivities);
  };

  return (
    <div className="greedy-page">
      <h1>Activity Selection Problem</h1>
      <div className="activities">
        {activities.map((activity) => (
          <div key={activity.id} className="activity">
            Activity {activity.id}: ({activity.start}, {activity.end})
          </div>
        ))}
      </div>
      <button onClick={handleSelectActivities}>Select Activities</button>
      <h2>Selected Activities</h2>
      <div className="selected-activities">
        {selected.map((activity) => (
          <div key={activity.id} className="activity selected">
            Activity {activity.id}: ({activity.start}, {activity.end})
          </div>
        ))}
      </div>
    </div>
  );
};

export default GreedyPage;
