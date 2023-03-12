# Starter kit

this repo is full stack nextjs with all supported needed like react hook form, zod, graphql, trpc, tailwind etc

## support

- Form (Mantine + React hook form)
  - Drop Zone upload file
  - Number Input
  - Date Input
  - Switch Input
  - Text Input
  - Select Input

> Note - will add more other input soon and will add tailwind input support (tailwind + react hook form)

- Graphql custom hooks `useGraphQL` and `useGraphQLMutation` with generated `yarn gen` with `NEXT_PUBLIC_GRAPHQL_API` which is exteral graphql api

- Axios custom hooks `useAxiosQuery` And `useAxiosQueryMutation` with `NEXT_PUBLIC_REST_API` which is external rest api but required provide interface to avoid bug

## Step to create page with CRUD

- view page all items pages/<name>/index.tsx
- form page to create items pages/<name>/new.tsx
- view page item details pages/<name>/[id]/index.tsx
- edit page a items pages/<name>/[id]/edit.tsx

## Task to complete

- [x] Created 5-6 Components mantine input with react hook form
- [x] Created custom graphql hooks with help of library
- [x] Created custom axios hooks with help of library
- [ ] Create small any components with tailwind with windstitch like button
- [ ] Tailwind + React hook form (native tailwind + windstitch input with react hook form)
- [ ] Add prisma insipre by t3-app
- [ ] Add nuxtAuth inspire by t3-app
- [ ] Create different example like useGraphql and useAxiosQuery with different page
