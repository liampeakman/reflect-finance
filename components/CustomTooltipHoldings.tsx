import { Flex } from "@chakra-ui/react"

const numberWithCommas = (x) => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const CustomTooltipHoldings = ({ active, payload} : any) => {
    if (active && payload && payload.length) {
      return (
        <Flex 
        background="#00000010" 
        border='#FFFFFF10 solid 1px'
        backdropFilter='blur(5px)'
        padding={3}
        textTransform='capitalize'
        >
         <p className="tooltipLabel">{`${payload[0].name} : $${numberWithCommas(payload[0].value.toFixed(2))}`}</p>
        </Flex>
      )
     }
  
    return null
  }
  
  export default CustomTooltipHoldings
