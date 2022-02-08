import { Heading, Stack, Text, WrapItem } from "@chakra-ui/react"
import PageLoader from "./PageLoader";

const numberWithCommas = (x) => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const Treasury = ({data}) => {
    

    if(data){

      const avaxTotal = (data.avaxData.wallet.meta[0].value).toFixed(2);
      const ethTotal = (data.ethData.wallet.meta[0].value).toFixed(2);
      const ftmTotal = (data.ftmData.wallet.meta[0].value).toFixed(2);

      const treasuryTotal = (Number(ethTotal) + Number(avaxTotal)  + Number(ftmTotal)).toFixed(0)

      return (
        <WrapItem 
        flexGrow={1} 
        padding={5}  
        backdropFilter='blur(5px)'
        border='#FFFFFF10 solid 2px' 
        background='#00000010'
        >
          <Stack direction='column' width='100%' >
            <Heading size='lg'>Treasury</Heading>
              <Stack direction='column' width='100%' spacing={0} maxW='300px'>
                <Stack direction='column' align='left' justify='space-between' spacing={2} padding={3} >
                    <Text>Balance</Text>
                    <Heading size={'xl'} background='-webkit-linear-gradient(180deg,#eed389, #c96161)' backgroundClip='text' textShadow='0 0 40px rgb(255 255 255 / 20%)' fontFamily='DM Sans !important'>${numberWithCommas(treasuryTotal)}</Heading>
                </Stack>
                <Stack direction='column' align='left' justify='space-between' spacing={2} padding={3} >
                    <Text>Pooled Eth (UniSwap)</Text>
                    <Heading size={'xl'} background='-webkit-linear-gradient(180deg,#eed389, #c96161)' backgroundClip='text' textShadow='0 0 40px rgb(255 255 255 / 20%)' fontFamily='DM Sans !important'>-</Heading>
                </Stack>
              </Stack>
          </Stack>   
        </WrapItem>           
      )
    }


    if(!data){
      return (
        <WrapItem 
        flexGrow={1} 
        padding={5}  
        backdropFilter='blur(5px)'
        border='#FFFFFF10 solid 2px' 
        background='#00000010'
        >
          <Stack direction='column' width='100%' >
            <Heading size='lg'>Treasury</Heading>
              <Stack direction='column' width='100%' spacing={0} maxW='200px'>
                <Stack direction='column' align='left' justify='space-between' spacing={2} padding={3} >
                    <PageLoader size='100px'/>
                </Stack>
                <Stack direction='column' align='left' justify='space-between' spacing={2} padding={3} >
                    <PageLoader size='100px'/>
                </Stack>
              </Stack>
          </Stack>   
        </WrapItem>           
      )
    }

}

export default Treasury

