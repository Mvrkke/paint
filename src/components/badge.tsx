import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface TextBadgeProps {
  text: string;
  className?: string;
}

export function TextBadge({ text, className }: TextBadgeProps) {
  return (
    <Badge
      variant="outline"
      className={cn("border-card-foreground/50 w-fit font-heading", className)}
    >
      {text}
    </Badge>
  );
}
