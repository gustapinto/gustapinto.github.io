import { JobHistorySchema } from "../../schemas/jobs";

interface JobHistoryContentProps {
  history: JobHistorySchema
  isIndexEven: boolean
}

export default function JobHistoryContent({ history, isIndexEven }: JobHistoryContentProps) {
  const textAlign = isIndexEven ? 'text-left' : 'text-right'

  return (
    <div className={`-mt-7 ${textAlign}`}>
      <div>
        <h2 className='text-xl font-semibold'>
          {history.role}
        </h2>

        <h3 className='text-sm'>
          {history.date}
        </h3>
      </div>

      <div className='mt-4'>
        {history.description}
      </div>
    </div>
  );
}