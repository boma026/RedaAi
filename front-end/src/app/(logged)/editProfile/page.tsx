"use client"

import { PrivateRouter } from "@/app/components/PrivateRouter";
import { ProfileEdit } from "@/app/components/ProfileEdit";
import { UserContextProvider } from "@/app/context/userContext";

export default function EditProfile() {
  return (
    <PrivateRouter>
      <UserContextProvider>
        <ProfileEdit/>
      </UserContextProvider>
    </PrivateRouter>
  );
}
