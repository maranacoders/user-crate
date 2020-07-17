import React, { Component } from "react";
import Styles from "./ProgressBar.module.scss";

class ProgressBar extends Component {
  render() {
    return (
      <div>
        {this.props.type == "aqua" && (
          <div>
            <div className={Styles.ProgressTitle}>{this.props.text}</div>
            <div
              className={`${Styles.progress} ${Styles.aqua}`}
              data-width="0%"
            >
              <div className={Styles.ProgressText}>{this.props.level}%</div>
              <div
                className={Styles.ProgressBars}
                style={{ width: `${this.props.level}%` }}
              >
                <div className={Styles.ProgressText}>{this.props.level}%</div>
              </div>
            </div>
          </div>
        )}

        {this.props.type == "copper" && (
          <div>
            <div className={Styles.ProgressTitle}>{this.props.text}</div>
            <div
              className={`${Styles.progress} ${Styles.copper}`}
              data-width="0%"
            >
              <div className={Styles.ProgressText}>{this.props.level}%</div>
              <div
                className={Styles.ProgressBars}
                style={{ width: `${this.props.level}%` }}
              >
                <div className={Styles.ProgressText}>{this.props.level}%</div>
              </div>
            </div>
          </div>
        )}

        {this.props.type == "candy" && (
          <div>
            <div className={Styles.ProgressTitle}>{this.props.text}</div>
            <div
              className={`${Styles.progress} ${Styles.candy}`}
              data-width="0%"
            >
              <div className={Styles.ProgressText}>{this.props.level}%</div>
              <div
                className={Styles.ProgressBars}
                style={{ width: `${this.props.level}%` }}
              >
                <div className={Styles.ProgressText}>{this.props.level}%</div>
              </div>
            </div>
          </div>
        )}

        {this.props.type == "neon" && (
          <div>
            <div className={Styles.ProgressTitle}>{this.props.text}</div>
            <div
              className={`${Styles.progress} ${Styles.neon}`}
              data-width="0%"
            >
              <div className={Styles.ProgressText}>{this.props.level}%</div>
              <div
                className={Styles.ProgressBars}
                style={{ width: `${this.props.level}%` }}
              >
                <div className={Styles.ProgressText}>{this.props.level}%</div>
              </div>
            </div>
          </div>
        )}

        {this.props.type == "shine" && (
          <div>
            <div className={Styles.ProgressTitle}>{this.props.text}</div>
            <div
              className={`${Styles.progress} ${Styles.shine}`}
              data-width="0%"
            >
              <div className={Styles.ProgressText}>{this.props.level}%</div>
              <div
                className={Styles.ProgressBars}
                style={{ width: `${this.props.level}%` }}
              >
                <div className={Styles.ProgressText}>{this.props.level}%</div>
              </div>
            </div>
          </div>
        )}

        {this.props.type == "zigzag" && (
          <div>
            <div className={Styles.ProgressTitle}>{this.props.text}</div>
            <div
              className={`${Styles.progress} ${Styles.zigzag}`}
              data-width="0%"
            >
              <div className={Styles.ProgressText}>{this.props.level}%</div>
              <div
                className={Styles.ProgressBars}
                style={{ width: `${this.props.level}%` }}
              >
                <div className={Styles.ProgressText}>{this.props.level}%</div>
              </div>
            </div>
          </div>
        )}

        {this.props.type == "diamond" && (
          <div>
            <div className={Styles.ProgressTitle}>{this.props.text}</div>
            <div
              className={`${Styles.progress} ${Styles.diamond}`}
              data-width="0%"
            >
              <div className={Styles.ProgressText}>{this.props.level}%</div>
              <div
                className={Styles.ProgressBars}
                style={{ width: `${this.props.level}%` }}
              >
                <div className={Styles.ProgressText}>{this.props.level}%</div>
              </div>
            </div>
          </div>
        )}

        {this.props.type == "hearts" && (
          <div>
            <div className={Styles.ProgressTitle}>{this.props.text}</div>
            <div
              className={`${Styles.progress} ${Styles.hearts}`}
              data-width="0%"
            >
              <div className={Styles.ProgressText}>{this.props.level}%</div>
              <div
                className={Styles.ProgressBars}
                style={{ width: `${this.props.level}%` }}
              >
                <div className={Styles.ProgressText}>{this.props.level}%</div>
              </div>
            </div>
          </div>
        )}

        {this.props.type == "sparkle" && (
          <div>
            <div className={Styles.ProgressTitle}>{this.props.text}</div>
            <div
              className={`${Styles.progress} ${Styles.sparkle}`}
              data-width="0%"
            >
              <div className={Styles.ProgressText}>{this.props.level}%</div>
              <div
                className={Styles.ProgressBars}
                style={{ width: `${this.props.level}%` }}
              >
                <div className={Styles.ProgressText}>{this.props.level}%</div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}
export default ProgressBar;
