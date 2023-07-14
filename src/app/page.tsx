'use client'
import { WagmiConfig } from 'wagmi'
import { config } from '../wagmi';
import { ConnectKitButton, ConnectKitProvider } from 'connectkit';
import Navbar from '../components/Navbar';
import PageContent from '../components/PageContent';
import Footer from '../components/Footer';
import './page.css';    
import { Example } from '../components/SendWithViem';

export function Page() {
  return (
    <div className="container">
    <Navbar />  
      <h1 className="centered">wagmi + Next.js + Foundry</h1>
      <WagmiConfig config={config}>
      <ConnectKitProvider>
      <div className='page-content'>
        <ConnectKitButton />
        <PageContent />
        <Example />
      </div>
      </ConnectKitProvider>
      </WagmiConfig>
    <Footer />

    </div>
  )
}

export default Page
