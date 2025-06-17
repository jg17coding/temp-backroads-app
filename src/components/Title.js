export const SectionTitle = (props) => {
  const { first, second } = props
  return (
    <div className="section-title">
      <h2>
        {first} <span>{second}</span>
      </h2>
    </div>
  )
}
