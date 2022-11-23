import Link from 'next/link';
import { useRouter } from 'next/router';
import type { SubmitHandler } from 'react-hook-form';
import { useForm } from 'react-hook-form';

import Button from '@/components/Templates/Forms/Button';
import Input from '@/components/Templates/Forms/Input';
import authService from '@/services/auth';
import configs from '@/configs';

type RegisterInputs = {
  email: string;
  password: string;
  confirmPassword: string;
};

export default function RegisterForm() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm<RegisterInputs>();
  const onSubmit: SubmitHandler<RegisterInputs> = async (data) => {
    try {
      await authService.requests.register(data);

      await router.push(configs.loginPath);
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
      <Input
        type={'password'}
        // min={}
        // max={}
        id={'confirmPassword'}
        name={'confirmPassword'}
        label={'Confirm password'}
        placeholder={'******************'}
        // value={}
        // onChange={}
        // className={}
        registerHook={register('confirmPassword', {
          validate: (value) => value === getValues('password'),
        })}
        error={
          errors.confirmPassword ? 'Confirm password does not match' : undefined
        }
      />
      <div className="flex items-center justify-between">
        <Button submitType={true} text={'Register now'} />
        <Link
          className="inline-block align-baseline text-sm font-bold text-blue-500 hover:text-blue-800"
          href="/login"
        >
          Login
        </Link>
      </div>
    </form>
  );
}
