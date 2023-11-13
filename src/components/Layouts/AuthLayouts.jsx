/* eslint-disable react/prop-types */
const AuthLayouts = (props) => {
  const { children, title } = props;
  return (
    <div className="flex justify-center items-center min-h-screen gap-x-10 m-10 ">
      <div className="w-full max-w-xs">
        <h1 className="text-3xl font-bold mb-2 text-blue-600 ">{title}</h1>
        <p className="font-medium mb-2 text-slate-500">
          Welcome, PLease enter your details
        </p>
        {children}
      </div>
    </div>
  );
};

export default AuthLayouts;
