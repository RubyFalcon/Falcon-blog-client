import { useRouter } from "next/router";

export const useGetIntId = () => {
  //todo: make this work for any query parameter
  const router = useRouter();
  const intId =
    typeof router.query.id === "string" ? parseInt(router.query.id) : -1;

  return intId;
};
