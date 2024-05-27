import { signOut } from "src/auth";
export async function GET() {
  await signOut();
}
