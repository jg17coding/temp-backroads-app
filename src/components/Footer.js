import PageLinks from './PageLinks.js'
import SocialLinks from './SocialLinks.js'

const Footer = () => {
  return (
    <footer className="section footer">
      <PageLinks className={'footer-links'} idName={'footer-link'} />
      <SocialLinks className={'footer-icons'} idName={'footer-icon'} />

      <p className="copyright">
        copyright &copy; Backroads travel tours company
        <span id="date">{new Date().getFullYear()}</span> all rights reserved
      </p>
    </footer>
  )
}

export default Footer
