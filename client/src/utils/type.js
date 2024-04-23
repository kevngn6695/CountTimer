import PropTypes from "prop-types";

export const HeadingProps = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  h1: PropTypes.bool,
  h2: PropTypes.bool,
  h3: PropTypes.bool,
  h4: PropTypes.bool,
  h5: PropTypes.bool,
  h6: PropTypes.bool,
};

export const SpiralProgressBarProps = {
  size: PropTypes.number,
  progress: PropTypes.number,
  strokeWidth: PropTypes.number,
};
