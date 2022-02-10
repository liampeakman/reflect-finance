import { Heading, Stack, Text, WrapItem,useColorModeValue } from "@chakra-ui/react"
import HoldingsChart from "./HoldingsChart";
import PageLoader from "./PageLoader";

const numberWithCommas = (x) => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const Treasury = ({liquidityData, walletData, depositData}) => {

    const bg = useColorModeValue('light.background', 'dark.background')
    const border = useColorModeValue('lightBorder', 'darkBorder')

    const liqudityEth = liquidityData.wallet.products[0].assets[0].tokens[1].balance.toFixed(2)
    const liqudityEthUsd = numberWithCommas(liquidityData.wallet.products[0].assets[0].tokens[1].balanceUSD.toFixed(0))

    let walletTotal = 0
    let depositTotal = 0

    // Tokens in wallet
    const walletTokens = []
    walletData.map((index) => {
        for (let i = 0; i < index.wallet.products.length; i++) {
            const arr = index.wallet.products[i].assets
            walletTokens.push(...arr) 
        }
    })
    // Get total balance for tokens in wallet
    for (let i = 0; i < walletTokens.length; i++) {
      walletTotal += Number(walletTokens[i].balanceUSD.toFixed(0));
    }
    // Convert string with commas 
    walletTotal = numberWithCommas(walletTotal)

    // Tokens deposited
    const depositTokens = []
    depositData.map((index) => {
        for (let i = 0; i < index.wallet.products.length; i++) {
            const arr = index.wallet.products[i].assets
            depositTokens.push(...arr) 
        }
    })
    // Get total balance for deposited tokens
    for (let i = 0; i < depositTokens.length; i++) {
      depositTotal += Number(depositTokens[i].balanceUSD.toFixed(0));
    }
    // Convert to string with commas 
    depositTotal = numberWithCommas(depositTotal)



    if (!depositData) return <div>loading...</div>
      return (
        <WrapItem 
        flexGrow={1} 
        padding={5}  
        backdropFilter='blur(5px)'
        border={border} 
        background={bg}
        >
          <Stack direction='column' width='100%' >
            <Heading size='lg'>Treasury</Heading>
            <Stack direction={{base:'column', lg:'row'}}>
              <Stack direction='column' width='100%' spacing={0} maxW='300px' >
                <Stack direction='column' align='left' justify='space-between' spacing={2} padding={3} >
                    <Text>Wallet Balance</Text>
                    <Heading size={'xl'} background='-webkit-linear-gradient(180deg,#eed389, #c96161)' backgroundClip='text' textShadow='0 0 40px rgb(255 255 255 / 20%)' fontFamily='DM Sans !important'>${walletTotal}</Heading>
                </Stack>
                <Stack direction='column' align='left' justify='space-between' spacing={2} padding={3} >
                    <Text>Deposited Balance</Text>
                    <Heading size={'xl'} background='-webkit-linear-gradient(180deg,#eed389, #c96161)' backgroundClip='text' textShadow='0 0 40px rgb(255 255 255 / 20%)' fontFamily='DM Sans !important'>${depositTotal}</Heading>
                </Stack>
                <Stack direction='column' align='left' justify='space-between' spacing={2} padding={3} >
                    <Text>Pooled ETH (Uniswap)</Text>
                    <Heading size={'xl'} background='-webkit-linear-gradient(180deg,#eed389, #c96161)' backgroundClip='text' textShadow='0 0 40px rgb(255 255 255 / 20%)' fontFamily='DM Sans !important'>{liqudityEth} ETH</Heading>
                    {/* <Text color='grey'>${liqudityEthUsd} (USD)</Text> */}
                </Stack>
              </Stack>
            </Stack>
          </Stack>   
        </WrapItem>           
      )
    }
  

export default Treasury

