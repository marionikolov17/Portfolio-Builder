import { Route, Routes } from "react-router-dom"
import Builder from "./pages/Builder/Builder"
import Layout from "./layouts/Layout/Layout"
import Profile from "./pages/Profile/Profile"
import Home from "./pages/Home/Home"
import Analytics from "./pages/Analytics/Analytics"
import Settings from "./pages/Settings/Settings"
import Login from "./pages/Login/Login"
import Register from "./pages/Register/Register"

function App() {
  return (
    <>
      <Routes>
        {/* Layout routes */}
        <Route path="/" element={<Layout />}>
          <Route index Component={Home}/>
          <Route path="/builder" Component={Builder}/>
          <Route path="/analytics" Component={Analytics}/>
          <Route path="/settings" Component={Settings}/>
        </Route>
        <Route path="/profile" Component={Profile}/>
        <Route path="/login" Component={Login}/>
        <Route path="/register" Component={Register}/>
      </Routes>
    </>
  )
}

export default App
