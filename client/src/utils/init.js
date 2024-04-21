export const generateListTextInput = (name, type, text, placeholder, max) => ({
  type: type,
  name: `${name}`,
  id: `${name}`,
  text: `${text}`,
  maxLength: `${max}`,
  placeholder: `${placeholder}`,
});
