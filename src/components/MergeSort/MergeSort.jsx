import React, { useState } from 'react';
import './MergeSort.css';

const MergeSort = () => {
  const [array, setArray] = useState([5, 3, 8, 6, 2, 7, 4, 1]);
  const [isSorting, setIsSorting] = useState(false);

  const merge = async (arr, l, m, r) => {
    const n1 = m - l + 1;
    const n2 = r - m;

    const L = new Array(n1);
    const R = new Array(n2);

    for (let i = 0; i < n1; i++) L[i] = arr[l + i];
    for (let j = 0; j < n2; j++) R[j] = arr[m + 1 + j];

    let i = 0, j = 0, k = l;

    while (i < n1 && j < n2) {
      if (L[i] <= R[j]) {
        arr[k] = L[i];
        i++;
      } else {
        arr[k] = R[j];
        j++;
      }
      k++;
      setArray([...arr]);
      await new Promise((resolve) => setTimeout(resolve, 300));
    }

    while (i < n1) {
      arr[k] = L[i];
      i++;
      k++;
      setArray([...arr]);
      await new Promise((resolve) => setTimeout(resolve, 300));
    }

    while (j < n2) {
      arr[k] = R[j];
      j++;
      k++;
      setArray([...arr]);
      await new Promise((resolve) => setTimeout(resolve, 300));
    }
  };

  const mergeSort = async (arr, l, r) => {
    if (l >= r) return;

    const m = l + Math.floor((r - l) / 2);
    await mergeSort(arr, l, m);
    await mergeSort(arr, m + 1, r);
    await merge(arr, l, m, r);
  };

  const handleStart = () => {
    setIsSorting(true);
    mergeSort([...array], 0, array.length - 1).then(() => {
      setIsSorting(false);
    });
  };

  return (
    <div>
      <h2 className='title'>합병 정렬 시각화</h2>
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

export default MergeSort;
