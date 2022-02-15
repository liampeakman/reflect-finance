import { extendTheme, textDecoration, useColorModeValue } from '@chakra-ui/react';
import type { GlobalStyleProps, Styles } from '@chakra-ui/theme-tools';
import { mode ,darken, whiten } from '@chakra-ui/theme-tools';


// setup colors
const colors = {
  light: {
    primary: '#000',
    background: 'rgba(252, 252, 252, 0.75)',
    hover:'rgba(255, 255, 255, 0.35)',
  },
  dark: {
    primary: '#fff',
    background:'rgba(0, 0, 0, 0.10)',
    hover:'rgba(0, 0, 0, 0.25)',
  }
}

const borders = {
  lightBorder:'solid 2px rgba(146, 146, 146, 0.1)',
  darkBorder: 'solid 2px rgba(255, 255, 255, 0.05)'
}

const styles: Styles = {
  global: (props) => ({
    body: {
      color: mode('#000 !important', '#fff !important')(props),
      backgroundImage: mode('linear-gradient(#f4f4f4, #f4f4f4)', 'linear-gradient(#000, #000)')(props),
      backgroundColor: mode('light.primary !important', '#000 !important')(props),
      transition: 'background-color 3.5s ease, background-image 3.5s ease',
      fontFamily:'pragmatica-extended',
      fontWeight:'300',
      fontStyle:'normal',
      minWidth:'300px',
      fontSize:'14px',
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
    p: {
      fontSize:'14px',
    },
    h1: {
      fontFamily:'pragmatica-extended !important',
    },
    h2: {
      fontFamily:'pragmatica-extended !important',
    },
    a:{
      color:mode('#000 !important', '#fff !important')(props),
      fontSize:'14px !important',
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
        color: mode('light.primary', 'dark.primary')(props),
        opacity:"20%",
        _hover: {
          textDecoration:'none',
          opacity:"100%",
          transition: 'opacity 0.3s ease'
        }
        
      }),
      active:(props) => ({
        color:mode('light.primary', 'dark.primary')(props),
        _hover: {
          textDecoration:'none'
        },
      }),
    }
  },

  Button: {
    variants: {
      secondary:(props) => ({
        bg: mode('light.background', 'dark.background')(props),
        color:mode('light.primary', 'dark.primary')(props),
        fontWeight:'400',
        backdropFilter:'blur(1px)',
        border:mode('lightBorder', 'darkBorder')(props),
        borderRadius:0,
        _hover: {
          bg: mode('light.hover', 'dark.hover')(props),
        }
      }),
      defaultDash:(props) => ({
        bg: 'none',
        color:mode('light.primary', 'dark.primary')(props),
        borderRadius:'0',
        fontWeight:'400',
        justifyContent:"flex-start",
        padding:"0 15%",
        _hover: {
          bg: mode('light.hover', 'dark.hover')(props),
          _after: {
            position:'absolute',
            right:0,
            content: '"coming soon"',
            fontSize:'0.5rem',
            backdropFilter:'blur(10px)',
            padding:'0.3rem',
            borderRadius:'1rem',
            color:mode('light.primary', 'dark.primary')(props),
            marginLeft:'1rem',
            border:mode('lightBorder', 'darkBorder')(props), 
  
          }
        },
        a: {
          _hover: {
            textDecoration:'none'
            
          }
        },
        
      }),
      activeDash:(props) => ({
        bg: mode('light.background', 'dark.background')(props),
        color:mode('light.primary', 'dark.primary')(props),
        transition:'none',
        borderRadius:'0',
        fontWeight:'400',
        justifyContent:"flex-start",
        padding:"0 15%",
        a: {
          _hover: {
            textDecoration:'none'
          }
        }      
      }),
      external:(props) => ({
        bg: 'none',
        color:mode('light.primary', 'dark.primary')(props),
        borderRadius:'0',
        fontWeight:'400',
        justifyContent:"flex-start",
        padding:"0 15%",
        height:'8',
        _hover: {
          color:mode('light.hover', 'dark.hover')(props),
        }
      }),

      circle:(props) => ({
        border:mode('lightBorder', 'darkBorder')(props), 
        fontWeight:'400',
        borderRadius:'900',
        backdropFilter:'blur(10px)',
        _hover: {
          bg: mode('light.hover', 'dark.hover')(props),
        }
      }),
      rounded:(props) => ({
        border:mode('lightBorder', 'darkBorder')(props), 
        fontWeight:'400',
        borderRadius:'10px',
        backdropFilter:'blur(10px)',
        _hover: {
          bg: mode('light.hover', 'dark.hover')(props),
        }
      }),
      header:(props) => ({
        bg: 'none',
        color: mode('light.primary', 'dark.primary')(props),
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
  borders,
  components,
  styles,
  config
});