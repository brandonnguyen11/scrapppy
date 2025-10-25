import React from "react";
// import logo from './Components/logo3.svg';
import Button from './Components/Button';
import './homepageStyle.css';

function Homepage() {
    return (
        
        <div className="homepage">
            <style>{`
                    @import url('https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&display=swap');

                    * {
                    margin: 0;
                    padding: 0;
                    box-sizing: border-box;
                    }

                    .homepage {
                    font-family: Inter, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial;
                    color: #111;
                    }

                    /* Header */
                    header {
                    position: fixed;
                    top: 0;
                    left: 0;
                    right: 0;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding: 16px 24px;
                    background: #000000;
                    z-index: 1000;
                    }

                    .brand {
                    font-weight: 700;
                    font-size: 1.25rem;
                    }

                    .nav-container {
                    display: flex;
                    align-items: center;
                    margin-left: 120px;
                    flex: 1;
                    }

                    nav {
                    display: flex;
                    gap: 32px;
                    }

                    nav a {
                    color: #fff;
                    text-decoration: none;
                    font-size: 1.1rem;
                    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
                    font-weight: 400;
                    transition: color 0.3s ease;
                    }

                    nav a:hover {
                    color: #CEEAF7;
                    }

                    /* Hero Section - Full Screen */
                    .hero {
                    min-height: 100vh;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background: #000000;
                    padding: 24px;
                    }

                    .hero-inner {
                    max-width: 920px;
                    text-align: center;
                    width: 100%;
                    }

                    .title {
                    font-size: clamp(3rem, 8vw, 7rem);
                    margin: 0 0 2rem;
                    font-family: "Libre Baskerville", serif;
                    font-weight: 700;
                    line-height: 1;
                    color: #bebbbbff;
                    }

                    .brandName{
                        font-family: 'Libre Baskerville', serif;
                        font-size: 2.5rem;
                        font-weight: 700;
                        text-decoration: none;
                        color: #fff;
                    }

                    .brandName a {
                        text-decoration: none;
                        color: #fff;
                    }

                    .subtitle {
                    color: #e7a2c7ff;
                    margin: 2rem 0;
                    line-height: 1.6;
                    font-size: clamp(1.1rem, 2vw, 1.5rem);
                    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
                    }

                    .cta {
                    position: relative;
                    padding: 1rem 2.6rem;
                    background: linear-gradient(135deg, #CEEAF7, #DCB8CB);
                    border: none;
                    border-radius: 150px;
                    font-family: Arial, Helvetica, sans-serif;
                    font-size: 1.1rem;
                    font-weight: 500;
                    cursor: pointer;
                    color: #333;
                    transition: background 0.3s ease, color 0.3s ease;
                    margin-top: 1.5rem;
                    min-width: 140px;
                    text-align: center;
                    }

                    .gradient-text {
                    background: linear-gradient(135deg, #CEEAF7, #DCB8CB);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    background-clip: text;
                    }


                    .cta:hover {
                        background: linear-gradient(135deg, #9BC5D9, #B88FA8);
                        color: #1a1a1a;
                    }

                    /* Spacer Section - Full Screen */
                    .spacer {
                    min-height: 100vh;
                    background: #000;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    }

                    .largeText {
                        font-size: clamp(8rem, 20vw, 25rem);
                        background: linear-gradient(135deg, #CEEAF7, #DCB8CB);
                        -webkit-background-clip: text;
                        -webkit-text-fill-color: transparent;
                        background-clip: text;
                        color: #CEEAF7;  /* Add this as fallback */
                        font-family: 'Libre Baskerville', serif;
                        font-weight: 700;
                        line-height: 1.2;
                        margin: 0;
                        padding: 0 2rem 3rem 0;  /* Add right padding to prevent cutoff */
                    }

                    .largeText-container {
                        position: relative;
                        min-height: 100vh;
                        background: #000;
                        display: flex;
                        align-items: flex-end;
                        justify-content: flex-start;
                        padding: 0 3rem .5rem 3rem;  /* Add right padding here too */
                        overflow: visible;
                    }

                    .bottom-footer {
                    position: absolute;
                    bottom: 3rem;
                    right: 3rem;
                    text-align: right;
                    color: #7b7b7bff;
                    font-size: 0.9rem;
                    z-index: 10;
                    }

                    /* Features Section */
                    .features {
                    display: flex;
                    gap: 16px;
                    padding: 40px 24px;
                    max-width: 1100px;
                    margin: 0 auto;
                    width: 100%;
                    box-sizing: border-box;
                    background: #CCD7E4;
                    }

                    .feature {
                    flex: 1;
                    background: #fff;
                    border-radius: 10px;
                    padding: 18px;
                    box-shadow: 0 6px 18px rgba(20, 20, 40, 0.04);
                    }

                    .feature h3 {
                    margin: 0 0 8px;
                    }

                    /* Footer */
                    footer {
                    padding: 18px 24px;
                    text-align: center;
                    color: #7b7b7bff;
                    font-size: 0.9rem;
                    background: #000;
                    }

                    /* Responsive */
                    @media (max-width: 768px) {
                    header {
                        padding: 12px 16px;
                    }

                    .brandName {
                        font-size: 1.8rem;
                    }

                    .nav-container {
                        margin-left: 20px;
                    }
                    
                    nav {
                        gap: 16px;
                    }
                    
                    nav a {
                        font-size: 0.9rem;
                    }

                    .hero {
                        padding: 80px 16px 16px;
                    }

                    .title {
                        margin-bottom: 1.5rem;
                    }

                    .subtitle {
                        margin: 1.5rem 0;
                    }

                    .cta {
                        padding: 0.9rem 2rem;
                        font-size: 1rem;
                    }

                    .features {
                        flex-direction: column;
                        padding: 24px;
                    }

                    .largeText-container {
                        padding: 0 1.5rem 4rem 1.5rem;
                    }

                    .bottom-footer {
                        bottom: 1.5rem;
                        right: 1.5rem;
                        font-size: 0.8rem;
                    }
                    }

                    @media (max-width: 480px) {
                    .brandName {
                        font-size: 1.5rem;
                    }

                    .nav-container {
                        margin-left: 10px;
                    }

                    nav {
                        gap: 12px;
                    }

                    nav a {
                        font-size: 0.85rem;
                    }

                    .largeText-container {
                        padding: 0 1rem 3rem 1rem;
                    }
                    }
            `}</style>

            <header>
                <div style={{ position: 'relative', height: '50px', overflow: 'visible' }}>
                        <div className="brandName">
                            <a href="#home">scrappy</a>
                        </div>
                </div>
                
                <div className="nav-container">
                    <nav aria-label="Main navigation">
                        <a href="#aboutus">About Us</a>
                        <a href="#howitworks">How It Works</a>
                    </nav>
                </div>

                <div>
                    <Button 
                        text="Log in" 
                        variant="login" 
                        onClick={() => window.location.href = '/login'} 
                    />
                    <Button 
                        text="Sign up" 
                        variant="signup" 
                        onClick={() => window.location.href = '/signup'} 
                    />
                </div>
            </header>

            <main className="hero" role="main">
                <div className="hero-inner">
                    <h1 className="title">Welcome to <span className="gradient-text">scrappy</span></h1>
                    <p className="subtitle">
                        Create your dream sports schedule with ease.
                    </p>
                    <div>
                        <button
                            className="cta"
                            onClick={() => {
                                // replace with navigation logic (e.g. react-router) in a real app
                                window.alert("Get started clicked");
                            }}
                        >
                            Get Started
                        </button>
                    </div>
                </div>
            </main>

            <div className="spacer" id="about-section">
                {/* Add content here for the second screen */}
            </div>
            
            <footer>
                © {new Date().getFullYear()} MyApp — Built with React
            </footer>

            <div className="largeText-container" id="how-it-works">
                <h2 className="largeText">scrappy</h2>
                <div className="bottom-footer">
                    © {new Date().getFullYear()} scrappy — Built with React
                </div>
            </div>

        </div>
    );
}

export default Homepage;