"use client";
type Props = {
  onClick: () => void;
  label: string;
};

export default function MenuItem({ onClick, label }: Props) {
  return (
    <div
      onClick={onClick}
      className="p-3 hover:bg-neutral-100 transition font-semibold cursor-pointer"
    >
      {label}
    </div>
  );
}
