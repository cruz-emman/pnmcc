import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "../../components/app-sidebar"
import { auth } from "@/lib/auth"
import { headers } from "next/headers"
import { redirect } from "next/navigation"

export default async function Layout({ children }: { children: React.ReactNode }) {
//     const session = await auth.api.getSession({
//         headers: await headers()
//     })

//   if(session?.user.role !== "admin"){
//     redirect('/')
//   }


    return (
        <SidebarProvider>
            <AppSidebar />
            <SidebarTrigger />
            <main className="max-w-7xl w-full mx-auto">
                {children}
            </main>
        </SidebarProvider>
    )
}