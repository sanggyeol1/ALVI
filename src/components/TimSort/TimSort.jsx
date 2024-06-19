import React, { useState } from 'react';
import './TimSort.css';

const TimSort = () => {
  const [array, setArray] = useState([11, 5, 3, 12, 8, 13, 6,  10, 2, 15, 7, 4, 14, 1, 9]);
  const [isSorting, setIsSorting] = useState(false);
  const [runs, setRuns] = useState([]);

  const timSort = async (arr) => {
    setIsSorting(true);
    const minRun = 4;
    let tempRuns = [];

    // Step 1: Sort individual subarrays of size minRun using insertion sort
    for (let i = 0; i < arr.length; i += minRun) {
      let run = arr.slice(i, i + minRun);
      await insertionSort(run);
      tempRuns.push(run);
      updateArrayWithRuns(tempRuns);
      await new Promise((resolve) => setTimeout(resolve, 500));
    }

    // Flatten the tempRuns array into a single array
    let sortedArray = tempRuns.flat();

    // Step 2: Merge runs together
    let size = minRun;
    while (size < sortedArray.length) {
      for (let start = 0; start < sortedArray.length; start += 2 * size) {
        const mid = Math.min(start + size - 1, sortedArray.length - 1);
        const end = Math.min(start + 2 * size - 1, sortedArray.length - 1);
        if (mid < end) {
          await merge(sortedArray, start, mid, end);
        }
      }
      size *= 2;
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

  const merge = async (arr, start, mid, end) => {
    const left = arr.slice(start, mid + 1);
    const right = arr.slice(mid + 1, end + 1);

    let i = 0, j = 0, k = start;

    while (i < left.length && j < right.length) {
      if (left[i] <= right[j]) {
        arr[k++] = left[i++];
      } else {
        arr[k++] = right[j++];
      }
    }

    while (i < left.length) {
      arr[k++] = left[i++];
    }

    while (j < right.length) {
      arr[k++] = right[j++];
    }
  };

  const updateArrayWithRuns = (tempRuns) => {
    let tempArray = tempRuns.flat();
    setArray(tempArray);
  };

  const handleStart = () => {
    timSort([...array]);
  };

  return (
    <div>
      <h2 className='title'>Tim 정렬 시각화</h2>
      <button className="btn btn-primary" onClick={handleStart} disabled={isSorting}>
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
