import styled from 'styled-components'

const Title = styled.div`
  flex: 1;
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  @media only screen and (max-width: 768px) {
    flex: 0.3;
    margin: 10px 0;
  }

  h3 {
    font-size: 24px;
    font-weight: 400;
    align-items: center;
    display: flex;
    justify-content: center;
    color: ${(props) => props.theme.colors.primary};

    @media only screen and (max-width: 768px) {
      font-size: 14px;
    }
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
