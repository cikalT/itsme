
import { Check } from "lucide-react";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Theme, useTheme } from "./ThemeProvider";
import themes, { themeList } from "@/themes";

export function ThemeSelector() {
  const { theme: currentTheme, setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="rounded-full"
          aria-label="Select theme"
        >
          <div 
            className="h-4 w-4 rounded-full border border-border/50" 
            style={{ backgroundColor: themes[currentTheme as keyof typeof themes].icon }}
          />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {themeList.map((themeKey) => {
          const theme = themes[themeKey];
          return (
            <DropdownMenuItem
              key={themeKey}
              onClick={() => setTheme(themeKey as Theme)}
              className={cn(
                "flex items-center gap-2 cursor-pointer",
                themeKey === currentTheme && "bg-accent"
              )}
            >
              <div 
                className="h-4 w-4 rounded-full border border-border/50" 
                style={{ backgroundColor: theme.icon }}
              />
              <span>{theme.name}</span>
              {themeKey === currentTheme && (
                <Check className="h-4 w-4 ml-auto" />
              )}
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
