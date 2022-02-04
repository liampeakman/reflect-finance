import { Button, Heading, Image, Stack, Text, WrapItem } from "@chakra-ui/react"
import { HiOutlineExternalLink } from "react-icons/hi";

const Wallets = ({ data, wallet}) => {

    const avaxTotal = (data.avaxData.wallet.meta[0].value).toFixed(2);
    const avaxImg =(data.avaxData.wallet.products[0].assets[0].tokens[0].img)
    const ethTotal = (data.ethData.wallet.meta[0].value).toFixed(2);
    const ethImg = (data.ethData.wallet.products[0].assets[0].tokens[0].tokenImageUrl)
    const bscTotal = (data.bscData.wallet.meta[0].value).toFixed(2);
    const bscImg =(data.bscData.wallet.products[0].assets[0].tokens[0].tokenImageUrl)


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
                    <Text width={20} textAlign='left' >${ethTotal}</Text>
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
                    <Text width={20} textAlign='left'>${avaxTotal}</Text>
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
                        <Image src={bscImg} w='30px'></Image>
                        <Text display={{base:'none', md:'unset' }} width={20} textAlign='left' >{'Binance'}</Text>
                    </Stack>
                    <Text width={20} textAlign='left'>${bscTotal}</Text>
                    <Button 
                    as='a' 
                    rightIcon={<HiOutlineExternalLink/>} 
                    variant='external' 
                    padding={0} 
                    href={"https://bscscan.com/address/" + wallet} target='_blank'
                    >
                        <Text w={20} textAlign='right' display={{base:'none', md:'unset' }}>Bscscan</Text>
                    </Button> 
                </Stack>
            </Stack>
        </WrapItem>           
    )
}

export default Wallets

