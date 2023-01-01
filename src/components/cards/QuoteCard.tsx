import Card from './Card';

interface QuoteCardProps {
  quote: string,
  author: string,
}

export default function QuoteCard({quote, author}: QuoteCardProps) {
  return (
    <Card styles='w-[75vw] md:w-[38vw] mx-auto text-xl pt-6 leading-6'>
      <>
        <blockquote className='mt-3'>
          {quote}
        </blockquote>

        <div className='mt-4 w-full text-end'>
          <cite>
            <small className='text-sm not-italic'>
              {author}
            </small>
          </cite>
        </div>
      </>
    </Card>
  );
}
