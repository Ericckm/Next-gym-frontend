import styled from 'styled-components'

export const Title = styled.div`
  flex: 1;
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 4px;
  line-height: 30px;
  letter-spacing: 3px;

  @media only screen and (max-width: 768px) {
    flex: 0.3;
    padding: 10px 0;
  }

  h3 {
    font-size: 24px;
    font-weight: 400;
    color: ${(props) => props.theme.colors.primary};

    @media only screen and (max-width: 768px) {
      font-size: 14px;
    }
  }

  p {
    color: ${(props) => props.theme.colors.primary};
    font-weight: 400;
    font-size: 14px;

    @media only screen and (max-width: 768px) {
      font-size: 12px;
    }
  }

  label {
    font-weight: 400;
    color: ${(props) => props.theme.colors.primary};
  }

  span {
    font-weight: 500;
    color: ${(props) => props.theme.colors.white};
  }

  select {
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${(props) => props.theme.colors.primary};
    font-weight: 600;
    font-size: 14px;
    width: auto;
    border: none;
    background: none;
    border-bottom: 1px solid ${(props) => props.theme.colors.primary};

    @media only screen and (max-width: 768px) {
      font-size: 10px;
    }

    &:focus {
      outline: none;
    }
  }
`

export const ExerciseUl = styled.ul`
  padding: 10px;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 8px;
  overflow-y: auto;

  @media only screen and (max-width: 1000px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media only screen and (max-width: 660px) {
    grid-template-columns: repeat(1, 1fr);
  }
`

export const Bottom = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: 768px) {
    flex: 0.3;
    padding: 10px 0;
  }

  button {
    display: flex;
    flex-direction: column;
    border: none;
    background: none;
    align-items: center;
    cursor: pointer;

    p {
      font-weight: 500;
      font-size: 18px;
      color: ${(props) => props.theme.colors.third};
      letter-spacing: 3px;
      @media only screen and (max-width: 768px) {
        font-size: 14px;
      }
    }

    .start {
      font-size: 64px;

      @media only screen and (max-width: 768px) {
        font-size: 38px;
      }
    }
  }
`
