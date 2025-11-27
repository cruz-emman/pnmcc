"use client"
import React from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { authClient } from '@/lib/auth-client'
import { toast } from 'sonner'
import { useRouter, useSearchParams } from 'next/navigation'
import { ResetPasswordSchema, ResetPasswordSchemaType } from '@/lib/zod'
import CardWrapper from '../card-wrapper'


const ResetPassword = () => {

  const router = useRouter()
  const searchParams = useSearchParams()
  const token = searchParams.get('token')

  const form = useForm<ResetPasswordSchemaType>({
    resolver: zodResolver(ResetPasswordSchema),
    defaultValues: {
      password: '',
      confirmPassword: '',
    },
  })

  const onSubmit = async (value: ResetPasswordSchemaType) => {
    if (!token) {
            toast.error("Invalid or missing reset token"); // Error handling for when the token doesn't exist
            return;
        }
    try {
      await authClient.resetPassword({
        newPassword: value.password,
        token: token, // Pass the token to the resetPassword method
      },
        {
          onSuccess: () => {
            toast.success('Password reset successfully')
            router.replace('/sign-in')
          },
          onError: (error) => {
            toast.error(error.error.message || 'Failed to reset password')
          }
        })

    } catch (error) {
      toast.error('An unexpected error occurred while resetting the password')
      console.error('Reset Password Error:', error)
    }
  }

  return (
    <CardWrapper
      title={"Reset Password"}
      description='Create new password'
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-4'>
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input
                    type="password"
                    placeholder='************'
                    {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="confirmPassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Confirm Password</FormLabel>
                <FormControl>
                  <Input
                    type="password"
                    placeholder='*************'
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type='submit' className='w-full'>
            Reset Password
          </Button>
        </form>
      </Form>
    </CardWrapper>
  )
}

export default ResetPassword