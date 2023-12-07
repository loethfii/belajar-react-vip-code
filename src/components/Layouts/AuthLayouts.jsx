/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
const AuthLayouts = (props) => {
  const { children, title, type } = props;
  return (
    <div className="flex justify-center items-center min-h-screen gap-x-10 ">
      <div className="w-full max-w-xs border-4 border-indigo-500 rounded-lg p-5">
        <h1 className="text-3xl font-bold mb-2 text-blue-600 ">{title}</h1>
        <p className="font-medium mb-2 text-slate-500">
          Welcome, PLease enter your details
        </p>
        {children}
        {Navigation({ type })}
      </div>
    </div>
  );
};

const Navigation = ({ type }) => {
  if (type === "login") {
    return (
      <p className="my-5 font-small text-center">
        Don't have an account?{" "}
        <Link to="/register" className="font-bold text-blue-600">
          register here
        </Link>
      </p>
    );
  } else {
    return (
      <p className="my-5 font-small text-center">
        Already have an account?{" "}
        <Link to="/login" className="font-bold text-blue-600">
          Login
        </Link>
      </p>
    );
  }
};

export default AuthLayouts;
