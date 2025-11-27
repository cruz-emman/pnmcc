import { auth } from '@/lib/auth'
import { headers } from 'next/headers'
import { redirect } from 'next/navigation'

const AuthLayoutProvider = async ({ children }: { children: React.ReactNode }) => {

  const session = await auth.api.getSession({
    headers: await headers()
  })

  if(session?.user.role !== "user"){
    redirect('/')
  }

  return (
    <main className='relative flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5'>
      <div className='max-w-7xl w-full flex items-center justify-center h-screen'>
        {children}
      </div>
    </main>
  )
}

export default AuthLayoutProvider