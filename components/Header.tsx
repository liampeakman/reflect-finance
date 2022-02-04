import {Flex, Stack, Image, useColorMode, IconButton, Button, Text} from '@chakra-ui/react'
import ActiveLink from './ActiveLink'
import {SunIcon, MoonIcon, ArrowForwardIcon} from "@chakra-ui/icons"
import { HiOutlineExternalLink } from 'react-icons/hi';



const Header = () => {

const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex 
      justify='space-between' 
      margin={{base:'0', md:'0 0 0 225px'}} 
      padding={{base:'40px', lg:'40px 40px 40px 10%'}}
      >
        <Stack isInline 
          alignItems='center' 
          spacing={50} 
          justify={{base:'flex-end', md:'space-between'}}
        >
          
        <Stack isInline 
          spacing={50} 
          display={{base:'none', lg:'unset'}} 
          >
            <ActiveLink href="/">Home</ActiveLink>
            {/* <ActiveLink href="/">App</ActiveLink> */}
            <Button as='a' rightIcon={<HiOutlineExternalLink/>} variant='header' href="/" target='_blank'>
             Buy
            </Button>
            <Button as='a' rightIcon={<HiOutlineExternalLink/>} variant='header' href="/" target='_blank'>
             Docs
            </Button>
        </Stack>
        </Stack>
        <Stack isInline justify='flex-end' alignItems='center'>
        <IconButton
            icon={colorMode === "light" ? <SunIcon/> : <MoonIcon/>}
            variant='rounded'
            aria-label='Color mode switcher'
            onClick={toggleColorMode}
            />            
            <Button position='relative' variant='primary' w='130px' h='40px' overflow='hidden' 
            _hover={{
              "& :nth-child(2)": {
               bottom:'10px',
               transition: '0.3s ease'
              }, 
              "& :nth-child(1)": {
                top: '-30px',
                transition: '0.3s ease'
               },
            }}>
              <Text position='absolute' top='10px' transition='0.3s ease'>Dashboard</Text>
              <Text position='absolute' bottom='-30px' transition='0.3s ease'>Coming Soon</Text>
            </Button>
        </Stack>
    </Flex>
  )
}

export default Header