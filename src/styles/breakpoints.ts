const size = {
  small: '428px',
  medium: '429px',
  large: '1440px',
};

const device = {
  small: `(max-width: ${size.small})`,
  medium: `(min-width: ${size.medium})`,
  large: `(min-width: ${size.large})`,
};
export default { size, device };
