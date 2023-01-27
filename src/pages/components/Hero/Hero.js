import './Hero.css';

import { Link } from 'react-router-dom';

import heroImage from '../../../assets/hero-image.webp';

export default function Hero() {
    return (
        <div className="hero-wrapper">
            <img className="hero-image" src={heroImage} />
            <div className="hero-overlay">
                <div className="hero-info">
                    <h1 className="title">Apple iPhone 12</h1>
                    <p className="subtitle">
                        The Apple iPhone 12 features a 6.1-inch Super Retina XDR display, dual 12MP
                        camera system, and A14 Bionic chip. It is 5G capable and comes in various
                        storage capacities.
                    </p>
                    <Link to="/category/1/product/1">
                        <button className="button">Learn more</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}