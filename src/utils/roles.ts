import { Roles } from "@/types/globals";
import { auth } from "@clerk/nextjs";
import { useUser } from "@clerk/nextjs";

export const checkRoleServer = (role: Roles) => {
  const { sessionClaims } = auth();

  return sessionClaims?.metadata.role === role;
};

export const useCheckRoleClient = (role: Roles) => {
  const { user } = useUser();

  return user?.publicMetadata.role === role;
};