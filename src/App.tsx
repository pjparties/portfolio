import Home from './pages/home'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
    redirect
} from "react-router-dom";

const App = () => {
    return (
        <Router>
            {/* <Routes>
                <Route path="/" element={<Home />} />
                <Route path="*" element={<Navigate to="/" />} />
            </Routes> */}
            <Home />
        </Router>

    )
}

export default App
