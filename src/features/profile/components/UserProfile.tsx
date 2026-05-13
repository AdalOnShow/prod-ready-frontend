import { Avatar } from "../../../components/Avatar";
import { Badge } from "../../../components/Badge";

interface userProfileProps {
  name: string;
  avatarUrl: string;
  role: string;
  isAdmin?: boolean;
}

export function UserProfile({
  name,
  avatarUrl,
  role,
  isAdmin,
}: userProfileProps) {
  return (
    <div className="flex items-center gap-4 bg-white p-6 rounded-xl shadow-sm border border-gray-200 max-w-sm">
      <Avatar imageUrl={avatarUrl} altText={`${name}'s avatar`} />

      <div className="">
        <h2 className="text-xl font-extrabold text-gray-800">{name}</h2>
        <div className="mt-2">
          <Badge role={role} isAdmin={isAdmin} />
        </div>
      </div>
    </div>
  );
}
