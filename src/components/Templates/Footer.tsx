import configs from '@/configs';

export default function Footer() {
  return (
    <div className="border-t border-gray-300 py-8 text-center text-sm">
      © Copyright {new Date().getFullYear()} {configs.title}.
    </div>
  );
}
