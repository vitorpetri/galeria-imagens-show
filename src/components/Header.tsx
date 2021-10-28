import { Box, Flex, Button, useDisclosure, Image } from '@chakra-ui/react';

import { ModalAddImage } from './Modal/AddImage';

export function Header(): JSX.Element {
  const { onOpen, isOpen, onClose } = useDisclosure();

  return (
    <>
      <Box bgColor="yellow">
        <Flex
          justifyContent="space-between"
          alignItems="center"
          maxW={1500}
          mx="auto"
          px={20}
          py={6}
          flexWrap="wrap"
        >
          <Image src="logo.svg" h={10} />
          <Button color="pGray.50" bgColor="pGray.900" onClick={() => onOpen()}>
            Adicionar imagem
          </Button>
        </Flex>
      </Box>

      <ModalAddImage isOpen={isOpen} onClose={onClose} />
    </>
  );
}
