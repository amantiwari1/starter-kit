import {
  useMutation,
  UseMutationOptions,
  UseMutationResult,
  useQuery,
  UseQueryOptions,
  UseQueryResult,
} from "@tanstack/react-query";
import axios from "redaxios";
import { env } from "../env.mjs";

const fetch = axios.create({
  baseURL: env.NEXT_PUBLIC_REST_API,
  headers: {},
});

export function useAxiosQuery<TResult, TParams>(
  url: string,
  params?: Record<keyof TParams, any>,
  options?: Omit<UseQueryOptions<TResult, unknown, TResult>, "queryKey">
): UseQueryResult<TResult> {
  return useQuery(
    [url],
    async () =>
      await fetch
        .get(url, {
          params,
        })
        .then((res) => res.data),
    options
  );
}

export function useAxiosQueryMutation<TResult, TRequestBody>(
  url: string,
  options?: Omit<
    UseMutationOptions<TResult, unknown, TRequestBody>,
    "mutationFn"
  >
): UseMutationResult<TResult, unknown, TRequestBody> {
  return useMutation(
    async (data) => await fetch.post(url, data).then((res) => res.data),
    options
  );
}
