import { Box, Stack, Text, Wrap, WrapItem,useColorModeValue } from "@chakra-ui/react"
import {FaChartBar, FaDollarSign, FaUsers, FaWater} from 'react-icons/fa'
import PageLoader from "./PageLoader"


const numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const Metrics = ({wallet, liquidityData, tokenData}) => {

    const bg = useColorModeValue('light.background', 'dark.background')
    const border = useColorModeValue('lightBorder', 'darkBorder')
    
    if (liquidityData && tokenData) {
        console.log(tokenData)

        const currentPrice = tokenData.price.rate.toFixed(6)
        const priceDiff = tokenData.price.diff.toFixed(2)
        const volume = numberWithCommas(tokenData.price.volume24h.toFixed(0))
        const volumeDiff = tokenData.price.volDiff1.toFixed(2)
        const liquidity = numberWithCommas(liquidityData[wallet].products[0].assets[0].liquidity.toFixed(0))
        const holders = tokenData.holdersCount

    return (
        <Wrap transition='padding-left 0.6s ease' justify='space-between' width='100%'>
            <WrapItem flexGrow={1} minW='250px' maxW='500px' >
                <Stack 
                direction='row' 
                align='center' 
                spacing={5} 
                padding={3} 
                width='100%' 
                border={border} 
                backdropFilter='blur(5px)' 
                background={bg}>
                    <Box 
                    bg='rgba(255, 99, 132, 0.1)' 
                    padding={3} 
                    borderRadius={10} 
                    color='rgba(255, 99, 132, 1)'
                    boxShadow='0 0 40px rgb(255 99 132 / 10%)'
                    >
                        <FaDollarSign/>
                    </Box>
                    <Stack direction='column' spacing={0.2}>
                        <Text fontSize='sm'>Current Price</Text>
                        <Text fontSize='x-large' fontWeight='600' fontFamily='DM Sans'>${currentPrice}</Text>
                        <Text fontFamily='DM Sans' color={priceDiff.toString().includes('-')? 'red': 'green'}>{priceDiff}%</Text>
                    </Stack>
                </Stack>
            </WrapItem>
            <WrapItem flexGrow={1}  minW='250px' maxW='500px'>
                <Stack 
                direction='row' 
                align='center' 
                spacing={5} 
                padding={3} 
                width='100%' 
                border={border} 
                backdropFilter='blur(5px)' 
                background={bg}>
                    <Box 
                    bg='rgba(54, 162, 235, 0.1)' 
                    padding={3} 
                    borderRadius={10} 
                    color='rgba(54, 162, 235, 1)'
                    boxShadow='0 0 40px rgb(54 162 235 / 10%)'
                    > 
                        <FaChartBar/>
                    </Box>
                    <Stack direction='column' spacing={0.2}>
                        <Text fontSize='sm'>Volume (24hr)</Text>
                        <Text fontSize='x-large' fontWeight='600' fontFamily='DM Sans'>${volume}</Text>
                        <Text fontFamily='DM Sans' color={volumeDiff.toString().includes('-')? 'red': 'green'}>{volumeDiff}%</Text>
                    </Stack>
                </Stack>
            </WrapItem>
            <WrapItem flexGrow={1}  minW='250px' maxW='500px'>
                <Stack 
                direction='row' 
                align='center' 
                spacing={5} 
                padding={3} 
                width='100%' 
                border={border} 
                backdropFilter='blur(5px)' 
                background={bg}>
                     <Box 
                     bg='rgba(255, 159, 64, 0.1)' 
                     padding={3} 
                     borderRadius={10} 
                     color='rgba(255, 159, 64, 1)'
                     boxShadow='0 0 40px rgb(255 159 64 / 10%)'
                     >
                        <FaWater/>
                    </Box>
                    <Stack direction='column' spacing={0.2}>
                        <Text fontSize='sm'>Liquidity (Uniswap)</Text>
                        <Text fontSize='x-large' fontWeight='600' fontFamily='DM Sans'>${liquidity}</Text>
                        <Text fontFamily='DM Sans' color='grey'>REFI/ETH</Text>
                    </Stack>
                </Stack>
            </WrapItem>
            <WrapItem flexGrow={1}  minW='250px' maxW='500px'>
                <Stack 
                direction='row' 
                align='center' 
                spacing={5} 
                padding={3} 
                width='100%' 
                border={border} 
                backdropFilter='blur(5px)' 
                background={bg}>
                     <Box
                     bg='rgba(153, 102, 255, 0.1)' 
                     padding={3} 
                     borderRadius={10} 
                     color='rgba(153, 102, 255, 1)'
                     boxShadow='0 0 40px rgb(153 102 255 / 10%)'
                     >
                        <FaUsers/>
                    </Box>
                    <Stack direction='column' spacing={0.2} >
                        <Text fontSize='sm'>Holders</Text>
                        <Text fontSize='x-large' fontWeight='600' fontFamily='DM Sans'>{holders}</Text>
                        <Text fontFamily='DM Sans' color='grey'>Unique Wallets</Text>
                    </Stack>
                </Stack>
            </WrapItem>
        </Wrap>
    )
    }
    
    if (!liquidityData || !tokenData){

        return(
            <Wrap transition='padding-left 0.6s ease' justify='space-between' width='100%'>
            <WrapItem flexGrow={1} minW='250px' maxW='500px' >
                <Stack 
                direction='row' 
                align='center' 
                spacing={5} 
                padding={3} 
                width='100%' 
                border={border} 
                backdropFilter='blur(5px)' 
                background={bg}>
                    <Box 
                    bg='rgba(255, 99, 132, 0.1)' 
                    padding={3} 
                    borderRadius={10} 
                    color='rgba(255, 99, 132, 1)'
                    boxShadow='0 0 40px rgb(255 99 132 / 10%)'
                    >
                        <FaDollarSign/>
                    </Box>
                    <Stack direction='column' spacing={0.2}>
                        <PageLoader size={80}/>
                    </Stack>
                </Stack>
            </WrapItem>
            <WrapItem flexGrow={1}  minW='250px' maxW='500px'>
                <Stack 
                direction='row' 
                align='center' 
                spacing={5} 
                padding={3} 
                width='100%' 
                border={border} 
                backdropFilter='blur(5px)' 
                background={bg}>
                    <Box 
                    bg='rgba(54, 162, 235, 0.1)' 
                    padding={3} 
                    borderRadius={10} 
                    color='rgba(54, 162, 235, 1)'
                    boxShadow='0 0 40px rgb(54 162 235 / 10%)'
                    > 
                        <FaChartBar/>
                    </Box>
                    <Stack direction='column' spacing={0.2}>
                        <PageLoader size={80}/>
                    </Stack>
                </Stack>
            </WrapItem>
            <WrapItem flexGrow={1}  minW='250px' maxW='500px'>
                <Stack 
                direction='row' 
                align='center' 
                spacing={5} 
                padding={3} 
                width='100%' 
                border={border} 
                backdropFilter='blur(5px)' 
                background={bg}>
                     <Box 
                     bg='rgba(255, 159, 64, 0.1)' 
                     padding={3} 
                     borderRadius={10} 
                     color='rgba(255, 159, 64, 1)'
                     boxShadow='0 0 40px rgb(255 159 64 / 10%)'
                     >
                        <FaWater/>
                    </Box>
                    <Stack direction='column' spacing={0.2}>
                        <PageLoader size={80}/>
                    </Stack>
                </Stack>
            </WrapItem>
            <WrapItem flexGrow={1}  minW='250px' maxW='500px'>
                <Stack 
                direction='row' 
                align='center' 
                spacing={5} 
                padding={3} 
                width='100%' 
                border={border} 
                backdropFilter='blur(5px)' 
                background={bg}>
                     <Box
                     bg='rgba(153, 102, 255, 0.1)' 
                     padding={3} 
                     borderRadius={10} 
                     color='rgba(153, 102, 255, 1)'
                     boxShadow='0 0 40px rgb(153 102 255 / 10%)'
                     >
                        <FaUsers/>
                    </Box>
                    <Stack direction='column' spacing={0.2} >
                        <PageLoader size={80}/>
                    </Stack>
                </Stack>
            </WrapItem>
        </Wrap>
        )
    }
}

export default Metrics

