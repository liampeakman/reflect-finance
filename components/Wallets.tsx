import { Button, Heading, Image, Stack, Text, WrapItem, useColorModeValue } from "@chakra-ui/react"
import { HiOutlineExternalLink } from "react-icons/hi";

const numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
  

const Wallets = ({ data, wallet, holdings}) => {

    const bg = useColorModeValue('light.background', 'dark.background')
    const border = useColorModeValue('lightBorder', 'darkBorder')

    const wallets = holdings[0].wallet

    // Wallet Totals 
    const totals = []
      data.map((index) => {
        totals.push(Number(index.wallet.meta[0].value.toFixed(2))) 
    })

    let walletList = []
    for (let i = 0; i < wallets.length; i++) {
        walletList.push(
            <Stack 
            direction='row' 
            align='center' 
            justify='space-between' 
            padding={3} 
            width='100%'
            transition='background 0.6s ease'
            _hover={{background:'#FFFFFF10', transition:'background 0.6s ease'}}
            >
                <Stack direction='row' align='center'>
                    <Image src={`https://storage.googleapis.com/zapper-fi-assets/tokens/${wallets[i].network}/0x0000000000000000000000000000000000000000.png`} w='30px'></Image>
                    <Text display={{base:'none', md:'unset' }} width={20} textTransform='capitalize' textAlign='left'>{wallets[i].network}</Text>
                </Stack>
                <Text width={'150px'} textAlign='left' fontFamily='DM Sans' >${numberWithCommas(totals[i])}</Text>
                <Button 
                as='a' 
                rightIcon={<HiOutlineExternalLink/>} 
                variant='external' 
                padding={0} 
                href={"https://" + wallets[i].scan + "/address/" + wallet} target='_blank'
                >
                    {/* <Text w={20} textAlign='right' display={{base:'none', md:'unset' }}></Text> */}
                </Button> 
            </Stack>
        )
    }


    if (!data) return <div>loading...</div>
    return (
        <WrapItem 
        flexGrow={1} 
        padding={5} 
        backdropFilter='blur(5px)'
        border={border}
        background={bg}
        >
            <Stack direction='column' spacing={3} width='100%'>
                <Stack direction='row' spacing={0} align='center'>
                    <Heading size='lg'>Wallets</Heading>
                </Stack>
                {walletList}
            </Stack>
        </WrapItem>           
    )
}

export default Wallets

