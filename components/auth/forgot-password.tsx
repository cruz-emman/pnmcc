"use client"

import { authClient } from "@/lib/auth-client"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form"
import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { toast } from "sonner"
import { useState } from "react"
import CardWrapper from "../card-wrapper"
import { ForgotPasswordSchema } from "@/lib/zod"


const ForgotPassword = () => {

    const [loading, setLoading] = useState(false)

    const form = useForm<z.infer<typeof ForgotPasswordSchema>>({
        resolver: zodResolver(ForgotPasswordSchema),
        defaultValues: {
            email: '',
        }
    })

    const onSubmit = async (values: z.infer<typeof ForgotPasswordSchema>) => {
        try {
            // Call the authClient's forgetPassword method, passing the email and a redirect URL.
            await authClient.requestPasswordReset({
                email: values.email, // Email to which the reset password link should be sent.
                redirectTo: "/reset-password", // URL to redirect the user after clicking the reset link.
            }, {
                // Lifecycle hooks to handle different stages of the request.
                onResponse: () => {
                    setLoading(false)

                },
                onRequest: () => {
                    setLoading(true)

                },
                onSuccess: () => {
                    form.reset()
                    toast.success('Reset password link sent to your email')
                },
                onError: (ctx) => {
                    toast.error(ctx.error.message)
                },
            });

        } catch (error) { // catch the error
            console.log(error)

        }
    }

    return (

      <CardWrapper
            title="Forgot Password"
            description="Enter your email to reset your password"
        >
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                    <Input
                                        type="email"
                                        placeholder='example@gmail.com'
                                        {...field}
                                        disabled={loading}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <Button type="submit" className='w-full' disabled={loading}>Submit</Button>
                </form>
            </Form>
        </CardWrapper>

    )
}

export default ForgotPassword


