import React, { useState } from 'react';
import './BinarySearch.css';

const BinarySearch = () => {
  const [array, setArray] = useState([]);
  const [target, setTarget] = useState('');
  const [steps, setSteps] = useState([]);
  const [currentStep, setCurrentStep] = useState(0);
  const [searchCount, setSearchCount] = useState(0);

  const handleArrayChange = (e) => {
    setArray(e.target.value.split(',').map(Number).sort((a, b) => a - b));
  };

  const handleTargetChange = (e) => {
    setTarget(Number(e.target.value));
  };

  const handleSearch = () => {
    const steps = [];
    let left = 0;
    let right = array.length - 1;
    let count = 0;

    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      steps.push({ left, right, mid, midValue: array[mid] });
      count++;

      if (array[mid] === target) {
        break;
      } else if (array[mid] < target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }

    setSteps(steps);
    setCurrentStep(0);
    setSearchCount(count);
  };

  const nextStep = () => {
    setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1));
  };

  const prevStep = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 0));
  };

  return (
    <div className="binary-search">
      <h1>Binary Search Visualization</h1>
      <div className="input-container">
        <label>Array (comma separated):</label>
        <input type="text" onChange={handleArrayChange} className="input-field" />
      </div>
      <div className="input-container">
        <label>Target:</label>
        <input type="number" onChange={handleTargetChange} className="input-field" />
      </div>
      <button onClick={handleSearch} className="search-button">Search</button>
      <div className="array-visualization">
        {array.map((num, index) => {
          let className = 'array-element';
          if (steps[currentStep]) {
            if (index < steps[currentStep].left || index > steps[currentStep].right) {
              className += ' faded';
            } else if (index === steps[currentStep].mid) {
              className += ' highlight-mid';
            } else if (index < steps[currentStep].mid) {
              className += ' highlight-left';
            } else if (index > steps[currentStep].mid) {
              className += ' highlight-right';
            }
          }
          return (
            <div key={index} className={className}>
              {num}
            </div>
          );
        })}
      </div>
      <div className="controls">
        <button onClick={prevStep} disabled={currentStep === 0} className="control-button">Previous Step</button>
        <button onClick={nextStep} disabled={currentStep === steps.length - 1} className="control-button">Next Step</button>
      </div>
      <div className="search-count">
        <p>Search Count: {searchCount}</p>
      </div>
    </div>
  );
};

export default BinarySearch;
