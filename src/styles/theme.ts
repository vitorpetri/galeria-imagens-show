import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  colors: {
    bgcolor: '#E8DB99',
    textcolor: '#353431',

    input: '#353431',
    border: '#85817A',
    textinput: '#C7C5C2',
  },
  fonts: {
    heading: 'Space Grotesk',
    body: 'Inter',
  },
  components: {
    Text: {
      baseStyle: {
        fontSize: 'lg',
        fontWeight: 'normal',
      },
    },
    Button: {
      defaultProps: {
        colorScheme: 'blackAlpha',
      },
    },
    Progress: {
      defaultProps: {
        colorScheme: 'blackAlpha',
      },
    },
  },
  styles: {
    global: {
      body: {
        bg: 'bgcolor',
        color: 'textcolor',
      },
    },
  },
});
