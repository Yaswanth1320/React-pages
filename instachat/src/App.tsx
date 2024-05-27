import { Routes, Route } from "react-router-dom";
import "./global.css";
import SignInForm from "./pages/auth/SignInForm";
import SignUpForm from "./pages/auth/SignUpForm";
import { Home } from "./pages/private";
import AuthLayout from "./pages/auth/AuthLayout";
import HomeLayout from "./pages/private/HomeLayout";

function App() {
  return (
    <main className="flex h-screen">
      <Routes>
        <Route element={<AuthLayout />}>
          <Route path="/sign-in" element={<SignInForm />} />
          <Route path="/sign-up" element={<SignUpForm />} />
        </Route>
        <Route element={<HomeLayout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </main>
  );
}

export default App;
