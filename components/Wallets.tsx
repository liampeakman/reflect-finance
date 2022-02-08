import { Button, Heading, Image, Stack, Text, WrapItem } from "@chakra-ui/react"
import { HiOutlineExternalLink } from "react-icons/hi";

const numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  

const Wallets = ({ data, wallet}) => {

    const avaxTotal = (data.avaxData.wallet.meta[0].value).toFixed(2);
    const avaxImg ="https://storage.googleapis.com/zapper-fi-assets/tokens/avalanche/0x0000000000000000000000000000000000000000.png"
    const ethTotal = (data.ethData.wallet.meta[0].value).toFixed(2);
    const ethImg = "https://storage.googleapis.com/zapper-fi-assets/tokens/ethereum/0x0000000000000000000000000000000000000000.png"
    const ftmTotal = (data.ftmData.wallet.meta[0].value).toFixed(2);
    const ftmImg ="https://storage.googleapis.com/zapper-fi-assets/tokens/fantom/0x0000000000000000000000000000000000000000.png"


    if (!data) return <div>loading...</div>
    return (
        <WrapItem 
        flexGrow={1} 
        padding={5} 
        backdropFilter='blur(5px)'
        border='#FFFFFF10 solid 2px' 
        background='#00000010'
        >
            <Stack direction='column' spacing={3} width='100%'>
                <Stack direction='row' spacing={0} align='center'>
                    <Heading size='lg'>Wallets</Heading>
                </Stack>
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
                        <Image src={ethImg} w='30px'></Image>
                        <Text display={{base:'none', md:'unset' }} width={20} textAlign='left'>{'Ethereum'}</Text>
                    </Stack>
                    <Text width={20} textAlign='left' fontFamily='DM Sans' >${numberWithCommas(ethTotal)}</Text>
                    <Button 
                    as='a' 
                    rightIcon={<HiOutlineExternalLink/>} 
                    variant='external' 
                    padding={0} 
                    href={"https://etherscan.io/address/" + wallet} target='_blank'
                    >
                        <Text w={20} textAlign='right' display={{base:'none', md:'unset' }}>Etherscan</Text>
                    </Button> 
                </Stack>
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
                        <Image src={avaxImg} w='30px'></Image>
                        <Text display={{base:'none', md:'unset' }} width={20} textAlign='left' >{'Avalanche'}</Text>
                    </Stack>
                    <Text width={20} textAlign='left' fontFamily='DM Sans'>${numberWithCommas(avaxTotal)}</Text>
                    <Button 
                    as='a' 
                    rightIcon={<HiOutlineExternalLink/>} 
                    variant='external' 
                    padding={0} 
                    href={"https://snowtrace.io/address/" + wallet} target='_blank'
                    >
                        <Text w={20} textAlign='right' display={{base:'none', md:'unset' }}>Snowtrace</Text>
                    </Button> 
                </Stack>
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
                        <Image src={ftmImg} w='30px'></Image>
                        <Text display={{base:'none', md:'unset' }} width={20} textAlign='left' >{'Fantom'}</Text>
                    </Stack>
                    <Text width={20} textAlign='left' fontFamily='DM Sans'>${numberWithCommas(ftmTotal)}</Text>
                    <Button 
                    as='a' 
                    rightIcon={<HiOutlineExternalLink/>} 
                    variant='external' 
                    padding={0} 
                    href={"https://ftmscan.com/address/" + wallet} target='_blank'
                    >
                        <Text w={20} textAlign='right' display={{base:'none', md:'unset' }}>Ftmscan</Text>
                    </Button> 
                </Stack>
            </Stack>
        </WrapItem>           
    )
}

export default Wallets

