import React, { useState, useEffect } from 'react';
import './BubbleSort.style.css';

const BubbleSort = () => {
  const [array, setArray] = useState([34, 23, 12, 45, 9, 1, 24, 36, 10, 5]);
  const [currentPair, setCurrentPair] = useState([]);
  const [sorted, setSorted] = useState(false);
  const [isSorting, setIsSorting] = useState(false);

  useEffect(() => {
    if (isSorting) {
      bubbleSort(array);
    }
  }, [isSorting]);

  const bubbleSort = async (arr) => {
    let n = arr.length;
    let sortedArray = [...arr];
    for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < n - i - 1; j++) {
        setCurrentPair([j, j + 1]);
        if (sortedArray[j] > sortedArray[j + 1]) {
          let temp = sortedArray[j];
          sortedArray[j] = sortedArray[j + 1];
          sortedArray[j + 1] = temp;
          setArray([...sortedArray]);
        }
        await new Promise((resolve) => setTimeout(resolve, 500));
      }
    }
    setCurrentPair([]);
    setSorted(true);
    setIsSorting(false);
  };

  return (
    <div className="container">
      <button
        className="start-button"
        onClick={() => {
          setIsSorting(true);
          setSorted(false);
        }}
        disabled={isSorting}
      >
        {sorted ? 'Sorted!' : 'Start Sorting'}
      </button>
      <div className="array-container">
        {array.map((value, index) => (
          <div
            key={index}
            className={`array-bar ${currentPair.includes(index) ? 'current' : ''}`}
            style={{ height: `${value * 10}px` }}
          >
            {value}
          </div>
        ))}
      </div>
    </div>
  );
};

export default BubbleSort;
