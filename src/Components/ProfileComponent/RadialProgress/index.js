import React from 'react';
import Styles from './index.module.scss';

const RadialProgress = ({ text, color, level }) => (

  <div
    className={`${Styles.ProgressPieChart} ${
      level > 50 ? Styles.gt50 : ''
    }`}
    style={{
      ...(level > 50 ? { backgroundColor: color } : ''),
    }}
    data-percent={51}
  >
    <div className={Styles.PpcProgress}>
      <div
        className={Styles.PpcProgressFill}
        style={{
          ...(level < 50 && { backgroundColor: color }),
          transform: `rotate(${(360 * level) / 100}deg)`,
        }}
      />
    </div>
    <div className={Styles.PpcPercents}>
      <div className={Styles.PpcPercentsWrapper}>
        <span style={{ color: `${color}` }}>
          {level}
          %
        </span>
        <p className={Styles.Text} style={{ color: `${color}` }}>
          {text}
        </p>
      </div>
    </div>
  </div>

);

export default RadialProgress;
