import { useToast } from "@chakra-ui/toast";

export function useNotification() {
  const toast = useToast();

  // sets notification and clears it after 1 second
  const notify = (data) => {
    toast({
      title: data.title,
      position: "top-right",
      description: data.description,
      status: data.status,
      duration: 5000,
      isClosable: true,
    });
  };
  return { notify };
}
