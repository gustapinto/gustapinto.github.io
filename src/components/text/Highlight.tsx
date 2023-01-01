interface HighlightProps {
  children: string|JSX.Element
}

export default function Highlight({children}: HighlightProps) {
  return (
    <strong className='text-primary'>
      {children}
    </strong>
  );
}
