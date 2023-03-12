/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  useMutation,
  useQuery,
  type UseQueryOptions,
  type UseMutationResult,
  type UseQueryResult,
} from "@tanstack/react-query";
import { env } from "../env.mjs";
import { createClient, FieldsSelection } from "~/generated/index";
import { Mutation, Query, QueryGenqlSelection } from "~/generated/schema";

const client = createClient({
  url: env.NEXT_PUBLIC_GRAPHQL_API,
  headers: {},
});

export function useGraphQL<TVariables extends QueryGenqlSelection>(
  variables: TVariables & { __name?: string },
  options?: Omit<
    UseQueryOptions<
      FieldsSelection<Query, TVariables>,
      unknown,
      FieldsSelection<Query, TVariables>,
      any[]
    >,
    "queryKey"
  >
): UseQueryResult<FieldsSelection<Query, TVariables>> {
  return useQuery(
    [],
    async () => {
      return await client.query(variables);
    },
    options
  );
}

export function useGraphQLMutation<
  TVariables extends QueryGenqlSelection
>(): UseMutationResult<
  FieldsSelection<Mutation, TVariables>,
  unknown,
  TVariables
> {
  return useMutation(async (data) => {
    return await client.mutation(data);
  });
}
