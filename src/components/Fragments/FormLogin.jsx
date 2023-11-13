import Button from "../Elements/Button";
import InputForm from "../Elements/Input/Index";
const FormLogin = () => {
  return (
    <form action="">
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
      <Button classname="bg-blue-500 w-full">Login</Button>
    </form>
  );
};

export default FormLogin;
