import React, { useState } from 'react';

function LISVisualizer() {
  const [arr] = useState([10, 22, 9, 33, 21, 50, 41, 60, 80]);
  const [dp, setDp] = useState(Array(arr.length).fill(1));
  const [maxLength, setMaxLength] = useState(0);

  const calculateLIS = () => {
    let newDp = [...dp];
    for (let i = 1; i < arr.length; i++) {
      for (let j = 0; j < i; j++) {
        if (arr[i] > arr[j]) {
          newDp[i] = Math.max(newDp[i], newDp[j] + 1);
        }
      }
      setDp([...newDp]);
    }
    setMaxLength(Math.max(...newDp));
  };

  return (
    <div>
      <button onClick={calculateLIS}>Calculate LIS</button>
      <div>
        <h3>DP Array:</h3>
        <pre>{JSON.stringify(dp, null, 2)}</pre>
      </div>
      <div>
        <h3>Longest Increasing Subsequence Length:</h3>
        <pre>{maxLength}</pre>
      </div>
    </div>
  );
}

export default LISVisualizer;
