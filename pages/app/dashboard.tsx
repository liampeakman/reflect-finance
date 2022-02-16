import {Box, Wrap} from "@chakra-ui/react";
import Head from "next/head";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import SidebarToggle from "../../components/SidebarToggle";
import { useControllableState } from "@chakra-ui/react";
import SidebarOverlay from "../../components/SidebarOverlay";
import Metrics from "../../components/Metrics";
import Wallets from "../../components/Wallets";
import Reflections from "../../components/Reflections";
import Treasury from "../../components/Treasury";
import Buybacks from "../../components/Buybacks";
import Supply from "../../components/Supply";
import PriceChart from "../../components/PriceChart";
import HoldingsChart from "../../components/HoldingsChart";
import Holdings from "../../components/Holdings";
import Deposits from "../../components/Deposits";
import { useEffect } from "react";
import useSWR from 'swr';


const wallet = '0x4cb93eb88cfc55f364e9300254003d34c28cac9d'
const  holdings = [
  {
    wallet:
    [
      {
        network: 'ethereum',
        appID:'tokens',
        scan:'etherscan.io'
      },
      {
        network: 'avalanche',
        appID:'tokens',
        scan:'snowtrace.io'
      },
      {
        network: 'fantom',
        appID:'tokens',
        scan:'ftmscan.com'
      }
    ] 
  },
  {
    deposits:
    [
      {
        network:'ethereum',
        appID: 'convex'
      },
      {
        network:'fantom',
        appID: 'beefy'
      },
      {
        network:'fantom',
        appID: 'hundred-finance'
      },
      {
        network:'fantom',
        appID: 'liquiddriver'
      },
      {
        network:'fantom',
        appID: 'reaper'
      }
    ] 
  }
]

async function fetchAll(arr) {
  const json = await Promise.all(arr.map(async i => {
    const res = await fetch(`https://api.zapper.fi/v1/protocols/${i.appID}/balances?addresses[0]=${wallet}&network=${i.network}&newBalances=true&api_key=96e0cc51-a62e-42ca-acee-910ea7d2a241`)
    return res.json()
  }))

  return json
}

async function fetcher(url) {
  const res = await fetch(url);
  const json = await res.json();
  return json;
}

const Dashboard = ({ walletData, depositData } ) => {

  const [openSidebar, setOpenSidebar] = useControllableState({ defaultValue: false })
  const toggleSidebar = () =>{
    openSidebar ? setOpenSidebar(false) : setOpenSidebar(true)
  }

  const { data: tokenData, error: tokenError } = useSWR(`https://api.ethplorer.io/getTokenInfo/0xA808B22ffd2c472aD1278088F16D4010E6a54D5F?apiKey=EK-3qKHS-yrezwSu-GmGh3`, fetcher)

  const { data: priceHistoryData, error: priceHistoryError } = useSWR(`https://api.covalenthq.com/v1/pricing/historical_by_addresses_v2/1/USD/0xA808B22ffd2c472aD1278088F16D4010E6a54D5F/?quote-currency=USD&format=JSON&from=2021-01-08&to=2023-02-09&page-size=10&page-number=0&prices-at-asc=true&key=ckey_d85e9446901d4e82b6f66b7d183`, fetcher)

  const { data: liquidityData, error: liquidityError } = useSWR(  `https://api.zapper.fi/v1/protocols/uniswap-v2/balances?addresses%5B%5D=${wallet}&network=ethereum&api_key=96e0cc51-a62e-42ca-acee-910ea7d2a241`, fetcher)

  // const { data: walletData, error: walletError } = useSWR( holdings[0].wallet, fetchAll)

  // const { data: depositData, error: depositError } = useSWR( holdings[1].deposits, fetchAll)

  
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
        
        <Metrics wallet={wallet} tokenData={tokenData} liquidityData={liquidityData}/>   
        <Treasury wallet={wallet} liquidityData={liquidityData} walletData={walletData} depositData={depositData} />
        
        <Holdings wallet={wallet} walletData={walletData}/>
        <Deposits wallet={wallet} depositData={depositData} />
        <HoldingsChart wallet={wallet} walletData={walletData} depositData={depositData} />
        <Wallets wallet={wallet} walletData={walletData} holdings={holdings}/>
        {/* <Reflections data={walletData} volume={volume}/> 
        <Buybacks data={walletData}/>
        <Supply data={walletData}/> */}
        <PriceChart data={priceHistoryData}/>
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

  // const tokenRes = await fetch(`https://api.ethplorer.io/getTokenInfo/0xA808B22ffd2c472aD1278088F16D4010E6a54D5F?apiKey=freekey`)
  // const tokenData = await tokenRes.json()

  const walletData= await fetchAll(holdings[0].wallet)
  
  const depositData = await fetchAll(holdings[1].deposits)

  // const priceHistoryRes = await fetch ('https://api.covalenthq.com/v1/pricing/historical_by_addresses_v2/1/USD/0xA808B22ffd2c472aD1278088F16D4010E6a54D5F/?quote-currency=USD&format=JSON&from=2021-01-08&to=2023-02-09&page-size=10&page-number=0&prices-at-asc=true&key=ckey_d85e9446901d4e82b6f66b7d183')
  // const priceHistoryData = await priceHistoryRes.json()

  // const liquidityRes = await fetch (`https://api.zapper.fi/v1/protocols/uniswap-v2/balances?addresses%5B%5D=${wallet}&network=ethereum&api_key=96e0cc51-a62e-42ca-acee-910ea7d2a241`)
  // const liquidityRaw = await liquidityRes.text()
  // const liquidityNew =  liquidityRaw.replace(/0x4cb93eb88cfc55f364e9300254003d34c28cac9d/, 'wallet' )
  // const liquidityData = await JSON.parse(liquidityNew)


  return { props: { walletData, depositData } }
}
