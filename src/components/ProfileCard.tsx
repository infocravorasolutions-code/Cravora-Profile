import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Profile } from "@/lib/profileData";

interface ProfileCardProps {
  profile: Profile;
  animationDelay?: number;
}

export const ProfileCard = ({ profile, animationDelay = 0 }: ProfileCardProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/profile/${profile.id}`);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: animationDelay * 0.1 }}
      onClick={handleClick}
      className="glass-card group cursor-pointer relative"
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === "Enter" && handleClick()}
    >
      <div className="flex flex-col items-center text-center">
        {/* Profile Image with Ring */}
        <motion.div
          className="profile-ring mb-4"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <img
            src={profile.image}
            alt={profile.name}
            className="w-28 h-28 object-cover"
          />
        </motion.div>

        {/* Name */}
        <h3 className="text-2xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
          {profile.name}
        </h3>

        {/* Role */}
        <p className="text-sm font-medium text-muted-foreground/80 mb-6 bg-secondary/50 px-3 py-1 rounded-full">
          {profile.role}
        </p>

        {/* Explore Button */}
        <div className="mt-2 w-full">
          <div className="flex items-center justify-center gap-2 text-sm font-medium text-primary opacity-80 group-hover:opacity-100 transition-all group-hover:gap-3">
            <span>Explore Profile</span>
            <ArrowRight className="w-4 h-4" />
          </div>
        </div>
      </div>
    </motion.div>
  );
};
