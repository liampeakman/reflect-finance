import { Box, Flex, Heading, Image, Stack, Text, Wrap, WrapItem, useColorModeValue } from "@chakra-ui/react"
import { Pie, PieChart, Tooltip, Cell, ResponsiveContainer } from "recharts"
import CustomTooltipHoldings from "./CustomTooltipHoldings";


const HoldingsChart = ({ wallet, walletData, depositData }) => {

    const bg = useColorModeValue('light.background', 'dark.background')
    const border = useColorModeValue('lightBorder', 'darkBorder')

    const newData = walletData.concat(depositData)

    // Tokens in wallet
    const tokenAssets = []
    newData.map((index) => {
        for (let i = 0; i < index[wallet].products.length; i++) {
            const arr = index[wallet].products[i].assets
            tokenAssets.push(...arr) 
        }
    })


    const tokens = []
    tokenAssets.map((index) => {
      tokens.push(index.tokens[0])
    })

    // Sort list of tokens from highest value down    
    tokens.sort((a, b) => parseFloat(b.balanceUSD) - parseFloat(a.balanceUSD))


    let tokenLabels = []
    let tokenUSD = []
    let tokenAmount = []

    tokens.map(item =>{
      tokenLabels.push(item.symbol)
      tokenUSD.push(Number(item.balanceUSD).toFixed(2))
      tokenAmount.push(item.balance)
    })

    const bgColors = [
      'rgba(255, 99, 132, 0.2)',
      'rgba(54, 162, 235, 0.2)',
      'rgba(255, 206, 86, 0.2)',
      'rgba(75, 192, 192, 0.2)',
      'rgba(153, 102, 255, 0.2)',
      'rgba(255, 159, 64, 0.2)',
      'rgba(175, 32, 122, 0.2)',
      'rgba(53, 142, 115, 0.2)',
      'rgba(125, 19, 14, 0.2)',
    ]

    const borderColors = [
      'rgba(255, 99, 132, 1)',
      'rgba(54, 162, 235, 1)',
      'rgba(255, 206, 86, 1)',
      'rgba(75, 192, 192, 1)',
      'rgba(153, 102, 255, 1)',
      'rgba(255, 159, 64, 1)',
      'rgba(175, 32, 122, 1)',
      'rgba(53, 142, 115, 1)',
      'rgba(125, 19, 14, 1)',
    ]

    let customLabels = []
    
    for (let i = 0; i < 6; i++) {
      customLabels.push(
        <Stack direction='row' spacing={2} align='center'>
          <Box w={3} h={3} bg={bgColors[i]} border={'solid 1px ' + borderColors[i]}></Box>
          <Text>{tokenLabels[i]}</Text>
        </Stack>
      );
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
        <Stack direction='column' width='100%' >
            <Heading size='lg'>Distribution</Heading>
              <Stack direction={{base:'column', md:'row'}}  borderRadius='10' justify='center' minW='100px'>
                <Stack justify='center' padding={3} width='100%'
                maxW='280px'  >
                  <ResponsiveContainer height={200} >
                    <PieChart>
                      <Pie data={tokens} dataKey="balanceUSD" nameKey="symbol" innerRadius={'60%'} outerRadius={"90%"} fill="#82ca9d">
                      {tokens.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={bgColors[index % bgColors.length]} stroke={borderColors[index % borderColors.length]} />
                      ))}
                      </Pie>
                      <Tooltip content={<CustomTooltipHoldings />}/>
                    </PieChart>
                    </ResponsiveContainer>
                  </Stack>
                  <Stack justify='center' padding={3} direction={{base:'row', md:'column'}} flexWrap='wrap' maxW='300px'>
                  {customLabels}
                </Stack>
                </Stack> 
            </Stack>   
         </WrapItem>           
    )
}

export default HoldingsChart

