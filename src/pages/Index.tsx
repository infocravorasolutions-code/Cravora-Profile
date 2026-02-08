import { ProfileCard } from "@/components/ProfileCard";
import { ThemeToggle } from "@/components/ThemeToggle";
import { profiles } from "@/lib/profileData";
import cravoraLogo from "@/assets/cravora-logo.png";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <ThemeToggle />

      <div className="container max-w-md mx-auto px-4 py-12">
        {/* Logo */}
        <div className="flex justify-center mb-8 animate-float-in">
          <img
            src={cravoraLogo}
            alt="Cravora Solutions"
            className="h-40 w-auto drop-shadow-lg"
          />
        </div>

        {/* Heading */}
        <div className="text-center mb-10 animate-float-in-delay-1">
          <h1 className="text-2xl font-bold text-primary mb-2">
            Choose a profile to explore
          </h1>
          <p className="text-muted-foreground text-sm">
            Tap on a card to learn more
          </p>
        </div>

        {/* Profile Cards */}
        <div className="space-y-4">
          {profiles.map((profile, index) => (
            <ProfileCard
              key={profile.id}
              profile={profile}
              animationDelay={index + 2}
            />
          ))}
        </div>

        {/* Footer */}
        <footer className="mt-12 text-center animate-float-in-delay-3">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Cravora Solutions. All rights reserved.
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
