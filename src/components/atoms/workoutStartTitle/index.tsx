import styled from 'styled-components'

const Title = styled.div`
  flex: 1;
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h3 {
    font-size: 24px;
    font-weight: 400;
    align-items: center;
    color: ${(props) => props.theme.colors.primary};
  }
`

export const WorkoutStartTitle = () => {
  return (
    <Title>
      <h3>
        You have started your training, after completing an exercise, check as
        done and keep working out.
      </h3>
    </Title>
  )
}
