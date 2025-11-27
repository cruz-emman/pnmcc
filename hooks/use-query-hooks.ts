import { useQuery } from "@tanstack/react-query";

export const useUserQuery = () => {
    return useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch('/api/admin/get-user');
            return res.json()
        },
            
    })
}