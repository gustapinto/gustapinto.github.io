import QuoteCard from '../components/cards/QuoteCard';
import SocialIcon from '../components/icons/SocialIcon';
import social from '../assets/social.dataset';
import RadarChart from '../components/charts/RadarChart';
import langs from '../assets/langs.dataset';
import {jobsDataset} from '../assets/jobs.dataset';
import JobTimelineItem from '../components/timelines/JobTimelineItem';
import HomeSection from '../components/HomeSection';
import { JobSchema } from '../schemas/jobs';

export default function Home() {
  return (
    <main>
      <HomeSection>
        <QuoteCard
          quote={'“O melhor patrimônio que dispomos para dar nossa contribuição máxima ao mundo somos nós”'}
          author={'Greg McKeown, Essencialismo'}
        />
      </HomeSection>


      <HomeSection>
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
      </HomeSection>


      <HomeSection>
        <div className='w-[95vw] md:w-[55vw] mx-auto'>
          <div className='w-100 sm:grid sm:grid-cols-2 gap-x-8'>
            <div className='grid place-items-center mb-8 sm:my-0'>
              <div>
                <p className='my-0 sm:my-4 text-white'>
                Um desenvolvedor de software apaixonado por desenvolvimento backend, engenharia de dados, sempre pronto para inovar ou revolucionar processos, simplificando bases de código e fluxos de dados para a maior entrega de valor possível
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
      </HomeSection>

      <HomeSection invertTitleSkew title='Experiência Profissional'>
        {jobsDataset.map((job: JobSchema, jobIndex: number) => (
          <JobTimelineItem job={job} jobIndex={jobIndex} />
        ))}
      </HomeSection>
    </main >
  );
}
