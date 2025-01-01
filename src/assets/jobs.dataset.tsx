import {SiAmazonaws, SiApacheairflow, SiApachekafka, SiApachespark, SiDelta, SiDocker, SiGo, SiGooglecloud, SiJava, SiKubernetes, SiLaravel, SiOracle, SiPython, SiReact, SiSnowflake, SiSpringboot, SiVuedotjs, } from 'react-icons/si';
import Highlight from '../components/text/Highlight';
import { JobSchema } from '../schemas/jobs';

/* eslint-disable */
export const jobsDataset: Array<JobSchema> = [
  {
    company: 'Claro Brasil',
    link: 'https://www.claro.com.br/',
    history: [
      {
        role: 'Desenvolvedor Backend Pleno',
        date: 'Julho/2024 - Atualmente',
        description: <>
          Trabalho como desenvolvedor na estruturação, engenharia e manutenção de microsserviços altamente distribuídos e escaláveis, desenvolvidos utilizando <Highlight>Java</Highlight>, <Highlight>Spring Boot</Highlight>, <Highlight>Apache Kafka</Highlight> para operações assíncronas e banco de dados <Highlight>Oracle</Highlight>. Além do desenvolvimento dos mesmos também atuo na implementação em Cloud, usando para isso <Highlight>AWS</Highlight>, <Highlight>Kubernetes</Highlight> e pipelines de CI/CD Jenkins
        </>
      },
    ],
    icons: [
      <SiSpringboot />,
      <SiKubernetes />,
      <SiApachekafka />,
      <SiOracle />,
      <SiAmazonaws />,
      <SiJava />,
    ]
  },
  {
    company: 'Napp Solutions',
    link: 'https://www.nappsolutions.com.br/',
    history: [
      {
        role: 'Desenvolvedor Fullstack Sênior',
        date: 'Novembro/2022 - Julho/2024',
        description: <>
          Trabalhei desenvolvendo microsserviços e plataformas web utilizando <Highlight>Go</Highlight>, <Highlight>Laravel</Highlight> e <Highlight>React</Highlight>, apoiadas por ferramentas como <Highlight>Camunda BPMN</Highlight> e serviços da <Highlight>Google Cloud Platform</Highlight>.

          <p>Também atuei como engenheiro de dados, arquitetando e desenvolvendo pipelines de ingestão e processamaento de dados em Near Real Time, usando para isso ferramentas como <Highlight>Delta Lake</Highlight>, <Highlight>Apache Kafka</Highlight> e <Highlight>Apache Spark</Highlight> em plataformas como <Highlight>GCP</Highlight> e <Highlight>Snowflake Data Cloud</Highlight></p>
        </>,
      },
      {
        role: 'Analista de Integração Pleno',
        date: 'Dezembro/2021 - Novembro/2022',
        description: <>
          Atuei Desenvolvendo rotinas de ingestão de dados em <Highlight>Python</Highlight> e promovendo a migração de rotinas legado para arquiteturas distribuidas e altamente concorrentes usando serviços de ETL "Ad hoc" escritos em <Highlight>Go</Highlight> e apoiados pela plataforma de dados <Highlight>Hazelcast</Highlight>.
        </>,
      },
    ],
    icons: [
      <SiPython />,
      <SiDocker />,
      <SiGooglecloud />,
      <SiApachekafka />,
      <SiApachespark />,
      <SiSnowflake />,
      <SiLaravel />,
      <SiReact />,
      <SiGo />,
    ],
  },
  {
    company: 'Cassum Web Development',
    link: 'https://www.cassum.dev/',
    history: [
      {
        role: 'Desenvolvedor Fullstack Junior',
        date: 'Dezembro/2019 - Novembro/2021',
        description: <>
          Trabalhei contruindo e mantendo <Highlight>aplicações web</Highlight> e SPAs de apoio a produção com <Highlight>Laravel</Highlight> e <Highlight>Vue.js</Highlight>, tendo trabalhado também com <Highlight>Python</Highlight> no desenvolvimento de rotinas <Highlight>ETL</Highlight>.
        </>
      }
    ],
    icons: [
      <SiPython />,
      <SiDocker />,
      <SiLaravel />,
      <SiVuedotjs />,
    ],
  },
];
