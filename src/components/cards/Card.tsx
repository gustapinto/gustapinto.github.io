interface CardProps {
  styles?: string
  children: JSX.Element
}

export default function Card({styles, children}: CardProps) {
  return (
    <div className={`bg-white skew-y-2 p-6 ${styles}`}>
      {children}
    </div>
  );
}
