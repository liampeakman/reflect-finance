import { useRouter } from 'next/router'
import { Link } from '@chakra-ui/react'
import { Button } from '@chakra-ui/react'

const ActiveDashLink = ({ children, href, icon }) => {
  const router = useRouter()

  const handleClick = (e) => {
    e.preventDefault()
    router.push(href)
  }

  return (
    <Button leftIcon={icon} variant={router.asPath === href ? 'activeDash' : 'defaultDash'}>
        <Link href={href} onClick={handleClick}>
            {children}
        </Link>
    </Button>
  )
}

export default ActiveDashLink