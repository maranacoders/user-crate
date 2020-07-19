import React, { Component } from 'react';
import Styles from './RadialProgress.module.scss';

class RadialProgress extends Component {
  componentDidMount() {
    const { color } = this.props;
    const percent = parseInt(
      document
        .querySelector(`.${Styles.ProgressPieChart}`)
        .getAttribute('data-percent'),
      10,
    );
    if (360 * (percent / 100) > 50) {
      document
        .querySelector(`.${Styles.ProgressPieChart}`)
        .classList.add(Styles.gt50);
      document.querySelector(`.${Styles.gt50}`).style.backgroundColor = color;
    }
    document.querySelector(
      `.${Styles.PpcProgressFill}`,
    ).style.transform = `rotate(${(360 * percent) / 100}deg)`;
    document.querySelector(
      `.${Styles.PpcProgressFill}`,
    ).style.backgroundColor = color;
    document.querySelector(
      `.${Styles.PpcPercents} span`,
    ).innerHTML = `${percent}%`;
  }

  render() {
    const { text, color, level } = this.props;

    return (
      <>
        <div className={Styles.ProgressPieChart} data-percent={level}>
          <div className={Styles.PpcProgress}>
            <div className={Styles.PpcProgressFill} />
          </div>
          <div className={Styles.PpcPercents}>
            <div className={Styles.PpcPercentsWrapper}>
              <span style={{ color: `${color}` }}>%</span>
              <p className={Styles.Text} style={{ color: `${color}` }}>
                {text}
              </p>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default RadialProgress;
