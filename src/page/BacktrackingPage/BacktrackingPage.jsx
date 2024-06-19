import { CheckerBoard } from "../../components/Checkerboard/Checkerboard";
import { nqueen } from "../../utilities/nqueen";
import "./BackTrackingPage.css";
import { useState } from "react";

function BackTrackingPage() {
  const [count, setCount] = useState(2);
  const [result, setResult] = useState("");
  const [queenPos, setQueenPos] = useState([]);

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-9 chessBoardArea" style={{ padding: "3vh" }}>
          <div className="row">
            <div className="col-md-12">
              <CheckerBoard size={count} queenPositions={queenPos} />
            </div>
          </div>
          <div className="row">
            <div
              className="col-md-12 result"
            >
              {result}
            </div>
          </div>
        </div>
        <div className="col-md-3 chessBoardArea" style={{ padding: "3vh" }}>
          <div className="row">
            <div className="col-md-12">
              <h3>Board Size:</h3>
              <input
                type="number"
                min="2"
                max="8"
                value={count}
                class="form-control"
                onChange={(v) => {
                  console.log(v.target.value);
                  setCount(parseInt(v.target.value, 10));
                }}
              />
              <button
                class="btn btn-secondary mt-10"
                type="button"
                onClick={() => placeQueens(setQueenPos, count, setResult)}
              >
                배치 시작
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const placeQueens = async (setQueenPos, count, setResult) => {
  setResult("");
  const queenPos = [];
  const solution = await nqueen(count, queenPos, 0, setQueenPos);
  if (solution.solved) {
    setResult("Solved! All queens are placed in non-attacking positions!");
  } else {
    setResult("Cannot find safe positions for all the queens!");
  }
};

export default BackTrackingPage;