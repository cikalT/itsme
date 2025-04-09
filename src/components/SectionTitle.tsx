
import { cn } from "@/lib/utils";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  center?: boolean;
  className?: string;
}

export function SectionTitle({ 
  title, 
  subtitle, 
  center = false,
  className 
}: SectionTitleProps) {
  return (
    <div className={cn(
      "mb-12 space-y-2",
      center && "text-center",
      className
    )}>
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight">{title}</h2>
      {subtitle && (
        <p className="text-xl text-muted-foreground">{subtitle}</p>
      )}
    </div>
  );
}
