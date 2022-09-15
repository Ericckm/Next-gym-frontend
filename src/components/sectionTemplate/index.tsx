import { useEffect, useState } from 'react'
import { GuideModal } from '../GuideModal'
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
      {openGuide && <GuideModal />}
    </Section>
  )
}
