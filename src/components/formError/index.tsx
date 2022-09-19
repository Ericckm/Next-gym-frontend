import styled from 'styled-components'

const FormErrorSpan = styled.span`
  font-size: 12px;
  color: ${(props) => props.theme.colors.error};
`

export const FormError = () => {
  return <FormErrorSpan>missing information</FormErrorSpan>
}
