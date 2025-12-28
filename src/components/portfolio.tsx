import * as motion from "motion/react-client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@radix-ui/react-tabs";
import { ModeToggle } from "./ModeToggle";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  BadgeCheck,
  Code2,
  FolderGit2,
  Send,
  SquareArrowOutUpRight,
  Terminal,
} from "lucide-react";
import { Separator } from "./ui/separator";
import Link from "next/link";
import Image from "next/image";

interface Skills {
  name: string;
  logo: string;
}

interface Projects {
  title: string;
  desc: string;
  tags: string[];
  link: string;
}

interface Socials {
  name: string;
  icon: string;
  label: string;
  link: string;
}

const skills: Skills[] = [
  { name: "HTML5", logo: "/logos/html5-logo.svg" },
  { name: "CSS3", logo: "/logos/css3-logo.svg" },
  { name: "JavaScript", logo: "/logos/javascript-logo.svg" },
  { name: "TypeScript", logo: "/logos/typescript-logo.svg" },
  { name: "Go", logo: "/logos/go-original.svg" },
  { name: "React", logo: "/logos/react-logo.svg" },
  { name: "Next.js", logo: "/logos/nextjs-plain-logo.svg" },
  { name: "Redux", logo: "/logos/redux-logo.svg" },
  { name: "Tailwind CSS", logo: "/logos/tailwindcss-original-logo.svg" },
  { name: "shadcn/ui", logo: "/logos/shadcnui-dark-logo.svg" },
  { name: "Motion", logo: "/logos/motion-logo.svg" },
  { name: "Prisma", logo: "/logos/prisma-original-logo.svg" },
  { name: "PostgreSQL", logo: "/logos/postgresql-plain-logo.svg" },
  { name: "Better Auth", logo: "/logos/better-auth.png" },
  { name: "Supabase", logo: "/logos/supabase-original-logo.svg" },
  { name: "Git", logo: "/logos/git-original-logo.svg" },
  { name: "GitHub", logo: "/logos/github-dark-logo.svg" },
  { name: "npm", logo: "/logos/npm-original-wordmark-logo.svg" },
  { name: "Vercel", logo: "/logos/vercel-icon-logo.svg" },
  { name: "Netlify", logo: "/logos/netlify-original-logo.svg" },
  { name: "Neon", logo: "/logos/neon-icon-logo.svg" },
];

const projects: Projects[] = [
  {
    title: "GitHub Resume Generator",
    desc: "Built a web app that transforms GitHub profiles into shareable portfolios. Fetches user data and repositories via GitHub API and displays them in a responsive layout. Includes export functionality to generate resume-style PNGs.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "shadcn/ui"],
    link: "https://repo-resume.vercel.app/",
  },
  {
    title: "SpaceX Landing Page Clone",
    desc: "SpaceX landing page clone with responsive design, video backgrounds, and modern UI. Demonstrates component structure, layout hierarchy, and Tailwind styling.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    link: "https://spacex-sw.vercel.app/",
  },
  {
    title: "Book Exchange Platform",
    desc: "Full-stack web application for exchanging books between users. Features include book listings, search functionality, exchange requests, messaging system, and wishlists. Implemented user authentication and email verification with Nodemailer.",
    tags: ["Next.js", "React", "PostgreSQL", "Bootstrap", "Nodemailer"],
    link: "#",
  },
  {
    title: "Journal App",
    desc: "A personal journal with user authentication and rich-text entries. Users can create, edit, and save private entries with persistent storage.",
    tags: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "TipTap",
      "Supabase (Auth & Database)",
    ],
    link: "https://github.com/FarazAG/journal-app",
  },
  {
    title: "Authentication System",
    desc: "Built a complete authentication system with sign-up, sign-in, session management, and protected routes using Better Auth.",
    tags: [
      "Next.js",
      "TypeScript",
      "Prisma",
      "PostgreSQL (Neon)",
      "shadcn/ui",
      "Better Auth",
    ],
    link: "https://github.com/FarazAG/nextjs-prisma-betterauth",
  },
  {
    title: "PingForge",
    desc: "Real-time website monitoring dashboard with live uptime tracking, response-time logs, and performance charts.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "shadcn/ui"],
    link: "https://pingforge.vercel.app/dashboard",
  },
  {
    title: "File Info CLI Tool",
    desc: "A Go CLI tool that reads a file and returns line count, word count, character count, size, modification time, and directory info. Demonstrates use of modules, packages, file handling, scanners, and command parsing.",
    tags: ["Go", "CLI", "File Handling", "Modules", "Command Parsing"],
    link: "https://github.com/FarazAG/file-reader-cli",
  },
];

const socials: Socials[] = [
  {
    name: "Github",
    icon: "/social-logos/github.svg",
    label: "github.com/FarazAG",
    link: "https://github.com/FarazAG",
  },
  {
    name: "Linkedin",
    icon: "/social-logos/linkedin.svg",
    label: "linkedin.com/in/farazali114",
    link: "https://www.linkedin.com/in/farazali114/",
  },
];

export default function Portfolio() {
  return (
    <div className=" min-h-screen max-w-5xl mx-auto px-10 ">
      {/* Header */}
      <div className="pt-20 flex justify-between ">
        <div className="flex gap-2 flex-col">
          <h1 className="text-2xl md:text-4xl font-light tracking-tight">
            Syed Faraz Ali Gilani
          </h1>
          <h2 className="text-xs md:text-sm text-gray-400 ps-1 ">
            Front-end Developer
          </h2>
        </div>
        <ModeToggle />
      </div>

      {/* Nav */}

      <nav className="mt-20">
        <Tabs defaultValue="about">
          <TabsList className=" grid grid-cols-2 gap-3 mb-20 font-semibold">
            <TabsTrigger
              value="about"
              className="px-4 py-2 rounded-lg transition-colors bg-transparent
                         text-gray-700 dark:text-gray-200
                         hover:bg-gray-100 dark:hover:bg-gray-800
                         data-[state=active]:bg-white dark:data-[state=active]:bg-gray-900
                         data-[state=active]:shadow-lg 
                         dark:border-0 data-[state=active]:border-1 border-gray-900 
                         "
            >
              <span className="flex justify-center items-center gap-x-2">
                <Code2 className="w-4 h-4" />
                About
              </span>
            </TabsTrigger>
            <TabsTrigger
              value="skills"
              className="px-4 py-2 rounded-lg transition-colors bg-transparent
                         text-gray-700 dark:text-gray-200
                         hover:bg-gray-100 dark:hover:bg-gray-800
                         data-[state=active]:bg-white dark:data-[state=active]:bg-gray-900
                         data-[state=active]:shadow-lg
                         dark:border-0 data-[state=active]:border-1 border-gray-900 
                         "
            >
              <span className="flex justify-center items-center gap-x-2">
                <BadgeCheck className="w-4 h-4" />
                Skills
              </span>
            </TabsTrigger>
            <TabsTrigger
              value="projects"
              className="px-4 py-2 rounded-lg transition-colors bg-transparent
                         text-gray-700 dark:text-gray-200
                         hover:bg-gray-100 dark:hover:bg-gray-800
                         data-[state=active]:bg-white dark:data-[state=active]:bg-gray-900
                         data-[state=active]:shadow-lg
                         dark:border-0 data-[state=active]:border-1 border-gray-900 
                         "
            >
              <span className="flex justify-center items-center gap-x-2">
                <FolderGit2 className="w-4 h-4" />
                Projects
              </span>
            </TabsTrigger>
            <TabsTrigger
              value="contact"
              className="px-4 py-2 rounded-lg transition-colors bg-transparent
                         text-gray-700 dark:text-gray-200
                         hover:bg-gray-100 dark:hover:bg-gray-800
                         data-[state=active]:bg-white dark:data-[state=active]:bg-gray-900
                         data-[state=active]:shadow-lg
                         dark:border-0 data-[state=active]:border-1 border-gray-900  
                         "
            >
              <span className="flex justify-center items-center gap-x-2">
                <Send className="w-4 h-4" />
                Contact
              </span>
            </TabsTrigger>
          </TabsList>

          {/* data-[state=active]:border-1 border-gray-400 dark:data-[state=active]:border-gray-700 */}

          {/* Toggled Content */}
          {/* About section */}
          <TabsContent value="about">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <Card className="dark:bg-gray-900  dark:border-1 dark:border-gray-600/50 border-gray-600">
                <CardHeader>
                  <CardTitle className="text-lg md:text-2xl text-foreground/80">
                    Hello there!
                  </CardTitle>
                  <CardDescription>
                    Building things that work and make sense.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="mb-5 text-foreground/90">
                    I’m a frontend developer working with Next.js and
                    TypeScript, focused on clarity, structure, and performance.
                    I care about predictable code, clean design logic, and
                    systems that stay easy to maintain as they grow.
                  </p>
                  <p className="text-foreground/90">
                    Comfortable across the stack, I handle both the interface
                    and the underlying logic that keeps everything fast and
                    reliable.
                  </p>
                  <Separator className="my-6 dark:bg-gray-600/50  bg-gray-400" />
                  <h3 className="font-semibold text-lg mb-6 text-foreground/80">
                    Current Focus
                  </h3>
                  <div className="flex items-center gap-x-3 border py-3 px-3 rounded-lg dark:border-1 dark:border-gray-600/50 border-gray-600">
                    <div>
                      <Terminal className="h-4 w-4" />
                    </div>

                    <h3 className="text-sm md:text-base text-foreground/80">
                      Full-stack workflows powered by Next.js and modern backend
                      stacks.
                    </h3>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </TabsContent>

          {/* Skills sections */}
          <TabsContent value="skills">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 justify-center items-center "
            >
              {skills.map((skill, i) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.07, type: "tween", duration: 0.4 }}
                  whileHover={{
                    scale: 1.08,
                    y: -3,
                    rotate: 1,
                    transition: { duration: 0.25 },
                  }}
                >
                  <div className="flex flex-col items-center gap-2 py-4 dark:bg-gray-900 rounded-xl cursor-pointer transition-all duration-300 hover:backdrop-brightness-110 border-1 border-gray-900 dark:border-gray-600/50">
                    <img
                      src={skill.logo}
                      alt={skill.name}
                      className="w-10 h-10 object-contain transition-all duration-200"
                    />
                    <span className="text-sm dark:text-white font-medium">
                      {skill.name}
                    </span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </TabsContent>

          {/* Projects section */}

          <TabsContent value="projects">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: {
                  transition: { staggerChildren: 0.08 },
                },
              }}
            >
              {projects.map((project) => (
                <motion.div
                  className="mb-5"
                  key={project.title}
                  variants={{
                    hidden: { opacity: 0, y: 25 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: { type: "spring", stiffness: 60 },
                    },
                  }}
                  whileHover={{ y: -8, scale: 1.015 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="group relative overflow-hidden dark:bg-gray-900  border border-gray-600 dark:border-gray-700 hover:shadow-xl shadow-sm transition-all duration-300">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                          {project.title}
                        </CardTitle>
                        {project.link !== "#" && (
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-gray-600 "
                          >
                            <SquareArrowOutUpRight />
                          </a>
                        )}
                      </div>
                      {project.desc && (
                        <CardDescription className="text-gray-600 dark:text-gray-400 mt-1 leading-snug">
                          {project.desc}
                        </CardDescription>
                      )}
                    </CardHeader>

                    <CardFooter className="flex flex-wrap gap-2 pt-3">
                      {project.tags?.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 text-xs rounded-md bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-400 dark:border-gray-700"
                        >
                          {tag}
                        </span>
                      ))}
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </TabsContent>

          {/* About section */}

          <TabsContent value="contact">
            <section
              id="contact"
              className="mt-24 border-t dark:border-1 dark:border-gray-600/50 border-gray-600 py-12 dark:rounded-lg"
            >
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                viewport={{ once: true }}
                className="text-center space-y-4 px-3"
              >
                <h2 className="text-3xl font-semibold tracking-tight">
                  Contact
                </h2>
                <p className="text-gray-600 dark:text-gray-400 max-w-md mx-auto text-sm md:text-base">
                  Whether you have a question, want to collaborate on a project,
                  or just want to say hi, feel free to reach out.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
                viewport={{ once: true }}
                className="mt-10 flex flex-col items-center space-y-4"
              >
                {socials.map((item) => (
                  <Link
                    key={item.label}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-3 text-gray-700 dark:text-gray-300 transition-all dark:hover:text-white"
                  >
                    <motion.span
                      whileHover={{ scale: 1.2, rotate: 5 }}
                      whileTap={{ scale: 0.95 }}
                      className="text-gray-500 dark:text-gray-400 dark:group-hover:text-white transition-colors"
                    >
                      <Image
                        src={item.icon}
                        alt={item.name}
                        width={20}
                        height={20}
                        className="transition-all duration-300 dark:invert opacity-75"
                      />
                    </motion.span>
                    <span className="group-hover:underline group-hover:underline-offset-4">
                      {item.label}
                    </span>
                  </Link>
                ))}
              </motion.div>
            </section>
          </TabsContent>
        </Tabs>
      </nav>
      {/* Footer */}
      <footer className="mt-20 pt-8 border-t text-center text-sm  dark:border-gray-900 text-gray-500 mb-10">
        <p>© 2025 Syed Faraz Ali Gilani. All rights reserved.</p>
      </footer>
    </div>
  );
}
