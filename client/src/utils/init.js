export const generateListTextInput = (
  name,
  type,
  text,
  placeholder,
  max,
  value,
  onChange
) => ({
  type: type,
  name: `${name}`,
  id: `${name}`,
  text: `${text}`,
  maxLength: `${max}`,
  placeholder: `${placeholder}`,
  value: value,
  onChange: onChange,
});
