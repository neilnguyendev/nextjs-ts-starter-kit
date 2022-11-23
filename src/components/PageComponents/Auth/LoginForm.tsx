import Link from 'next/link';
import { useRouter } from 'next/router';
import type { SubmitHandler } from 'react-hook-form';
import { useForm } from 'react-hook-form';

import Button from '@/components/Templates/Forms/Button';
import Input from '@/components/Templates/Forms/Input';
import authService from '@/services/auth';

type LoginInputs = {
  email: string;
  password: string;
};

export default function LoginForm() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginInputs>();
  const onSubmit: SubmitHandler<LoginInputs> = async (data) => {
    try {
      const loginResponse = await authService.requests.login(data);

      authService.cookies.setAccessToken(loginResponse.token.accessToken);

      await router.push('/users');
    } catch (error: any) {
      alert(error.message);
    }
  };

  return (
    <form className="mb-4" onSubmit={handleSubmit(onSubmit)}>
      <Input
        type={'text'}
        // min={}
        // max={}
        id={`email`}
        name={'email'}
        label={'Email'}
        placeholder={'Email'}
        // value={}
        // onChange={}
        // className={}
        registerHook={register('email', { required: true, minLength: 4 })}
        error={errors.email ? 'Must at least 4 characters' : undefined}
      />
      <Input
        type={'password'}
        // min={}
        // max={}
        id={'password'}
        name={'password'}
        label={'Password'}
        placeholder={'******************'}
        // value={}
        // onChange={}
        // className={}
        registerHook={register('password', { required: true, minLength: 6 })}
        error={
          errors.password ? 'Password must at least 6 characters' : undefined
        }
      />
      <div className="flex items-center justify-between">
        <Button submitType={true} text={'Login'} />
        <Link
          className="inline-block align-baseline text-sm font-bold text-blue-500 hover:text-blue-800"
          href="/register"
        >
          Register
        </Link>
      </div>
    </form>
  );
}
