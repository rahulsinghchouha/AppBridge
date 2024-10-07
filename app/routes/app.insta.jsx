import React, { useEffect, useState } from "react";
import { redirect, useFetcher, useLoaderData } from "@remix-run/react";
import { Card, Page, Text, Form, FormLayout, TextField, Button } from "@shopify/polaris";
//import prisma from "../db.server";
import { json } from "@remix-run/react";

export const action = async ({ request }) => {
    try {
        const formData = await request.formData();
        const name = formData.get("name");
        const email = formData.get("email");

            console.log("name email",name,email);

        // await prisma.user.create({
        //     data: {
        //         name: name,
        //         email: email
        //     }
        // })
        
         
        return json({ success: true, message: "user added succesfully" });
    }
    catch (error) {
        console.log("Error in data submitting", error);

        return json({success: false, message: "user not added please try again"})
    }


}



export default function AppBridge() {

    const fetcher = useFetcher();

    const [name, setName] = useState('');

    const [email, setEmail] = useState('');

   
    return (

        <Page
            title="Go To Instagram"
        >
            <Card>
                This is the page where will rediret to the instagram for check our cookies and session management
            </Card>



            <fetcher.Form method="post">

                <FormLayout>
                    <TextField label="Name : " type="text" name="name" autoComplete="off" value={name} onChange={setName} />

                    <TextField label="Email : " type="email" name="email" autoComplete="off" value={email} onChange={setEmail} />

                    <Button submit loading={fetcher.state === "submitting"} disabled={!name || !email}>submit</Button>
                </FormLayout>


            </fetcher.Form>


        </Page>





    )


}

