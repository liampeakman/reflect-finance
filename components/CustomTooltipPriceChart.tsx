import { Flex } from "@chakra-ui/react"

const CustomTooltipChart = ({ active, payload, label} : any) => {

    if (active && payload && payload.length) {
      
      return (
        <Flex 
        background="#00000010" 
        border='#FFFFFF10 solid 1px'
        backdropFilter='blur(5px)'
        padding={3}
        textTransform='capitalize'
        direction='column'
        >
         <p>{`$${(payload[0].value.toFixed(6))}`}</p>
         <p>{label}</p>
        </Flex>
      )
     }
  
    return null
  }
  
  export default CustomTooltipChart
