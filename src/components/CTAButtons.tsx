import { Mail, Download, Share2 } from "lucide-react";
import { Profile } from "@/lib/profileData";
import { toast } from "sonner";
import { motion } from "framer-motion";

interface CTAButtonsProps {
  profile: Profile;
  sticky?: boolean;
}

export const CTAButtons = ({ profile, sticky = false }: CTAButtonsProps) => {
  const handleContact = () => {
    window.location.href = `mailto:${profile.email}`;
  };

  const handleSaveContact = () => {
    const vCard = `BEGIN:VCARD
VERSION:3.0
FN:${profile.name}
TITLE:${profile.role}
ORG:Cravora Solutions
EMAIL:${profile.email}
TEL:${profile.phone}
URL:https://cravorasolutions.com
END:VCARD`;

    const blob = new Blob([vCard], { type: "text/vcard" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `${profile.name.replace(/\s+/g, "_")}.vcf`;
    link.click();
    URL.revokeObjectURL(url);

    toast.success("Contact saved!", {
      description: `${profile.name}'s contact has been downloaded.`,
    });
  };

  const handleShare = async () => {
    const shareData = {
      title: profile.name,
      text: `Check out ${profile.name}'s profile at Cravora Solutions`,
      url: window.location.href,
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        await navigator.clipboard.writeText(window.location.href);
        toast.success("Link copied!", {
          description: "Profile link has been copied to clipboard.",
        });
      }
    } catch (error) {
      console.log("Share cancelled or failed", error);
    }
  };

  if (sticky) {
    return (
      <div className="fixed bottom-0 left-0 right-0 p-4 z-50 flex justify-center md:hidden pointer-events-none">
        <motion.div
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          className="bg-background/80 backdrop-blur-xl border border-white/20 p-2 rounded-2xl shadow-2xl pointer-events-auto w-full max-w-sm"
        >
          <button
            onClick={handleContact}
            className="w-full flex items-center justify-center gap-2 bg-primary text-primary-foreground py-3 rounded-xl font-medium shadow-lg shadow-primary/20"
          >
            <Mail className="w-4 h-4" />
            Contact {profile.name.split(" ")[0]}
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={handleContact}
        className="flex-1 flex items-center justify-center gap-2 bg-primary text-primary-foreground py-3 px-6 rounded-xl font-medium shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-shadow"
      >
        <Mail className="w-4 h-4" />
        Contact
      </motion.button>

      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={handleSaveContact}
        className="flex-1 flex items-center justify-center gap-2 bg-secondary text-secondary-foreground py-3 px-6 rounded-xl font-medium border border-primary/10 hover:bg-secondary/80 transition-colors"
      >
        <Download className="w-4 h-4" />
        Save Contact
      </motion.button>

      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={handleShare}
        className="flex-1 flex items-center justify-center gap-2 bg-secondary text-secondary-foreground py-3 px-6 rounded-xl font-medium border border-primary/10 hover:bg-secondary/80 transition-colors"
      >
        <Share2 className="w-4 h-4" />
        Share
      </motion.button>
    </div>
  );
};
