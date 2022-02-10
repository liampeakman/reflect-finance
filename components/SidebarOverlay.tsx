import { ArrowForwardIcon } from '@chakra-ui/icons'
import {Box} from '@chakra-ui/react'
import { useControllableState } from '@chakra-ui/react'

const SidebarOverlay = ({isOpen, onClick}) => {


  return (
    <Box 
      display={{base: isOpen ? 'unset' : 'none', md:'none'}} 
      bg='blackAlpha.300' 
      width='100vw'
      height='100vh' 
      position='absolute' 
      top={0}   
      onClick={onClick}
      zIndex={1}
      >
    </Box>
  )
}

export default SidebarOverlay
 
 



        