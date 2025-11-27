"use client"
import { formSchema } from "@/lib/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { toast } from "sonner"
import z from "zod";
import axios from "axios";



export const useCreateUserMutation = () => {
    const queryClient = useQueryClient();

    const mutation = useMutation({
        mutationFn: async (values: z.infer<typeof formSchema>) => {
            const res = await axios.post(`/api/admin/create-user`, values);
            return res.data;
        },
        onSuccess: async () => {
            await queryClient.invalidateQueries({ queryKey: ['users'] });
            toast.success("Successfully Updated Profile", { position: 'bottom-center' })
        },
        onError: (error) => {
            toast.error(error.message)
            if (axios.isAxiosError(error)) {
                const errorMessage = error.response?.data?.message || "Failed to create new author"
                toast.error(errorMessage)
            } else {
                toast.error("Failed to create new author")
            }
        }
    })

    return mutation;

}

export const useImportUserMutation = () => {
  const queryClient = useQueryClient();

    const mutation = useMutation({
        mutationFn: async (formData: FormData) => {
            const res = await axios.post(`/api/admin/import-user`, formData , {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            });
            return res.data;
        },
        onSuccess: async () => {
            await queryClient.invalidateQueries({ queryKey: ['users'] });

            toast.success("Successfully Updated Profile", { position: 'bottom-center' })
        },
        onError: (error) => {
            toast.error(error.message)
            if (axios.isAxiosError(error)) {
                const errorMessage = error.response?.data?.message || "Failed to create new author"
                toast.error(errorMessage)
            } else {
                toast.error("Failed to create new author")
            }
        }
    })

    return mutation

}