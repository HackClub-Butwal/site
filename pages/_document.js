import Document, {Html, Head, Main, NextScript} from 'next/document'

const org = {
    '@context': 'http://schema.org',
    '@type': 'Organization',
    name: 'Hack Club',
    url: 'https://hackclub.com/',
    logo: 'https://hackclub.com/assets/favicon/android-chrome-512x512.png', // updated to valid image
    sameAs: [
        'https://twitter.com/hackclub',
        'https://github.com/hackclub',
        'https://instagram.com/hackclub', // updated to correct Instagram URL
        'https://www.facebook.com/Hack-Club-741805665870458',
        'https://www.youtube.com/channel/UCQzO0jpcRkP-9eWKMpJyB0w'
    ],
    contactPoint: [
        {
            '@type': 'ContactPoint',
            email: 'team@hackclub.com',
            contactType: 'customer support',
            url: 'https://hackclub.com/'
        }
    ]
}

class MyDocument extends Document {
    render() {
        return (
            <Html lang="en">
                <Head>
                    <meta name="format-detection" content="telephone=no"/>
                    <script
                        type="application/ld+json"
                        dangerouslySetInnerHTML={{__html: JSON.stringify(org)}}
                    />
                </Head>
                <body>
                <Main/>
                <NextScript/>
                </body>
            </Html>
        )
    }
}

export default MyDocument