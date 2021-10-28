import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  colors: {
    yellow: '#FFD300',
    pGray: {
      '50': '#FEFEFE',
      '100': '#DDDCDA',
      '200': '#C7C5C2',
      '300': '#B1AFAA',
      '400': '#9B9892',
      '500': '#85817A',
      '600': '#6A6762',
      '700': '#504E49',
      '800': '#353431',
      '900': '#1B1B1B',
    },
  },
  fonts: {
    heading: 'Space Grotesk',
    body: 'sans-serif',
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
        colorScheme: 'blue',
      },
    },
  },
  styles: {
    global: {
      body: {
        bg: 'yellow',
        color: 'pGray.900',
      },
    },
  },
});
