import React, { Component } from "react";
import Styles from "./RadialProgress.module.scss";

class RadialProgress extends Component {
    componentDidMount()
    {

            // var $ppc = document.querySelector('.progress-pie-chart'),
            //   percent = parseInt($ppc.data('percent')),
            //   deg = 360*percent/100;
            // if (percent > 50) {
            //   $ppc.addClass('gt-50');
            // }
            // document.querySelector('.PpcProgressFill').css('transform','rotate('+ deg +'deg)');
            // document.querySelector('.PpcPercents span').html(percent+'%');

    }
  render() {
    return (
      <>
        <div className={Styles.ProgressPieChart} data-percent="100">
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
