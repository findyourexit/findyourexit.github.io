import type {
  NavBarLink,
  Identity,
  AboutPageContent,
  FeaturedPageContent,
  HomePageContent,
  NowPageContent,
} from "../types/config";

import { socialLinks, homeSocialLinks } from "./social";
import { sourceLinks } from "./source";

export const identity: Identity = {
  name: "Tom Larcher",
  logo: "/img/tom-larcher.jpeg",
  email: "tom.larcher@gmail.com",
};

export const openGraphImage: string = "/img/tom-larcher.jpeg";

export const navBarLinks: NavBarLink[] = [
  {
    title: "Home",
    url: "/",
  },
  {
    title: "About",
    url: "/about",
  },
  {
    title: "Now",
    url: "/now",
  },
  {
    title: "Featured",
    url: "/featured",
  },
];

// Home (/)
export const homePageContent: HomePageContent = {
  seo: {
    title: "Tom Larcher | Dev",
    description:
      "Meet Tom Larcher, Senior Manager of Software Engineering at GoPro, formerly Chief Technology Officer (CTO) at Forcite. A passionate and motivated technologist from Australia, with a broad range of specialisations and expertise.",
    image: openGraphImage,
    domain: "tomlarcher.com",
    url: "https://tomlarcher.com",
  },
  role: "Senior Manager, Software Engineering",
  description:
    "Avid technologist, obsessively building software and firmware, using the latest and greatest technologies. Currently Senior Manager of Software Engineering at GoPro, formerly Chief Technology Officer (CTO) at Forcite. Outside of tech, I'm an absolute petrol-head and motorcycle addict.",
  socialLinks: socialLinks,
  homeSocialLinks: homeSocialLinks,
  links: [
    {
      title: "Peerlist",
      url: "https://peerlist.io/tomlarcher",
      icon: "mdi:link-circle",
      external: true,
    },
    {
      title: "About",
      url: "/about",
      icon: "mdi:account-circle",
    },
    {
      title: "Source",
      url: "https://github.com/findyourexit",
      icon: "mdi:github",
      external: true,
    },
  ],
};

// About (/about)
export const aboutPageContent: AboutPageContent = {
  seo: {
    title: "About | Tom Larcher | Avid Technologist",
    description:
      "Meet Tom Larcher, Senior Manager of Software Engineering at GoPro, formerly Chief Technology Officer (CTO) at Forcite. A passionate and motivated technologist from Australia, with a broad range of specialisations and expertise.",
    image: openGraphImage,
    domain: "tomlarcher.com",
    url: "https://tomlarcher.com/about",
  },
  subtitle: "Hey! It's great to have you here! If you're keen to learn a little more about me, you've come to the right place - read on!",
  about: {
    description: `
      Senior Manager, Software Engineering at GoPro | Former Chief Technology Officer (CTO) at Forcite | Current obsessing over Kotlin Multiplatform & Compose Multiplatform | Based in Sydney, Australia
    `,
    image_l: {
      url: "/img/tom-larcher.jpeg",
      alt: "Tom Larcher",
    },
    image_r: {
      url: "/img/tom-larcher.jpeg",
      alt: "Tom Larcher",
    },
  },
  work: {
    description: `I'm a Senior Manager of Software Engineering at GoPro, formerly Chief Technology Officer (CTO) at Forcite. I'm a passionate and motivated technologist from Australia, with a broad range of specialisations and expertise.`,
    items: [
      {
        title: "Senior Manager, Software Engineering",
        company: {
          name: "GoPro",
          image: "/logo/gopro.jpeg",
          url: "https://gopro.com/",
        },
        date: "Feb 2024 - Present",
      },
      {
        title: "Chief Technology Officer (CTO)",
        company: {
          name: "Forcite",
          image: "/logo/forcite.jpeg",
          url: "https://www.forcite.com.au/",
        },
        date: "Jun 2023 - Mar 2024",
      },
      {
        title: "Software Development Manager",
        company: {
          name: "Forcite",
          image: "/logo/forcite.jpeg",
          url: "https://www.forcite.com.au/",
        },
        date: "Nov 2021 - Jun 2023",
      },
      {
        title: "Lead Software Engineer",
        company: {
          name: "Forcite",
          image: "/logo/forcite.jpeg",
          url: "https://www.forcite.com.au/",
        },
        date: "Oct 2018 - Nov 2021",
      },
    ],
  },
  connect: {
    description: `I'm always interested in meeting new people and learning new things. Feel free to connect with me on any of the following platforms.`,
    links: socialLinks,
  },
};

// Featured (/featured)
export const featuredPageContent: FeaturedPageContent = {
  seo: {
    title: "Featured Articles, Guides & Ideas | Tom Larcher",
    description:
      "Explore a growing collection of curated articles, guides and ideas, by Tom Larcher, an avid technologist from Sydney, Australia.",
    image: openGraphImage,
    domain: "tomlarcher.com",
    url: "https://tomlarcher.com/featured",
  },
  subtitle: "Thoughts, stories, and projects.",
};

// Now (/now)
export const nowPageContent: NowPageContent = {
  seo: {
    title: "What I'm up to! | Tom Larcher",
    description:
      "An updated log of what I'm up to at present.",
    image: openGraphImage,
    domain: "tomlarcher.com",
    url: "https://tomlarcher.com/now",
  },
  title: "Now(ish)",
  subtitle: "Where and what's keeping me busy, at the moment.",
  sourceLinks,
};

export * from "./social";
export * from "./featured";
export * from "./source";
export * from "./analytics";
export * from "./github";
