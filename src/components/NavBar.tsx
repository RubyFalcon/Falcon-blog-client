import { Box, Button, Flex, Heading, Link } from "@chakra-ui/react";
import React from "react";
import NextLink from "next/link";
import { useLogoutMutation, useMeQuery } from "../generated/graphql";
import { isServer } from "../utils/isServer";
import Router, { useRouter } from "next/router";
import { useApolloClient } from "@apollo/client";

interface NavBarProps {}

export const NavBar: React.FC<NavBarProps> = ({}) => {
  const router = useRouter();
  const [logout, { loading: logoutLoading }] = useLogoutMutation();
  const { data, loading } = useMeQuery({
    skip: isServer(),
  });

  const apolloClient = useApolloClient();

  let body = null;
  //data is loading
  if (loading) {
    //user not logged in
  } else if (!data?.me) {
    console.log("me data:", data);
    body = (
      <>
        <NextLink href="/login">
          <Link color="beige" mr={2}>
            Login
          </Link>
        </NextLink>
        <NextLink href="/register">
          <Link color="beige">Register</Link>
        </NextLink>
      </>
    );

    //user is logged in
  } else {
    body = (
      <Flex align="center">
        <NextLink href="/create-post">
          <Button as={Link} mr={4}>
            Create post
          </Button>
        </NextLink>
        <Box mr={2} color="beige">
          {data.me?.username}
        </Box>

        <Button
          onClick={async () => {
            await logout();
            await apolloClient.resetStore(); //invalidate cache
          }}
          isLoading={logoutLoading}
          variant="link"
          color="beige"
        >
          logout
        </Button>
      </Flex>
    );
  }
  return (
    <Flex zIndex={1} position="sticky" top={0} bg="red.900" p={4}>
      <Flex m="auto" flex={1} align="center" maxW={800}>
        <NextLink href="/">
          <Heading as={Link} color="orange.100">
            Kompany
          </Heading>
        </NextLink>

        <Box ml={"auto"}>{body}</Box>
      </Flex>
    </Flex>
  );
};
