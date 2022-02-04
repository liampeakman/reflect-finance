import {Heading, Stack, Text, WrapItem } from "@chakra-ui/react"


const numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const Buybacks = ({ data }) => {

    const buybackAmounts = [2000, 2934, 9473, 3993, 5483, 4020, 3982, 8433]
    const totalBuybacks = buybackAmounts.length
    const totalAmount = buybackAmounts.reduce((a, b) => a + b, 0)
    const averageAmount = totalAmount / totalBuybacks

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
                <Heading size='lg'>Buybacks</Heading>
                <Stack spacing={2} direction='column'>
                    <Stack direction='column' spacing={0.2} background="#ffffff05" padding={3}>
                        <Text fontSize='sm'>Total Buybacks</Text>
                        <Text fontSize='x-large' fontWeight='600'>{totalBuybacks}</Text>
                    </Stack>
                    <Stack direction='column' spacing={0.2} background="#ffffff05" padding={3}>
                        <Text fontSize='sm'>Total Amount</Text>
                        <Text fontSize='x-large' fontWeight='600'>${numberWithCommas(totalAmount)}</Text>
                    </Stack>
                    <Stack direction='column' spacing={0.2} background="#ffffff05" padding={3}>
                        <Text fontSize='sm'>Average Amount</Text>
                        <Text fontSize='x-large' fontWeight='600'>${averageAmount}</Text>
                    </Stack>
                    <Stack background="#ffffff05" padding={3}>
                    <Stack direction='row' align='center' justify='space-between' spacing={10} borderRadius='10'  width='100%' >
                        <Text>20/16</Text>
                        <Text color='green'>+24 ETH</Text>
                        <Text fontSize='sm'>Tx</Text>
                    </Stack>
                    <Stack direction='row' align='center' justify='space-between' spacing={10} borderRadius='10'  width='100%'>
                        <Text>20/16</Text>
                        <Text color='green'>+24 ETH</Text>
                        <Text fontSize='sm'>Tx</Text>
                    </Stack>
                    <Stack direction='row' align='center' justify='space-between' spacing={10} borderRadius='10'  width='100%'>
                        <Text>20/16</Text>
                        <Text color='green'>+24 ETH</Text>
                        <Text fontSize='sm'>Tx</Text>
                    </Stack>
                    <Stack direction='row' align='center' justify='space-between' spacing={10} borderRadius='10'  width='100%'>
                        <Text>20/16</Text>
                        <Text color='green'>+24 ETH</Text>
                        <Text fontSize='sm'>Tx</Text>
                    </Stack>
                </Stack>
                </Stack>
                
            </Stack>
        </WrapItem>        
    )
}

export default Buybacks

