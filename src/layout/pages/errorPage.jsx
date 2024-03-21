import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();

  console.log(error);

  return (
    <div className="flex justify-center items-center h-[100vh]">
      <div className="flex flex-col items-center gap-8">
        <h1 className="text-6xl font-semibold">Opps!</h1>
        <p className="text-xl font-semibold">
          Sorry, an upexpected error has occured
        </p>
        <p className="text-md text-slate-600">
          <i>{error.statusText || error.message}</i>
        </p>
      </div>
    </div>
  );
};

export default ErrorPage;
