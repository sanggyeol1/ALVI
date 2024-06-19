import React, { useState } from 'react';
import './InsertionSort.css';

const InsertionSort = () => {
  const [array, setArray] = useState([5, 3, 8, 6, 2, 7, 4, 1]);
  const [current, setCurrent] = useState(null);
  const [next, setNext] = useState(null);
  const [isSorting, setIsSorting] = useState(false);

  const insertionSort = async (arr) => {
    setIsSorting(true);
    for (let i = 1; i < arr.length; i++) {
      let key = arr[i];
      let j = i - 1;

      while (j >= 0 && arr[j] > key) {
        arr[j + 1] = arr[j];
        j = j - 1;

        setCurrent(j + 1);
        setNext(j);

        // 잠시 멈추어 시각화 효과를 줍니다.
        await new Promise((resolve) => setTimeout(resolve, 300));
        setArray([...arr]);
      }
      arr[j + 1] = key;
      setArray([...arr]);
    }
    setCurrent(null);
    setNext(null);
    setIsSorting(false);
  };

  const handleStart = () => {
    insertionSort([...array]);
  };

  return (
    <div>
      <h2 className='title'>삽입 정렬 시각화</h2>
      <button class="btn btn-primary" onClick={handleStart} disabled={isSorting}>
        {isSorting ? '정렬 중...' : '정렬 시작'}
      </button>
      <div className="array-container">
        {array.map((value, index) => (
          <div
            key={index}
            className={`array-bar ${
              index === current ? 'current' : index === next ? 'next' : ''
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

export default InsertionSort;
