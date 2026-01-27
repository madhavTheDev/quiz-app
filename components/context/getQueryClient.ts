import { isServer , QueryClient} from "@tanstack/react-query"

let queryClient = undefined;

export const getQueryClient = () => {
    if (isServer) {
        const queryClient = new QueryClient({
            defaultOptions: {
                queries: {
                    staleTime: 1000 * 60 * 5, // 5 minutes
                    refetchOnWindowFocus: false,
                }
            }
        });
        return queryClient;
    }
    queryClient = new QueryClient({
        defaultOptions: {
            queries: {
                staleTime: 1000 * 60 * 5, // 5 minutes
                refetchOnWindowFocus: false
            }
        },
    });

    return queryClient;
}