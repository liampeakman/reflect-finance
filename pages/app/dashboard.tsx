import {Box, Wrap} from "@chakra-ui/react";
import Head from "next/head";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import SidebarToggle from "../../components/SidebarToggle";
import { useControllableState } from "@chakra-ui/react";
import SidebarOverlay from "../../components/SidebarOverlay";
import Data from "../../components/Metrics";
import Wallets from "../../components/Wallets";
import Reflections from "../../components/Reflections";
import Treasury from "../../components/Treasury";
import Buybacks from "../../components/Buybacks";
import Supply from "../../components/Supply";
import Holdings from "../../components/Holdings";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useState } from "react";
import useSWR from "swr";
import axios from "axios";

const wallet = '0x4Cb93EB88cFC55F364e9300254003d34c28cAc9D'
const id = 'refi'



const Dashboard = ({coinGeckoData, zapperData}) => {
  const [openSidebar, setOpenSidebar] = useControllableState({ defaultValue: false })
  const toggleSidebar = () =>{
    openSidebar ? setOpenSidebar(false) : setOpenSidebar(true)
  }

  const volume = coinGeckoData.total_volume

  // const [loading, setLoading] = useState(true)

  // console.log('starting')

  // const fetcher = async (url) => await axios.get(url).then((res) => res.data);

  // const { data: coinGeckoData } = useSWR(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${id}&order=market_cap_desc&per_page=100&page=1&sparkline=false`, fetcher) 

  // const { data: ethData } = useSWR(`https://api.zapper.fi/v1/protocols/tokens/balances?addresses[0]=${wallet}&network=ethereum&newBalances=true&api_key=96e0cc51-a62e-42ca-acee-910ea7d2a241`, fetcher) 

  // const { data: avaxData } = useSWR(`https://api.zapper.fi/v1/protocols/tokens/balances?addresses[0]=${wallet}&network=avalanche&newBalances=true&api_key=96e0cc51-a62e-42ca-acee-910ea7d2a241`, fetcher) 
  
  // const { data: bscData } = useSWR(`https://api.zapper.fi/v1/protocols/tokens/balances?addresses[0]=${wallet}&network=binance-smart-chain&newBalances=true&api_key=96e0cc51-a62e-42ca-acee-910ea7d2a241`, fetcher) 


  // const combinedData = {avaxData, ethData, bscData}
  // const combinedDataRaw = JSON.stringify(combinedData)
  // const zapperDataRaw = combinedDataRaw.replace(/0x76b77f865ccd14f2ad4a8cd5c85e19170a1cb50b/g, 'wallet' )
  // const zapperData = JSON.parse(zapperDataRaw)

  // console.log(zapperData)
  
  return (
    <Box position='relative'>
      <Head><link href="https://fonts.googleapis.com/css2?family=DM+Sans&display=swap" rel="stylesheet"/>
      <link href="https://use.typekit.net/nmm0wmt.css" rel="stylesheet" />
      </Head>
      <Header/>
      <SidebarOverlay isOpen={openSidebar} onClick={toggleSidebar}/>
      <SidebarToggle isOpen={openSidebar} onClick={toggleSidebar}/>
      <Sidebar isOpen={openSidebar}/>
      
      <Wrap padding={{base:'0 40px', md:' 0 40px 0 250px'}}transition='padding-left 0.6s ease' justify='space-between' spacing={10} >
        
        <Data data={coinGeckoData}/>
        <Treasury data={zapperData} />
        <Holdings data={zapperData}/>
        <Wallets data={zapperData} wallet={wallet}/>
        <Reflections data={zapperData} volume={volume}/>
        <Buybacks data={zapperData}/>
        <Supply data={zapperData}/>
      </Wrap>
      <Box
      position='fixed'
      top={'40%'}
      right={0}
      margin='auto'
      filter='blur(100px)'
      boxShadow='100px 100px 200px 40px rgba(255, 99, 132), -100px 100px 200px 40px rgba(54, 162, 235), -100px -100px 200px 30px rgba(75, 192, 192), 100px -100px 200px 40px rgba(153, 102, 255)'
      width='30%'
      zIndex={-1}
      >
      </Box>
      <Box
      position='fixed'
      bottom={'20%'}
      left={0}
      margin='auto'
      filter='blur(150px)'
      boxShadow='100px 100px 200px 40px rgba(255, 99, 132), -100px 100px 200px 40px rgba(54, 162, 235), -100px -100px 200px 30px rgba(75, 192, 192), 100px -100px 200px 40px rgba(153, 102, 255)'
      width='30%'
      zIndex={-1}
      >
      </Box>
      
    </Box>
  )
}
  
export default Dashboard

export const getServerSideProps = async (context) => {

  const coinGeckoRes = await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${id}&order=market_cap_desc&per_page=100&page=1&sparkline=false`)
  const coinGeckoData = await coinGeckoRes.json()

  const ethRes = await fetch(`https://api.zapper.fi/v1/protocols/tokens/balances?addresses[0]=${wallet}&network=ethereum&newBalances=true&api_key=96e0cc51-a62e-42ca-acee-910ea7d2a241`)
  const ethRaw = await ethRes.text()
  const ethNew = ethRaw.replace(/0x4cb93eb88cfc55f364e9300254003d34c28cac9d/, 'wallet' )
  const ethData = await JSON.parse(ethNew)

  const avaxRes = await fetch(`https://api.zapper.fi/v1/protocols/tokens/balances?addresses[0]=${wallet}&network=avalanche&newBalances=true&api_key=96e0cc51-a62e-42ca-acee-910ea7d2a241`)
  const avaxRaw = await avaxRes.text()
  const avaxNew =  avaxRaw.replace(/0x4cb93eb88cfc55f364e9300254003d34c28cac9d/, 'wallet' )
  const avaxData = await JSON.parse(avaxNew)

  const ftmRes = await fetch(`https://api.zapper.fi/v1/protocols/tokens/balances?addresses[0]=${wallet}&network=fantom&newBalances=true&api_key=96e0cc51-a62e-42ca-acee-910ea7d2a241`)
  const ftmRaw = await ftmRes.text()
  const ftmNew = ftmRaw.replace(/0x4cb93eb88cfc55f364e9300254003d34c28cac9d/, 'wallet' )
  const ftmData = await JSON.parse(ftmNew)


  const zapperData = {avaxData, ethData, ftmData}

  return { props: { coinGeckoData, zapperData } }
}
