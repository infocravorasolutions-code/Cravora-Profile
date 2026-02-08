import darshanImage from "@/assets/darshan-profile.jpg";
import mohitImage from "@/assets/mohit-profile.jpg";

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export interface WorkItem {
  title: string;
  company: string;
  description: string;
  period?: string;
}

export interface Profile {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  email: string;
  phone: string;
  socials: SocialLink[];
  work: WorkItem[];
}

export const profiles: Profile[] = [
  {
    id: "darshan-patel",
    name: "Darshan Patel",
    role: "Founder & COO",
    bio: "Building innovative IT solutions that transform businesses. Passionate about cloud architecture and emerging technologies.",
    image: darshanImage,
    email: "imdarshan2121@gmail.com",
    phone: "+91 95123 62944",
    socials: [
      { platform: "LinkedIn", url: "https://www.linkedin.com/in/darshan-patel-00b60315b/", icon: "linkedin" },
      { platform: "GitHub", url: "https://github.com/darshan2121", icon: "github" },
      { platform: "X", url: "https://x.com/darshanpatel", icon: "twitter" },
      { platform: "Instagram", url: "https://www.instagram.com/darshaan_patel_", icon: "instagram" },
      { platform: "Website", url: "https://cravorasolutions.com", icon: "globe" },
    ],
    work: [
      {
        title: "Co-Founder & CTO",
        company: "Cravora Solutions",
        description: "Leading technical strategy and development of enterprise software solutions for clients worldwide.",
        period: "2022 - Present",
      },
      {
        title: "Cloud Architecture",
        company: "AWS & Azure Certified",
        description: "Designing scalable cloud infrastructure for modern applications with focus on security and performance.",
      },
      {
        title: "Full-Stack Development",
        company: "React, Node.js, Python",
        description: "Building end-to-end web applications with modern frameworks and best practices.",
      },
    ],
  },
  {
    id: "mohit-patel",
    name: "Mohit Patel",
    role: "Co-Founder & CEO",
    bio: "Driving business growth through strategic partnerships and client success. Expert in digital transformation and IT consulting.",
    image: mohitImage,
    email: "mohit@cravorasolutions.com",
    phone: "+91 98765 43211",
    socials: [
      { platform: "LinkedIn", url: "https://www.linkedin.com/in/mohit-rathod-80a244239/", icon: "linkedin" },
      { platform: "X", url: "https://x.com/mohitpatel", icon: "twitter" },
      { platform: "Instagram", url: "https://www.instagram.com/mohitrathod31/", icon: "instagram" },
      { platform: "Website", url: "https://cravorasolutions.com", icon: "globe" },
    ],
    work: [
      {
        title: "Co-Founder & CEO",
        company: "Cravora Solutions",
        description: "Spearheading business development and building lasting client relationships across industries.",
        period: "2022 - Present",
      },
      {
        title: "Digital Transformation",
        company: "Enterprise Solutions",
        description: "Helping businesses modernize their operations with cutting-edge technology solutions.",
      },
      {
        title: "IT Consulting",
        company: "Strategic Advisory",
        description: "Providing expert guidance on technology investments and digital strategy.",
      },
    ],
  },
];

export const getProfileById = (id: string): Profile | undefined => {
  return profiles.find((profile) => profile.id === id);
};
