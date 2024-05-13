import PropTypes from "prop-types";
import { motion } from "framer-motion";

const PageTransition = ({ children }) => {
  const pageTransition = {
    initial: {
      opacity: 0,
      y: 10,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.2
      }
    },
    exit: {
      opacity: 0,
      y: 10,
    },
  };

  return (
    <motion.div
      variants={pageTransition}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {children}
    </motion.div>
  );
};

PageTransition.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PageTransition;
