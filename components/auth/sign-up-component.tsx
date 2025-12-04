"use client"
import React, { useState } from 'react'
import { authClient } from "@/lib/auth-client"; //import the auth client
import { toast } from 'sonner';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form"
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
import { Loader2 } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { SignUpSchema } from '@/lib/zod';
import z from 'zod';
import { Separator } from '../ui/separator';
import Link from 'next/link';

export default function SignUpComponent() {
    const [loading, setLoading] = useState(false)


    const form = useForm<z.infer<typeof SignUpSchema>>({
        resolver: zodResolver(SignUpSchema),
        defaultValues: {
            name: "",
            email: "",
            password: "",

        },
    })


    const onSubmit = async (values: z.infer<typeof SignUpSchema>) => {
        const { email, password, name } = values;
        try {
            const { data, error } = await authClient.signUp.email({
                email, // user email address
                password, // user password -> min 8 characters by default
                name, // user display name
                callbackURL: "/dashboard" // A URL to redirect to after the user verifies their email (optional)
            }, {
                onRequest: (ctx) => {
                    setLoading(true)
                    toast("Please wait...")
                },
                onSuccess: (ctx) => {
                    //redirect to the dashboard or sign in page
                    toast.success("account created successfully.");
                },
                onError: (ctx) => {
                    // display the error message
                    toast.error(ctx.error.message);
                },
            });
        } catch (error) {

        }
    }

    return (
        <Card className="w-full max-w-md mx-auto">
            <CardHeader className="space-y-1">
                <div className='flex items-center justify-center'>

                </div>
                <CardTitle className="text-2xl font-bold text-center">Sign Up</CardTitle>
                <CardDescription className="text-center">            Welcome back! Please sign in to continue.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                        <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Name</FormLabel>
                                    <FormControl>
                                        <Input placeholder="John Doe" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
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
