import React, { Component } from "react";
import Styles from "./RadialProgress.module.scss";

class RadialProgress extends Component {
  componentDidMount() {
    const percent = parseInt(document.querySelector('.' + Styles.ProgressPieChart).getAttribute('data-percent'))
    if (360 * percent / 100 > 50)
      document.querySelector('.' + Styles.ProgressPieChart).classList.add(Styles.gt50)
    document.querySelector('.' + Styles.PpcProgressFill).style.transform = "rotate(" + 360 * percent / 100 + 'deg)';
    document.querySelector('.' + Styles.PpcPercents + ' span').innerHTML = percent + '%';
  }
  render() {
    return (
      <>
        <div className={Styles.ProgressPieChart} data-percent="5">
          <div className={Styles.PpcProgress}>
            <div className={Styles.PpcProgressFill}></div>
          </div>
          <div className={Styles.PpcPercents}>
            <div className={Styles.PpcPercentsWrapper}>
              <span>%</span>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default RadialProgress;
