import React, { useState } from "react";


export default function CodeEditor(props) {
  const [code, setCode] = useState(`public boolean searchMatrix(int[][] matrix, int target) {
    int col = matrix[0].length-1;
    int row = 0;

    while (col >= 0 && row < matrix.length) {
        if (target > matrix[row][col]) {
            row++;
        } else if (target < matrix[row][col]) {
            col--;
        } else {
            return true;
        }
    }
    return false;
}`);
  return (
    <div>
      {code}
    </div>
  );
}