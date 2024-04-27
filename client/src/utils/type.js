import PropTypes from "prop-types";

export const CommonProps = {
  className: PropTypes.string.isRequired,
  children: PropTypes.node,
};

export const HeadingProps = {
  ...CommonProps,
  h1: PropTypes.bool,
  h2: PropTypes.bool,
  h3: PropTypes.bool,
  h4: PropTypes.bool,
  h5: PropTypes.bool,
  h6: PropTypes.bool,
};

export const CardProps = {
  ...CommonProps,
  number: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

export const SpiralProgressBarProps = {
  ...CommonProps,
  size: PropTypes.number,
  progress: PropTypes.number,
  strokeWidth: PropTypes.number,
};

export const ContainerProps = { ...CommonProps };

export const WrapperProps = {
  ...CommonProps,
  drag: PropTypes.bool,
  //   dragConstraints: PropTypes,
};

export const ButtonProps = {
  ...CommonProps,
};

export const TextInputProps = {
  ...CommonProps,
};

export const TimerProps = {
  ...CommonProps,
};

export const ProgressBarProps = {
  ...CommonProps,
};

export const NumberCardProps = {
  ...CommonProps,
};

export const FlipCardProps = {
  ...CommonProps,
};
