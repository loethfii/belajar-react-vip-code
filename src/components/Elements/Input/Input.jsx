/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable react/prop-types */
const Input = (props) => {
  const { type, placeholder, name } = props;
  return (
    <input
      type={type}
      id={name}
      className="text-sm border rounded w-full py-2 px-3 text-slate-700 leading-tight focus:outline-none focus:shadow-outline placeholder: text-slate-400 opacity-50"
      placeholder={placeholder}
      name={name}
      autoComplete="off"
    />
  );
};

export default Input;
