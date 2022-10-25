import Link from "next/link";
import React from "react";
import {
  AiFillGithub,
  AiFillGitlab,
  AiFillLinkedin,
  AiFillTwitterCircle,
  AiFillMail,
} from "react-icons/ai";
import {
  Container,
  Div1,
  Div2,
  Div3,
  NavLink,
  SocialIcons,
} from "./HeaderStyles";

const Header = () => (
  <Container>
    <Div1>
      <Link href="/">
        <a style={{ display: "flex", alignItems: "center", color: "white" }}>
          <img src="/merith.png" height={40} width={40} />{" "}
          <span style={{ marginLeft: 10, marginTop: 7, fontSize: 20 }}>
            Merith NDOLO
          </span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#projects">
          <NavLink>Projets</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#skills">
          <NavLink>Skills</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#about">
          <NavLink> &Agrave; propos</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href="https://github.com/Merith-Ndolo/" target="_blank">
        <AiFillGithub size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://gitlab.com/Merith-Magni" target="_blank">
        <AiFillGitlab size="3rem" />
      </SocialIcons>
      <SocialIcons
        href="https://www.linkedin.com/in/merith-ndolo/"
        target="_blank"
      >
        <AiFillLinkedin size="3rem" />
      </SocialIcons>
      <SocialIcons href="mailto:merithndolo@gmail.com" target="_blank">
        <AiFillMail size="3rem" />
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
