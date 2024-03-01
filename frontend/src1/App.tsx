import {useState} from 'react'
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

import Layout from "./layouts/Layout";
import Register from "./pages/Register";
import SignIn from "./pages/SignIn";

function App() {


    return (

        <Router>
            <Routes>
                <Route
                    path="/"
                    element={
                        <Layout>
                            <p>HomePage</p>
                        </Layout>
                    }/>
            </Routes>
            <Routes>
                <Route
                    path="/search"
                    element={
                        <Layout>
                            <p>SearchPage</p>
                        </Layout>
                    }/>
            </Routes>
            <Routes>
                <Route path="/Sign-in" element={
                        <Layout>
                            {/*<p>Sign-in</p>*/}
                            <SignIn/>
                        </Layout>}/>
                <Route path="/register" element={
                    <Layout>
                        {/*<p>Sign-in</p>*/}
                        <Register/>
                    </Layout>}/>
            </Routes>
        </Router>

    )
}

export default App
