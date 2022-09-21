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
`

export const Top = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.colors.white};
  padding: 10px;
`

export const Mid = styled.div`
  flex: 8;
  display: flex;
  flex-direction: column;
  padding: 12px 5px 0 12px;
  background-color: ${(props) => props.theme.colors.white};
  gap: 8px;

  p {
    font-size: 13px;
    font-weight: 400;
    line-height: 30px;
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
  flex: 1;
  padding: 0 0 5px 0;
  line-height: 24px;
`

export const WorkoutGuide = styled.div`
  flex: 1;
  padding: 0 0 5px 0;
  line-height: 24px;
`

export const UserGuide = styled.div`
  flex: 1;
  padding: 0 0 5px 0;
  line-height: 24px;
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
`
