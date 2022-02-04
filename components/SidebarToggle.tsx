import { ArrowForwardIcon } from '@chakra-ui/icons'
import {Stack, IconButton} from '@chakra-ui/react'
import { useControllableState } from '@chakra-ui/react'

const SidebarToggle = ({onClick, isOpen}) => {


  return (
    <Stack 
      display={{base:'unset', md:'none'}} 
      justifyContent='flex-start'
      zIndex='99'
      padding={4}
      position='absolute'
      top={"25px"}
      left={isOpen ? '190px' : '0'}
      transition='left 0.6s ease, transform 0.6s ease'
      transform={isOpen ? 'rotate(180deg)' : '0'}
      >
        <IconButton
        icon={<ArrowForwardIcon/>}
        variant='rounded'
        aria-label='Toggle Drawer'    
        onClick={onClick}
        zIndex='99'  
        />
    </Stack>
  )
}

export default SidebarToggle
 
 



        