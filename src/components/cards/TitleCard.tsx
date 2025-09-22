import Card from "./Card"

type TitleCardProps = {
  title: string
  invertSkew?: boolean
}

export default function TitleCard({title, invertSkew}: TitleCardProps) {
  return (
    <Card invertSkew={invertSkew} styles='w-[50vw] md:w-[20vw] mx-auto text-center pt-6'>
      <span className="text-2xl text-bold">
        <strong>
          {title}
        </strong>
      </span>
    </Card>
  )
}