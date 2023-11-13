/* eslint-disable react/no-children-prop */
/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import Label from "./Label";
import Input from "./Input";

const InputForm = (props) => {
  const { label, name, type, placeholder } = props;

  return (
    <div className="mb-6">
      <Label htmlFor={name} children={label} />
      <Input name={name} id={name} type={type} placeholder={placeholder} />
    </div>
  );
};

export default InputForm;
