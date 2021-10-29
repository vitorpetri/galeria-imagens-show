import { Box, Flex, Button, useDisclosure } from '@chakra-ui/react';

import { ModalAddImage } from './Modal/AddImage';

export function Header(): JSX.Element {
  const { onOpen, isOpen, onClose } = useDisclosure();

  return (
    <>
      <Box bgColor="bgcolor">
        <Flex
          justifyContent="space-between"
          alignItems="center"
          maxW={1500}
          mx="auto"
          px={20}
          py={6}
          flexWrap="wrap"
        >
          <a href="https://imagens-show.ga/">
            <img src="logo.svg" alt="" />
          </a>
          <Button
            marginTop="6"
            color="bgcolor"
            bgColor="textcolor"
            onClick={() => onOpen()}
          >
            Adicionar imagem
          </Button>
        </Flex>
      </Box>

      <ModalAddImage isOpen={isOpen} onClose={onClose} />
    </>
  );
}
