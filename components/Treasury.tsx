import { Heading, Stack, Text, WrapItem,useColorModeValue } from "@chakra-ui/react"
import HoldingsChart from "./HoldingsChart";
import PageLoader from "./PageLoader";

const numberWithCommas = (x) => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const Treasury = ({wallet, liquidityData, walletData, depositData}) => {

    const bg = useColorModeValue('light.background', 'dark.background')
    const border = useColorModeValue('lightBorder', 'darkBorder')

      if (depositData && liquidityData && walletData ) {
        const liqudityEth = liquidityData[wallet].products[0].assets[0].tokens[1].balance.toFixed(2)
    
        let walletTotal = 0
        let depositTotal = 0
    
        // Get Token balances of wallets 
        walletData.map((index) => {
            for (const product of index[wallet].products) {
              for (const asset of product.assets) {
                walletTotal += Number(asset.balanceUSD.toFixed(0));
              }
            }
        })

        // Convert string with commas 
        walletTotal = numberWithCommas(walletTotal)
    
        // Get Token balances of deposits 
        depositData.map((index) => {
          for (const product of index[wallet].products) {
            for (const asset of product.assets) {
              depositTotal += Number(asset.balanceUSD.toFixed(0));
            }
          }
        })
        // Convert to string with commas 
        depositTotal = numberWithCommas(depositTotal)

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
      if (!depositData || !liquidityData || !walletData) {
    
        console.log(depositData)
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
                      <PageLoader size={80}/>
                  </Stack>
                  <Stack direction='column' align='left' justify='space-between' spacing={2} padding={3} >
                      <Text>Deposited Balance</Text>
                      <PageLoader size={80}/>
                  </Stack>
                  <Stack direction='column' align='left' justify='space-between' spacing={2} padding={3} >
                      <Text>Pooled ETH (Uniswap)</Text>
                      <PageLoader size={80}/>
                  </Stack>
                </Stack>
              </Stack>
            </Stack>   
          </WrapItem>           
        )
      }
    }
  

export default Treasury

