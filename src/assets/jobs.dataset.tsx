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
        role: 'Desenvolvedor Backend',
        date: 'Julho/2024 - Atualmente',
        description: <>
          Trabalho como desenvolvedor na estruturação, engenharia e manutenção de microsserviços altamente distribuídos e escaláveis, desenvolvidos utilizando <Highlight>Java</Highlight>, <Highlight>Spring Boot</Highlight> e banco de dados <Highlight>Oracle</Highlight>, também atuando na implementação do mesmo em Cloud, usando para isso <Highlight>AWS</Highlight>, <Highlight>Kubernetes</Highlight> e pipelines de CI/CD Jenkins
        </>
      },
    ],
    icons: [
      <SiSpringboot />,
      <SiKubernetes />,
      <SiApachekafka />,
      <SiGooglecloud />,
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
          <p>
            Atuei no desenvolvimento de microsserviços utilizando <Highlight>Go</Highlight>, <Highlight>Java</Highlight> e <Highlight>Python</Highlight>, além de participar da construção e manutenção de pipelines de Big Data com <Highlight>Apache Spark</Highlight>, <Highlight>Delta Lake</Highlight> e <Highlight>Snowflake Data Cloud</Highlight>. Todo o trabalho foi sustentado por ferramentas e plataformas como Google Cloud Platform (GCP), Docker e Linux.
          </p>

          <p className='mt-2'>
            Além das atividades de desenvolvimento, também ofereci suporte técnico ao time, liderando <Highlight><i>feature-teams</i></Highlight> multidisciplinares na implementação de funcionalidades tanto em plataformas internas e externas.
          </p>
        </>,
      },
      {
        role: 'Analista de Integração Pleno',
        date: 'Novembro/2021 - Novembro/2022',
        description: <>
          Atuei desenvolvendo rotinas de ingestão de dados em <Highlight>Python</Highlight> e promovendo a migração de rotinas legado para arquiteturas distribuidas e altamente concorrentes usando serviços de ETL "Ad hoc" escritos em <Highlight>Go</Highlight> e apoiados pela plataforma de dados <Highlight>Hazelcast</Highlight>.
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
