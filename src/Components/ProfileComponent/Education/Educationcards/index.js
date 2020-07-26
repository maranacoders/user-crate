import React from 'react';
import Styles from './index.module.scss';

const EducationCard = (props) => {
  const { children, icon } = props;
  return (
    <div className={Styles.Card}>
      <div className={Styles.CardContent}>
        <center>
          {icon && (
          <div className={Styles.ImgHolder}>
            <img
              className={Styles.CardImage}
              src={icon}
              alt="svg"
            />

          </div>
          )}
          <h6 className={Styles.CardTitle}>Primary Education</h6>
          <div className={Styles.Cardbody}>
            <p className={Styles.Description}>{children}</p>
          </div>
        </center>
      </div>
    </div>
  );
};
export default EducationCard;
