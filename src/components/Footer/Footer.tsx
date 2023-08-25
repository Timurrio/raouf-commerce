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
            <div className="footer__links">
                <ul className="links">
                    <li className="link">About</li>
                    <li className="link">Store locator</li>
                    <li className="link">FAQs</li>
                    <li className="link">News</li>
                    <li className="link">Careers</li>
                    <li className="link">Contact Us</li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer