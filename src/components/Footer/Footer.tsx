import "./Footer.scss"

const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <div className="footer__newsletter">
                <h3 className="newsletter__header">Newsletter</h3>
                <form className="newsletter__form">
                    <input type="email" placeholder="your@email.com" />
                    <button>Subscribe</button>
                </form>
            </div>
            <div className="footer__links-block">
                <ul className="footer__links">
                    <li className="footer__link">About</li>
                    <li className="footer__link">Store locator</li>
                    <li className="footer__link">FAQs</li>
                    <li className="footer__link">News</li>
                    <li className="footer__link">Careers</li>
                    <li className="footer__link">Contact Us</li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer