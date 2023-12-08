export default async function LoginPage() {
  const response = await fetch('http://localhost:3000/api/authentication');

  console.log(await response.json());

  return (
    <div>
      <h1>Login</h1>
    </div>
  );
}
