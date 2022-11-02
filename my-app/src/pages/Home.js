import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import HeaderBanner from './Banner/HeaderBanner';
import './Home.css';
import About1 from '../pages/About/About1';
import Reviews from '../pages/Reviews/Reviews';

const Home = () => {
  const navigate = useNavigate();
  const [error, setError] = useState('');

  const navigateToCalendar = async () => {
    try {
      navigate('/booking');
    } catch (err) {
      setError(err.message);
      return { error };
    }
  };
  const navigateToPackage = async () => {
    try {
      navigate('/packages');
    } catch (err) {
      setError(err.message);
      return { error };
    }
  };
  const navigateToClients = async () => {
    try {
      navigate('/clients');
    } catch (err) {
      setError(err.message);
      return { error };
    }
  };

  //const classes = useStyles();

  return (
    <div className="p-0 box my-0 text-center">
      <HeaderBanner />
      <div className="banner">
        <div className="banner-info">
          <p>
            The #1 Choice for all ages in the Kitchener-Waterloo and Cambridge
            area
          </p>
          <h1>Max's Driving School</h1>
          <br />
          <h2>
            Serving the community to provide a customized lesson plan to ensure
            you are a safe and capable driver
          </h2>
          <h2>
            Call for more details:
            <a href="tel:PHONE_NUM">+1(226)972-6161</a>
          </h2>
          <Button onClick={navigateToPackage}>Packages and Prices</Button>

          <Button onClick={navigateToCalendar}>Book Your class</Button>

          <Button onClick={navigateToClients}>Success Clients</Button>
        </div>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <About1 />
      <br></br>
      <br></br>
      <br></br>
      <hr></hr>
      <br></br>
      <br></br>
      <br></br>
      <div className="container">
        <header className="text-center margin-bottom-60">
          <h2>Reasons Why YOU Should Join Us</h2>
          <p>
            Max's Driving School is one of the most respected driving schools in
            Kitchener. Our unique approach to teaching, one-of-a-kind teaching
            techniques, and efficient program structures make Pioneer Driving
            School an excellent choice for new drivers in Kitchener, Waterloo,
            and Cambridge.
          </p>
        </header>
        <div className="row">
          <div className="col-md-6 col-xs-12">
            <ul className="list-unstyled list-icons">
              <li>
                • Convenient location (lots of parking, bus stop in front)
              </li>
              <li>• Learn Defensive Driving Techniques</li>
              <li>• Precision Driving Program</li>
              <li>• Hazard Avoidance Program</li>
              <li>• Flexible hours for the in-car training</li>
              <li>• Training could be provided in your own vehicle</li>
              <li>• Package deals and single lessons available</li>
            </ul>
          </div>
          <div className="col-md-6 col-xs-12">
            <ul className="list-unstyled list-icons">
              <li>• Freeway Driving</li>
              <li>• Dual-control vehicles to ensure your comfort and safety</li>
              <li>
                • Free pick up and drop off anywhere in Kitchener, Waterloo and
                Cambridge area
              </li>
              <li>• Eligibility of G2 license in 8 months</li>
              <li>• Payment plans available to suit your budget needs</li>
              <li>• High-quality service</li>
              <li>• Gift certificates</li>
            </ul>
          </div>
        </div>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <hr></hr>
      <div className="container">
        <br></br>
        <br></br>
        <br></br>
        <h2>
          <a href="mailto:webmaster@example.com">Book Your Road Test</a>
        </h2>

        <br></br>
        <br></br>
        <br></br>
      </div>
      <br></br>
      <hr></hr>
      <br></br>
      <Reviews />
    </div>
  );
};

export default Home;
