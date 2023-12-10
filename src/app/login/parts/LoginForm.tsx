'use client';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';

import { Button } from 'components/Button';
import { Input } from 'components/Input';

import { TAuthentication, TUser } from 'type/auth';
import PassInput from 'components/PassInput';

import { toast } from 'react-toastify';
import { appService } from 'utils/api';
import { setItemLocal } from 'utils/storage';

function LoginForm() {
  const {
    control,
    handleSubmit,
    formState: { isValid, isSubmitting },
  } = useForm<TUser>();

  const onSubmit: SubmitHandler<TUser> = async (data: TUser) => {
    try {
      const response = await appService.post<TAuthentication>('sigIn', data);

      setItemLocal('auth', response.data.token);

      toast.success('Bienvenido!, inicio de sesión exitoso');
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
    </form>
  );
}

export default LoginForm;
