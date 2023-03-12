import { Code, Title } from "@mantine/core";
import { showNotification } from "@mantine/notifications";
import { type NextPage } from "next";
import Head from "next/head";
import { z } from "zod";
import ExampleForm from "~/components/ExampleForm";
import { FORM_ERROR } from "~/components/form/Form";
import { useGraphQL } from "~/hooks/useGraphql";
import Layout from "~/layouts/layout";
import { api } from "~/utils/api";

const CreateExampleValidation = z.object({
  amount: z.number(),
  deposit: z.number(),
  duration: z.number(),
});

const Home: NextPage = () => {
  const { data: data1, status } = api.example.example.useQuery();
  const { data } = useGraphQL({
    posts: {
      __args: {
        options: {
          paginate: {
            limit: 2,
          },
        },
      },
      data: {
        title: true,
        user: {
          name: true,
        },
      },
    },
  });

  return (
    <>
      <Head>
        <title>Example start kit</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <Title>Example of tanstack query</Title>
        <Title>{status}</Title>
        <Code>{data1?.hello}</Code>

        <Title>Example of Fetch graphql</Title>
        <Code block>{JSON.stringify(data, null, 2)}</Code>

        <Title>Example form</Title>
        <div>
          <ExampleForm
            submitText="Submit NFT"
            schema={CreateExampleValidation}
            initialValues={{}}
            onSubmit={async (values) => {
              try {
                console.log("values", values);

                showNotification({
                  title: "Success",
                  message: "Successfully example create",
                  color: "green",
                });
              } catch (error: any) {
                console.error(error);
                showNotification({
                  title: "Something went wrong",
                  message: "Failed to create campaign",
                  color: "red",
                });
                return {
                  [FORM_ERROR]: error.toString(),
                };
              }
            }}
          />
        </div>
      </Layout>
    </>
  );
};

export default Home;
