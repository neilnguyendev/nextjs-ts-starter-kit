import RegisterForm from '@/components/PageComponents/Auth/RegisterForm';
import MainLayout from '@/components/Layouts/MainLayout';

export default function Register() {
  return (
    <MainLayout title="Register" description="Create a new account">
      <div className="flex justify-center">
        <RegisterForm />
      </div>
    </MainLayout>
  );
}
