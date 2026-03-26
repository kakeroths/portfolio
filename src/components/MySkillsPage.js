import { motion } from 'framer-motion'
import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { lightTheme } from './Themes'
import { Design, Develope } from './AllSvgs'
import LogoComponent from '../subComponents/LogoComponent'
import SocialIcons from '../subComponents/SocialIcons'
import PowerButton from '../subComponents/PowerButton'
import ParticleComponent from '../subComponents/ParticleComponent'
import BigTitle from '../subComponents/BigTitlte'

const Box = styled.div`
  background-color: ${props => props.theme.body};
  width: 100vw;
  min-height: 100vh;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 6rem 2rem 3rem;
  box-sizing: border-box;
  overflow-x: hidden;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 5rem 1rem 3rem;
    align-items: stretch;
  }
`

const CardsWrapper = styled.div`
  display: flex;
  gap: 2rem;
  z-index: 3;
  width: 100%;
  max-width: 1100px;
  justify-content: center;

  @media (max-width: 900px) {
    gap: 1.2rem;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
  }
`

const Card = styled(motion.div)`
  border: 2px solid ${props => props.theme.text};
  background-color: ${props => props.theme.body};
  color: ${props => props.theme.text};
  padding: 2rem;
  width: 42%;
  min-height: 420px;
  z-index: 3;
  font-family: 'Ubuntu Mono', monospace;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  box-sizing: border-box;
  cursor: pointer;
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover {
    background-color: ${props => props.theme.text};
    color: ${props => props.theme.body};
  }

  @media (max-width: 900px) {
    width: 48%;
    padding: 1.5rem;
    min-height: 380px;
  }

  @media (max-width: 768px) {
    width: 90%;
    min-height: unset;
  }

  @media (max-width: 480px) {
    width: 95%;
    padding: 1.2rem;
  }
`

const Title = styled.h2`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  font-size: clamp(1rem, 2.5vw, 1.4rem);
  font-family: 'Karla', sans-serif;
  font-weight: 600;
  padding-bottom: 0.8rem;
  border-bottom: 1px solid currentColor;

  svg {
    flex-shrink: 0;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
    gap: 0.5rem;
  }
`

const Description = styled.p`
  font-size: clamp(0.75rem, 1.5vw, 0.9rem);
  line-height: 1.7;
  opacity: 0.85;
  margin: 0;
`

const SkillGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
`

const SkillLabel = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: clamp(0.7rem, 1.3vw, 0.82rem);
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 0.2rem;
`

const BarTrack = styled.div`
  width: 100%;
  height: 5px;
  background-color: currentColor;
  opacity: 0.15;
  border-radius: 2px;
  position: relative;
  overflow: hidden;
`

const BarFill = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  background-color: currentColor;
  opacity: 1;
  border-radius: 2px;
`

const TagRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 0.2rem;
`

const Tag = styled.span`
  font-size: clamp(0.65rem, 1.2vw, 0.78rem);
  padding: 0.25rem 0.6rem;
  border: 1px solid currentColor;
  border-radius: 2px;
  opacity: 0.8;
  white-space: nowrap;
`

const backendSkills = [
  { name: 'Node.js / Express', level: 90 },
  { name: 'MongoDB / Redis', level: 82 },
  { name: 'REST APIs / GraphQL', level: 85 },
  { name: 'Docker / AWS', level: 70 },
]

const frontendSkills = [
  { name: 'React / Next.js', level: 92 },
  { name: 'TypeScript', level: 78 },
  { name: 'Tailwind / Styled-Components', level: 88 },
  { name: 'Framer Motion', level: 75 },
]

const backendTools = ['Socket.io', 'JWT', 'Microservices', 'Cloudflare', 'Vercel', 'Heroku']
const frontendTools = ['Redux', 'Material-UI', 'Stripe', 'Cloudinary', 'Git', 'VS Code']

const cardVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { type: 'spring', duration: 0.8, delay: i * 0.2 },
  }),
}

const SkillBar = ({ name, level }) => (
  <SkillGroup>
    <SkillLabel>
      <span>{name}</span>
      <span>{level}%</span>
    </SkillLabel>
    <BarTrack>
      <BarFill
        initial={{ width: 0 }}
        animate={{ width: `${level}%` }}
        transition={{ duration: 1.2, ease: 'easeOut', delay: 0.5 }}
      />
    </BarTrack>
  </SkillGroup>
)

const MySkillsPage = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <Box>
        <LogoComponent theme='light' />
        <SocialIcons theme='light' />
        <PowerButton />
        <ParticleComponent theme='light' />

        <CardsWrapper>
          <Card
            custom={0}
            variants={cardVariants}
            initial='hidden'
            animate='visible'
          >
            <Title>
              <Develope width={32} height={32} /> Backend Developer
            </Title>
            <Description>
              Robust server-side applications and scalable APIs with focus on performance and security.
            </Description>
            {backendSkills.map(s => <SkillBar key={s.name} {...s} />)}
            <TagRow>
              {backendTools.map(t => <Tag key={t}>{t}</Tag>)}
            </TagRow>
          </Card>

          <Card
            custom={1}
            variants={cardVariants}
            initial='hidden'
            animate='visible'
          >
            <Title>
              <Design width={32} height={32} /> Full Stack Developer
            </Title>
            <Description>
              Complete web applications from database design to polished user interfaces with modern tech.
            </Description>
            {frontendSkills.map(s => <SkillBar key={s.name} {...s} />)}
            <TagRow>
              {frontendTools.map(t => <Tag key={t}>{t}</Tag>)}
            </TagRow>
          </Card>
        </CardsWrapper>

        <BigTitle text="SKILLS" top="80%" right="30%" />
      </Box>
    </ThemeProvider>
  )
}

export default MySkillsPage
