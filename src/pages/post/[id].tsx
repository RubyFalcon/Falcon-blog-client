import { Box, Heading, Text } from "@chakra-ui/react";
import { withUrqlClient } from "next-urql";
import EditDeletePostButtons from "../../components/EditDeletePostButtons";
import Layout from "../../components/Layout";
import { createUrqlClient } from "../../utils/createUrqlClient";
import { useGetPostFromUrl } from "../../utils/useGetPostFromUrl";

const Post = ({}) => {
  const [{ data, fetching, error }] = useGetPostFromUrl();

  if (fetching) {
    return (
      <Layout>
        <Text> Loading...</Text>
      </Layout>
    );
  }

  if (error) {
    return (
      <Layout>
        <div>{error.message}</div>
      </Layout>
    );
  }
  if (!data?.post) {
    return (
      <Layout>
        <Text> We couldnt find the post you are looking for </Text>
      </Layout>
    );
  }
  return (
    <Layout>
      <Heading mb={4}>{data.post.title}</Heading>
      <Box>
        <Text mb={4}>{data.post.text}</Text>
      </Box>
      <EditDeletePostButtons
        id={data.post.id}
        creatorId={data.post.creator.id}
      />
    </Layout>
  );
};

export default withUrqlClient(createUrqlClient, { ssr: true })(Post);
