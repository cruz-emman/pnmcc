"use client"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { authClient } from "@/lib/auth-client"
import { SignInSchema } from "@/lib/zod"
import { useForm } from "react-hook-form"
import z from "zod"

import { zodResolver } from "@hookform/resolvers/zod"
import { useState } from "react"
import { toast } from "sonner"
import { Loader2 } from "lucide-react"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form"
import { Separator } from "../ui/separator"
import Link from "next/link"
import { useRouter } from "next/navigation"


export function LoginComponent() {

  const router = useRouter()

  const [loading, setLoading] = useState(false)


  const form = useForm<z.infer<typeof SignInSchema>>({
    resolver: zodResolver(SignInSchema),
    defaultValues: {
      email: "",
      password: "",

    },
  })


  const onSubmit = async (values: z.infer<typeof SignInSchema>) => {
    const { email, password } = values;
    const { data, error } = await authClient.signIn.email({
      email,
      password,
    }, {
      onRequest: () => {
        setLoading(true)
        toast("Please wait...")
      },
      onSuccess: async () => {
        const session = await authClient.getSession()
        const role = session.data?.user?.role
        if (role == 'admin') {
          router.push('/main')
          toast("Login Successfully")
        }
        else if (role == 'user') {
          router.push('/dashboard')
          toast("Login Successfully")
        } else if (role !== 'admin' && role != 'user') {
          toast("Unauthorized access. Admin privileges required.")
        }

        setLoading(false)
      },
      onError: (ctx) => {
        if (ctx.error.status === 403) {
          toast("Please verify your email address")
        }
        toast(ctx.error.message);
        setLoading(false)
      },
    })
  }

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader className="space-y-1">
        <div className='flex items-center justify-center'>

        </div>
        <CardTitle className="text-2xl font-bold text-center">Sign In</CardTitle>
        <CardDescription className="text-center">            Welcome back! Please sign in to continue.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="john@mail.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input type="password" placeholder="Enter your password" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />


            <Button disabled={loading} className="w-full" type="submit">
              {loading ? <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Logging Account...
              </> : "Login"}
            </Button>
          </form>
        </Form>

      </CardContent>

      <Separator className="mb-2" />
      <CardFooter className='flex flex-col justify-center'>
        <p className='text-sm text-muted-foreground'>
          Don&apos;t have an account yet?{' '} contact: email@email.com

        </p>
        <p className='text-sm text-muted-foreground'>
          Forgot Password?{' '}
          <Link href='/forgot-password' className='text-primary hover:underline'>
            Reset it here
          </Link>
        </p>
      </CardFooter>
    </Card>
  )
}
