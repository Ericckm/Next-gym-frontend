import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { logRequestCall } from '../../services/logRequestCall'

const Container = styled.div`
  display: flex;
  flex-direction: column;

  span {
    font-size: 11px;
    font-weight: 500;
    color: ${(props) => props.theme.colors.white};
  }
`

export const LogList = ({ id }) => {
  const dispatch = useDispatch()
  const { token } = useSelector((state: any) => state.user.user)

  const logs = useSelector((state: any) => state.log.logs)

  useEffect(() => {
    logRequestCall(dispatch, id, token)
  }, [])

  return (
    <>
      {/* {logs ? (
        logs
          .filter((i) => i.exerciseOwner === id)
          .map((i) => (
            <>
              <span>Load -{i.load} kg</span>
              <span>Sets - {i.sets} x</span>
              <span>Reps - {i.reps} times</span>
              <span>Rest - {i.rest} seconds</span>
            </>
          ))
      ) : (
        <span>no log</span>
      )} */}

      {id &&
        logs.map((log) =>
          log.exerciseOwner === id ? (
            <Container key={log._id}>
              <span>Load -{log.load} kg</span>
              <span>Sets - {log.sets} x</span>
              <span>Reps - {log.reps} times</span>
              <span>Rest - {log.rest} seconds</span>
            </Container>
          ) : (
            ''
          )
        )}
    </>
  )
}
