import style from '../styles/title.module.css'
import PropTypes from "prop-types"



const Title = ({title="Heading", subtitle="Fantastic subtitle..."}) => {
  return (
    <>
      <div className={style.title}>
        <h2>{title}</h2>
        <p>{subtitle}</p>
      </div>
    </>
  );
};

Title.propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string,
}

export default Title;
