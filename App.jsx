import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import CreatePost from './pages/CreatePost';
import Login from './pages/Login';
import Links from './pages/Links';
import { signOut } from 'firebase/auth';
import { auth } from './firebase-config';
import './App.css';
import About from './pages/About';
import Footer from './pages/Footer';

function App() {
    const [isAuth, setIsAuth] = useState(false);

    const signUserOut = () => {
        signOut(auth).then(() => {
            localStorage.clear();
            setIsAuth(false);
            window.location.pathname = '/login';
        });
    };

    useEffect(() => {
        const authStatus = localStorage.getItem('isAuth');
        if (authStatus) {
            setIsAuth(true);
        }
    }, []);

    return (
        <Router>
            <div className="app-container">
                {/* Rulletekst */}
                <div className="scrollingText">
                    <p>
                        spiludvikling i godot engine, 3d modellering i blender, 2d spiludvikling i scratch, fof københavn, coding kids, spiludvikling, undervisning, atle winther
                    </p>
                </div>

                {/* Navbar */}
                <nav>
                    {/* Links til forskellige sider */}
                    <div className="aw">
                        <Link to="/">
                            <img src="/src/assets/home_14033416.png" alt="icon" className="icon" />
                        </Link>
                    </div>
                    <div className="nav-links">
                        <Link to='/'>Undervisning</Link>
                        <Link to='/links'>Links</Link>
                        <Link to="/about">Om</Link>
                    </div>
                    <div className='logout'>
                        {!isAuth ? (
                            <Link to='/login'>Login</Link>
                        ) : (
                            <>
                                <Link to='/createpost'>Skriv</Link>
                                <button onClick={signUserOut}>Log Out</button>
                            </>
                        )}
                    </div>
                </nav>

                {/* Routes */}
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/createpost' element={<CreatePost />} />
                    <Route path='/login' element={<Login setIsAuth={setIsAuth} />} />
                    <Route path='/links' element={<Links />} />
                    <Route path='/about' element={<About />} />
                    <Route path='*' element={<h1>404 - Not Found</h1>} />
                </Routes>
            </div>

            {/* Footer */}
            <Footer />
        </Router>
    );
}

export default App;
