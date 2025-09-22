import { PropsWithChildren } from "react"
import TitleCard from "./cards/TitleCard"

type HomeSectionProps = PropsWithChildren & {
  title?: string
  invertTitleSkew?: boolean
}

export default function HomeSection({title, invertTitleSkew, children}: HomeSectionProps) {
  return (
    <div>
      {(title?.length ?? 0) > 0 && (
        <div className="mt-[7.5em]">
          <TitleCard
            invertSkew={invertTitleSkew}
            title={title!}
          />
        </div>
      )}


      <div className='mt-[7.5em] w-[95vw] md:w-[75vw] 2xl:w-[55vw] mx-auto'>
        {children}
      </div>
    </div>
  )
}