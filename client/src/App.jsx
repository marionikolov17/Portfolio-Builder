import { Route, Routes } from "react-router-dom"
import Builder from "./pages/Builder/Builder"
import Layout from "./layouts/Layout/Layout"
import Profile from "./pages/Profile/Profile"

function App() {
  return (
    <>
      <Routes>
        {/* Layout routes */}
        <Route path="/" element={<Layout />}>
          <Route index Component={Builder}/>
        </Route>
        <Route path="/profile" Component={Profile}/>
      </Routes>
    </>
  )
}

export default App
