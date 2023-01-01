interface SocialIconProps {
  url: string,
  icon: JSX.Element
}

export default function SocialIcon({url, icon}: SocialIconProps) {
  return (
    <a href={url} className='text-[3.25em] cursor-pointer text-white hover:text-primary block'>
      {icon}
    </a>
  );
}
