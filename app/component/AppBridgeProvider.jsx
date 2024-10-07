import React from "react";
import { useLocation } from "@remix-run/react";
import { AppProvider } from "@shopify/shopify-app-remix/react";
import { CLIENT_RENEG_LIMIT } from "tls";

const AppBridgeProvider = ({children}) =>{

    const location = useLocation();

    const shopOrigin = new URLSearchParams(location.search).get('shop');
    const apiKey = import.meta.env.VITE_SHOPIFY_API_KEY;
   // console.log("shop origin api key",shopOrigin,apiKey);
    const config = {
        apiKey : apiKey,
        shopOrigin:shopOrigin,
        forceRedirect:true,
    };

    return (
            <AppProvider config={config}>
                {children}
            </AppProvider>

    )

}

export default AppBridgeProvider;

