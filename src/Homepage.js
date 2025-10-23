import React from "react";
import logo from './Components/logo3.svg';
import Button from './Components/Button';
import './homepageStyle.css';

function Homepage() {
    return (
        <div className="homepage">
            <style>{`
                    .homepage {
                    font-family: Inter, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial;
                    color: #111;
                    min-height: 100vh;
                    display: flex;
                    flex-direction: column;
                    }

                    /* Header */
                    header {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding: 16px 24px;
                    background: #CCD7E4;
                    border-bottom: 1px solid #eee;
                    }

                    .brand {
                    font-weight: 700;
                    font-size: 1.25rem;
                    }

                    nav a {
                    margin-left: 16px;
                    color: #333;
                    text-decoration: none;
                    font-size: 0.95rem;
                    }

                    /* Hero Section */
                    .hero {
                    flex: 1;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    padding: 56px 24px;
                    background: #CCD7E4;
                    }

                    .hero-inner {
                    max-width: 920px;
                    text-align: center;
                    }

                    .title {
                    font-size: 7rem;
                    margin: 0 0 12px;
                    font-family: 'Inter', system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial;
                    font-weight: 800;
                    line-height: .7;
                    color: #000000ff;
                    margin-bottom: 2rem;
                    }

                    .subtitle {
                    color: #e7a2c7ff;
                    margin: 0 0 20px;
                    line-height: 1.4;
                    font-size: 1.5rem;
                    font-style: italic;
                    font-family: 'Inter', system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial;
                    }

                    .cta {
                    background: #2563eb;
                    color: #fff;
                    padding: 10px 18px;
                    border-radius: 8px;
                    border: none;
                    cursor: pointer;
                    font-weight: 600;
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
                    color: #666;
                    font-size: 0.9rem;
                    border-top: 1px solid #f0f0f0;
                    background: #CCD7E4;
                    }

                    /* Responsive */
                    @media (max-width: 768px) {
                    .features {
                        flex-direction: column;
                        padding: 24px;
                    }
                    }
            `}</style>

            <header>
                <div style={{ position: 'relative', height: '50px', overflow: 'visible' }}>
                    <img 
                        src={logo} 
                        alt="MyApp Logo" 
                        style={{ 
                            height: '300px', 
                            position: 'absolute', 
                            top: '50%', 
                            transform: 'translateY(-50%)',
                            left: '0'
                        }} 
                    />
                </div>
                
                <nav aria-label="Main navigation">
                    <a href="#aboutus">About Us</a>
                    <a href="#howitworks">How It Works</a>
                </nav>

                <div>
                    <Button 
                        text="Login" 
                        variant="login" 
                        onClick={() => window.location.href = '/login'} 
                    />
                    <Button 
                        text="Sign Up" 
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
                            
            {/* <section id="features" className="features" aria-label="Features">
                <div className="feature">
                    <h3>Fast</h3>
                    <p>Optimized rendering and a lightweight layout to keep things snappy.</p>
                </div>
                <div className="feature">
                    <h3>Secure</h3>
                    <p>Built with best practices in mind so you can focus on features.</p>
                </div>
                <div className="feature">
                    <h3>Customizable</h3>
                    <p>Easily adapt the structure and styles to suit your product.</p>
                </div>
            </section> */}

            <footer>
                © {new Date().getFullYear()} MyApp — Built with React
            </footer>
        </div>
    );
}

export default Homepage;