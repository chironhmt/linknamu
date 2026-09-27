import { profile } from "@/lib/profile";

export default function ProfileHeader() {
  const initial = profile.name.charAt(0);

  return (
    <div className="flex flex-col items-center gap-2 text-center">
      <div className="flex h-24 w-24 items-center justify-center overflow-hidden rounded-full bg-neutral-200 text-3xl font-semibold text-neutral-600 dark:bg-neutral-700 dark:text-neutral-200">
        {profile.avatarUrl ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={profile.avatarUrl}
            alt={profile.name}
            className="h-full w-full object-cover"
          />
        ) : (
          <span>{initial}</span>
        )}
      </div>
      <h1 className="text-xl font-bold text-neutral-900 dark:text-neutral-50">
        {profile.name}
      </h1>
      <p className="text-sm text-neutral-500 dark:text-neutral-400">
        {profile.bio}
      </p>
    </div>
  );
}
