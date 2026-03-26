import { motion } from 'framer-motion'
import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { DarkTheme } from './Themes'
import LogoComponent from '../subComponents/LogoComponent'
import SocialIcons from '../subComponents/SocialIcons'
import PowerButton from '../subComponents/PowerButton'
import BigTitle from '../subComponents/BigTitlte'

const Box = styled.div`
  background-color: ${props => props.theme.body};
  color: ${props => props.theme.text};
  width: 100vw;
  min-height: 100vh;
  position: relative;
  padding: 6rem 2rem 4rem;
  box-sizing: border-box;
  font-family: 'Ubuntu Mono', monospace;
  overflow-x: hidden;

  @media (max-width: 768px) {
    padding: 5rem 1rem 3rem;
  }
`

const Wrapper = styled.div`
  max-width: 860px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  z-index: 3;
  position: relative;
`

const Header = styled(motion.div)`
  border-bottom: 2px solid ${props => props.theme.text};
  padding-bottom: 1.5rem;
`

const Name = styled.h1`
  font-size: clamp(2rem, 6vw, 3.5rem);
  font-family: 'Karla', sans-serif;
  font-weight: 700;
  letter-spacing: 0.05em;
  display: block;
  margin-bottom: 0.4rem;
`

const Role = styled.p`
  font-size: clamp(0.75rem, 2vw, 1rem);
  opacity: 0.7;
  letter-spacing: 0.08em;
  margin-bottom: 0.8rem;
`

const ContactRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem 1.5rem;
  font-size: clamp(0.65rem, 1.5vw, 0.82rem);
  opacity: 0.85;

  a {
    color: inherit;
    text-decoration: none;
    &:hover { text-decoration: underline; }
  }
`

const Section = styled(motion.section)`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

const SectionTitle = styled.h2`
  font-size: clamp(0.7rem, 1.5vw, 0.85rem);
  letter-spacing: 0.2em;
  text-transform: uppercase;
  opacity: 0.5;
  border-bottom: 1px solid currentColor;
  padding-bottom: 0.4rem;
  display: block;
`

const SummaryText = styled.p`
  font-size: clamp(0.78rem, 1.6vw, 0.95rem);
  line-height: 1.8;
  opacity: 0.85;
`

const SkillsGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
`

const SkillRow = styled.div`
  display: flex;
  gap: 0.8rem;
  font-size: clamp(0.72rem, 1.4vw, 0.88rem);
  line-height: 1.6;

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 0.2rem;
  }
`

const SkillCategory = styled.span`
  min-width: 120px;
  opacity: 0.5;
  font-weight: 600;
  flex-shrink: 0;

  @media (max-width: 480px) {
    min-width: unset;
  }
`

const SkillValues = styled.span`
  opacity: 0.9;
`

const EntryBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding-left: 1rem;
  border-left: 2px solid ${props => props.theme.text};
  opacity: 0.9;
`

const EntryHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 0.3rem;
`

const EntryTitle = styled.h3`
  font-size: clamp(0.85rem, 1.8vw, 1rem);
  font-family: 'Karla', sans-serif;
  font-weight: 600;
  display: block;
`

const EntryDate = styled.span`
  font-size: clamp(0.65rem, 1.3vw, 0.78rem);
  opacity: 0.55;
  white-space: nowrap;
`

const EntrySubtitle = styled.p`
  font-size: clamp(0.7rem, 1.3vw, 0.82rem);
  opacity: 0.6;
  margin: 0;
`

const TechStack = styled.p`
  font-size: clamp(0.65rem, 1.2vw, 0.76rem);
  opacity: 0.55;
  font-style: italic;
  margin: 0;
`

const BulletList = styled.ul`
  margin: 0;
  padding-left: 1.2rem;
  display: flex;
  flex-direction: column;
  gap: 0.35rem;

  li {
    font-size: clamp(0.72rem, 1.4vw, 0.86rem);
    line-height: 1.65;
    opacity: 0.82;
  }
`

const TagRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 0.3rem;
`

const Tag = styled.span`
  font-size: clamp(0.6rem, 1.1vw, 0.72rem);
  padding: 0.2rem 0.55rem;
  border: 1px solid currentColor;
  border-radius: 2px;
  opacity: 0.65;
`

const ProjectLink = styled.a`
  color: inherit;
  font-size: clamp(0.65rem, 1.2vw, 0.76rem);
  opacity: 0.55;
  text-decoration: none;
  &:hover { opacity: 1; text-decoration: underline; }
`

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { type: 'spring', duration: 0.7, delay: i * 0.1 }
  })
}

const skills = [
  { cat: 'Frontend', val: 'Next.js, React.js, TypeScript, JavaScript (ES6+), HTML5, CSS3, Tailwind CSS, Framer Motion, Redux' },
  { cat: 'Backend', val: 'Node.js, Express.js, REST API, NextAuth.js, JWT, Bcrypt, Nodemailer' },
  { cat: 'Database', val: 'MongoDB, Mongoose, Firebase Firestore, Prisma ORM, Redis' },
  { cat: 'Cloud & DevOps', val: 'AWS S3, Firebase Storage, Docker, Nginx, Netlify, Vercel, Railway, GitHub Actions, CI/CD' },
  { cat: 'Tools', val: 'Git, GitHub, Postman, VS Code' },
  { cat: 'Concepts', val: 'Agile, RESTful Architecture, Responsive Design, SEO, Performance Optimization' },
]

const achievements = [
  'Independently architected and deployed 4+ full-stack production-ready applications including real-time platforms with WebRTC and Socket.IO.',
  'Reduced API response time by 45% through optimized MongoDB indexing, Redis caching, and efficient query design.',
  'Achieved 95+ Google Lighthouse performance score on Apna Interior through code splitting, lazy loading, and image optimization.',
  'Proficient in AI-assisted development tools (GitHub Copilot, Claude AI) to improve code quality and accelerate delivery by 40%.',
  'Designed complete brand identity including logo, color palette, and UI design system for the Apna Interior project.',
]

const ResumePage = () => {
  return (
    <ThemeProvider theme={DarkTheme}>
      <Box>
        <LogoComponent theme='dark' />
        <SocialIcons theme='dark' />
        <PowerButton />

        <Wrapper>
          {/* Header */}
          <Header variants={fadeUp} initial='hidden' animate='visible' custom={0}>
            <Name>Hamid Shaikh</Name>
            <Role>Full Stack Developer  ·  MERN Stack  ·  Next.js  ·  TypeScript  ·  Node.js</Role>
            <ContactRow>
              <a href="mailto:hamidshaikh02102@gmail.com">hamidshaikh02102@gmail.com</a>
              <span>+91 91372 80523</span>
              <span>Mumbai, Maharashtra</span>
              <a href="https://github.com/kakeroths" target="_blank" rel="noreferrer">github.com/kakeroths</a>
              <a href="https://linkedin.com/in/hamid-shaikh-0b12a6258" target="_blank" rel="noreferrer">linkedin.com/in/hamid-shaikh</a>
            </ContactRow>
          </Header>

          {/* Summary */}
          <Section variants={fadeUp} initial='hidden' animate='visible' custom={1}>
            <SectionTitle>Professional Summary</SectionTitle>
            <SummaryText>
              Full Stack Developer with hands-on experience building and deploying scalable web applications using Next.js, React.js, TypeScript, Node.js, MongoDB, and Socket.IO. Skilled in REST API development, real-time systems, JWT authentication, WebRTC, and cloud deployment with Docker, CI/CD pipelines, and Vercel/Netlify. Independently delivered 4+ production-ready applications with strong problem-solving skills and a results-driven approach.
            </SummaryText>
          </Section>

          {/* Skills */}
          <Section variants={fadeUp} initial='hidden' animate='visible' custom={2}>
            <SectionTitle>Technical Skills</SectionTitle>
            <SkillsGrid>
              {skills.map(s => (
                <SkillRow key={s.cat}>
                  <SkillCategory>{s.cat}</SkillCategory>
                  <SkillValues>{s.val}</SkillValues>
                </SkillRow>
              ))}
            </SkillsGrid>
          </Section>

          {/* Experience */}
          <Section variants={fadeUp} initial='hidden' animate='visible' custom={3}>
            <SectionTitle>Experience</SectionTitle>
            <EntryBlock>
              <EntryHeader>
                <EntryTitle>Software Development Intern</EntryTitle>
                <EntryDate>Dec 2025 – Present</EntryDate>
              </EntryHeader>
              <EntrySubtitle>Za Charity Feed Foundation · Mumbai, Maharashtra</EntrySubtitle>
              <BulletList>
                <li>Developed and maintained full-stack web features using the MERN stack, contributing to both frontend UI and backend logic.</li>
                <li>Designed and implemented RESTful APIs using Node.js and Express.js with clean architecture, error handling, and input validation.</li>
                <li>Integrated Redis caching for frequently accessed data, reducing database load and improving API response times.</li>
                <li>Built and tested API endpoints using Postman, writing test collections for regression and functional testing.</li>
                <li>Worked with Next.js for server-side rendering and building performant, SEO-friendly pages.</li>
                <li>Managed data models and queries in MongoDB using Mongoose, designing schemas and optimizing queries.</li>
              </BulletList>
            </EntryBlock>
          </Section>

          {/* Projects */}
          <Section variants={fadeUp} initial='hidden' animate='visible' custom={4}>
            <SectionTitle>Projects</SectionTitle>

            <EntryBlock>
              <EntryHeader>
                <EntryTitle>Couple Connect — Real-Time Couples Platform</EntryTitle>
                <EntryDate>2024 – 2025</EntryDate>
              </EntryHeader>
              <ProjectLink href="#" target="_blank" rel="noreferrer">View Project →</ProjectLink>
              <TechStack>Next.js 14, React 18, TypeScript, Node.js, Express.js, Socket.IO, MediaSoup (WebRTC), MongoDB Atlas, Prisma ORM, MeiliSearch, Docker, Nginx, Railway, GitHub Actions</TechStack>
              <BulletList>
                <li>Built a full-stack real-time couples platform with private chat, video calling, and multiplayer games.</li>
                <li>Implemented WebRTC-based peer-to-peer video calling using MediaSoup SFU with DTLS-SRTP encryption.</li>
                <li>Developed real-time messaging with Socket.IO supporting reactions, reply threads, read receipts, and full-text search via MeiliSearch.</li>
                <li>Designed secure auth with JWT, OTP email verification, password reset, device fingerprinting, and rate limiting.</li>
                <li>Containerized with Docker multi-stage builds, configured Nginx reverse proxy, and set up CI/CD with GitHub Actions.</li>
              </BulletList>
              <TagRow>
                {['Next.js 14', 'Socket.IO', 'WebRTC', 'Docker', 'MongoDB', 'CI/CD'].map(t => <Tag key={t}>{t}</Tag>)}
              </TagRow>
            </EntryBlock>

            <EntryBlock>
              <EntryHeader>
                <EntryTitle>Apna Interior — Interior Design Business Website</EntryTitle>
                <EntryDate>2023 – 2024</EntryDate>
              </EntryHeader>
              <ProjectLink href="#" target="_blank" rel="noreferrer">View Project →</ProjectLink>
              <TechStack>Next.js 14, TypeScript, Firebase Firestore, Tailwind CSS, Framer Motion, Netlify</TechStack>
              <BulletList>
                <li>Designed and developed a full-stack interior design website with animated hero section and responsive portfolio gallery.</li>
                <li>Integrated Firebase Firestore for consultation form submissions, reducing manual follow-up time by 60%.</li>
                <li>Implemented advanced animations and page transitions using Framer Motion, improving user engagement.</li>
                <li>Deployed on Netlify with custom domain and SSL, achieving 95+ Google Lighthouse performance score.</li>
              </BulletList>
              <TagRow>
                {['Next.js 14', 'TypeScript', 'Firebase', 'Framer Motion', 'Netlify'].map(t => <Tag key={t}>{t}</Tag>)}
              </TagRow>
            </EntryBlock>
          </Section>

          {/* Education */}
          <Section variants={fadeUp} initial='hidden' animate='visible' custom={5}>
            <SectionTitle>Education</SectionTitle>
            <EntryBlock>
              <EntryHeader>
                <EntryTitle>Bachelor of Computer Science (B.Sc. CS)</EntryTitle>
                <EntryDate>2021 – 2024</EntryDate>
              </EntryHeader>
              <EntrySubtitle>Ismail Yusuf College, Mumbai, Maharashtra · CGPA: 7.8 / 10</EntrySubtitle>
            </EntryBlock>
          </Section>

          {/* Achievements */}
          <Section variants={fadeUp} initial='hidden' animate='visible' custom={6}>
            <SectionTitle>Key Achievements</SectionTitle>
            <BulletList>
              {achievements.map((a, i) => <li key={i}>{a}</li>)}
            </BulletList>
          </Section>
        </Wrapper>

        <BigTitle text="RESUME" top="10%" right="2%" />
      </Box>
    </ThemeProvider>
  )
}

export default ResumePage
