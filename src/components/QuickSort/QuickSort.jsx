import React, { useState } from 'react';
import './QuickSort.css';

const QuickSort = () => {
  const [array, setArray] = useState([11, 5, 3, 12, 8, 6, 10, 2, 7, 4, 1, 9]);
  const [isSorting, setIsSorting] = useState(false);
  const [pivotIndex, setPivotIndex] = useState(null);
  const [leftIndex, setLeftIndex] = useState(null);
  const [rightIndex, setRightIndex] = useState(null);

  const quickSort = async (arr, low, high) => {
    if (low < high) {
      let pi = await partition(arr, low, high);
      await Promise.all([
        quickSort(arr, low, pi - 1),
        quickSort(arr, pi + 1, high)
      ]);
    }
  };

  const partition = async (arr, low, high) => {
    let pivot = arr[high];
    setPivotIndex(high);

    let i = low - 1;
    for (let j = low; j <= high - 1; j++) {
      setLeftIndex(j);
      setRightIndex(high);

      if (arr[j] < pivot) {
        i++;
        [arr[i], arr[j]] = [arr[j], arr[i]];
        setArray([...arr]);
        await new Promise((resolve) => setTimeout(resolve, 300));
      }
    }

    [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
    setArray([...arr]);
    await new Promise((resolve) => setTimeout(resolve, 300));

    setPivotIndex(null);
    setLeftIndex(null);
    setRightIndex(null);
    return i + 1;
  };

  const handleStart = () => {
    setIsSorting(true);
    quickSort([...array], 0, array.length - 1).then(() => {
      setIsSorting(false);
    });
  };

  return (
    <div>
      <h2 className='title'>퀵 정렬 시각화</h2>
      <button class="btn btn-primary" onClick={handleStart} disabled={isSorting}>
        {isSorting ? '정렬 중...' : '정렬 시작'}
      </button>
      <div className="array-container">
        {array.map((value, index) => (
          <div
            key={index}
            className={`array-bar ${
              index === pivotIndex ? 'pivot' : index === leftIndex ? 'left' : index === rightIndex ? 'right' : ''
            }`}
            style={{ height: `${value * 20}px` }}
          >
            {value}
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuickSort;
