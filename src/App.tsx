import './App.css'
import Navbar from "./components/Navbar.tsx";
import Contact from "./pages/Contact.tsx";
import Services from "./pages/Services.tsx";

function App() {
    return (
        <div>
            <Navbar />
            <Contact/>
            <Services/>
        </div>
    )
}

export default App
