import {SiApacheairflow, SiDocker, SiGo, SiJava, SiLaravel, SiPython, SiReact, SiVuedotjs} from 'react-icons/si';
import Highlight from '../components/text/Highlight';
import { JobSchema } from '../schemas/jobs';

/* eslint-disable */
export const jobsDataset: Array<JobSchema> = [
  {
    company: 'Napp Solutions',
    link: 'https://www.nappsolutions.com.br/',
    history: [
      {
        role: 'Desenvolvedor Fullstack Sênior',
        date: 'Novembro/2022 - Atualmente',
        description: <>
          Atuo desenvolvendo microsserviços e plataformas web utilizando <Highlight>Java</Highlight>, <Highlight>Go</Highlight>, <Highlight>Laravel</Highlight> e <Highlight>React</Highlight>, apoiadas por ferramentas como <Highlight>Camunda BPMN</Highlight> e serviços da <Highlight>Google Cloud Platform</Highlight>.
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
      <SiLaravel />,
      <SiReact />,
      <SiJava />,
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
