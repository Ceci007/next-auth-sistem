import Link from "next/link";

import Image from "next/image";
import { ForgotPasswordForm } from "@/components/forms/forgot-password-form";
import betterAuthLogo from '../../public/better-auth-starter.png';

export default function LoginPage() {
  return (
    <div className="bg-[#F6F8FB] flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10">
      <div className="flex w-full max-w-sm flex-col gap-6">
        <Link
          href="/"
          className="flex items-center gap-2 self-center font-medium"
        >
          <div className="bg-primary text-primary-foreground flex size-6 items-center justify-center rounded-md">
            <Image
              width={50}
              height={50} 
              src={betterAuthLogo}
              alt="Better Auth Starter Logo"
              priority
            />
          </div>
          Next Auth Sistem
        </Link>
        <ForgotPasswordForm />
      </div>
    </div>
  );
}