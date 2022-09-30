import Image from 'next/image'
import styled from 'styled-components'
import { ExerciseContainer } from '../../organisms/exerciseContainer'

type Props = {}

const ImgContainer = styled.div`
  height: 100%;
  width: 100%;
  opacity: 0.75;
`

export const ExerciseContainerBgImg = (props: Props) => {
  return (
    <ExerciseContainer>
      <ImgContainer>
        <Image
          src="/assets/exerciseContainerBG.jpg"
          height={1080}
          width={721}
          objectFit="cover"
          layout="fill"
        />
      </ImgContainer>
    </ExerciseContainer>
  )
}
