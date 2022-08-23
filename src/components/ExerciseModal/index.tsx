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
            <h2>nome</h2>
          </Title>
          <Button>
            <button>x</button>
          </Button>
        </Top>
        <Main>
          <FormContainer>
            <h2>Create a new log</h2>
            <Form>
              <form action="">
                <input type="text" placeholder="load" />
                <input type="text" placeholder="load" />
                <input type="text" placeholder="load" />
                <input type="text" placeholder="load" />
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
