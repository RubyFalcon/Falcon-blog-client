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
          setLoadingstate("updoot-loading");
          await vote({
            PostId: post.id,
            value: 1,
          });
          setLoadingstate("not-loading");
        }}
        isLoading={loadingState === "updoot-loading"}
        bg="ghostwhite"
        aria-label="upvote"
        icon={<Icon as={ChevronUpIcon} w={6} h={6} />}
      />

      {post.points}
      <IconButton
        onClick={async () => {
          setLoadingstate("downdoot-loading");
          await vote({
            PostId: post.id,
            value: -1,
          });
          setLoadingstate("not-loading");
        }}
        isLoading={loadingState === "downdoot-loading"}
        bg="ghostwhite"
        aria-label="upvote"
        icon={<Icon as={ChevronDownIcon} w={6} h={6} />}
      />
    </Flex>
  );
};

export default UpdootSection;
