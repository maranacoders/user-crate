import React from 'react';
import Styles from './index.module.scss';

const Education = (props) => {
  console.log(props);
  const { children } = props;

  return <div className={Styles.Wrapper}>{children}</div>;
};

const Primary = (props) => {
  const { children } = props;
  return <div className={Styles.Card}>{children}</div>;
};

const Highersecondary = (props) => {
  const { children } = props;

  return (
    <div className={Styles.Card}>
      {children}
    </div>
  );
};

const College = (props) => {
  const { children } = props;
  return <div className={Styles.Card}>{children}</div>;
};
export default Education;
export { Primary, Highersecondary, College };
