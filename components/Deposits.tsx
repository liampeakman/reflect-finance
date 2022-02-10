import { Button, Heading, Image, Stack, Text, WrapItem, useColorModeValue } from "@chakra-ui/react"
import { HiOutlineExternalLink } from "react-icons/hi";
import HoldingsChart from "./HoldingsChart";

const numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
  

const Deposits = ({ wallet, depositData }) => {

    const bg = useColorModeValue('light.background', 'dark.background')
    const border = useColorModeValue('lightBorder', 'darkBorder')

    // Tokens in wallet
    const tokens = []
    depositData.map((index) => {
        for (let i = 0; i < index[wallet].products.length; i++) {
            let addToken = true
            const arr = index[wallet].products[i].assets
            // Check if > $100 
            for (let i = 0; i < arr.length; i++){
                if (arr[i].balanceUSD < 100){
                    addToken = false
                }
            } 
            if(addToken){
                tokens.push(...arr)
            } 
        }
    })

    // Sort tokens by price
    tokens.sort((a, b) => parseFloat(b.balanceUSD) - parseFloat(a.balanceUSD))


    let holdingsList = []

    for (let i = 0; i < tokens.length; i++) {
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
                    <Image src={tokens[i].tokens[0].tokenImageUrl} w='30px' h='30px' borderRadius={'100px'} ></Image>
                    <Text width={20} textTransform='capitalize' textAlign='left'>{tokens[i].tokens[0].symbol}</Text>
                </Stack>
                <Text textAlign='left' fontFamily='DM Sans' >${numberWithCommas(tokens[i].tokens[0].balanceUSD.toFixed(2))}</Text>
            </Stack>
        )
    }
    

    if (!depositData) return <div>loading...</div>
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
                    <Heading size='lg'>Deposits </Heading>
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

export default Deposits
