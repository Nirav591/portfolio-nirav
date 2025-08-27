import React from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Github, Linkedin, Mail, Download, ExternalLink } from "lucide-react";
import { SocialThumb } from "@/components/ui/SocialThumb";

// Tip: put Nirav_Lathiya_CV.pdf in /public and the download link will work.
export default function PortfolioTabs() {
  console.log(PROJECTS, "PROJECTS");
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-slate-50">
      <section className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        {/* Header */}
        <header className="mb-8 sm:mb-10 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="min-w-0">
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-black break-words">
              Nirav Lathiya
            </h1>
            <p className="text-slate-600 mt-2 text-sm sm:text-base">
              Frontend Developer · React · TypeScript
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              <Badge>React</Badge>
              <Badge>TypeScript</Badge>
              <Badge>Next.js</Badge>
              <Badge>Material UI</Badge>
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            <Button variant="outline" asChild className="flex-1 sm:flex-none">
              <a href="mailto:niravlathiya02@gmail.com" aria-label="Email Nirav">
                <Mail className="h-4 w-4 mr-2" />
                Email
              </a>
            </Button>
            {/* If you have GitHub, replace the link below. Otherwise, keep or remove. */}
            <Button variant="outline" asChild className="flex-1 sm:flex-none">
              <a href="https://github.com/" target="_blank" rel="noreferrer" aria-label="GitHub">
                <Github className="h-4 w-4 mr-2" />
                GitHub
              </a>
            </Button>
            <Button variant="outline" asChild className="flex-1 sm:flex-none">
              <a
                href="https://www.linkedin.com/in/nirav-lathiya-a43b2420"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4 mr-2" />
                LinkedIn
              </a>
            </Button>
            <Button asChild className="flex-1 sm:flex-none">
              <a href="/Nirav_Lathiya_CV.pdf" aria-label="Download CV">
                <Download className="h-4 w-4 mr-2" />
                Download CV
              </a>
            </Button>
          </div>
        </header>

        {/* Tabs */}
        <Tabs defaultValue="about" className="w-full">
          {/* Mobile-friendly, scrollable tabs */}
          <div className="relative -mx-4 sm:mx-0">
            <TabsList
              className="
                w-full sm:w-auto rounded-2xl
                overflow-x-auto sm:overflow-visible
                flex sm:grid sm:grid-cols-3 gap-1
                px-4 sm:px-0
                
              "
            >
              <TabsTrigger className="whitespace-nowrap px-4 py-2 text-sm sm:text-base text-black data-[state=active]:text-white" value="about">
                About
              </TabsTrigger>
              <TabsTrigger className="whitespace-nowrap px-4 py-2 text-sm sm:text-base text-black data-[state=active]:text-white" value="projects">
                Projects
              </TabsTrigger>
              <TabsTrigger className="whitespace-nowrap px-4 py-2 text-sm sm:text-base text-black data-[state=active]:text-white" value="skills">
                Skills
              </TabsTrigger>
              {/* <TabsTrigger className="whitespace-nowrap px-4 py-2 text-sm sm:text-base text-black data-[state=active]:text-white" value="contact">
                Contact
              </TabsTrigger> */}
            </TabsList>
          </div>

          {/* About */}
          <TabsContent value="about" className="mt-6 sm:mt-8">
            <Card className="rounded-2xl">
              <CardHeader>
                <CardTitle>About me</CardTitle>
                <CardDescription>
                  Frontend Developer with 3+ years’ experience building responsive, high-performance web apps.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
                  I ship fast, accessible UIs with React/Next.js and TypeScript. I’ve improved load performance on
                  legacy codebases, built reusable component libraries, and delivered features reliably in Agile teams.
                  MSc Software Engineering (UWL) in progress.
                </p>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Projects */}
          <TabsContent value="projects" className="mt-6 sm:mt-8">
            {/* Country Tabs */}
            <Tabs defaultValue="usa" className="w-full">
              <TabsList className="grid w-full grid-cols-2 sm:w-auto sm:inline-flex">
                <TabsTrigger value="usa" className="text-black data-[state=active]:text-white">USA Projects</TabsTrigger>
                <TabsTrigger value="uk" className="text-black data-[state=active]:text-white">UK Projects</TabsTrigger>
                <TabsTrigger value="aus" className="text-black data-[state=active]:text-white">Aus Projects</TabsTrigger>
                <TabsTrigger value="india" className="text-black data-[state=active]:text-white">India Projects</TabsTrigger>
                <TabsTrigger value="social" className="text-black data-[state=active]:text-white">Social Media (India)</TabsTrigger>
              </TabsList>

              {/* UK Projects */}
              <TabsContent value="usa" className="mt-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
                  {PROJECTS.filter((p) => p.country === "USA").map((p) => (
                    <Card
                      key={p.title}
                      className="rounded-2xl hover:shadow-md transition-shadow overflow-hidden pt-0"
                    >
                      <div className="w-full h-40 sm:h-48 bg-slate-100 overflow-hidden">
                        <img
                          src={p.thumbnail}
                          alt={p.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <CardHeader>
                        <CardTitle className="flex items-center justify-between gap-2">
                          <span className="truncate">{p.title}</span>
                          <a
                            className="inline-flex items-center text-sm text-blue-600 hover:underline flex-shrink-0"
                            href={p.link}
                            target="_blank"
                            rel="noreferrer"
                          >
                            Live <ExternalLink className="h-4 w-4 ml-1" />
                          </a>
                        </CardTitle>
                        <CardDescription>{p.subtitle}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-slate-700">{p.description}</p>
                        <div className="mt-3 flex flex-wrap gap-2">
                          {p.tags.map((t) => (
                            <Badge key={t} variant="secondary">
                              {t}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="social" className="mt-6">
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                  {SOCIAL_POSTS.map((p) => (
                    <SocialThumb key={p.src} post={p} />
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="aus" className="mt-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
                  {PROJECTS.filter((p) => p.country === "AUS").map((p) => (
                    <Card
                      key={p.title}
                      className="rounded-2xl hover:shadow-md transition-shadow overflow-hidden pt-0"
                    >
                      <div className="w-full h-40 sm:h-48 bg-slate-100 overflow-hidden">
                        <img
                          src={p.thumbnail}
                          alt={p.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <CardHeader>
                        <CardTitle className="flex items-center justify-between gap-2">
                          <span className="truncate">{p.title}</span>
                          <a
                            className="inline-flex items-center text-sm text-blue-600 hover:underline flex-shrink-0"
                            href={p.link}
                            target="_blank"
                            rel="noreferrer"
                          >
                            Live <ExternalLink className="h-4 w-4 ml-1" />
                          </a>
                        </CardTitle>
                        <CardDescription>{p.subtitle}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-slate-700">{p.description}</p>
                        <div className="mt-3 flex flex-wrap gap-2">
                          {p.tags.map((t) => (
                            <Badge key={t} variant="secondary">
                              {t}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="uk" className="mt-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
                  {PROJECTS.filter((p) => p.country === "UK").map((p) => (
                    <Card
                      key={p.title}
                      className="rounded-2xl hover:shadow-md transition-shadow overflow-hidden pt-0"
                    >
                      <div className="w-full h-40 sm:h-48 bg-slate-100 overflow-hidden">
                        <img
                          src={p.thumbnail}
                          alt={p.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <CardHeader>
                        <CardTitle className="flex items-center justify-between gap-2">
                          <span className="truncate">{p.title}</span>
                          <a
                            className="inline-flex items-center text-sm text-blue-600 hover:underline flex-shrink-0"
                            href={p.link}
                            target="_blank"
                            rel="noreferrer"
                          >
                            Live <ExternalLink className="h-4 w-4 ml-1" />
                          </a>
                        </CardTitle>
                        <CardDescription>{p.subtitle}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-slate-700">{p.description}</p>
                        <div className="mt-3 flex flex-wrap gap-2">
                          {p.tags.map((t) => (
                            <Badge key={t} variant="secondary">
                              {t}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              {/* India Projects */}
              <TabsContent value="india" className="mt-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
                  {PROJECTS.filter((p) => p.country === "India").map((p) => (
                    <Card
                      key={p.title}
                      className="rounded-2xl hover:shadow-md transition-shadow overflow-hidden pt-0"
                    >
                      <div className="w-full h-40 sm:h-48 bg-slate-100 overflow-hidden">
                        <img
                          src={p.thumbnail}
                          alt={p.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <CardHeader>
                        <CardTitle className="flex items-center justify-between gap-2">
                          <span className="truncate">{p.title}</span>
                          <a
                            className="inline-flex items-center text-sm text-blue-600 hover:underline flex-shrink-0"
                            href={p.link}
                            target="_blank"
                            rel="noreferrer"
                          >
                            Live <ExternalLink className="h-4 w-4 ml-1" />
                          </a>
                        </CardTitle>
                        <CardDescription>{p.subtitle}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-slate-700">{p.description}</p>
                        <div className="mt-3 flex flex-wrap gap-2">
                          {p.tags.map((t) => (
                            <Badge key={t} variant="secondary">
                              {t}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </TabsContent>

          {/* Skills */}
          <TabsContent value="skills" className="mt-6 sm:mt-8">
            <Card className="rounded-2xl">
              <CardHeader>
                <CardTitle>Skills</CardTitle>
                <CardDescription>Tech I use regularly</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {SKILLS.map((s) => (
                    <div key={s.group} className="p-4 border rounded-xl">
                      <h4 className="font-semibold mb-2">{s.group}</h4>
                      <ul className="text-sm text-slate-700 space-y-1 list-disc list-inside">
                        {s.items.map((i) => (
                          <li key={i}>{i}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Contact */}
          {/* <TabsContent value="contact" className="mt-6 sm:mt-8">
            <Card className="rounded-2xl">
              <CardHeader>
                <CardTitle>Contact</CardTitle>
                <CardDescription>Prefer email? Use the form below.</CardDescription>
              </CardHeader>
              <CardContent>
                <form className="grid gap-4 w-full max-w-xl">
                  <div className="grid gap-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Name
                    </label>
                    <input
                      id="name"
                      className="border rounded-xl px-3 py-2 outline-none focus:ring-2 focus:ring-slate-300"
                      placeholder="Your name"
                    />
                  </div>
                  <div className="grid gap-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      className="border rounded-xl px-3 py-2 outline-none focus:ring-2 focus:ring-slate-300"
                      placeholder="you@example.com"
                    />
                  </div>
                  <div className="grid gap-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      className="border rounded-xl px-3 py-2 outline-none focus:ring-2 focus:ring-slate-300"
                      placeholder="How can I help?"
                    />
                  </div>
                  <Button type="submit" className="w-full sm:w-fit">
                    Send
                  </Button>
                </form>

                <div className="mt-6 flex flex-wrap gap-4">
                  <SocialLink href="https://github.com/" label="GitHub" Icon={Github} />
                  <SocialLink
                    href="https://www.linkedin.com/in/nirav-lathiya-a43b2420"
                    label="LinkedIn"
                    Icon={Linkedin}
                  />
                  <SocialLink href="mailto:niravlathiya02@gmail.com" label="Email" Icon={Mail} />
                </div>
              </CardContent>
            </Card>
          </TabsContent> */}
        </Tabs>
      </section>
    </main>
  );
}

function SocialLink({
  href,
  label,
  Icon,
}: {
  href: string;
  label: string;
  Icon: React.ComponentType<{ className?: string }>;
}) {
  const isExternal = href.startsWith("http");
  return (
    <a
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noreferrer" : undefined}
      className="inline-flex items-center gap-2 text-slate-700 hover:text-slate-900"
    >
      <Icon className="h-5 w-5" />
      <span className="text-sm font-medium">{label}</span>
    </a>
  );
}

const PROJECTS = [
  {
    title: "Youniverse Home Care",
    subtitle: "NDIS Service Website",
    description: "A responsive website for disability care services in Australia.",
    link: "https://ynhc.com.au",
    thumbnail: "/images/ynhc.png",
    country: "AUS",
    tags: ["Bootstrap", "HTML"],
  },

  {
    title: "Core Strategy",
    subtitle: "USA · Corporate Website",
    description:
      "Next.js 14 corporate site with React + styled-components and Redux. Deployed behind Nginx with HSTS, analytics via GTM and Floodlight.",
    link: "https://core-strategy.us/",
    thumbnail: "/images/core.png", // add a 16:9 screenshot here
    country: "USA",
    tags: [
      "Next.js 14.0.4",
      "React",
      "styled-components 5.3.9",
      "Redux",
      "Webpack",
      "Nginx 1.18.0",
      "core-js 3.36.1",
      "Google Tag Manager",
      "DoubleClick Floodlight",
      "HSTS",
    ],
  },

  {
    title: "Ultrafocus E-commerce",
    subtitle: "UK · Shopify Store",
    description:
      "E-commerce website built on Shopify with advanced integrations for analytics, payments, reviews, and performance optimisation.",
    link: "https://ultrafocus.co.uk", // your live site
    thumbnail: "/images/ultrafocus.png", // save a screenshot as this thumbnail
    country: "UK",
    tags: [
      "Shopify",
      "Google Analytics (GA4)",
      "styled-components",
      "Redux",
      "Handlebars",
      "jQuery",
      "Axios",
      "Cloudflare",
      "PayPal",
      "Apple Pay",
      "Shop Pay",
      "Judge.me",
      "Trustpilot",
    ],
  },
  {
    title: "Liberty World",
    subtitle: "India · Corporate Website",
    description:
      "Corporate site for Liberty World, developed with React and Gatsby. Features PWA support, Cloudflare CDN, and WhatsApp Business Chat integration.",
    link: "https://www.libertyworld.in/",
    thumbnail: "/images/liberty.jpg", // save a screenshot thumbnail here
    country: "India",
    tags: [
      "React",
      "Gatsby",
      "styled-components",
      "Redux",
      "Bootstrap",
      "Webpack",
      "PWA",
      "Swiper",
      "Cloudflare",
      "WhatsApp Business Chat",
    ],
  },

  {
    title: "SERU Exam Prep – Private Hire",
    subtitle: "UK · Mobile App",
    description:
      "Android/iOS exam preparation app for Private Hire (PHV) drivers in the UK. Built with Node.js backend, AWS deployment, and SQL database integration.",
    link: "https://play.google.com/store/apps/details?id=com.uk.seru.app&hl=en_GB", // Play Store / App Store link here if you want
    thumbnail: "/images/seru.png", // save a screenshot thumbnail here
    country: "UK",
    tags: ["Android Studio", "AWS", "Node.js", "SQL Database"],
  },
  {
    title: "Life in the UK Test 2025",
    subtitle: "UK · Mobile App",
    description:
      "A Flutter-based mobile app to help users prepare for the Life in the UK Test. Backend powered by Node.js, AWS infrastructure, and SQL database for content management.",
    link: "https://play.google.com/store/apps/details?id=com.lifeuk.citizenshiptest", // Play Store link
    thumbnail: "/images/lifeinuk.png", // save a screenshot thumbnail here
    country: "UK",
    tags: ["Flutter", "AWS", "Node.js", "SQL Database"],
  },
  {
    title: "Bit.com Blog",
    subtitle: "India · Blog Platform",
    description:
      "Blog platform built with Ghost CMS (v5.130), React, and styled-components. Features GA4 analytics, Cloudflare CDN, caching via Varnish, and Google Tag Manager integration.",
    link: "https://blog.bit.com/",
    thumbnail: "/images/blog.png", // save a screenshot thumbnail here
    country: "India",
    tags: [
      "Ghost CMS 5.130",
      "React",
      "Redux",
      "styled-components",
      "Node.js",
      "Nginx",
      "OpenResty",
      "Varnish",
      "Cloudflare",
      "jsDelivr",
      "cdnjs",
      "Google Analytics GA4",
      "Google Tag Manager",
      "theTradeDesk",
      "LottieFiles 5.9.4",
      "LazySizes",
      "jQuery 3.7.1",
      "Prism",
      "Open Graph",
      "RSS"
    ],
  }
];

const SKILLS = [
  { group: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Material UI"] },
  { group: "Backend", items: ["Node.js", "Express", "REST APIs"] },
  { group: "Tools", items: ["Git", "Webpack", "NPM", "Netlify", "Jira", "Jest", "Enzyme"] },
];

type SocialPost = {
  src: string;        // /images/social/filename.jpg (place files in /public/images/social)
  alt: string;
  platform: "Instagram" | "Facebook" | "LinkedIn" | "X" | string;
  month: string;      // e.g., "Aug 2025"
  country: string;    // "India"
  caption?: string;
  tags?: string[];    // e.g., ["Carousel", "Promo"]
};

const SOCIAL_POSTS: SocialPost[] = [
  {
    src: "/images/post/1.png",
    alt: "Ultrafocus festive sale—eye care banner",
    platform: "Instagram",
    month: "Aug 2023",
    country: "India",
    caption: "Show Company Logo",
    tags: ["Carousel", "Promo"],
  },
  {
    src: "/images/post/2.png",
    alt: "Corona Virus",
    platform: "Instagram",
    month: "Aug 2023",
    country: "India",
    caption: "Corona Virus",
    tags: ["Carousel", "Promo"],
  },
  {
    src: "/images/post/3.png",
    alt: "Ultrafocus festive sale—eye care banner",
    platform: "Instagram",
    month: "Aug 2023",
    country: "India",
    caption: "Show Company Logo",
    tags: ["Carousel", "Promo"],
  },
  {
    src: "/images/post/4.png",
    alt: "Ultrafocus festive sale—eye care banner",
    platform: "Instagram",
    month: "Aug 2023",
    country: "India",
    caption: "Show Company Logo",
    tags: ["Carousel", "Promo"],
  },
   {
    src: "/images/post/5.png",
    alt: "Ultrafocus festive sale—eye care banner",
    platform: "Instagram",
    month: "Aug 2023",
    country: "India",
    caption: "Show Company Logo",
    tags: ["Carousel", "Promo"],
  },
   {
    src: "/images/post/6.png",
    alt: "Ultrafocus festive sale—eye care banner",
    platform: "Instagram",
    month: "Aug 2023",
    country: "India",
    caption: "Show Company Logo",
    tags: ["Carousel", "Promo"],
  },
    {
    src: "/images/post/7.png",
    alt: "Ultrafocus festive sale—eye care banner",
    platform: "Instagram",
    month: "Aug 2023",
    country: "India",
    caption: "Show Company Logo",
    tags: ["Carousel", "Promo"],
  },
   {
    src: "/images/post/8.png",
    alt: "Ultrafocus festive sale—eye care banner",
    platform: "Instagram",
    month: "Aug 2023",
    country: "India",
    caption: "Show Company Logo",
    tags: ["Carousel", "Promo"],
  },
  {
    src: "/images/post/9.png",
    alt: "Ultrafocus festive sale—eye care banner",
    platform: "Instagram",
    month: "Aug 2023",
    country: "India",
    caption: "Show Company Logo",
    tags: ["Carousel", "Promo"],
  },
  {
    src: "/images/post/10.png",
    alt: "Ultrafocus festive sale—eye care banner",
    platform: "Instagram",
    month: "Aug 2023",
    country: "India",
    caption: "Show Company Logo",
    tags: ["Carousel", "Promo"],
  },
  {
    src: "/images/post/11.png",
    alt: "Ultrafocus festive sale—eye care banner",
    platform: "Instagram",
    month: "Aug 2023",
    country: "India",
    caption: "Show Company Logo",
    tags: ["Carousel", "Promo"],
  },
  {
    src: "/images/post/12.png",
    alt: "Ultrafocus festive sale—eye care banner",
    platform: "Instagram",
    month: "Aug 2023",
    country: "India",
    caption: "Show Company Logo",
    tags: ["Carousel", "Promo"],
  },
    {
    src: "/images/post/13.png",
    alt: "Ultrafocus festive sale—eye care banner",
    platform: "Instagram",
    month: "Aug 2023",
    country: "India",
    caption: "Show Company Logo",
    tags: ["Carousel", "Promo"],
  },
  {
    src: "/images/post/14.png",
    alt: "Ultrafocus festive sale—eye care banner",
    platform: "Instagram",
    month: "Aug 2023",
    country: "India",
    caption: "Show Company Logo",
    tags: ["Carousel", "Promo"],
  },
   {
    src: "/images/post/15.png",
    alt: "Ultrafocus festive sale—eye care banner",
    platform: "Instagram",
    month: "Aug 2023",
    country: "India",
    caption: "Show Company Logo",
    tags: ["Carousel", "Promo"],
  },
  {
    src: "/images/post/16.png",
    alt: "Ultrafocus festive sale—eye care banner",
    platform: "Instagram",
    month: "Aug 2023",
    country: "India",
    caption: "Show Company Logo",
    tags: ["Carousel", "Promo"],
  },
    {
    src: "/images/post/17.png",
    alt: "Ultrafocus festive sale—eye care banner",
    platform: "Instagram",
    month: "Aug 2023",
    country: "India",
    caption: "Show Company Logo",
    tags: ["Carousel", "Promo"],
  },
   {
    src: "/images/post/18.png",
    alt: "Ultrafocus festive sale—eye care banner",
    platform: "Instagram",
    month: "Aug 2023",
    country: "India",
    caption: "Show Company Logo",
    tags: ["Carousel", "Promo"],
  },
   {
    src: "/images/post/19.png",
    alt: "Ultrafocus festive sale—eye care banner",
    platform: "Instagram",
    month: "Aug 2023",
    country: "India",
    caption: "Show Company Logo",
    tags: ["Carousel", "Promo"],
  },
{
    src: "/images/post/20.png",
    alt: "Ultrafocus festive sale—eye care banner",
    platform: "Instagram",
    month: "Aug 2023",
    country: "India",
    caption: "Show Company Logo",
    tags: ["Carousel", "Promo"],
  },
  // add more posts here…
];