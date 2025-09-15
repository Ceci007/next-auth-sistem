"use client";

import { authClient } from "@/lib/auth-client";
import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";
import { useRouter } from "next/navigation";
import { toast } from "sonner"

export function Logout() {
  const router = useRouter();

  const handleLogout = async () => {
    await authClient.signOut();
    toast.info("Log Out successfully");
    
    setTimeout(() => {
      router.push("/login");
    }, 2000);
  }

  return <Button variant="outline" onClick={handleLogout}>
    Logout <LogOut className="size-4" />
  </Button>
}