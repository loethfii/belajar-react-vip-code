import PropTypes from "prop-types";
const Button = (props) => {
  const { children, classname = "bg-fuchsia-500" } = props;
  return (
    <button
      className={`h-10 px-6 font-semibold rounded-md ${classname} text-white`}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired, // Memastikan children adalah node yang diperlukan
  classname: PropTypes.string.isRequired, // Memastikan variant adalah string yang diperlukan
};

export default Button;
