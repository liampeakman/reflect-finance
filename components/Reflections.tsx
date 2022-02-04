import {Heading, Stack, Text, WrapItem } from "@chakra-ui/react"

const numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const Reflections = ({ data, volume }) => {

    const reflectionAmounts = [2000, 2934, 9473, 3993, 5483, 4020, 3982, 8433]
    const totalReflections = reflectionAmounts.reduce((a, b) => a + b, 0)
    const todaysReflections = (volume * 0.1).toFixed(2)
    const currentAPR = (volume * 0.1).toFixed(2)

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
                <Heading size='lg'>Reflections</Heading>
                <Stack spacing={2} direction='column'>
                    <Stack direction='column' spacing={0.2} background="#ffffff05" padding={3}>
                        <Text fontSize='sm'>Reflections (24hrs)</Text>
                        <Text fontSize='x-large' fontWeight='600'>${todaysReflections}</Text>
                    </Stack>
                    <Stack direction='column' spacing={0.2} background="#ffffff05" padding={3}>
                        <Text fontSize='sm'>Reflections (All time)</Text>
                        <Text fontSize='x-large' fontWeight='600'>${numberWithCommas(totalReflections)}</Text>
                    </Stack>
                    <Stack direction='column' spacing={0.2} background="#ffffff05" padding={3}>
                        <Text fontSize='sm'>Current APR</Text>
                        <Text fontSize='x-large' fontWeight='600'>203%</Text>
                    </Stack>
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
        </WrapItem>        
    )
}

export default Reflections

