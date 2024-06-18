import Home from './pages/home'
import About from './pages/about';
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";

const App = () => {

    return (
        <Router basename={import.meta.env.BASE_URL}>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About/>} />
            </Routes>
        </Router>

    )
}

export default App
