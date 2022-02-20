import {  Heading, Image, Stack, Text, WrapItem, useColorModeValue } from "@chakra-ui/react"

const numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const Holdings = ({ wallet, walletData}) => {

    const bg = useColorModeValue('light.background', 'dark.background')
    const border = useColorModeValue('lightBorder', 'darkBorder')

    // Tokens in wallet
    const tokens = []
    walletData.map((index) => {
      const arr = index[wallet].products[0].assets
      for (const item of arr){
          // Only show values over $100
          item.balanceUSD < 100 || tokens.push(item)
      }
    })

    // Sort tokens by price
    tokens.sort((a, b) => parseFloat(b.balanceUSD) - parseFloat(a.balanceUSD))

    let holdingsList = []

    for (const token of tokens) {
        holdingsList.push(
            <Stack 
            direction='row' 
            align='center' 
            justify='space-between' 
            padding={3} 
            margin='0 !important'
            width='100%'
            transition='background 0.6s ease'
            css={{
                ":nth-child(2n)" : {
                    background:'#ffffff05'
                }
            }}
            >
                <Stack direction='row' align='center'>
                    <Image src={token.tokens[0].tokenImageUrl} w='30px' h='30px' borderRadius={'100px'} ></Image>
                    <Text width={20} textTransform='capitalize' textAlign='left'>{token.tokens[0].symbol}</Text>
                </Stack>
                <Text textAlign='left' fontFamily='DM Sans' >${numberWithCommas(token.tokens[0].balanceUSD.toFixed(2))}</Text>
            </Stack>
        )
    }
    

    if (!walletData) return <div>loading...</div>
    return (
        <WrapItem 
        flexGrow={1} 
        padding={5}
        backdropFilter='blur(5px)'
        border={border}
        background={bg}
        >
            <Stack 
            direction='column' 
            width='100%' 
            
            > 
                <Stack direction='row' spacing={0} align='center' paddingBottom={3}>
                    <Heading size='lg'>Holdings </Heading>
                </Stack>
                <Stack
                maxHeight='300px'     
                overflowY='scroll'
                css={{
            
                    '&::-webkit-scrollbar': {
                      borderRadius: "10px",
                      backgroundClip:'padding-box',
                      border:'2px solid #ffffff10',
                      width: "2px", 
                      opacity: '20%'
                    },
                    '&::-webkit-scrollbar-track': {
                      // backgroundColor: "transparent",
                      borderRadius: "10px",
                      backgroundClip:'padding-box',
                      opacity: '20%'
                    },
                    '&::-webkit-scrollbar-thumb': {
                      // backgroundColor: "#5145BA",
                      // borderRadius: "10px",
                      boxShadow: 'inset 0 0 0 10px',
                      opacity: '20%'
                    }
                  }}
                  transition='color .3s ease, transform .6s ease, fill 1.5s ease'
                  fill='rgba(255, 255, 255, 1)'
                  _hover={{
                    fill: 'rgba(109, 127, 163, 0.5)' 
                  }}
                  >
                    {holdingsList}
                </Stack>
                
            </Stack>
        </WrapItem>           
    )
}

export default Holdings

