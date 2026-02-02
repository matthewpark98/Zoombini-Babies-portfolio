

function Zoombini(props) {
  console.log(props.id)
  return (
    <div>
      <p>Zoombini</p>
      <p>{props.id}</p>
      <p>{props.hair}</p>
      <p>{props.eyes}</p>
      <p>{props.nose}</p>
      <p>{props.feet}</p>
  </div>
)

}

export default Zoombini