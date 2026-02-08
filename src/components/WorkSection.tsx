import { WorkItem } from "@/lib/profileData";
import { Briefcase } from "lucide-react";
import { motion } from "framer-motion";

interface WorkSectionProps {
  work: WorkItem[];
}

export const WorkSection = ({ work }: WorkSectionProps) => {
  return (
    <section className="space-y-6">
      <div className="flex items-center gap-3 mb-6 justify-center">
        <div className="p-2 rounded-lg bg-primary/10 text-primary">
          <Briefcase className="w-5 h-5" />
        </div>
        <h2 className="text-xl font-bold tracking-tight text-foreground">Work & Platforms</h2>
      </div>

      <div className="grid gap-4">
        {work.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -2 }}
            className="glass-card group hover:bg-white/30 dark:hover:bg-white/10"
          >
            <div className="flex flex-col gap-2">
              <div className="flex items-start justify-between">
                <h3 className="font-semibold text-lg text-foreground group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                {item.period && (
                  <span className="text-xs font-medium text-muted-foreground bg-secondary px-3 py-1 rounded-full whitespace-nowrap">
                    {item.period}
                  </span>
                )}
              </div>
              <p className="text-sm font-medium text-primary/80">{item.company}</p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
