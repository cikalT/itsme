
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface LanguageSelectorProps {
  currentLang: string;
  availableLanguages: string[];
  onChange: (lang: string) => void;
  className?: string;
}

export function LanguageSelector({
  currentLang,
  availableLanguages,
  onChange,
  className
}: LanguageSelectorProps) {
  if (availableLanguages.length <= 1) return null;
  
  return (
    <div className={cn("flex gap-2", className)}>
      {availableLanguages.map((lang) => (
        <Button
          key={lang}
          size="sm"
          variant={currentLang === lang ? "default" : "outline"}
          onClick={() => onChange(lang)}
          className="text-xs uppercase"
        >
          {lang}
        </Button>
      ))}
    </div>
  );
}
