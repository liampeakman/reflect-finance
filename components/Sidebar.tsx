import {Stack, Image, useColorMode,useColorModeValue, Button, Link, IconButton, Icon, Divider, Text, Heading} from '@chakra-ui/react'
import {FaSlidersH, FaBalanceScaleLeft, FaCompressArrowsAlt, FaCalculator, FaUserAlt, FaTelegram, FaTwitter, FaDiscord} from 'react-icons/fa'
import {AiFillFire} from 'react-icons/ai'
import {HiOutlineExternalLink} from 'react-icons/hi'
import ActiveDashLink from './ActiveDashLink'
import ActiveLink from './ActiveLink'

const Sidebar = ({isOpen}) => {

const { colorMode } = useColorMode();

  const bg = useColorModeValue('light.background', 'dark.background')
  const border = useColorModeValue('lightBorder', 'darkBorder')


  return (
    <Stack 
      transform={{base:isOpen ? 'translateX(0%)':'translateX(-100%)', md:'translateX(0%)'}}
      background={bg}
      backdropFilter='blur(7px)'
      border={border}
      zIndex='5'
      direction='column' 
      top={0} 
      bottom={0} 
      overflowY='scroll' 
      alignItems='center' 
      spacing={5} 
      pos='fixed' 
      w='225px'
      paddingLeft='8px'
      css={{
        
        '&::-webkit-scrollbar': {
          borderRadius: "10px",
          backgroundClip:'padding-box',
          border:'10px solid transparent',
          width: "8px", 
        },
        '&::-webkit-scrollbar-track': {
          // backgroundColor: "transparent",
          borderRadius: "10px",
          backgroundClip:'padding-box',
          border:'10px solid transparent',
          width: "8px", 
        },
        '&::-webkit-scrollbar-thumb': {
          // backgroundColor: "#5145BA",
          // borderRadius: "10px",
          boxShadow: 'inset 0 0 0 10px'
        }
      }}
      transition='color .3s ease, transform .6s ease, fill 1.5s ease'
      fill='rgba(255, 255, 255, 1)'
      color='rgba(0,0,0,0)'
      _hover={{
        color: 'rgba(255,255,255,0.3)',
        fill: 'rgba(109, 127, 163, 0.5)' 
      }}
      >
        <Stack 
        spacing={0} 
        padding={5} 
        height={'auto'} 
        w={'100%'} 
        maxW='100px'
        marginTop='18px'
        >
          <Link href='/'>
            <Image src={colorMode === 'light' ? '../logo_dark.svg': 
        '../logo_light.svg'}></Image>
          </Link>

        </Stack>
        <Stack width='100%' spacing={3}>
          <ActiveDashLink href='/app/dashboard' icon={<FaSlidersH />}>
            Dashboard
          </ActiveDashLink>
          <ActiveDashLink href='' icon={<FaBalanceScaleLeft />}>
            Treasury
          </ActiveDashLink>
          <ActiveDashLink href='' icon={<FaCompressArrowsAlt />}>
            Buybacks
          </ActiveDashLink>
          <ActiveDashLink href='' icon={<AiFillFire />}>
            Burns
          </ActiveDashLink>
          <ActiveDashLink href='' icon={<FaUserAlt />}>
            Profile
          </ActiveDashLink>
          <ActiveDashLink href='' icon={<FaCalculator />}>
            Calculator
          </ActiveDashLink>
        </Stack>
        <Divider w='80%'/>
        <Stack width='100%' spacing={1}>
          <Button as='a' rightIcon={<HiOutlineExternalLink/>} variant='external' href="https://traderjoexyz.com/" target='_blank'>
             Buy
          </Button>
          <Button as='a' rightIcon={<HiOutlineExternalLink/>} variant='external' href="https://traderjoexyz.com/" target='_blank'>
             Docs
          </Button>
          <Button as='a' rightIcon={<HiOutlineExternalLink/>} variant='external' href="https://traderjoexyz.com/" target='_blank'>
             Contract
          </Button> 
        </Stack>
        <Divider w='80%'/>
        <Stack w='100%' justify='center' direction='row' spacing={3} color='white'>
            <Link href='/' target="_blank">
              <Icon aria-label='Twitter' as={FaTwitter} />
            </Link>
            <Link href='/' target="_blank">
              <Icon aria-label='Telegram' as={FaTelegram} />
            </Link>
            <Link href='/' target="_blank">
              <Icon aria-label='Discord' as={FaDiscord} />
            </Link>
          </Stack>
      </Stack>
  )
}

export default Sidebar