import Link from "next/link";
export default function NavItem({ href, children }) {
  return (
    <li className="text-[14px] leading-[14px] tracking-[0.125rem] text-black uppercase hover:underline">
      <Link href={href}>{children}</Link>
    </li>
  );
}
