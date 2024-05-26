import { signIn } from "src/auth";
export async function POST(request: Request) {
  const formData = await request.json();
  const email = formData.email;
  const password = formData.password;
  await signIn("credentials", {
    email: email,
    password: password,
  });
}
