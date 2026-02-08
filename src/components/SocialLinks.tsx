import { SocialLink } from "@/lib/profileData";
import { Linkedin, Github, Twitter, Instagram, Globe } from "lucide-react";
import { motion } from "framer-motion";

interface SocialLinksProps {
  socials: SocialLink[];
}

const getIcon = (iconName: string) => {
  const iconProps = { className: "w-5 h-5" };

  switch (iconName) {
    case "linkedin":
      return <Linkedin {...iconProps} />;
    case "github":
      return <Github {...iconProps} />;
    case "twitter":
      return <Twitter {...iconProps} />;
    case "instagram":
      return <Instagram {...iconProps} />;
    case "globe":
      return <Globe {...iconProps} />;
    default:
      return <Globe {...iconProps} />;
  }
};

export const SocialLinks = ({ socials }: SocialLinksProps) => {
  return (
    <div className="flex flex-wrap justify-center gap-4">
      {socials.map((social) => (
        <motion.a
          key={social.platform}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon bg-background/50 backdrop-blur-sm border-primary/20 hover:border-primary hover:bg-primary hover:text-primary-foreground shadow-lg"
          whileHover={{ y: -5, scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          aria-label={social.platform}
          title={social.platform}
        >
          {getIcon(social.icon)}
        </motion.a>
      ))}
    </div>
  );
};
