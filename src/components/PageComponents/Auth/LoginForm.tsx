import Link from 'next/link';
import { useRouter } from 'next/router';
import type { SubmitHandler } from 'react-hook-form';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

import Button from '@/components/Templates/Forms/Button';
import Input from '@/components/Templates/Forms/Input';
import authService from '@/services/auth';
import { yupResolver } from '@hookform/resolvers/yup';

const loginSchema = yup.object({
  email: yup.string().required('Required').min(4, 'Must at least 4 characters'),
  password: yup
    .string()
    .required('Required')
    .min(6, 'Must at least 6 characters'),
});

interface LoginInputs extends yup.InferType<typeof loginSchema> {}

export default function LoginForm() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginInputs>({ resolver: yupResolver(loginSchema) });

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
        registerHook={register('email')}
        error={errors.email?.message}
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
        registerHook={register('password')}
        error={errors.password?.message}
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
