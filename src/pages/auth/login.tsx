import MainLayout from '@/components/Layouts/MainLayout';
import LoginForm from '@/components/PageComponents/Auth/LoginForm';

export default function Login() {
  return (
    <MainLayout title="Login" description="Login your account">
      <div className="flex justify-center">
        <LoginForm />
      </div>
    </MainLayout>
  );
}
