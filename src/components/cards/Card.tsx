import { useMemo } from "react";

interface CardProps {
  styles?: string
  invertSkew?: boolean
  children: JSX.Element
}

export default function Card({styles, invertSkew: invertedSkew, children}: CardProps) {
  const skew = invertedSkew
    ? "-skew-y-2"
    : "skew-y-2"

  return (
    <div className={`bg-white ${skew} p-6 ${styles}`}>
      {children}
    </div>
  );
}
