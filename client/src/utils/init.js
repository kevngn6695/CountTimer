export const generateListTextInput = (name, type, text, placeholder) => ({
  className: `${name}-input`,
  type: type,
  id: `${name}`,
  text: `${text}`,
  placeholder: `${placeholder}`,
});
