import React, { useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import './HomePage.css';
import sampleImage from './sample.png';
import detect from './newdetect.png'
import paraphrase from './paraphrase.png'
import translate from './translate.png'
import textsum from './textsum.png'
import Head from './Head';
import Footer from './Footer';

function HomePage() {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo === 'footer') {
      const footerElement = document.getElementById('footer');
      if (footerElement) {
        footerElement.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (location.state?.scrollTo === 'services') {
      const servicesElement = document.getElementById('services');
      if (servicesElement) {
        servicesElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return (
    <div>
      <Head />
      <div className="HomePage">
        <header className="intro-section">
          <div className="intro-text">
            <h1>Navigating the digital landscape for success</h1>
            <p>
            Our AI-powered platform helps individuals and businesses enhance their written content and communication with advanced services such as text summarization, paraphrasing, translation, and more. Our AI-powered platform helps individuals and businesses enhance their written content and communication with advanced services such as text summarization, paraphrasing, translation, and more.
            </p>
          </div>
          <div className="intro-image">
            <img src={sampleImage} alt="Intro" />
          </div>
        </header>
        <section className="services-section" id="services">
          <div className="services-header">
            <span className="services-title">Services</span>
            <p>At our AI platform, we offer services to enhance written content and communication. These services include:</p>
          </div>
          <div className="services-cards">
            <Link to="/summarizer" className="card wallet">
              <div className="overlay"></div>
              <div className="circle">
                <img src={textsum} alt="Text Summarization" />
              </div>
              <p>Text Summarization</p>
            </Link>
            
            <Link to="/paraphraser" className="card wallet">
              <div className="overlay"></div>
              <div className="circle">
                <img src={paraphrase} alt="Text Paraphrasing" />
              </div>
              <p>Text Paraphrasing</p>
            </Link>

            <Link to="/translator" className="card wallet">
              <div className="overlay"></div>
              <div className="circle">
                <img src={translate} alt="Text Translation" />
              </div>
              <p>Text Translation</p>
            </Link>

            <Link to="/aidetector" className="card wallet">
              <div className="overlay"></div>
              <div className="circle">
                <img src={detect} alt="AI Detector" />
              </div>
              <p>AI Detector</p>
            </Link>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}

export default HomePage;
