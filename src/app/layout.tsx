import './globals.css'

import { Figtree } from 'next/font/google'

import { Metadata } from 'next'

const figtree = Figtree({
    subsets: ['latin'],
    variable: '--font-figtree',
    display: 'swap'
})

export const metadata: Metadata = {
    title: {
        default: 'Exemplo',
        template: '%s | Exemplo'
    },
    description:
        'Exemplo'
}

export default function RootLayout({
    children
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="pt-br" className={`${figtree.variable}`}>
            <body className="remove-scroll h-full min-h-screen w-full select-none scroll-smooth bg-white font-figtree text-black">

                <main className="relative flex h-full w-full flex-grow flex-col items-center">
                    {/* <Header /> */}
                    {children}
                    {/* <Footer /> */}
                </main>


            </body>
        </html>
    )
}
