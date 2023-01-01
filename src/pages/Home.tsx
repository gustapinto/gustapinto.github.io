import QuoteCard from '../components/cards/QuoteCard';
import SocialIcon from '../components/icons/SocialIcon';
import social from '../assets/social.dataset';

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
    </main>
  );
}
