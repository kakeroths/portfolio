import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import {lightTheme} from './Themes';
import { Design, Develope} from './AllSvgs';


import LogoComponent from '../subComponents/LogoComponent';
import SocialIcons from '../subComponents/SocialIcons';
import PowerButton from '../subComponents/PowerButton';
import ParticleComponent from '../subComponents/ParticleComponent';
import BigTitle from '../subComponents/BigTitlte'

const Box = styled.div`
background-color: ${props => props.theme.body};
width: 100vw;
height:100vh;
position: relative;
display: flex;
justify-content: space-evenly;
align-items: center;
flex-wrap: wrap;
padding: 2rem;
box-sizing: border-box;

@media (max-width: 768px) {
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding: 1rem;
    overflow-y: auto;
    height: 100vh;
    padding-top: 6rem;
    padding-bottom: 2rem;
}
`

const Main = styled.div`
border: 2px solid ${props => props.theme.text};
color: ${props => props.theme.text};
background-color: ${props => props.theme.body};
padding: 2rem;
width: 30vw;
height: 60vh;
z-index:3;
line-height: 1.5;
cursor: pointer;
margin: 1rem;
box-sizing: border-box;
overflow-y: auto;
overflow-x: hidden;

font-family: 'Ubuntu Mono',monospace;
display: flex;
flex-direction: column;

&:hover{
    color: ${props => props.theme.body};
    background-color: ${props => props.theme.text};
}

/* Custom scrollbar */
&::-webkit-scrollbar {
    width: 6px;
}

&::-webkit-scrollbar-track {
    background: transparent;
}

&::-webkit-scrollbar-thumb {
    background: ${props => props.theme.text};
    border-radius: 3px;
}

&:hover::-webkit-scrollbar-thumb {
    background: ${props => props.theme.body};
}

@media (max-width: 768px) {
    width: 90vw;
    height: 45vh;
    margin: 1rem 0;
    padding: 1.5rem;
}

@media (max-width: 480px) {
    width: 95vw;
    height: 40vh;
    padding: 1rem;
    margin: 0.5rem 0;
}
`

const Title = styled.h2`
display: flex;
justify-content: center;
align-items: center;
font-size: calc(1em + 1vw);
margin-bottom: 1rem;

${Main}:hover &{
    &>*{
        fill:${props => props.theme.body};
    }
}

&>*:first-child{
margin-right: 1rem;
}

@media (max-width: 768px) {
    font-size: calc(0.8em + 2vw);
    flex-direction: column;
    text-align: center;
    
    &>*:first-child{
        margin-right: 0;
        margin-bottom: 0.5rem;
    }
}
`

const Description = styled.div`
color: ${props => props.theme.text};
font-size: calc(0.6em + 1vw);
padding: 0.5rem 0;
margin-bottom: 1rem;
flex-shrink: 0;

${Main}:hover &{
    color:${props => props.theme.body};
}

strong{
    margin-bottom: 0.5rem;
    text-transform: uppercase;
    display: block;
    font-weight: 600;
}

ul,p{
    margin: 0;
    padding: 0;
    word-wrap: break-word;
    line-height: 1.4;
}

p {
    margin-top: 0.5rem;
}

@media (max-width: 768px) {
    font-size: calc(0.7em + 1.5vw);
}

@media (max-width: 480px) {
    font-size: calc(0.8em + 2vw);
    margin-bottom: 0.8rem;
}
`

const MySkillsPage = () => {
    return (
        <ThemeProvider theme={lightTheme}>
<Box>

<LogoComponent theme='light'/>
<SocialIcons theme='light'/>
<PowerButton />
<ParticleComponent theme='light' />
            <Main>
<Title>
    <Develope width={40} height={40} /> Backend Developer
</Title>
<Description>
I specialize in building robust server-side applications and scalable APIs with focus on performance and security.
</Description>
<Description>
<strong>Backend Skills</strong>
<p>
Node.js, Express.js, MongoDB, Redis, JWT, Socket.io, Microservices, RESTful APIs, GraphQL
</p>
</Description>
<Description>
<strong>Tools & Services</strong>
<p>
Docker, AWS, Cloudflare, Postman, MongoDB Atlas, Heroku, Vercel
</p>
</Description>

            </Main>
            <Main>
<Title>
    <Design width={40} height={40} /> Full Stack Developer
</Title>
<Description>
I create complete web applications from database design to user interface with modern technologies.
</Description>
<Description>
<strong>Frontend Skills</strong>
<p>
React, Next.js, Redux, TypeScript, Tailwind CSS, Material-UI, Framer Motion
</p>
</Description>
<Description>
<strong>Additional Tools</strong>
<p>
Sharp (Image Processing), Stripe, PayPal, Cloudinary, Git, GitHub, VS Code
</p>
</Description>

            </Main>

            <BigTitle text="SKILLS" top="80%" right="30%" />

        </Box>

        </ThemeProvider>
        
    )
}

export default MySkillsPage
