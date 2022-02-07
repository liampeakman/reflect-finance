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
      color: mode('gray.800 !important', '#fff !important')(props),
      backgroundImage: mode('linear-gradient(#ffffff, #ffffff)', 'linear-gradient(#000, #000)')(props),
      
      backgroundColor: mode('light.primary !important', '#000 !important')(props),
      transition: 'background-color 3.5s ease, background-image 3.5s ease',
      fontFamily:'pragmatica-extended',
      fontWeight:'300',
      fontStyle:'normal',
      minWidth:'300px',
      _before: {
        content: '""',
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",  
        opacity: ".2",
        zIndex: "-1",
        background: "url(https://grainy-gradients.vercel.app/noise.svg)"
      },      
    },
    h1: {
      fontFamily:'pragmatica-extended !important',
    },
    h2: {
      fontFamily:'pragmatica-extended !important',
    },
    a:{
      color:mode('#000 !important', '#fff !important')(props),
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
        bg: mode('rgba(255, 255, 255, 0.45)', 'rgba(0, 0, 0, 0.05)')(props),
        color:mode('#000', '#fff')(props),
        fontWeight:'400',
        backdropFilter:'blur(1px)',
        border:'1px solid rgba(255, 255, 255, 0.125)',
        borderRadius:0,
        _hover: {
          bg: mode(darken('light.secondary', 10), darken('dark.secondary', 10))(props),
        }
      }),
      defaultDash:(props) => ({
        bg: 'none',
        color:mode('#000', '#fff')(props),
        borderRadius:'0',
        fontWeight:'400',
        justifyContent:"flex-start",
        padding:"0 15%",
        _hover: {
          bg: mode(whiten('light.secondary', 90), 'rgba(255, 255, 255, 0.05)')(props),
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
        color:mode('#000', '#fff')(props),
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
        color:mode('#000', '#fff')(props),
        borderRadius:'0',
        fontWeight:'400',
        justifyContent:"flex-start",
        padding:"0 15%",
        height:'8',
        _hover: {
          color: mode(darken('white', 40), darken('white', 40))(props),
        }
      }),
      circle:(props) => ({
        //bg: mode('light.secondary', 'dark.secondary')(props),
        border:mode('solid 2px #00000015', 'solid 2px #ffffff15')(props), 
        fontWeight:'400',
        borderRadius:'900',
        backdropFilter:'blur(10px)',
        _hover: {
          bg: mode('rgba(255, 255, 255, 0.45)', 'rgba(0, 0, 0, 0.05)')(props),
        }
      }),
      rounded:(props) => ({
        //bg: mode('light.secondary', 'dark.secondary')(props),
        border:mode('solid 2px #00000015', 'solid 2px #ffffff15')(props), 
        fontWeight:'400',
        borderRadius:'10px',
        backdropFilter:'blur(10px)',
        _hover: {
          bg: mode('rgba(255, 255, 255, 0.45)', 'rgba(0, 0, 0, 0.05)')(props),
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

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
}

export const theme = extendTheme({
  colors,
  components,
  styles,
  config
});