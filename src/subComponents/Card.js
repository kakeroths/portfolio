import { motion } from 'framer-motion';
import React from 'react'
import styled from 'styled-components';

const Box = styled(motion.li)`
width: 16rem;
height: 40vh;
background-color: ${props => props.theme.text};
color:${props => props.theme.body};
padding: 1.5rem 2rem;
margin-right: 8rem;
border-radius: 0 50px 0 50px;
display: flex;
flex-direction: column;
justify-content: space-between;
border: 1px solid ${props => props.theme.body};
transition: all 0.2s ease;

&:hover{
background-color: ${props => props.theme.body};
color:${props => props.theme.text};
border: 1px solid ${props => props.theme.text};
}

@media (max-width: 768px) {
  width: 85vw;
  height: auto;
  min-height: 16rem;
  margin-right: 0;
  padding: 1.2rem 1.5rem;
}

@media (max-width: 480px) {
  width: 92vw;
  padding: 1rem 1.2rem;
}
`
const Title = styled.h2`
font-size: calc(1em + 0.5vw);

@media (max-width: 768px) {
  font-size: 1.1rem;
}
`
const Date = styled.span`
font-size: calc(0.7em + 0.2vw);
font-family: 'Karla', sans-serif;
opacity: 0.7;

@media (max-width: 768px) {
  font-size: 0.8rem;
}
`
const Description = styled.h2`
font-size: calc(0.8em + 0.3vw);
font-family: 'Karla',sans-serif;
font-weight: 500;

@media (max-width: 768px) {
  font-size: 0.85rem;
  margin: 0.5rem 0;
}
`
const Tags = styled.div`
border-top: 2px solid ${props =>props.theme.body};
padding-top: 0.5rem;
display:flex;
flex-wrap:wrap;
${Box}:hover &{
border-top: 2px solid ${props =>props.theme.text};
}
`
const Tag = styled.span`
margin-right:1rem;
font-size:calc(0.8em + 0.3vw);

@media (max-width: 768px) {
  font-size: 0.75rem;
}
`
const Footer = styled.footer`
display: flex;
justify-content: space-between;
align-items: center;
margin-top: 0.5rem;
`
const Link = styled.a`
background-color: ${props =>props.theme.body};
color: ${props =>props.theme.text};
text-decoration: none;
padding:0.5rem calc(2rem + 2vw);
border-radius: 0 0 0 50px;
font-size:calc(1em + 0.5vw);

${Box}:hover &{
    background-color: ${props =>props.theme.text};
    color: ${props =>props.theme.body};
}

@media (max-width: 768px) {
  font-size: 0.9rem;
  padding: 0.5rem 2rem;
}
`
const LiveDot = styled.span`
width: 10px;
height: 10px;
border-radius: 50%;
background-color: #00e676;
display: inline-block;
box-shadow: 0 0 6px #00e676;
`

const Item = {
    hidden:{ scale:0 },
    show:{
        scale:1,
        transition: { type: 'spring', duration: 0.5 }
    }
}

const Card = (props) => {
    const {id, name, description, tags, demo, date} = props.data;
    return (
        <Box key={id} variants={Item}>
            <Title>{name}</Title>
            <Date>{date}</Date>
            <Description>{description}</Description>
            <Tags>
                {tags.map((t,id) => (
                    <Tag key={id}>#{t}</Tag>
                ))}
            </Tags>
            <Footer>
                <Link href={demo} target="_blank" rel="noreferrer">
                    Visit
                </Link>
                <LiveDot title="Live" />
            </Footer>
        </Box>
    )
}

export default Card