import { TWSize } from "@/types/TWSize";
import { cva } from "class-variance-authority";

interface AnchorProps {
  href: string;
  label: string;
  isExternalLink?: boolean;
  showBarOnHover?: boolean;
  hideBarOnHover?: boolean;
  size?: TWSize;
  onClick?: () => void;
}

export const Anchor = ({
  href,
  label,
  isExternalLink,
  showBarOnHover,
  hideBarOnHover,
  size,
  onClick,
}: AnchorProps) => {
  return (
    <a
      href={href}
      className={cvaAnchor({ showBarOnHover, hideBarOnHover, size })}
      target={isExternalLink ? "_blank" : "_parent"}
      onClick={onClick}
      data-testid="anchor"
    >
      {label}
    </a>
  );
};

const cvaAnchor = cva(
  [
    "text-primary pointer font-medium transition-all transition-300 transition-ease-out",
  ],
  {
    variants: {
      showBarOnHover: {
        true: [
          "border-transparent border-b-2 hover:border-primary hover:pb-[2px]",
        ],
        false: [""],
      },
      hideBarOnHover: {
        true: [
          "border-primary border-b-2 hover:border-transparent hover:pb-[4px]",
        ],
        false: [""],
      },
      size: {
        base: ["text-base"],
        large: ["text-lg"],
      },
    },
    defaultVariants: {
      showBarOnHover: false,
      hideBarOnHover: false,
      size: "base",
    },
  }
);
