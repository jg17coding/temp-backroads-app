import { navLogos } from './data.js'

const SocialLinks = (props) => {
  const { className, idName } = props
  return (
    <ul className={className}>
      {navLogos.map((logo) => {
        const { id, href, faRef } = logo
        return (
          <li key={id}>
            <a href={href} target="_blank" rel="noreferrer" className={idName}>
              <i className={faRef}></i>
            </a>
          </li>
        )
      })}
    </ul>
  )
}

export default SocialLinks
