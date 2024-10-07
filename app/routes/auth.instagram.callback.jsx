import { useEffect } from "react";

import axios from "axios";


const InstagramCallback = () => {

    useEffect(() => {

        const fetchAccessToken = async () => {
            const urlParams = new URLSearchParams(window.location.search);

            const code = urlParams.get('code');

            //exchange the code for an access token

            const response = await axios.post(`https://api.instagram.com/oauth/access_token`, {

                client_id: process.env.INSTAGRAM_CLIENT_ID,
                client_secret: process.env.INSTAGRAM_CLIENT_SECRET,
                grant_type: 'authorization_code',
                redirect_uri: `${process.env.APP_URL}/auth/instagram/callback`,
                code,
            });

            //you can now store the access token securely

            const accessToken = response.data.access_token;

            console.log('Instagram Access Token:', accessToken);


            //redirect back to your app
            window.location.href = '/'; // change to your desired route


        }
        fetchAccessToken();

    },[])

    return <div>Loading...</div>; // Show loading indicator while processing
}

export default InstagramCallback;
