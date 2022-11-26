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
        <div style={{ fontSize: "24px", marginBottom: "6px" }}>
          <TypingEffect
            staticText="Je suis"
            text={[
              "Merith",
              "développeur",
              "fullstack",
              "autodidacte",
              "diplômé Bac+5",
            ]}
          />
        </div>

        <SectionText>
          Développeur Full Stack autodidacte et diplômé d'un{" "}
          <a
            href="https://www.hetic.net/formations/mastere-cto-tech-lead"
            style={{ color: "#13ADC7" }}
          >
            Mastère CTO & Tech Lead
          </a>{" "}
          de l'école{" "}
          <a href="https://www.hetic.net/" style={{ color: "#13ADC7" }}>
            HETIC
          </a>{" "}
          ayant plus de 2 ans d'experience, je peux contribuer à la réalisation
          de vos sites, pages et applications à l'aide de ma connaissance du
          développement front-end et back-end. Aussi porté vers le métier de{" "}
          <a
            href="https://azure.microsoft.com/fr-fr/resources/cloud-computing-dictionary/what-is-devops/"
            style={{ color: "#13ADC7" }}
          >
            DevOps
          </a>
          , le déploiement et la gestion de la montée en charge de vos sites
          font aussi partie de mes domaines d'expertise.
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
