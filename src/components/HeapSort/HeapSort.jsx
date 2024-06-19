import React, { useState } from 'react';
import './HeapSort.css';

const HeapSort = () => {
  const [array, setArray] = useState([11, 5, 3, 12, 8, 6, 10, 2, 7, 4, 1, 9]);
  const [isSorting, setIsSorting] = useState(false);

  const heapSort = async (arr) => {
    setIsSorting(true);

    // Build max heap
    for (let i = Math.floor(arr.length / 2) - 1; i >= 0; i--) {
      await heapify(arr, arr.length, i);
    }

    // Extract elements from heap one by one
    for (let i = arr.length - 1; i > 0; i--) {
      [arr[0], arr[i]] = [arr[i], arr[0]]; // Swap root with last element
      setArray([...arr]);
      await heapify(arr, i, 0); // Heapify root element
    }

    setIsSorting(false);
  };

  const heapify = async (arr, n, i) => {
    let largest = i;
    let left = 2 * i + 1;
    let right = 2 * i + 2;

    if (left < n && arr[left] > arr[largest]) {
      largest = left;
    }

    if (right < n && arr[right] > arr[largest]) {
      largest = right;
    }

    if (largest !== i) {
      [arr[i], arr[largest]] = [arr[largest], arr[i]];
      setArray([...arr]);
      await new Promise((resolve) => setTimeout(resolve, 300));
      await heapify(arr, n, largest);
    }
  };

  const handleStart = () => {
    heapSort([...array]);
  };

  return (
    <div>
      <h2 className='title'>힙 정렬 시각화</h2>
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

export default HeapSort;
