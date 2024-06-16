import { useAuth } from "../context/auth";
import { useEffect } from "react";

import "./Home.css";
import ExpertsIcon from "../assets/Experts.png";
import TransparentPricingIcon from "../assets/transparentPricing.png";
import CustomerIcon from "../assets/2.png";
import ExperienceIcon from "../assets/1.png";

const Home = () => {
  const { LogoutUser } = useAuth();
  useEffect(() => {
    LogoutUser();
  });
  return (
    <>
      <section className="home">
        <div className="home-content">
          <h1>Find the Right Handyman for Your Task</h1>
          <p>
            Post your tasks and let skilled professionals take care of the rest.
          </p>
          <div className="home-buttons">
            <button>Get Started</button>
            <button>About Us</button>
          </div>
        </div>
      </section>

      <section className="about">
        <div className="about-content">
          <h2>Why Choose Us?</h2>
          <ul className="reasons">
            <li>
              <img src={ExpertsIcon} alt="Quality Icon" />
              <span>
                <strong>Experts:</strong> Verified ExpertsBackground checked and
                trained experts.
              </span>
            </li>
            <li>
              <img src={TransparentPricingIcon} alt="Innovation Icon" />
              <span>
                <strong>Effortless Problem Categorization:</strong> Effortless
                Problem Categorization Simply describe your household issue and
                let our platform categorize it for quick and accurate matching.
              </span>
            </li>
            <li>
              <img src={CustomerIcon} alt="Customer Icon" />
              <span>
                <strong>Smart Matching Algorithm:</strong> Smart Matching
                Algorithm Our advanced algorithm matches you with the perfect
                handyman based on skills, availability, and proximity.
              </span>
            </li>
            <li>
              <img src={ExperienceIcon} alt="Experience Icon" />
              <span>
                <strong>Thrift Shop for Tools:</strong> Explore our integrated
                thrift shop for buying and selling second-hand tools, making
                household repairs affordable and sustainable.
              </span>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default Home;
