import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Header from "./components/header/Header"
import Footer from "./components/footer/Footer"

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
      <Footer />
    </>
  )
}

export default App
