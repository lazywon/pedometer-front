import React, { useCallback, useEffect, useState } from 'react';
import styles from './calendar.module.css';

const Calendar = () => {
  const weekArr = ['일', '월', '화', '수', '목', '금', '토'];
  const year = 2022;
  const month = 8;
  const lastDate = new Date(year, month, 0).getDate();
  const firstDay = new Date(year, month - 1, 1).getDay();
  const row = Math.ceil((firstDay + 31) / 7);
  const [cell, setCell] = useState<number[][]>([]);

  const returnDay = () => {
    let cnt = 1;
    const cellArr: number[][] = [];

    for (let i = 0; i < row; i++) {
      const rowArr: number[] = [];

      for (let j = 0; j < 7; j++) {
        if ((i === 0 && j < firstDay) || cnt > lastDate) {
          rowArr.push(0);
        } else {
          rowArr.push(cnt);
          cnt++;
        }
      }
      cellArr.push(rowArr);
    }
    setCell(cellArr);
    console.log(cell);
  };

  useEffect(() => {
    returnDay();
  }, []);

  return (
    <div>
      <table>
        <colgroup>
          <col />
          <col />
          <col />
          <col />
          <col />
          <col />
          <col />
        </colgroup>
        <caption>
          <span>{month}</span>월
        </caption>
        <tbody>
          <tr>
            {weekArr.map((day, i) => (
              <td key={i}>{day}</td>
            ))}
          </tr>
          {cell.map((row, i) => (
            <tr key={i}>
              {row.map((val, i) =>
                val ? <td key={i}>{val}</td> : <td key={i}></td>,
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Calendar;
