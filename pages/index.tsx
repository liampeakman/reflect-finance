import {Box, Center, Heading, Text, keyframes, Button, usePrefersReducedMotion, Stack, useColorMode, Image} from "@chakra-ui/react";
import Head from "next/head";
import Link from "next/link";
import Header from "../components/Header";

const backgroundChange = keyframes `	
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`


const Index = () => {

  const prefersReducedMotion = usePrefersReducedMotion()
  const { colorMode } = useColorMode();


  const animation = prefersReducedMotion
    ? undefined
    : `${backgroundChange} infinite 3s linear`

  return (
    <Box position='relative' height='100vh'>
      <Head><link href="https://fonts.googleapis.com/css2?family=DM+Sans&display=swap" rel="stylesheet"/>
      <link href="https://use.typekit.net/nmm0wmt.css" rel="stylesheet" />
      </Head>
      <Stack 
        spacing={0} 
        padding={5} 
        height={'auto'} 
        w={'100%'} 
        maxW='70px'
        direction='row'
        left={{base:'12px', md:'62px'}}
        transition={'left 0.3s ease'}
        top='25px'
        align='center'
        position='absolute'
        >
          <Image src={colorMode === 'light' ? '../logo_dark.svg': 
        '../logo_light.svg'}></Image>
          <Text paddingLeft={1} fontWeight={600}>ReflectFi</Text>
        </Stack>
      <Header/>

      <Center padding={10} textAlign={{base:'left', sm:'center'}} height='calc(100% - 200px)' minH='200px'>
        <Stack spacing={5} justify='center' align={{base:'left', sm:'center'}}>
        <Heading as='h1' fontSize={{base:'5xl', md:'6xl'}} lineHeight={{base:'3rem', md:'4rem'}}>
          We <Text fontSize='inherit' display='inline-block' background='-webkit-linear-gradient(180deg,#eed389, #c96161, #3e4eda, #61c980, #871aec)' backgroundSize='400% 400%' backgroundClip='text' textShadow='0 0 40px rgb(255 255 255 / 20%)' animation={animation}>reflect</Text> profits back to you.
        </Heading>
        <Text maxW='50ch' margin='auto' >
          $RFLCT is a deflationary cross-chain FaaS aggregator that combines multiple investments into one easy-to-use protocol. 
        </Text>

        <Stack direction='row'>
        <Link href='app/dashboard'>
          
          <Button position='relative' variant='secondary' w='130px' h='40px'>
                <Text position='absolute' top='10px' transition='0.3s ease'>Dashboard</Text>
          </Button>
        </Link>
            <Button position='relative' variant='secondary' w='130px' h='40px' overflow='hidden' 
            _hover={{
              "& :nth-child(2)": {
               bottom:'10px',
               transition: 'bottom 0.3s ease'
              }, 
              "& :nth-child(1)": {
                top: '-30px',
                transition: 'top 0.3s ease'
               },
            }}>
              <Text position='absolute' top='10px' transition='0.3s ease'>Buy $RFLCT</Text>
              <Text position='absolute' bottom='-30px' transition='0.3s ease'>Coming Soon</Text>
            </Button>
        </Stack>
        </Stack>
      </Center>

      <Box
      position='fixed'
      top={'40%'}
      right={0}
      margin='auto'
      filter='blur(100px)'
      boxShadow='100px 100px 200px 40px rgba(255, 99, 132), -100px 100px 200px 40px rgba(54, 162, 235), -100px -100px 200px 30px rgba(75, 192, 192), 100px -100px 200px 40px rgba(153, 102, 255)'
      width='30%'
      zIndex={-1}
      >
      </Box>
      <Box
      position='fixed'
      bottom={'20%'}
      left={0}
      margin='auto'
      filter='blur(150px)'
      boxShadow='100px 100px 200px 40px rgba(255, 99, 132), -100px 100px 200px 40px rgba(54, 162, 235), -100px -100px 200px 30px rgba(75, 192, 192), 100px -100px 200px 40px rgba(153, 102, 255)'
      width='30%'
      zIndex={-1}
      >
      </Box>
      
    </Box>
  )
}
  
export default Index
