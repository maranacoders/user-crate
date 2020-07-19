import React from 'react';
import Styles from './ProgressBar.module.scss';

const ProgressBar = ({ type, text, level }) => (
  <div>
    {type === 'aqua' && (
      <div>
        <div className={Styles.ProgressTitle}>{text}</div>
        <div className={`${Styles.progress} ${Styles.aqua}`} data-width="0%">
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
    )}

    {type === 'copper' && (
      <div>
        <div className={Styles.ProgressTitle}>{text}</div>
        <div className={`${Styles.progress} ${Styles.copper}`} data-width="0%">
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
    )}

    {type === 'candy' && (
      <div>
        <div className={Styles.ProgressTitle}>{text}</div>
        <div className={`${Styles.progress} ${Styles.candy}`} data-width="0%">
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
    )}

    {type === 'neon' && (
      <div>
        <div className={Styles.ProgressTitle}>{text}</div>
        <div className={`${Styles.progress} ${Styles.neon}`} data-width="0%">
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
    )}

    {type === 'shine' && (
      <div>
        <div className={Styles.ProgressTitle}>{text}</div>
        <div className={`${Styles.progress} ${Styles.shine}`} data-width="0%">
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
    )}

    {type === 'zigzag' && (
      <div>
        <div className={Styles.ProgressTitle}>{text}</div>
        <div className={`${Styles.progress} ${Styles.zigzag}`} data-width="0%">
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
    )}

    {type === 'diamond' && (
      <div>
        <div className={Styles.ProgressTitle}>{text}</div>
        <div className={`${Styles.progress} ${Styles.diamond}`} data-width="0%">
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
    )}

    {type === 'hearts' && (
      <div>
        <div className={Styles.ProgressTitle}>{text}</div>
        <div className={`${Styles.progress} ${Styles.hearts}`} data-width="0%">
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
    )}

    {type === 'sparkle' && (
      <div>
        <div className={Styles.ProgressTitle}>{text}</div>
        <div className={`${Styles.progress} ${Styles.sparkle}`} data-width="0%">
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
    )}
  </div>
);

export default ProgressBar;
