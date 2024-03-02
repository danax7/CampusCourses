import { ProfileForm } from "@/features/profile/ProfileForm";

export const ProfilePage = () => (
    <div className="flex flex-col items-center min-h-[80vh] px-3 mt-6 space-y-6">
        <div>
            <span className="font-bold text-3xl">Профиль</span>
        </div>
        <ProfileForm />
    </div>
);
