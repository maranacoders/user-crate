import React from 'react';
import Styles from './index.module.scss';

const ProgressBar = ({ type, text, level }) => (
    <div>
      <div className={Styles.ProgressTitle}>{text}</div>
      <div
        className={`${Styles.progress}
      ${type === 'aqua' && Styles.aqua}
      ${type === 'copper' && Styles.copper}
      ${type === 'candy' && Styles.candy}
      ${type === 'neon' && Styles.neon}
      ${type === 'zigzag' && Styles.zigzag}
      ${type === 'diamond' && Styles.diamond}
      ${type === 'shine' && Styles.shine}
      ${type === 'hearts' && Styles.hearts}
      ${type === 'sparkle' && Styles.sparkle}
      ${!type && Styles.plain}`}
        data-width="0%"
      >
        <div className={Styles.ProgressText}>
          {level}
          %
        </div>
        <div className={Styles.ProgressBars} style={{ width: `${level}%` }}>
          <div className={Styles.ProgressText}>
            {level}
            %
          </div>
        </div>
      </div>
    </div>
  </div>
);
export default ProgressBar;
