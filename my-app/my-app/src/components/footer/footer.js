import "./footer.css";

export default function Footer() {
    return (
        <footer>
            <div className="wrapper">
                <div className="info-footer">

                    <div className="flickpicks-footer">
                        <a href=""><img src="/img/logo.svg" alt=""/></a>
                        <h3>FlickPicks</h3>
                    </div>

                    <div className="contact-footer">
                        <h3>CONTACT</h3>
                        <a href=""><span>flickpicks@sac.com</span></a>
                        <a href=""><span>88 4154-8569</span></a>
                        <a href=""><span>88 98165-5247</span></a>
                    </div>

                    <div className="legal-footer">
                        <h3>LEGAL</h3>
                        <a href=""><span>Terms of use</span></a>
                        <a href=""><span>Privacy Policy</span></a>
                    </div>

                    <div className="social-footer">
                        <h3>SOCIAL MEDIA</h3>
                        <a href=""><img className="ico-footer" src="/img/ico-face.svg" alt=""/></a>
                        <a href=""><img className="ico-footer" src="/img/ico-insta.svg" alt=""/></a>
                        <a href=""><img className="ico-footer" src="/img/ico-twitter.svg" alt=""/></a>
                        <a href=""><img className="ico-footer" src="/img/ico-link.svg" alt=""/></a>
                    </div>

                </div>
            </div>
        </footer>
    )     
}