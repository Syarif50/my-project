import Link from "next/link";

interface ButtonProps {
  text: string;
  href: string;
  variant?: "primary" | "secondary";
}

export default function Button({
  text,
  href,
  variant = "primary",
}: ButtonProps) {
  return (
    <Link
      href={href}
      className={`button ${variant === "secondary" ? "button-secondary" : ""}`}
    >
      {text}
    </Link>
  );
}