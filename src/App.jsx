import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import Layout from './components/Layout';
import CreatePost from './pages/CreatePost';
import ViewHistory from './pages/ViewHistory';
import Interaction from './pages/Interaction';

function App() {
    return (
        <Router>
            <Routes>
                {/* <Route path="/" element={<Landing />} />
                <Route element={<AuthRoutes />}>
                    <Route path="/login" element={<Login />}></Route>
                    <Route path="/register" element={<Register />}></Route>
                </Route> */}

                {/* <Route element={<PrivateRoutes />}> */}
                <Route path="/" element={<Layout />}>
                    <Route index element={<CreatePost />} />
                    <Route path="/viewhistory" element={<ViewHistory />}></Route>
                    <Route path="/interaction" element={<Interaction />}></Route>
                </Route>
                {/* </Route> */}
            </Routes>
        </Router>
    );
}

export default App;
