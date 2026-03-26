import React, { useEffect, useRef, useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import { DarkTheme } from "./Themes";
import { motion } from "framer-motion";

import LogoComponent from "../subComponents/LogoComponent";
import SocialIcons from "../subComponents/SocialIcons";
import PowerButton from "../subComponents/PowerButton";

import { Projects } from "../data/ProjectData";
import Card from "../subComponents/Card";
import { YinYang } from "./AllSvgs";
import BigTitlte from "../subComponents/BigTitlte";

const Box = styled.div`
  background-color: ${(props) => props.theme.body};
  height: 400vh;
  position: relative;
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    height: auto;
    min-height: 100vh;
    display: block;
    padding: 6rem 1rem 4rem;
    box-sizing: border-box;
  }
`;

const Main = styled(motion.ul)`
  position: fixed;
  top: 12rem;
  left: calc(10rem + 15vw);
  height: 40vh;
  display: flex;
  color: white;
  list-style: none;
  padding: 0;
  margin: 0;

  @media (max-width: 768px) {
    position: relative;
    top: unset;
    left: unset;
    height: auto;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    padding: 0;
    margin: 0 auto;
    width: 100%;
  }
`;

const Rotate = styled.span`
  display: block;
  position: fixed;
  right: 1rem;
  bottom: 1rem;
  width: 80px;
  height: 80px;
  z-index: 1;

  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
    right: 0.5rem;
    bottom: 0.5rem;
  }
`;

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      duration: 0.5,
    },
  },
};

const ProjectPage = () => {
  const ref = useRef(null);
  const yinyang = useRef(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (isMobile) return;

    let element = ref.current;
    const rotate = () => {
      element.style.transform = `translateX(${-window.pageYOffset}px)`;
      yinyang.current.style.transform = "rotate(" + -window.pageYOffset + "deg)";
    };

    window.addEventListener("scroll", rotate);
    return () => window.removeEventListener("scroll", rotate);
  }, [isMobile]);

  return (
    <ThemeProvider theme={DarkTheme}>
      <Box>
        <LogoComponent theme="dark" />
        <SocialIcons theme="dark" />
        <PowerButton />

        <Main ref={ref} variants={container} initial="hidden" animate="show">
          {Projects.map((d) => (
            <Card key={d.id} data={d} />
          ))}
        </Main>

        <Rotate ref={yinyang}>
          <YinYang
            width={isMobile ? 40 : 80}
            height={isMobile ? 40 : 80}
            fill={DarkTheme.text}
          />
        </Rotate>

        <BigTitlte text="PROJECTS" top="10%" right="20%" />
      </Box>
    </ThemeProvider>
  );
};

export default ProjectPage;
