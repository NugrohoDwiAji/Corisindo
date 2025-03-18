import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Dashboard from "./pages/dashboard"
import Competition from "./pages/competition"
import Seminar from "./pages/seminar"
import Rakernas from "./pages/rakernas"
import Bimtek from "./pages/bimtek"
function App() {


  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard/>} />
          <Route path="/kegiatan/competition" element={<Competition/>} />
          <Route path="/kegiatan/bimtek" element={<Bimtek/>} />
          <Route path="/kegiatan/rakernas" element={<Rakernas/>} />
          <Route path="/kegiatan/seminar" element={<Seminar/>} />
        </Routes>
      </Router>
    </>
  )
}

export default App
