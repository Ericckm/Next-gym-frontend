export const LogList = ({ i }) => {
  return (
    <>
      <span>Load - {i.load} kg</span>
      <span>Sets - {i.sets} x</span>
      <span>Reps - {i.reps} times</span>
      <span>Rest - {i.rest} seconds</span>
    </>
  )
}
