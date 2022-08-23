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

export const ExerciseModal = () => {
  return (
    <Overlay>
      <Container>
        <Top>
          <Title>
            <h2>Create a new exercise log</h2>
          </Title>
          <Button>
            <button>x</button>
          </Button>
        </Top>
        <Main>
          <FormContainer>
            <h2>Exercicio</h2>
            <Form>
              <form action="">
                <div>
                  <label>Load</label>
                  <input type="number" placeholder="num" />
                  <label>kg</label>
                </div>
                <div>
                  <label>Sets</label>
                  <input type="number" placeholder="num" />
                  <label>x</label>
                </div>
                <div>
                  <label>Repetitions</label>
                  <input type="number" placeholder="num" />
                  <label>x</label>
                </div>

                <div>
                  <label>Rest</label>
                  <input type="number" placeholder="num" />
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
