import { Box, Heading, Image, Stack, Text, Wrap, WrapItem } from "@chakra-ui/react"
import { Chart as ChartJS, ArcElement, Tooltip, Legend, ChartType } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip);


const Holdings = ({ data }) => {

    const assets = [(data.avaxData.wallet.products[0].assets), (data.ethData.wallet.products[0].assets),(data.ftmData.wallet.products[0].assets)]

    // Sort into object
    let objectList = []
    
    assets.map(item =>{
      objectList.push(...item)
    })

    // Pull full list of tokens 
    let tokenList = []

    objectList.map(item =>{
      tokenList.push(item.tokens[0])
    })

    // Sort list of tokens from highest value down    
    tokenList.sort((a, b) => parseFloat(b.balanceUSD) - parseFloat(a.balanceUSD))

    let tokenLabels = []
    let tokenUSD = []
    let tokenAmount = []

    tokenList.map(item =>{
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


    const graphData = {
        labels: tokenLabels,
        datasets: [
          {
            label: 'Holdings',
            data: tokenUSD,
            backgroundColor: bgColors,
            borderColor: borderColors,
            borderWidth: 1,
          },
        ],
    };
    
    if (!data) return <div>loading...</div>
    return (
        <WrapItem 
        flexGrow={1} 
        padding={5}  
        backdropFilter='blur(5px)'
        border='#FFFFFF10 solid 2px' 
        background='#00000010'
        >
        <Stack direction='column' width='100%' >
            <Heading size='lg'>Holdings</Heading>
                <Stack direction={{base:'column', md:'row'}}  borderRadius='10' justify='center' >
                <Stack justify='center' padding={3} maxW='300px'>
                    <Doughnut
                        data={graphData}
                        width={200}
                        height={200}
                        options={{ maintainAspectRatio: false }}
                    />
                    </Stack>
                    <Stack justify='center' padding={3} direction={{base:'row', md:'column'}} flexWrap='wrap' maxW='300px'>
                    {customLabels}
                    </Stack>
                </Stack> 
            </Stack>   
        </WrapItem>           
    )
}

export default Holdings

