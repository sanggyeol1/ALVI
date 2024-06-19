import React, { useState } from 'react';
import './SelectionSort.css';

const SelectionSort = () => {
  const [array, setArray] = useState([5, 3, 8, 6, 2, 7, 4, 1]);
  const [current, setCurrent] = useState(null);
  const [minIndex, setMinIndex] = useState(null);
  const [isSorting, setIsSorting] = useState(false);

  const selectionSort = async (arr) => {
    setIsSorting(true);
    for (let i = 0; i < arr.length - 1; i++) {
      let minIdx = i;

      for (let j = i + 1; j < arr.length; j++) {
        if (arr[j] < arr[minIdx]) {
          minIdx = j;
        }

        setCurrent(j);
        setMinIndex(minIdx);

        // 잠시 멈추어 시각화 효과를 줍니다.
        await new Promise((resolve) => setTimeout(resolve, 300));
        setArray([...arr]);
      }

      if (minIdx !== i) {
        [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]];
        setArray([...arr]);
      }
    }
    setCurrent(null);
    setMinIndex(null);
    setIsSorting(false);
  };

  const handleStart = () => {
    selectionSort([...array]);
  };

  return (
    <div>
      <h2 className='title'>선택 정렬 시각화</h2>
      <button class="btn btn-primary" onClick={handleStart} disabled={isSorting}>
        {isSorting ? '정렬 중...' : '정렬 시작'}
      </button>
      <div className="array-container">
        {array.map((value, index) => (
          <div
            key={index}
            className={`array-bar ${
              index === current ? 'current' : index === minIndex ? 'minIndex' : ''
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

export default SelectionSort;
