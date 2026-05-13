interface AvatarProps {
  imageUrl: string;
  altText: string;
  size?: "sm" | "md" | "lg"; // Optional size prop for customizing avatar size
}

export function Avatar({ imageUrl, altText, size = "md" }: AvatarProps) {
  const sizeClasses = {
    sm: "w-8 h-8", // Small size (32px)
    md: "w-12 h-12", // Medium size (48px)
    lg: "w-16 h-16", // Large size (64px)
  };

  return (
    <img
      src={imageUrl}
      alt={altText}
      className={`rounded-full object-cover border-2 border-gray-200 ${sizeClasses[size]}`} // Apply size-based class for styling
    />
  );
}
