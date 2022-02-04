import {Heading, Stack, Text, WrapItem } from "@chakra-ui/react"
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale,BarElement} from 'chart.js';

ChartJS.register(ArcElement, Tooltip, CategoryScale, LinearScale, BarElement);



const Supply = ({ data }) => {

    const dataGraph = {
    labels: ['Circulating', 'Burned'],
    datasets: [{
        label: ['%'],
        data: [75, 25],
        backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
        'rgb(255, 99, 132)',
        'rgb(255, 159, 64)'
        ],
        borderWidth: 1
    }]
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
            <Stack direction='column' spacing={3} width='100%'>
                <Heading size='lg'>Supply</Heading>
                <Stack spacing={2} direction='column'>
                    <Stack direction='column' spacing={0.2} background="#ffffff05" padding={3}>
                        <Text fontSize='sm'>Total Buybacks</Text>
                        <Text fontSize='x-large' fontWeight='600'></Text>
                    </Stack>
                    {/* <Stack>
                        <Bar 
                        data={dataGraph}
                        width={200}
                        height={200}
                       
                        
                        />
                    </Stack> */}

                </Stack>
            </Stack>
        </WrapItem>        
    )
}

export default Supply

