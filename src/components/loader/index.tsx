import { MutatingDots } from 'react-loader-spinner'

export const Loader = () => {
  return (
    <>
      <MutatingDots
        height="100"
        width="100"
        color="#8257e6"
        secondaryColor="lightgray"
        radius="12.5"
        ariaLabel="mutating-dots-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </>
  )
}
