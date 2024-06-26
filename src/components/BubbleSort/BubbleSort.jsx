import React, { useState } from 'react';
import './BubbleSort.css';

const BubbleSort = () => {
  const [array, setArray] = useState([5, 3, 8, 6, 2, 7, 4, 1]);
  const [isSorting, setIsSorting] = useState(false);
  const [current, setCurrent] = useState(null);
  const [next, setNext] = useState(null);

  const bubbleSort = async (arr) => {
    setIsSorting(true);
    let len = arr.length;
    for (let i = 0; i < len - 1; i++) {
      for (let j = 0; j < len - i - 1; j++) {
        setCurrent(j);
        setNext(j + 1);
        if (arr[j] > arr[j + 1]) {
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
          setArray([...arr]);
        }
        await new Promise((resolve) => setTimeout(resolve, 300));
      }
    }
    setCurrent(null);
    setNext(null);
    setIsSorting(false);
  };

  const handleStart = () => {
    bubbleSort([...array]);
  };

  return (
    <div>
      <h2 className='title'>버블 정렬 시각화</h2>
      <button 
        class="btn btn-primary"
        onClick={handleStart} disabled={isSorting}>
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

export default BubbleSort;
