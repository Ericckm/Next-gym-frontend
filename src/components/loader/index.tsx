import { MutatingDots } from 'react-loader-spinner'

export const Loader = () => {
  return (
    <>
      <MutatingDots
        height="100"
        width="100"
        color="#011627"
        secondaryColor="#BDD4E7"
        radius="12.5"
        ariaLabel="mutating-dots-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </>
  )
}
