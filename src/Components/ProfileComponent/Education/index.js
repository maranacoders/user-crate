import React from 'react';
import Styles from './index.module.scss';
import EducationCard from './Educationcards/index';
import Schoolsvg from './Educationcards/school.svg';
import Collegesvg from './Educationcards/college.svg';

const Education = (props) => {
  const { children } = props;

  return (
    <div className={Styles.Container}>
      <div className={Styles.Wrapper}>{children}</div>
    </div>
  );
};

const Primary = (props) => {
  const { children } = props;
  return <EducationCard icon={Schoolsvg}>{children}</EducationCard>;
};

const Highersecondary = (props) => {
  const { children } = props;
  return <EducationCard icon={Schoolsvg}>{children}</EducationCard>;
};

const College = (props) => {
  const { children } = props;
  return <EducationCard icon={Collegesvg}>{children}</EducationCard>;
};
export default Education;
export { Primary, Highersecondary, College };
