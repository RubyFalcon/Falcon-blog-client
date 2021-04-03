import { ApolloCache } from "@apollo/client";
import gql from "graphql-tag";
import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";
import { Flex, Icon, IconButton } from "@chakra-ui/react";
import React, { useState } from "react";
import {
  PostSnippetFragment,
  useVoteMutation,
  VoteMutation,
} from "../generated/graphql";
import { withApollo } from "../utils/withApollo";

interface UpdootSectionProps {
  post: PostSnippetFragment;
}

const updateAfterVote = (
  value: number,
  postId: number,
  cache: ApolloCache<VoteMutation>
) => {
  const data = cache.readFragment<{
    id: number;
    points: number;
    voteStatus: number | null;
  }>({
    id: "Post:" + postId,
    fragment: gql`
      fragment _ on Post {
        id
        points
        voteStatus
      }
    `,
  });

  if (data) {
    if (data.voteStatus === value) {
      return;
    }
    const newPoints =
      (data.points as number) + (!data.voteStatus ? 1 : 2) * value;
    cache.writeFragment({
      id: "Post:" + postId,
      fragment: gql`
        fragment __ on Post {
          points
          voteStatus
        }
      `,
      data: { points: newPoints, voteStatus: value },
    });
  }
};

const UpdootSection: React.FC<UpdootSectionProps> = ({ post }) => {
  const [loadingState, setLoadingstate] = useState<
    "updoot-loading" | "downdoot-loading" | "not-loading"
  >("not-loading");
  const [vote] = useVoteMutation();

  return (
    <Flex mr={4} direction="column" justifyContent="center" alignItems="center">
      <IconButton
        onClick={async () => {
          if (post.voteStatus === 1) {
            return;
          }
          setLoadingstate("updoot-loading");
          await vote({
            variables: { postId: post.id, value: 1 },
            update: (cache) => updateAfterVote(1, post.id, cache),
          });
          setLoadingstate("not-loading");
        }}
        variant="outline"
        isLoading={loadingState === "updoot-loading"}
        bg={post.voteStatus === 1 ? "green.500" : "white"}
        aria-label="upvote"
        icon={
          <Icon
            textColor={post.voteStatus === 1 ? "white" : "initial"}
            as={ChevronUpIcon}
            w={6}
            h={6}
          />
        }
      />

      {post.points}
      <IconButton
        onClick={async () => {
          if (post.voteStatus === -1) {
            return;
          }
          setLoadingstate("downdoot-loading");
          await vote({
            variables: { postId: post.id, value: -1 },
            update: (cache) => updateAfterVote(-1, post.id, cache),
          });
          setLoadingstate("not-loading");
        }}
        variant="outline"
        isLoading={loadingState === "downdoot-loading"}
        bg={post.voteStatus === -1 ? "red.500" : "white"}
        aria-label="upvote"
        icon={
          <Icon
            textColor={post.voteStatus === -1 ? "white" : "initial"}
            as={ChevronDownIcon}
            w={6}
            h={6}
          />
        }
      />
    </Flex>
  );
};
export default withApollo({ ssr: false })(UpdootSection);
