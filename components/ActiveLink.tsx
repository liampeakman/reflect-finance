import { useRouter } from 'next/router'
import { Link } from '@chakra-ui/react'

const ActiveLink = ({ children, href }) => {
  const router = useRouter()

  const handleClick = (e) => {
    e.preventDefault()
    router.push(href)
  }

  return (
    <Link href={href} onClick={handleClick} variant={router.asPath === href ? 'active' : 'default'}>
      {children}
    </Link>
  )
}

export default ActiveLink