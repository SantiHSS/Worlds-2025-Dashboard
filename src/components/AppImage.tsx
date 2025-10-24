import Image from "next/image";
import logo from "@/icons/logob.png";

// Icons in the app
const appIcons = { 
  logo 
} as const;

type ImageProps = {
  icon?: keyof typeof appIcons;
  src?: string;
  alt?: string;
  size?: number;
  className?: string;
};

export default function AppImage({ 
  icon, 
  src, 
  alt, 
  size = 50, 
  className = "" 
}: ImageProps) {
  const imageSrc = icon ? appIcons[icon] : src;
  const imageAlt = alt || icon || "image";

  if (!imageSrc) {
    console.warn("AppImage: No image source provided");
    return null;
  }

  // img optimization
  return (
    <div
      className={`inline-flex items-center justify-center ${className}`}
      style={{ width: size, height: size }}
    >
      <Image
        src={imageSrc}
        alt={imageAlt}
        width={size}
        height={size}
        style={{ width: size, height: "auto" }}
        priority
      />
    </div>
  );
}