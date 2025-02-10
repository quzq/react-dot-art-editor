import React, { useState } from "react";
import "./App.css";

const GRID_SIZE = 8; // 8x8 グリッド
const INITIAL_CELL = 0; // 0: 透明

const App: React.FC = () => {
  // 初期グリッドはすべて透明（0）で初期化
  const initialGrid: number[][] = Array.from({ length: GRID_SIZE }, () =>
    Array.from({ length: GRID_SIZE }, () => INITIAL_CELL)
  );
  const [grid, setGrid] = useState<number[][]>(initialGrid);

  // ユーザーが選べる 3 色（例として赤、緑、青）
  const [color1, setColor1] = useState<string>("#ff0000");
  const [color2, setColor2] = useState<string>("#00ff00");
  const [color3, setColor3] = useState<string>("#0000ff");

  // 現在選択中のペン（0: 透明、1～3: 各色）
  const [currentPen, setCurrentPen] = useState<number>(1);
  const [isDrawing, setIsDrawing] = useState<boolean>(false);

  // ペン番号に対応する実際の色（透明の場合はチェック柄で表示するので定義しない）
  const penColorMap: { [key: number]: string } = {
    1: color1,
    2: color2,
    3: color3,
  };

  // セルの状態を更新する関数
  const updateCell = (row: number, col: number) => {
    setGrid((prevGrid) =>
      prevGrid.map((r, rowIndex) =>
        r.map((cell, colIndex) =>
          rowIndex === row && colIndex === col ? currentPen : cell
        )
      )
    );
  };

  const handleCellMouseDown = (row: number, col: number) => {
    setIsDrawing(true);
    updateCell(row, col);
  };

  const handleCellMouseEnter = (row: number, col: number) => {
    if (isDrawing) {
      updateCell(row, col);
    }
  };

  const handleMouseUp = () => {
    setIsDrawing(false);
  };

  // グリッドの状態を JSON 文字列に変換してテキスト出力
  const gridToText = (): string => JSON.stringify(grid);

  return (
    <div className="App" onMouseUp={handleMouseUp}>
      <div className="controls">
        <div className="color-selectors">
          <label>
            色1:
            <input
              type="color"
              value={color1}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setColor1(e.target.value)
              }
            />
          </label>
          <label>
            色2:
            <input
              type="color"
              value={color2}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setColor2(e.target.value)
              }
            />
          </label>
          <label>
            色3:
            <input
              type="color"
              value={color3}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setColor3(e.target.value)
              }
            />
          </label>
        </div>
        <div className="pen-selector">
          <p>ペン選択:</p>
          <button
            className={currentPen === 0 ? "selected" : ""}
            onClick={() => setCurrentPen(0)}
            style={{ backgroundColor: "white", border: "1px solid #ccc" }}
          >
            透明
          </button>
          <button
            className={currentPen === 1 ? "selected" : ""}
            onClick={() => setCurrentPen(1)}
            style={{ backgroundColor: color1 }}
          >
            色1
          </button>
          <button
            className={currentPen === 2 ? "selected" : ""}
            onClick={() => setCurrentPen(2)}
            style={{ backgroundColor: color2 }}
          >
            色2
          </button>
          <button
            className={currentPen === 3 ? "selected" : ""}
            onClick={() => setCurrentPen(3)}
            style={{ backgroundColor: color3 }}
          >
            色3
          </button>
        </div>
      </div>
      <div className="grid">
        {grid.map((row, rowIndex) => (
          <div className="row" key={`row-${rowIndex}`}>
            {row.map((cell, colIndex) => {
              // 透明セルの場合はチェック柄（黒と白の網目）を表示
              const cellStyle =
                cell === 0
                  ? {
                      backgroundImage:
                        "linear-gradient(45deg, #fff 25%, #000 25%, #000 75%, #fff 75%, #fff), linear-gradient(45deg, #fff 25%, #000 25%, #000 75%, #fff 75%, #fff)",
                      backgroundSize: "10px 10px",
                      backgroundPosition: "0 0, 5px 5px",
                    }
                  : { backgroundColor: penColorMap[cell] };

              return (
                <div
                  key={`cell-${rowIndex}-${colIndex}`}
                  className="cell"
                  onMouseDown={() => handleCellMouseDown(rowIndex, colIndex)}
                  onMouseEnter={() => handleCellMouseEnter(rowIndex, colIndex)}
                  style={cellStyle}
                ></div>
              );
            })}
          </div>
        ))}
      </div>
      <div className="output">
        <h2>結果 (コピー可能なテキスト)</h2>
        <textarea readOnly value={gridToText()} rows={10} cols={50} />
      </div>
    </div>
  );
};

export default App;
