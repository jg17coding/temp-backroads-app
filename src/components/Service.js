import { services } from './data.js'

const Service = () => {
  return (
    <div className="section-center services-center">
      {services.map((service) => {
        const { id, faRef, title, text } = service
        return (
          <article className="service" key={id}>
            <span className="service-icon">
              <i className={faRef}></i>
            </span>
            <div className="service-info">
              <h4 className="service-title">{title}</h4>
              <p className="service-text">{text}</p>
            </div>
          </article>
        )
      })}
    </div>
  )
}

export default Service
