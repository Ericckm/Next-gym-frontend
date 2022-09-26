import { useState } from 'react'
import styled from 'styled-components'
import { Guide } from '../../atoms/guide'
import { Guidebtn, Section } from './styles'

export const SectionTemplate = ({ children }) => {
  const [openGuide, setOpenGuide] = useState(false)

  const handleClick = () => {
    setOpenGuide(!openGuide)
  }

  return (
    <Section>
      {children}
      <Guidebtn onClick={handleClick}>Guide</Guidebtn>
      {openGuide && <Guide />}
    </Section>
  )
}
