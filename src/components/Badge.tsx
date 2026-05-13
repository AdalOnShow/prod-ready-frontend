interface BadgeProps {
  role: string;
  isAdmin?: boolean; // Optional prop for indicating admin status
}
export function Badge({ role, isAdmin = false }: BadgeProps) {
  return (
    <span
      className={`px-2 py-1 rounded-full text-xs font-semibold uppercase tracking-wide ${isAdmin ? "bg-purple-200 text-purple-800" : "bg-gray-200 text-gray-800"}`}
    >
      {role}
    </span>
  );
}
