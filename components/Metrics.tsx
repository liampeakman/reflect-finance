import { Box, Stack, Text, Wrap, WrapItem } from "@chakra-ui/react"
import {FaChartBar, FaDollarSign, FaUsers, FaWater} from 'react-icons/fa'
import PageLoader from "./PageLoader"

const Metrics = ({data}) => {

    if (data) {
    const currentPrice = Number(data[0].current_price)
    const currentPricePercent = data[0].price_change_percentage_24h
    const volume = data[0].total_volume

    return (
        <Wrap transition='padding-left 0.6s ease' justify='space-between' width='100%'>
            <WrapItem flexGrow={1} minW='250px' maxW='500px' >
                <Stack direction='row' align='center' spacing={5} padding={3} width='100%' border='#FFFFFF10 solid 2px'backdropFilter='blur(5px)' background='#00000010'>
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
                        <Text fontFamily='DM Sans' color={currentPricePercent.toString().includes('-')? 'red': 'green'}>{currentPricePercent.toString().includes('-')? currentPricePercent : '+' + currentPricePercent}%</Text>
                    </Stack>
                </Stack>
            </WrapItem>
            <WrapItem flexGrow={1}  minW='250px' maxW='500px'>
                <Stack direction='row' align='center' spacing={5} backdropFilter='blur(5px)' border='#FFFFFF10 solid 2px' padding={3} width='100%' background='#00000010'>
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
                        <Text fontFamily='DM Sans' color='green'>+12%</Text>
                    </Stack>
                </Stack>
            </WrapItem>
            <WrapItem flexGrow={1}  minW='250px' maxW='500px'>
                <Stack direction='row' align='center' spacing={5} padding={3} width='100%' backdropFilter='blur(5px)' border='#FFFFFF10 solid 2px' background='#00000010'>
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
                        <Text fontSize='sm'>Liquidity (UniSwap)</Text>
                        <Text fontSize='x-large' fontWeight='600' fontFamily='DM Sans'>$-</Text>
                        <Text fontFamily='DM Sans' color='green'>+3%</Text>
                    </Stack>
                </Stack>
            </WrapItem>
            <WrapItem flexGrow={1}  minW='250px' maxW='500px' transition='all 3s ease'>
                <Stack direction='row' align='center' spacing={5} padding={3} width='100%' border='#FFFFFF10 solid 2px' backdropFilter='blur(5px)' background='#00000010'>
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
                        <Text fontSize='sm'>Holders (Unique)</Text>
                        <Text fontSize='x-large' fontWeight='600' fontFamily='DM Sans'>-</Text>
                        <Text fontFamily='DM Sans' color='green'>+3%</Text>
                    </Stack>
                </Stack>
            </WrapItem>
        </Wrap>
    )
    }
    
    if (!data){
        return(
            <Wrap transition='padding-left 0.6s ease' justify='space-between' width='100%'>
            <WrapItem flexGrow={1} minW='250px' maxW='500px' >
                <Stack direction='row' align='center' spacing={5} padding={3} width='100%' border='#FFFFFF10 solid 2px'backdropFilter='blur(5px)' background='#00000010'>
                <PageLoader size='100px'/>
                </Stack>
            </WrapItem>
            <WrapItem flexGrow={1}  minW='250px' maxW='500px'>
                <Stack direction='row' align='center' spacing={5} backdropFilter='blur(5px)' border='#FFFFFF10 solid 2px' padding={3} width='100%' background='#00000010'>
                    <PageLoader size='100px'/>
                </Stack>
            </WrapItem>
            <WrapItem flexGrow={1}  minW='250px' maxW='500px'>
                <Stack direction='row' align='center' spacing={5} padding={3} width='100%' backdropFilter='blur(5px)' border='#FFFFFF10 solid 2px' background='#00000010'>
                <PageLoader size='100px'/>
                </Stack>
            </WrapItem>
            <WrapItem flexGrow={1}  minW='250px' maxW='500px' transition='all 3s ease'>
                <Stack direction='row' align='center' spacing={5} padding={3} width='100%' border='#FFFFFF10 solid 2px' backdropFilter='blur(5px)' background='#00000010'>
                <PageLoader size='100px'/>
                </Stack>
            </WrapItem>
        </Wrap>
        )
    }
}

export default Metrics

