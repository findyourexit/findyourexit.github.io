export type NavBarLink = {
    title: string;
    url: string;
    external?: boolean;
};

export type SocialLink = {
    title: string;
    url: string;
    icon: string;
    external?: boolean;
};

export type SourceLink = {
    title: string;
    url: string;
    icon: string;
    external?: boolean;
};

export type Identity = {
    name: string;
    logo: string;
    email: string;
};

export type SEOInfo = {
    title: string;
    description: string;
    image: string;
    domain: string;
    url: string;
};

export type HomePageContent = {
    seo: SEOInfo;
    role: string;
    description: string;
    socialLinks: SocialLink[];
    homeSocialLinks: SocialLink[];
    links: {
        title: string;
        url: string;
        icon: string;
        external?: boolean;
    }[];
};

export type ResumeItem = {
    title: string;
    company: {
        name: string;
        image: string;
        url: string;
    };
    date: string;
};

export type AboutPageContent = {
    seo: SEOInfo;
    subtitle: string;
    about: {
        description: string;
        image_l: {
            url: string;
            alt: string;
        };
        image_r: {
            url: string;
            alt: string;
        };
    };
    connect: {
        description: string;
        links: SocialLink[];
    };
};

export type NowPageContent = {
    seo: SEOInfo;
    subtitle: string;
    title: string;
    sourceLinks: SocialLink[];
};

export type RecentlyPageContent = {
    seo: SEOInfo;
    title: string;
    subtitle: string;
    work: {
        description: string;
        items: ResumeItem[];
    };
};

export type ProjectStatus =
    | "Active"
    | "Maintenance"
    | "Experimental"
    | "Archived"
    | "Paused";

export type ProjectCapacity =
    | "Author"
    | "Maintainer"
    | "Core Contributor"
    | "Contributor"
    | "Collaborator";

export type OssProject = {
    /** Project / repository name. */
    title: string;
    /** Short description of what the project is/does. */
    description: string;
    /** Extended description, revealed when the card expands on hover. */
    details?: string;
    /** Link out to the repository (or canonical project page). */
    url: string;
    /** Primary language, e.g. "Kotlin", "TypeScript". */
    language?: string;
    /** Framework / toolkit, e.g. "Compose Multiplatform", "Astro". */
    framework?: string;
    /** Target runtime / platform, e.g. "JVM", "Android / iOS", "Node.js". */
    runtime?: string;
    /** Project status, e.g. "Active", "Maintenance", "Archived". */
    status?: ProjectStatus;
    /** The capacity of my involvement, e.g. "Maintainer", "Contributor". */
    capacity?: ProjectCapacity;
    /** A few punchy highlights / selling points for the project. */
    highlights?: string[];
    /** GitHub star count (for a little social proof). */
    stars?: number;
    /** SPDX license id, e.g. "MIT". */
    license?: string;
    /** ISO date the project was last meaningfully touched. */
    updated?: string;
    /** Optional canonical project / docs site, shown as an extra link. */
    homepage?: string;
    /** Flag a standout project for a subtle spotlight treatment. */
    featured?: boolean;
    /** Optional freeform tags for additional context. */
    tags?: string[];
};

export type OssPageContent = {
    seo: SEOInfo;
    title: string;
    subtitle: string;
    projects: OssProject[];
};

export type Project = {
    title: string;
    description: string;
    image: string;
    year: string;
    url: string;
};

export type ProjectPageContent = {
    seo: SEOInfo;
    subtitle: string;
    projects: Project[];
};

export type FeaturedPageContent = {
    seo: SEOInfo;
    subtitle: string;
};

export type FeaturedPost = {
    title: string;
    description: string;
    image: {
        url: string;
        alt: string;
    };
    date: string;
    url: string;
    author: string;
    publisher: string;
};
