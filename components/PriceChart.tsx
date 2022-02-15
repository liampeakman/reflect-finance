import { Box, Button, ButtonGroup, Heading, Image, Stack, Text, Wrap, WrapItem, useColorModeValue } from "@chakra-ui/react"
import { AreaChart, XAxis, YAxis, Area, Tooltip ,ResponsiveContainer } from "recharts";
import CustomTooltipChart from "./CustomTooltipPriceChart";
import { useState } from "react";
import PageLoader from "./PageLoader";

const PriceChart = ({ data }) => {
    
    const bg = useColorModeValue('light.background', 'dark.background')
    const border = useColorModeValue('lightBorder', 'darkBorder')

    if (data) {
        const [priceChartLength, setPriceChartLength] = useState(-30)

        const graphData = data.data.prices[0].prices.slice(priceChartLength)
    
        // Change date format 
        for (let i = 0; i < graphData.length; i++) {
            const newDate = new Date(graphData[i].date).toDateString().toString().replace(/^\S+\s/,'')
            graphData[i].date = newDate
        }
        return (
            <WrapItem 
            flexGrow={1} 
            padding={5}  
            backdropFilter='blur(5px)'
            border={border}
            background={bg}
            >
            <Stack direction='column' width='100%' position='relative'>
                <Heading size='lg'>Price</Heading>

                <Stack position='absolute' right={0} top={0}>
                    <ButtonGroup variant='rounded'>
                        <Button 
                        background={priceChartLength === -7 ? '#8884d82f' : 'none'} 
                        _hover={{
                            background:  priceChartLength === -7 ? '#8884d82f' : 'none'} 
                        } 
                        padding='0'
                        fontSize='12px'
                        height='30px'
                        onClick={()=>setPriceChartLength(-7)}>7</Button>
                        <Button 
                        background={priceChartLength === -30 ? '#8884d82f' : 'none'} 
                        _hover={{
                            background:  priceChartLength === -30 ? '#8884d82f' : 'none'} 
                        } 
                        padding='0'
                        fontSize='12px'
                        height='30px'
                        onClick={()=>setPriceChartLength(-30)}>30</Button>
                        <Button 
                        background={priceChartLength === -100 ? '#8884d82f' : 'none'} 
                        _hover={{
                            background:  priceChartLength === -100 ? '#8884d82f' : 'none'} 
                        } 
                        padding='0'
                        fontSize='12px'
                        height='30px'
                        onClick={()=>setPriceChartLength(-100)}>All</Button>

                    </ButtonGroup>
                </Stack>
                    <Stack direction={{base:'column', md:'row'}}  borderRadius='10' justify='center' >
                    <Stack justify='center' padding={3}  height='300px' width='100%' minWidth='200px' position='relative' 
                    _ccs={{
                        div : {
                            transitionDuration:'0s !important'
                        }
                    }}>
                        <ResponsiveContainer width='99%' >
                            <AreaChart data={graphData}
                                margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                                <defs>
                                    <linearGradient id="colorPrice" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
                                    <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
                                    </linearGradient>
                                </defs>
                                <XAxis dataKey={'date'}
                                
                                dy={5}
                                minTickGap={100}
                                />
                                <YAxis 
                                dataKey="price"  
                                />
                                
                                <Tooltip content={<CustomTooltipChart/>}/>
                                <Area type="monotone" dataKey="price" stroke="#8884d8" fillOpacity={1} fill="url(#colorPrice)" />
                            </AreaChart>
                        </ResponsiveContainer>
                        </Stack>
                    </Stack> 
                </Stack>   
            </WrapItem>           
        )
    }
    
    if (!data) {
        return (
            <WrapItem 
            flexGrow={1} 
            padding={5}  
            backdropFilter='blur(5px)'
            border={border}
            background={bg}
            >
                <Stack direction='column' width='100%' position='relative'>
                    <Heading size='lg'>Price</Heading>
                    <PageLoader size={250}/>
                </Stack>   
            </WrapItem>           
        )
    }
}

export default PriceChart
