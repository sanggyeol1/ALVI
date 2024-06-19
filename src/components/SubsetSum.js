import React, { useState } from 'react';
import './SubsetSum.css';

function SubsetSum() {
  const [arr] = useState([3, 34, 4, 12, 5, 2, 7, 19, 11, 8, 17, 20]);
  const [target] = useState(20);
  const [subsets, setSubsets] = useState([]);
  const [current, setCurrent] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(null);

  const findSubsets = (arr, target, index, current) => {
    if (target === 0) {
      setSubsets(subs => [...subs, [...current]]);
      return;
    }

    if (index >= arr.length || target < 0) {
      return;
    }

    setCurrentIndex(index);
    setTimeout(() => {
      findSubsets(arr, target, index + 1, current);

      current.push(arr[index]);
      setCurrent([...current]);
      setCurrentIndex(index);
      setTimeout(() => {
        findSubsets(arr, target - arr[index], index + 1, current);
        current.pop();
        setCurrent([...current]);
      }, 500);
    }, 500);
  };

  return (
    <div className="container">
      <button
        className="find-button"
        onClick={() => {
          setSubsets([]);
          setCurrent([]);
          findSubsets(arr, target, 0, []);
        }}
      >
        Find Subsets
      </button>
      <div>
        <h3>Array:</h3>
        <div className="array-container">
          {arr.map((num, idx) => (
            <div
              key={idx}
              className={`array-item ${idx === currentIndex ? 'current' : ''}`}
            >
              {num}
            </div>
          ))}
        </div>
      </div>
      <div>
        <h3>Current Path:</h3>
        <div className="current-path">
          {current.map((num, idx) => (
            <div key={idx} className="path-item">
              {num}
            </div>
          ))}
        </div>
      </div>
      <div>
        <h3>Found Subsets:</h3>
        <div className="subsets-container">
          {subsets.map((subset, idx) => (
            <div key={idx} className="subset-item">
              {subset.join(', ')}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SubsetSum;
