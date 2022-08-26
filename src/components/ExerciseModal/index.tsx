import {
  Bottom,
  Button,
  Container,
  Form,
  FormContainer,
  Main,
  Overlay,
  SubmitBtn,
  Title,
  Top
} from './styles'

export const ExerciseModal = ({
  onClick,
  name,
  load = '',
  sets = '',
  reps = '',
  rest = ''
}) => {
  return (
    <Overlay>
      <Container>
        <Top>
          <Title>
            <h2>Fill the information below to create a new log</h2>
          </Title>
          <Button>
            <button onClick={onClick}>x</button>
          </Button>
        </Top>
        <Main>
          <FormContainer>
            <h2>{name}</h2>
            <Form>
              <form action="">
                <div>
                  <label>Load</label>
                  <input type="number" placeholder={load} />
                  <label>kg</label>
                </div>
                <div>
                  <label>Sets</label>
                  <input type="number" placeholder={sets} />
                  <label>x</label>
                </div>
                <div>
                  <label>Repetitions</label>
                  <input type="number" placeholder={reps} />
                  <label>x</label>
                </div>
                <div>
                  <label>Rest</label>
                  <input type="number" placeholder={rest} />
                  <label>seconds</label>
                </div>
              </form>
            </Form>
          </FormContainer>
        </Main>
        <Bottom>
          <SubmitBtn>
            <button>submit</button>
          </SubmitBtn>
        </Bottom>
      </Container>
    </Overlay>
  )
}
