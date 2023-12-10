import LoginForm from './parts/LoginForm';

export default async function LoginPage() {
  return (
    <div className="flex justify-center items-center">
      <div className="shadow-lg bg-white rounded-lg px-10 py-8 overflow-hidden flex flex-col w-full max-w-xl mx-10">
        <h1 className="font-poppins text-3xl mb-5 text-center">Bienvenido</h1>

        <LoginForm />
      </div>
    </div>
  );
}
