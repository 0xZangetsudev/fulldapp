'use client'
import { configureChains, createConfig, WagmiConfig } from 'wagmi'

import { ConnectKitProvider, ConnectKitButton, getDefaultConfig } from "connectkit";


const walletConnectProjectId = '89449b784787e27700bdcd1378368686'

export const config = createConfig(
    getDefaultConfig({
        alchemyId: process.env.ALCHEMY_ID, 
        walletConnectProjectId: walletConnectProjectId,
        appName: "fulldapp"
    }
                    ));
