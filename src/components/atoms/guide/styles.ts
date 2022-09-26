import styled from 'styled-components'

export const GuideContainer = styled.div`
  position: absolute;
  bottom: 52px;
  left: 0;
  height: auto;
  width: auto;
  border: 1px solid ${(props) => props.theme.colors.white};
  border-left: none;
  border-radius: 0 20px 20px 0;
  opacity: 0.8;
  background-color: ${(props) => props.theme.colors.third};
  display: flex;
  flex-direction: column;

  @media only screen and (max-width: 768px) {
    bottom: 0;
    left: auto;
    right: auto;
    border-left: 1px solid ${(props) => props.theme.colors.white};
    border-radius: 20px 20px 0 0;
    opacity: 1;
    z-index: 0;
    margin-left: 10px;
    margin-right: 10px;
  }
`

export const Top = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.colors.white};
  padding: 10px;
  font-size: 16px;

  @media only screen and (max-width: 768px) {
    flex: 0.3;

    h3 {
      font-size: 12px;
    }
  }
`

export const Mid = styled.div`
  flex: 8;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 12px 5px 0 12px;
  background-color: ${(props) => props.theme.colors.white};
  gap: 8px;
  line-height: 24px;

  p {
    font-size: 13px;
    font-weight: 400;
    line-height: 20px;

    @media only screen and (max-width: 768px) {
      font-size: 10px;
    }
  }

  h4 {
    font-size: 14px;
    font-weight: 600;
    color: ${(props) => props.theme.colors.primary};
  }

  span {
    color: ${(props) => props.theme.colors.primary};
    font-weight: 600;
  }
`

export const ExerciseGuide = styled.div`
  padding: 0 0 5px 0;
`

export const WorkoutGuide = styled.div`
  padding: 0 0 5px 0;
`

export const UserGuide = styled.div`
  padding: 0 0 5px 0;
`

export const Bottom = styled.div`
  flex: 0.5;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.colors.white};
  font-size: 12px;
  font-weight: 400;
  padding: 10px;

  @media only screen and (max-width: 768px) {
    flex: 0.2;
  }
`
