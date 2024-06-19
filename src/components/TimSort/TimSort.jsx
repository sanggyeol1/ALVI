import React, { useState } from 'react';
import './TimSort.css';

const TimSort = () => {
  const [array, setArray] = useState([5, 3, 8, 6, 2, 7, 4, 1]);
  const [isSorting, setIsSorting] = useState(false);
  const [runs, setRuns] = useState([]);

  const timSort = async (arr) => {
    setIsSorting(true);
    const minRun = 32;

    for (let i = 0; i < arr.length; i += minRun) {
      const run = arr.slice(i, i + minRun);
      await insertionSort(run);
      setRuns((prevRuns) => [...prevRuns, run]);
    }

    let sortedArray = [];
    for (let run of runs) {
      sortedArray = await merge(sortedArray, run);
      setArray([...sortedArray]);
      await new Promise((resolve) => setTimeout(resolve, 500));
    }

    setIsSorting(false);
  };

  const insertionSort = async (arr) => {
    for (let i = 1; i < arr.length; i++) {
      let key = arr[i];
      let j = i - 1;
      while (j >= 0 && arr[j] > key) {
        arr[j + 1] = arr[j];
        j = j - 1;
      }
      arr[j + 1] = key;
    }
  };

  const merge = async (left, right) => {
    let result = [];
    let i = 0, j = 0;

    while (i < left.length && j < right.length) {
      if (left[i] <= right[j]) {
        result.push(left[i]);
        i++;
      } else {
        result.push(right[j]);
        j++;
      }
    }

    while (i < left.length) {
      result.push(left[i]);
      i++;
    }

    while (j < right.length) {
      result.push(right[j]);
      j++;
    }

    return result;
  };

  const handleStart = () => {
    timSort([...array]);
  };

  return (
    <div>
      <h2 className='title'>Tim 정렬 시각화</h2>
      <button class="btn btn-primary" onClick={handleStart} disabled={isSorting}>
        {isSorting ? '정렬 중...' : '정렬 시작'}
      </button>
      <div className="array-container">
        {array.map((value, index) => (
          <div
            key={index}
            className="array-bar"
            style={{ height: `${value * 20}px` }}
          >
            {value}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TimSort;
