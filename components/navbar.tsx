"use client";
import { siteConfig } from "@/config/site";
import clsx from "clsx";
import { usePathname } from "next/navigation";

export const Navbar = () => {
  const pathname = usePathname();
  return (
    <section className="max-w-[1350px] px-5 md:px-10 flex items-center justify-between py-4 w-full">
      <h1 className="text-[26px] md:text-[30px] text-primary font-semibold">
        Radius
      </h1>
      {/* Menu List & Logo */}
      <div className="flex items-center gap-14 lg:gap-28">
        <ul className="hidden md:flex items-center gap-9">
          {siteConfig.navMenuItems.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className={clsx(
                  pathname === item.href
                    ? "text-black text-[16px] text-medium"
                    : "text-[#A6A6A6] text-[15px]",
                  "hover:text-primary transition-colors" // Optional: Add hover effects
                )}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <button className="bg-primary text-[14px] font-medium text-white rounded-full px-6 py-2">
          Join now
        </button>
      </div>
    </section>
  );
};
