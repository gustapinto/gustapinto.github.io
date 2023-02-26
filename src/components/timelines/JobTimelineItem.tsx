import { MdCircle } from "react-icons/md";
import { JobHistorySchema, JobSchema } from "../../schemas/jobs";
import JobCompanyName from "./JobCompanyName";
import JobHistoryContent from "./JobHistoryContent";

interface JobTimelineItemProps {
  job: JobSchema
  jobIndex: number
}

export default function JobTimelineItem({ job, jobIndex }: JobTimelineItemProps) {
  const isIndexEven = jobIndex % 2 === 0;

  return (
    <div key={`job_${jobIndex}`} className='grid grid-cols-2 gap-5 text-white'>
      {isIndexEven ? (
        <>
          <JobCompanyName
            job={job}
            jobIndex={jobIndex}
            isIndexEven={isIndexEven}
          />

          <div className={`text-${isIndexEven ? 'left' : 'right'} border-l-2 pl-5`}>
            {job.history.map((history: JobHistorySchema, historyIndex: number) => (
              <div key={`job_${jobIndex}_history_${historyIndex}`} className='mb-8'>
                <MdCircle className='visible text-2xl -ml-8 -mt-1' />

                <div>
                  <JobHistoryContent
                    history={history}
                    isIndexEven={isIndexEven}
                  />
                </div>
              </div>
            ))}
          </div>
        </>
      ) : (
        <>
          <div className={`text-${isIndexEven ? 'left' : 'right'} border-r-2 pr-5 -mr-[1.4rem] pt-8`}>
            {job.history.map((history: JobHistorySchema, historyIndex: number) => (
              <div key={`job_${jobIndex}_history_${historyIndex}`} className='mb-8'>
                <div className="flex w-full place-content-end">
                  <MdCircle className='text-2xl -mr-8 -mt-1' />
                </div>

                <div>
                  <JobHistoryContent
                    history={history}
                    isIndexEven={isIndexEven}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="ml-5 mt-8">
            <JobCompanyName
              job={job}
              jobIndex={jobIndex}
              isIndexEven={isIndexEven}
            />
          </div>
        </>
      )}
    </div>
  );
}