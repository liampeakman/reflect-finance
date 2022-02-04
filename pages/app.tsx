import {Box, Wrap} from "@chakra-ui/react";
import Head from "next/head";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import SidebarToggle from "../components/SidebarToggle";
import { useControllableState } from "@chakra-ui/react";
import SidebarOverlay from "../components/SidebarOverlay";
import Data from "../components/Data";
import Wallets from "../components/Wallets";
import Reflections from "../components/Reflections";
import Treasury from "../components/Treasury";
import Buybacks from "../components/Buybacks";
import Supply from "../components/Supply";
import Holdings from "../components/Holdings";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useState } from "react";
import useSWR from "swr";
import axios from "axios";

const wallet = '0x76B77F865Ccd14F2Ad4a8CD5c85e19170A1cb50b'
const id = 'refi'



const App = ({coinGeckoData, zapperData}) => {
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
      filter='blur(40px)'
      boxShadow='100px 100px 200px 20px rgba(255, 99, 132), -100px 100px 200px 20px rgba(54, 162, 235), -100px -100px 200px 20px rgba(255, 206, 86), 100px -100px 200px 20px rgba(153, 102, 255)'
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
      boxShadow='100px 100px 300px 40px rgba(255, 99, 132), -100px 100px 300px 40px rgba(54, 162, 235), -100px -100px 300px 40px rgba(255, 206, 86), 100px -100px 300px 40px rgba(153, 102, 255)'
      width='30%'
      zIndex={-1}
      >
      </Box>
      
    </Box>
  )
}
  
export default App

export const getServerSideProps = async (context) => {

  const coinGeckoRes = await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${id}&order=market_cap_desc&per_page=100&page=1&sparkline=false`)
  const coinGeckoData = await coinGeckoRes.json()

  const ethRes = await fetch(`https://api.zapper.fi/v1/protocols/tokens/balances?addresses[0]=${wallet}&network=ethereum&newBalances=true&api_key=96e0cc51-a62e-42ca-acee-910ea7d2a241`)
  const ethRaw = await ethRes.text()
  const ethNew = ethRaw.replace(/0x76b77f865ccd14f2ad4a8cd5c85e19170a1cb50b/, 'wallet' )
  const ethData = await JSON.parse(ethNew)

  const avaxRes = await fetch(`https://api.zapper.fi/v1/protocols/tokens/balances?addresses[0]=0x76B77F865Ccd14F2Ad4a8CD5c85e19170A1cb50b&network=avalanche&newBalances=true&api_key=96e0cc51-a62e-42ca-acee-910ea7d2a241`)
  const avaxRaw = await avaxRes.text()
  const avaxNew =  avaxRaw.replace(/0x76b77f865ccd14f2ad4a8cd5c85e19170a1cb50b/, 'wallet' )
  const avaxData = await JSON.parse(avaxNew)

  const bscRes = await fetch(`https://api.zapper.fi/v1/protocols/tokens/balances?addresses[0]=0x76B77F865Ccd14F2Ad4a8CD5c85e19170A1cb50b&network=binance-smart-chain&newBalances=true&api_key=96e0cc51-a62e-42ca-acee-910ea7d2a241`)
  const bscRaw = await bscRes.text()
  const bscNew = bscRaw.replace(/0x76b77f865ccd14f2ad4a8cd5c85e19170a1cb50b/, 'wallet' )
  const bscData = await JSON.parse(bscNew)


  const zapperData = {avaxData, ethData, bscData}

  return { props: { coinGeckoData, zapperData } }
}
