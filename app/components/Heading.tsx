"use client";

type Props = {
  title: string;
  subtitle?: string;
  center?: boolean;
};

export default function Heading({ title, subtitle, center }: Props) {
  return (
    <div className={center ? "text-center" : "text-start"}>
      <h2 className="font-bold text-xl">{title}</h2>
      <h3 className="text-neutral-500 mt-1 ">{subtitle}</h3>
    </div>
  );
}
