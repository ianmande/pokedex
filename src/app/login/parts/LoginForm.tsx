'use client';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import { useRouter } from 'next/navigation';

import { Button } from 'components/Button';
import { Input } from 'components/Input';

import { TAuthentication, TUser } from 'type/auth';
import PassInput from 'components/PassInput';

import { appService } from 'utils/api';
import { setItemLocal } from 'utils/storage';
import { AUTH_KEY_NAME } from 'config';

function LoginForm() {
  const router = useRouter();

  const {
    control,
    handleSubmit,
    formState: { isValid, isSubmitting },
  } = useForm<TUser>();

  const onSubmit: SubmitHandler<TUser> = async (data: TUser) => {
    try {
      const response = await appService.post<TAuthentication>(
        'sigIn',
        data,
        'no-cache'
      );

      setItemLocal(AUTH_KEY_NAME, response.data.token);

      toast.success('Bienvenido!, inicio de sesión exitoso');
      router.replace('/');
    } catch (error) {
      console.log(error);
      toast.error('Oops!, hubo un problema');
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="email"
        control={control}
        rules={{ required: true }}
        render={({ field }) => (
          <Input
            label="Correo electrónico"
            type="email"
            placeholder="poke@emial.com"
            {...field}
          />
        )}
      />

      <Controller
        name="password"
        control={control}
        rules={{ required: true }}
        render={({ field }) => (
          <PassInput
            label="Contraseña"
            placeholder="Ingresa una contraseña"
            {...field}
          />
        )}
      />

      <div className="mt-10">
        <Button
          type="submit"
          disabled={!isValid || isSubmitting}
          isLoading={isSubmitting}
        >
          Iniciar Sesión
        </Button>
      </div>

      <ToastContainer position="bottom-right" />
    </form>
  );
}

export default LoginForm;
