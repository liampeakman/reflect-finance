import { extendTheme, textDecoration } from '@chakra-ui/react';
import type { GlobalStyleProps, Styles } from '@chakra-ui/theme-tools';
import { mode ,darken, whiten } from '@chakra-ui/theme-tools';

// setup colors
const colors = {
  light: {
    primary: '#fff',
    secondary:'#2E2C3B',
    accent:'#5145BA'
  },
  dark: {
    primary: '#090719',
    secondary:'#2E2C3B',
    accent:'#5145BA'
  }
  
}

// setup light/dark mode global defaults
const styles: Styles = {
  global: (props) => ({
    body: {
      color: mode('gray.800', 'whiteAlpha.900')(props),
      bg: mode('light.primary', '#000')(props),
      fontFamily:'DM Sans',
      fontWeight:'400',
      minWidth:'300px'
    },
    h2: {
      fontFamily:'DM Sans !important',
    },
    a:{
      color:mode('gray.800', 'whiteAlpha.900')(props),
      _hover: {
        textDecoration:'none'
      }
    }
    
  })
};

const components = {
  Link :{
    variants:{
      default:(props) => ({
        color: mode('gray.800', 'whiteAlpha.900')(props),
        opacity:"20%",
        _hover: {
          textDecoration:'none',
          opacity:"100%",
          transition: 'opacity 0.3s ease'
        }
        
      }),
      active:(props) => ({
        color:mode('gray.800', 'whiteAlpha.900')(props),
        _hover: {
          textDecoration:'none'
        },
      }),
    }
  },

  Button: {
    variants: {
      primary:(props) => ({
        bg: mode('light.accent', 'dark.accent')(props),
        boxShadow: '0 0 20px rgb(82 61 241 / 60%)',
        color:"white",
        fontWeight:'400',
        _hover: {
          bg: mode(darken('light.accent', 10), darken('dark.accent', 10))(props)
        },
      }),
      secondary:(props) => ({
        bg: mode('light.secondary', 'dark.secondary')(props),
        color:"white",
        fontWeight:'400',
        _hover: {
          bg: mode(darken('light.secondary', 10), darken('dark.secondary', 10))(props),
        }
      }),
      defaultDash:(props) => ({
        bg: 'none',
        color:"white",
        borderRadius:'0',
        fontWeight:'400',
        justifyContent:"flex-start",
        padding:"0 15%",
        _hover: {
          bg: mode(darken('light.accent', 30), darken('dark.accent', 30))(props),
          transition: '0.3s ease'
        },
        a: {
          _hover: {
            textDecoration:'none'
          }
        }
      }),
      activeDash:(props) => ({
        bg: mode('light.accent', 'dark.accent')(props),
        color:"white",
        borderRadius:'0',
        fontWeight:'400',
        justifyContent:"flex-start",
        padding:"0 15%",
        _hover: {
          bg: mode(darken('light.secondary', 10), darken('dark.secondary', 10))(props),
          transition: '0.3s ease'
        }
      }),
      external:(props) => ({
        bg: 'none',
        color:"white",
        borderRadius:'0',
        fontWeight:'400',
        justifyContent:"flex-start",
        padding:"0 15%",
        height:'8',
        _hover: {
          color: mode(darken('white', 40), darken('white', 40))(props),
        }
      }),
      rounded:(props) => ({
        //bg: mode('light.secondary', 'dark.secondary')(props),
        border:mode('solid 2px #00000015', 'solid 2px #ffffff15')(props), 
        fontWeight:'400',
        borderRadius:'900',
        _hover: {
          bg: mode(whiten('light.secondary', 90), darken('dark.secondary', 10))(props),
        }
      }),
      header:(props) => ({
        bg: 'none',
        color: mode('gray.800', 'whiteAlpha.900')(props),
        fontWeight:'400',
        opacity:"20%",
        padding:0,
        _hover: {
          opacity:"100%",
        }
      }),
    }
  }
};

export const theme = extendTheme({
  colors,
  components,
  styles
});