import Calendar from 'components/calendar';
import React from 'react';
import styles from './App.module.css';

function App() {
  return (
    <div className={styles.app}>
      <h1>나의 달성 현황</h1>
      <p>
        김페코님
        <br />
        남은 구간을 달성해 <br />더 많은 페이코인을 모으세요!
      </p>
      <span>페이코인과 함께 건강한 걷기 습관을 만들어 보세요</span>
      <Calendar />
    </div>
  );
}

export default App;
