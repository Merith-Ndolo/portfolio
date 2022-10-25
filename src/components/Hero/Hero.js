import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
  Link,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import TypingEffect from "../typingEffect/typingEffect";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Hey salut,
        </SectionTitle>
        <div style={{ fontSize: "24px" }}>
          <TypingEffect
            staticText="Je suis"
            text={[
              "Merith",
              "développeur",
              "fullstack",
              "autodidacte",
              "diplômé Bac+5 informatique",
            ]}
          />
        </div>

        <SectionText>
          Le plaisir dans le métier met la perfection dans le travail "Aristote"
        </SectionText>

        <Button
          onClick={(e) => {
            e.preventDefault();
            window.open("/files/MerithDev.pdf", "_blank");
          }}
        >
          Mon CV
        </Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
