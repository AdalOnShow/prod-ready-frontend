import { UserProfile } from "../../profile/components/UserProfile";

export function Playground() {
  return (
    <div className="p-8 flex gap-8">
      <UserProfile
        name="Sharif Adal"
        role="Software Engineer"
        avatarUrl="https://avatars.githubusercontent.com/u/99527666?v=4"
        isAdmin={true}
      />
      <UserProfile
        name="Jane Doe"
        role="Junior Developer"
        avatarUrl="https://avatars.githubusercontent.com/u/99527666?v=4"
      />
    </div>
  );
}
