import React, { useState } from 'react';
import './GreedyPage.css';

const activities = [
  { id: 1, start: 1, end: 3 },
  { id: 2, start: 2, end: 5 },
  { id: 3, start: 4, end: 7 },
  { id: 4, start: 1, end: 8 },
  { id: 5, start: 5, end: 9 },
  { id: 6, start: 8, end: 10 },
  { id: 7, start: 9, end: 11 },
  { id: 8, start: 3, end: 4 },
  { id: 9, start: 6, end: 8 },
  { id: 10, start: 7, end: 9 },
  { id: 11, start: 0, end: 2 },
  { id: 12, start: 11, end: 13 },
  { id: 13, start: 12, end: 14 },
  { id: 14, start: 10, end: 12 },
  { id: 15, start: 3, end: 6 },
];

const greedyActivitySelector = (activities, callback) => {
  let selectedActivities = [];
  let lastEndTime = 0;

  activities.sort((a, b) => a.end - b.end);

  const step = (i) => {
    if (i < activities.length) {
      const activity = activities[i];
      if (activity.start >= lastEndTime) {
        selectedActivities.push(activity);
        lastEndTime = activity.end;
        callback([...selectedActivities]);
      }
      setTimeout(() => step(i + 1), 300); 
    }
  };

  step(0);
};

const GreedyPage = () => {
  const [selected, setSelected] = useState([]);

  const handleSelectActivities = () => {
    setSelected([]); // Reset selected activities
    greedyActivitySelector(activities, setSelected);
  };

  return (
    <div className="greedy-page">
      <h1>Activity Selection Problem</h1>
      <div className="activities">
        {activities.map((activity) => (
          <div key={activity.id} className="activity">
            일정 {activity.id}: ({activity.start}시 ~ {activity.end}시)
          </div>
        ))}
      </div>
      <button style={{marginTop:"30px"}} onClick={handleSelectActivities}>Select Activities</button>
      <h2>Selected Activities</h2>
      <div className="selected-activities">
        {selected.map((activity) => (
          <div key={activity.id} className="activity selected">
            일정 {activity.id}: ({activity.start}시 ~ {activity.end}시)
          </div>
        ))}
      </div>
      
    </div>
  );
};

export default GreedyPage;
