import {
  DiTerminal,
  DiJavascript,
  DiDocker,
  DiAws,
  DiDatabase,
  DiPhp,
  DiGoogleAnalytics,
} from "react-icons/di";
import { SiGit, SiKubernetes, SiSentry, SiGithubactions } from "react-icons/si";
import { RiFlutterFill } from "react-icons/ri";

export const Skills = [
  {
    slug: "javascript",
    Component: DiJavascript,
    title: "Javascript",
    Description: () => (
      <>
        Nodejs et Nestjs en back, React.js, Nextjs en front et Typescript pour
        le typage
      </>
    ),
  },
  {
    slug: "Php",
    Component: DiPhp,
    title: "PHP",
    Description: () => <>Php natif, Symfony et CodeIgniter </>,
  },
  {
    slug: "flutter",
    Component: RiFlutterFill,
    title: "Flutter",
    Description: () => (
      <>
        {" "}
        J'utilise flutter pour développer des applications mobiles Android/IOS
      </>
    ),
  },
  {
    slug: "terminal",
    Component: DiTerminal,
    title: "Scripting",
    Description: () => (
      <>J'écris des dizaines de scripts Shell à des fins diverses.</>
    ),
  },
  {
    slug: "sql_nosql",
    Component: DiDatabase,
    title: "SQL/NoSQL",
    Description: () => (
      <>J'ai déjà travaille sur du MySQL, PostgreSQL, MongoDB et Firebase.</>
    ),
  },
  {
    slug: "git",
    Component: SiGit,
    title: "Git",
    Description: () => (
      <>Git est un outil que j'utilise au quotidien (GitHub, Gitlab)</>
    ),
  },
  {
    slug: "Docker",
    Component: DiDocker,
    title: "Docker",
    Description: () => (
      <>
        Travailler avec des conteneurs afin de créer des stacks d'applications.{" "}
      </>
    ),
  },
  {
    slug: "kubernetes",
    Component: SiKubernetes,
    title: "kubernetes",
    Description: () => (
      <>
        Pour gérer l'automatisation de déploiement, la montée en charge et les
        clusters des serveurs
      </>
    ),
  },
  {
    slug: "AWS",
    Component: DiAws,
    title: "AWS",
    Description: () => (
      <>
        Grande expérience d'ulisation des services comme EC2, RDS, S3, SDK et
        Route 53
      </>
    ),
  },
  {
    slug: "GoogleAnalytics",
    Component: DiGoogleAnalytics,
    title: "Google Analytics",
    Description: () => <>Vue sur les audiences des sites Web</>,
  },
  {
    slug: "sentry",
    Component: SiSentry,
    title: "Sentry",
    Description: () => (
      <>Pour faire du suivi des erreurs et la surveillance des performances</>
    ),
  },
  {
    slug: "actions",
    Component: SiGithubactions,
    title: "Github Actions",
    Description: () => <>workflows CI/CD</>,
  },
];
