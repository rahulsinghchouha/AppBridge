import { useEffect } from 'react';
import { useAppBridge } from '@shopify/app-bridge-react';
import { Redirect } from '@shopify/app-bridge/actions';


const InstagramAuth = () =>{
    const app = useAppBridge();// Get the App Bridge instance


    useEffect(()=>{
        //define the instagram login

        const redirectUri = `${process.env.APP_URL}/auth/instagram/callback`;  //our app url

        const instagramAuthUrl = `https://api.instagram.com/oauth/authorize?client_id=${process.env.INSTAGRAM_CLIENT_ID}&redirect_uri=${redirectUri}&scope=user_profile,user_media&response_type=code`;

        //create a redirect action using a AppBridge

        const redirect = Redirect.create(app);

        redirect.dispatch(Redirect.Action.REMOTE, instagramAuthUrl);

    },[app]);
    return null; // No UI needed for redirection
}

export default InstagramAuth;