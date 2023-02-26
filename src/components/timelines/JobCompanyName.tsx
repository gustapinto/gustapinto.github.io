import { JobSchema } from "../../schemas/jobs";

interface JobCompanyNameProps {
  job: JobSchema
  jobIndex: number
  isIndexEven: boolean
}

export default function JobCompanyName({ job, isIndexEven }: JobCompanyNameProps) {
  const textAlign = isIndexEven ? 'text-right' : 'text-left';
  const iconsAlign = isIndexEven ? 'place-content-end' : 'place-content-start';

  return (
    <div className="w-full -mt-3">
      <h1 className={`text-3xl font-semibold hover:text-primary ${textAlign}`}>
        <a href={job.link}>
          {job.company}
        </a>
      </h1>

      <div className={`flex gap-4 mt-2 ${iconsAlign}`}>
        {job.icons.map((icon, iconIndex) => (
          <div key={`job_icon_${iconIndex}`} className='text-2xl'>
            {icon}
          </div>
        ))}
      </div>
    </div>
  );
}