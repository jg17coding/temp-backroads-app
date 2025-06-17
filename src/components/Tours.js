import { SectionTitle } from './Title.js'
import Tour from './Tour.js'

const Tours = () => {
  return (
    <section className="section" id="tours">
      <SectionTitle first="featured" second="tours" />
      <Tour />
    </section>
  )
}

export default Tours
