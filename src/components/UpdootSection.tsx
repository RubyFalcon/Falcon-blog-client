import { ChevronUpIcon, ChevronDownIcon } from "@chakra-ui/icons";
import { Flex, IconButton, Icon } from "@chakra-ui/react";
import React, { useState } from "react";
import { PostSnippetFragment, useVoteMutation } from "../generated/graphql";

interface UpdootSectionProps {
  post: PostSnippetFragment;
}

const UpdootSection: React.FC<UpdootSectionProps> = ({ post }) => {
  const [loadingState, setLoadingstate] = useState<
    "updoot-loading" | "downdoot-loading" | "not-loading"
  >();
  const [, vote] = useVoteMutation();

  return (
    <Flex mr={4} direction="column" justifyContent="center" alignItems="center">
      <IconButton
        onClick={async () => {
          if (post.voteStatus === 1) {
            return;
          }
          setLoadingstate("updoot-loading");
          await vote({
            postId: post.id,
            value: 1,
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
            postId: post.id,
            value: -1,
          });
          setLoadingstate("not-loading");
        }}
        isLoading={loadingState === "downdoot-loading"}
        bg={post.voteStatus === -1 ? "tomato" : "white"}
        variant="outline"
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

export default UpdootSection;
