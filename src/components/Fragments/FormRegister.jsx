import Button from "../Elements/Button";
import InputForm from "../Elements/Input/Index";
const FormRegister = () => {
  return (
    <form action="">
      <InputForm
        label="Fullname"
        type="text"
        placeholder="insert your name here ..."
        name="fullname"
      />
      <InputForm
        label="Email"
        type="email"
        placeholder="example@mail.com"
        name="email"
      />
      <InputForm
        label="Password"
        type="password"
        name="password"
        placeholder="********"
      />
      <InputForm
        label="Confirm Password"
        type="password"
        name="confirmPassword"
        placeholder="********"
      />
      <Button classname="bg-blue-500 w-full">Register</Button>
    </form>
  );
};

export default FormRegister;
