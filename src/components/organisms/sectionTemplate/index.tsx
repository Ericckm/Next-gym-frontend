import { ReactNode, useState } from 'react'
import { Guide } from '../../atoms/guide'
import { Guidebtn, Section } from './styles'

export const SectionTemplate = ({ children }: { children: ReactNode }) => {
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
