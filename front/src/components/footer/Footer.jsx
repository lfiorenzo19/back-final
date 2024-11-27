
import { FaFacebookF, FaTwitter, FaInstagram} from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <h2 className="footer-title">6roup</h2>
                <div className="social-icons">
                    <a href="https://www.facebook.com/6group" target="_blank" rel="noopener noreferrer">
                        <FaFacebookF />
                    </a>
                    <a href="https://www.twitter.com/6group" target="_blank" rel="noopener noreferrer">
                        <FaTwitter />
                    </a>
                    <a href="https://www.instagram.com/6group" target="_blank" rel="noopener noreferrer">
                        <FaInstagram />
                    </a>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2024 6roup. Todos los derechos reservados.</p>
            </div>
        </footer>
    );
};

export default Footer;