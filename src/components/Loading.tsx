import { Box, Heading, Flex, Progress } from '@chakra-ui/react';

export function Loading(): JSX.Element {
  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      h="100vh"
      flexDir="column"
      textAlign="center"
    >
      <Box>
        <Heading>Galeria de Imagens Show...</Heading>
        <Progress mt={4} size="xs" isIndeterminate bgColor="transparent" />
      </Box>
    </Flex>
  );
}
