import React from 'react'
import {Metadata} from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import '@/styles/globals.css'

export const metadata = {
    title: 'Coderistan',
}
   
const RootLayout = ({children}) => {
    return (
        <html>
       
            <body>
                <Header/>
                    {children}
                <Footer/>
            </body>
        </html>
    )
}

export default RootLayout
