import {SiDocker, SiGo, SiJava, SiLaravel, SiPython, SiReact, SiVuedotjs} from 'react-icons/si';
import Highlight from '../components/text/Highlight';
import { JobSchema } from '../schemas/jobs';

/* eslint-disable */
export const jobsDataset: Array<JobSchema> = [
  {
    company: 'Napp Solutions',
    link: 'https://www.nappsolutions.com.br/',
    history: [
      {
        role: 'Desenvolvedor fullstack sênior',
        date: 'Novembro/2022 - Atualmente',
        description: <>
          Atuo como desenvolvedor fullstack de <Highlight>microsserviços</Highlight> e plataformas web orientadas à eventos com as linguagens de programação <Highlight>Python</Highlight>, <Highlight>Java</Highlight> e <Highlight>Go</Highlight>, apoiadas por ferramentas como <Highlight>Camunda BPMN</Highlight> e serviços Cloud com GCP.
        </>,
      },
      {
        role: 'Analista de integração ETL pleno',
        date: 'Dezembro/2021 - Novembro/2022',
        description: <>
          Atuei como analista de integração <Highlight>ETL</Highlight>, desenvolvendo rotinas de ingestão de dados em <Highlight>Python</Highlight> e produzindo serviços em <Highlight>Go</Highlight>, promovendo a migração de rotinas legado para arquiteturas de ETL distribuidas e <Highlight>altamente concorrentes</Highlight>.
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
        role: 'Desenvolvedor fullstack jûnior',
        date: 'Dezembro/2019 - Novembro/2021',
        description: <>
          Trabalhei como desenvolvedor web full stack na construção de <Highlight>aplicações web</Highlight> e SPAs de apoio a produção construídas em <Highlight>Laravel</Highlight> e <Highlight>Vue.js</Highlight>, tendo também a oportunidade de atuar com <Highlight>Python</Highlight> no desenvolvimento de rotinas ETL estruturadas com Flask.
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
