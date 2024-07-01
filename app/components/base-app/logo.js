import Link from "next/link";
import { ArrowUpRightIcon } from "@heroicons/react/16/solid";

export default function Logo() {
  return (
    <div className="flex items-center gap-1 select-none">
      <span className="text-2xl font-bold px-1.5 py-1 bg-black text-white">
        PYQ
      </span>
      <span className="flex flex-col leading-none text-xs gap-0 uppercase">
        <span>Docs</span>
        <span>AnanyaGB</span>
      </span>
    </div>
  );
}
