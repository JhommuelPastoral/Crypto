import { useQuery } from "@tanstack/react-query";
import {getProfile} from '../lib/api.js'

export default function useAuthUser() {
  const authUser = useQuery({
    queryKey: ['authUser'],
    queryFn: getProfile,
    retry: false
  });
  return {authData: authUser?.data , isloading: authUser?.isLoading, isError: authUser?.isError};
}