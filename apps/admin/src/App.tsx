import { ThemeProvider } from "./components/reusable/theme-provider.tsx";
import { Route, Routes } from "react-router-dom";
import HomeLayout from "./components/reusable/layout/HomeLayout.tsx";
import Dashboard from "./pages/Dashboard/Dashboard.tsx";
// import Goals from "./pages/Goals/Goals.tsx";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Routes>
        <Route path={"/"} element={<HomeLayout />}>
          <Route path={"/"} element={<Dashboard />} />
          {/* <Route path={"/goals"} element={<Goals />} /> */}
          <Route path={"/schedule"} element={<>To implemented schedule</>} />
          <Route path={"/class"} element={<>To implemented class</>} />
          <Route path={"/course"} element={<>To implemented course</>} />
          <Route path={"/resources"} element={<>To implemented resources</>} />
          <Route path={"/directory"} element={<>To implemented directory</>} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;
