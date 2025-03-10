function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Landing />} />
                <Route element={<AuthRoutes />}>
                    <Route path="/login" element={<Login />}></Route>
                    <Route path="/register" element={<Register />}></Route>
                </Route>

                <Route element={<PrivateRoutes />}>
                    <Route path="/home" element={<Layout />}>
                        <Route path="createpost" element={<CreatePost />} />
                    </Route>
                </Route>
            </Routes>
        </Router>
    );
}

export default App;
