import QuoteCard from '../components/cards/QuoteCard';
import SocialIcon from '../components/icons/SocialIcon';
import social from '../assets/social.dataset';
import Highlight from '../components/text/Highlight';
import RadarChart from '../components/charts/RadarChart';
import langs from '../assets/langs.dataset';
import {jobsDataset} from '../assets/jobs.dataset';
import {JobHistorySchema, JobSchema} from '../schemas/jobs';
import {MdCircle} from 'react-icons/md';
import JobTimelineItem from '../components/timelines/JobTimelineItem';

export default function Home() {
  return (
    <main>
      <div className='mt-[7.5em]'>
        <QuoteCard
          quote={'“O melhor patrimônio que dispomos para dar nossa contribuição máxima ao mundo somos nós”'}
          author={'Greg McKeown, Essencialismo'}
        />
      </div>

      <div className='mt-[7.5em]'>
        <div className='w-[95vw] sm:w-[35vw] mx-auto grid'>
          <div className='w-100 grid grid-cols-3 place-items-center'>
            {social.map((social, index) => (
              <SocialIcon
                key={`social-icon-${index}`}
                url={social.url}
                icon={social.icon}
              />
            ))}
          </div>
        </div>
      </div>

      <div className='mt-[7.5em]'>
        <div className='w-[95vw] md:w-[55vw] mx-auto'>
          <div className='w-100 sm:grid sm:grid-cols-2 gap-x-8'>
            <div className='grid place-items-center mb-8 sm:my-0'>
              <div>
                <p className='my-0 sm:my-4 text-white'>
                  Um <Highlight>jardineiro de software</Highlight> que sempre busca novas experiências, vivendo cada amanhã melhor que o ontem.
                </p>

                <p className='my-0 sm:my-4 text-white'>
                  Minhas ferramentas favoritas para o cultivo de softwares e arquiteturas são <Highlight>Linux + Docker</Highlight>, uma combinação que me apaixonou a primeira vista, <Highlight>Go</Highlight>, para a estruturação de backends e microsserviços, <Highlight>Python</Highlight>, para a manipulação de dados e <Highlight>React</Highlight> para a criação de frontends.
                </p>
              </div>
            </div>

            <div className='grid place-items-center mb-8 sm:my-0'>
              <RadarChart
                labels={langs.labels}
                data={langs.data}
              />
            </div>
          </div>
        </div>

        <div className='mt-[7.5em]'>
          <div className='w-[95vw] md:w-[75vw] 2xl:w-[55vw] mx-auto'>
            {jobsDataset.map((job: JobSchema, jobIndex: number) => (
              <JobTimelineItem job={job} jobIndex={jobIndex} />
            ))}
          </div>
        </div>
      </div >
    </main >
  );
}
