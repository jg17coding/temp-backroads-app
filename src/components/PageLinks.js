import { pageLinks } from './data.js'

const PageLinks = (props) => {
  const { className, idName } = props
  return (
    <ul className={className} id={className}>
      {pageLinks.map((link) => {
        const { id, href, text } = link
        return (
          <li key={id}>
            <a href={href} className={idName}>
              {' '}
              {text}{' '}
            </a>
          </li>
        )
      })}
    </ul>
  )
}

export default PageLinks
