"use client";
import React, { useState } from "react";
import { Sidebar, SidebarBody, SidebarLink } from "../ui/AnimatedSideBar";
import { IconArrowLeft, IconSettings } from "@tabler/icons-react";
import Link from "next/link";
import { motion } from "framer-motion";

import { cn } from "@/lib/utils";
import {
  LayoutGrid,
  LucideSidebarClose,
  LucideSidebarOpen,
} from "lucide-react";

import UserAvatar from "../userAccountSettings/UserAvatar";

export const Menulinks = [
  {
    label: "User Profile",
    href: "/user-settings",
    icon: <UserAvatar />,
  },
  {
    label: "Explore Agents",
    href: "/agents",
    icon: (
      <LayoutGrid className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
    ),
  },
  {
    label: "Settings",
    href: "#",
    icon: (
      <IconSettings className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
    ),
  },
  {
    label: "Logout",
    href: "#",
    icon: (
      <IconArrowLeft className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
    ),
  },
];

export function SideBarMain() {
  const [open, setOpen] = useState(false);
  const [animate, setAnimate] = useState(true);
  return (
    <div
      className={cn(
        "rounded-md flex flex-col md:flex-row dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 overflow-hidden bg-neutral-200",
        "h-full  fixed z-50"
      )}
    >
      <Sidebar open={open} setOpen={setOpen} animate={animate}>
        <SidebarBody className="justify-between gap-10 h-screen bg-neutral-200">
          <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
            <div
              className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0 cursor-pointer ml-auto mr-4"
              onClick={() => {
                setAnimate(!animate);
              }}
            >
              {animate ? (
                <LucideSidebarOpen />
              ) : (
                <LucideSidebarClose className="text-blue-600" />
              )}
            </div>
            <div className="mt-8 flex flex-col gap-2">
              {Menulinks.map((link, idx) => (
                <SidebarLink
                  className="hover:font-bold"
                  key={idx}
                  link={link}
                />
              ))}
            </div>
          </div>
        </SidebarBody>
      </Sidebar>
    </div>
  );
}

// un used components-----------------
export const Logo = () => {
  return (
    <Link
      onClick={() => {
        console.log("Logo clicked");
      }}
      href="#"
      className={`font-normal flex space-x-2 items-center text-sm text-black py-1 relative z-20`}
    >
      <div
        className={cn(
          `h-5 w-6 bg-black dark:bg-white rounded-br-lg rounded-tr-sm rounded-tl-lg rounded-bl-sm flex-shrink-0`
        )}
      />
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="font-medium text-black dark:text-white whitespace-pre"
      >
        Acet Labs
      </motion.span>
    </Link>
  );
};
export const LogoIcon = () => {
  return (
    <Link
      href="#"
      className="font-normal flex space-x-2 items-center text-sm text-black py-1 relative z-20"
    >
      <div className="h-5 w-6 bg-black dark:bg-white rounded-br-lg rounded-tr-sm rounded-tl-lg rounded-bl-sm flex-shrink-0" />
    </Link>
  );
};
