import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home/Home"
import Layout from "./layouts/Layout/Layout"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index Component={Home}/>
        </Route>
      </Routes>
    </>
  )
}

export default App
