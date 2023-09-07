"use client"

import Link from "next/link";
import { IconType } from "react-icons";
import { twMerge } from "tailwind-merge";

interface SidebarItemProps {
  icon: IconType;
  label: string;
  active?: boolean;
  href: string;
}

const SidebarItem: React.FC<SidebarItemProps> = ({
  icon: Icon,
  label,
  active,
  href,
}) => {
  return (
    <Link
      href={href}
      className={twMerge(
        `
        flex
        flex-row 
        h-auto
        items-center
        w-full
        font-medium
        cursor-pointer
        text-neutral-400
        hover:text-white
        transition
        py-1
        `,
        active && "text-white"
      )}
    >
      <Icon size={26} />
      <p className="truncate pl-2 w-full"> {label}</p>
    </Link>
  );
};

export default SidebarItem;
