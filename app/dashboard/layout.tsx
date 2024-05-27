import React from "react";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

export default async function DashboardLayout ({ children }: { children: React.ReactNode }) {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect("/login");
  }

  return (
    <div className="flex-1 w-full flex flex-col gap-20 items-center">
      <div className="w-full">
        <div className="py-2 font-bold bg-purple-950 text-center text-xs">
          This is a protected page that you can only see as an authenticated
          user
        </div>
      </div>

      <div className="w-full max-w-4xl flex justify-between items-center p-3 text-sm">
        {children}
      </div>
    </div>
  )
}


