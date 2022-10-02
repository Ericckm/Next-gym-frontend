import { ReactNode } from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex: 3;
  width: 80%;
  border-radius: 20px;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 8px;
  position: relative;
  overflow-y: auto;
  flex-direction: column;
`

export const ExerciseContainer = ({ children }: { children: ReactNode }) => {
  return <Container>{children}</Container>
}
