import './App.css'
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Illustrations from "./pages/Illustrations.tsx"
import Navbar from "./components/Navbar.tsx";
import FAQ from "./pages/FAQ.tsx";
import Services from "./pages/Services.tsx";
import Contact from "./pages/Contact.tsx";
import NotFound from "./pages/NotFound.tsx";
function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Illustrations/>}/>
                <Route path="/faq" element={<FAQ/>}/>
                <Route path="/services" element={<Services/>}/>
                <Route path="/contact" element={<Contact/>}/>
                <Route path="*" element={<NotFound/>}/>
            </Routes>
        </Router>
    )
}

export default App
