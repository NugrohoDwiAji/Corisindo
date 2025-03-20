import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Navigate } from "react-router-dom"
import Dashboard from "./pages/dashboard"
import Competition from "./pages/competition"
import Seminar from "./pages/seminar"
import Pendaftaran from "./pages/pendaftaran"
import TanggalPenting from "./pages/tanggalPenting"
import HubungiKami from "./pages/hubungiKami"
function App() {



  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/dashboard"/>} />
          <Route path="/dashboard" element={<Dashboard/>} />
          <Route path="/kegiatan/competition" element={<Competition/>} />
          <Route path="/kegiatan/seminar" element={<Seminar/>} />
          <Route path="/informasipeserta/pendaftaran" element={<Pendaftaran/>} />
          <Route path="/informasipeserta/tanggalpenting" element={<TanggalPenting/>} />
          <Route path="/hubungikami" element={<HubungiKami/>} />
        </Routes>
      </Router>
    </>
  )
}

export default App
