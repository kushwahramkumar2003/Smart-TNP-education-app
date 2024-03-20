import { ThemeProvider } from "./components/reusable/theme-provider.tsx";
import { Route, Routes } from "react-router-dom";
import HomeLayout from "./components/layout/HomeLayout.tsx";
import Dashboard from "./pages/Dashboard/Dashboard.tsx";
import Goals from "./pages/Goals/Goals.tsx";
import Signup from "./pages/Signup/Signup.tsx";
import Login from "./pages/Login/Login.tsx";
// import Auth from "./components/reusable/Auth.tsx";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      {/* <Auth> */}
      <Routes>
        <Route path={"/"} element={<HomeLayout />}>
          <Route path={"/"} element={<Dashboard />} />
          <Route path={"/goals"} element={<Goals />} />
          <Route path={"/schedule"} element={<>To implemented schedule</>} />
          <Route path={"/class"} element={<>To implemented class</>} />
          <Route path={"/course"} element={<>To implemented course</>} />
          <Route path={"/resources"} element={<>To implemented resources</>} />
          <Route path={"/directory"} element={<>To implemented directory</>} />
        </Route>
        <Route path={"/signup"} element={<Signup />} />
        <Route path={"/login"} element={<Login />} />
      </Routes>
      {/* </Auth> */}
    </ThemeProvider>
  );
}

export default App;
