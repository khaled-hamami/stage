export { };
 
export type Roles = "user" | "admin";
 
declare global {
  interface CustomJwtSessionClaims {
    metadata: {
      role?: Roles
    };
  }
}