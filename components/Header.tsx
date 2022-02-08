import {Flex, Stack, Image, useColorMode, IconButton, Button, Text, Icon} from '@chakra-ui/react'
import ActiveLink from './ActiveLink'
import {SunIcon, MoonIcon, ArrowForwardIcon} from "@chakra-ui/icons"
import { HiOutlineExternalLink } from 'react-icons/hi';
import { FaWallet } from 'react-icons/fa';



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
            <ActiveLink href="/app/dashboard">App</ActiveLink>
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
            variant='circle'
            aria-label='Color mode switcher'
            onClick={toggleColorMode}
            /> 
          
            <Button position='relative' variant='rounded'>
              <FaWallet />
              <Text marginLeft={{md:'10px', base:'0'}} display={{md:'unset', base:'none'}}>Wallet</Text>
            </Button>
        </Stack>
    </Flex>
  )
}

export default Header