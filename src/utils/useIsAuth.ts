import { useRouter } from "next/router";
import { useEffect } from "react";
import { useMeQuery } from "../generated/graphql";

export const useIsAuth = () => {
  const { data, loading } = useMeQuery();
  const router = useRouter();
  useEffect(() => {
    if (!loading && !data?.me) {
      //telling the login page where to go after logging in
      router.replace("/login?next=" + router.pathname);
    }
  }, [loading, data, router]);
};
