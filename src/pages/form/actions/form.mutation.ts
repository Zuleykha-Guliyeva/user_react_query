import { useMutation, useQueryClient } from "react-query";
import { addUser } from "./form.service";

export const useAddUser = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (user: any) => {
      return addUser(user);      
    },
    onSuccess: () => {
      queryClient.invalidateQueries("users");
    },
  });
};
