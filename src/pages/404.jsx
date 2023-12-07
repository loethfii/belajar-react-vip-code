import { useRouteError, useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const err = useRouteError();
  const navigate = useNavigate();
  return (
    <div className="flex justify-center ">
      <div className="text-center mt-20 p-10 bg-stone-200 border-2 w-2/4 shadow-md rounded-lg">
        <h1 className="text-2xl">Opps</h1>
        <p className="my-5 text-xl font-bold">Sorry Page is not found!</p>
        <p className="my-5 text-xl font-bold">
          {err.statusText || err.message}
        </p>

        <button
          className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          onClick={() => navigate("/")}
        >
          To Home
        </button>
      </div>
    </div>
  );
};

export default ErrorPage;
