import { lazy, Suspense } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import { ROUTER } from "./constant/router";
import  {Loading}  from "./Pages";
const Manager = lazy(() => import("./Pages/Manager"));
const UserIdPage = lazy(() => import("./Pages/UserId"));
function App() {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path={ROUTER.Home} element={<Manager />} />
          <Route path={ROUTER.Details + "/:userId"} element={<UserIdPage />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
