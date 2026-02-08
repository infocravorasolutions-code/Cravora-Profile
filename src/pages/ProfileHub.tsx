import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { getProfileById } from "@/lib/profileData";
import { ThemeToggle } from "@/components/ThemeToggle";
import { SocialLinks } from "@/components/SocialLinks";
import { WorkSection } from "@/components/WorkSection";
import { CTAButtons } from "@/components/CTAButtons";
import { AnimatedBackground } from "@/components/AnimatedBackground";
import { SEO } from "@/components/SEO";
import cravoraLogo from "@/assets/cravora-logo.png";

const ProfileHub = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const profile = getProfileById(id || "");

  if (!profile) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <SEO title="Profile Not Found" />
        <AnimatedBackground />
        <div className="text-center glass-card p-8">
          <h1 className="text-2xl font-bold text-primary mb-4">Profile not found</h1>
          <button onClick={() => navigate("/")} className="cta-primary">
            Go back home
          </button>
        </div>
      </div>
    );
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen pb-24 md:pb-12 text-foreground">
      <SEO
        title={`${profile.name} - ${profile.role}`}
        description={profile.bio}
        image={profile.image}
      />
      <AnimatedBackground />
      <ThemeToggle />

      {/* Back button */}
      <div className="container max-w-2xl mx-auto px-4 pt-6 z-10 relative">
        <button
          onClick={() => navigate("/")}
          className="group flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors bg-background/50 backdrop-blur-sm px-4 py-2 rounded-full w-fit"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to profiles
        </button>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="container max-w-2xl mx-auto px-4 py-8 relative z-10"
      >
        {/* Profile Header */}
        <motion.div variants={itemVariants} className="text-center mb-12">
          <div className="flex justify-center mb-8">
            <img
              src={cravoraLogo}
              alt="Cravora Solutions"
              className="h-40  w-auto opacity-90 drop-shadow-md"
            />
          </div>

          <div className="flex justify-center mb-8">
            <motion.div
              className="profile-ring"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <img
                src={profile.image}
                alt={profile.name}
                className="w-40 h-40 object-cover"
              />
            </motion.div>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-300 from-foreground to-foreground/70 mb-3 tracking-tight">
            {profile.name}
          </h1>
          <p className="text-xl text-primary font-medium mb-6">
            {profile.role}
          </p>

          <div className="glass-card max-w-lg mx-auto backdrop-blur-lg bg-background/30 p-6">
            <p className="text-lg leading-relaxed text-muted-foreground">
              {profile.bio}
            </p>
          </div>
        </motion.div>

        {/* Social Links */}
        <motion.section variants={itemVariants} className="mb-12">
          <h2 className="text-center text-xs font-bold text-muted-foreground uppercase tracking-[0.2em] mb-6">
            Connect
          </h2>
          <SocialLinks socials={profile.socials} />
        </motion.section>

        {/* CTA Buttons - Desktop */}
        <motion.section variants={itemVariants} className="mb-12 hidden md:block">
          <CTAButtons profile={profile} />
        </motion.section>

        {/* Work Section */}
        <motion.section variants={itemVariants}>
          <WorkSection work={profile.work} />
        </motion.section>

        {/* Footer */}
        <motion.footer variants={itemVariants} className="mt-16 text-center">
          <p className="text-xs text-muted-foreground/60 font-medium tracking-wide">
            © {new Date().getFullYear()} Cravora Solutions
          </p>
        </motion.footer>
      </motion.div>

      {/* Sticky Mobile CTA */}
      <CTAButtons profile={profile} sticky />
    </div>
  );
};

export default ProfileHub;
