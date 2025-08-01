import {Card, Box, Flex, Grid, Heading, Image, Text} from 'theme-ui'
import Meta from '@hackclub/meta'
import Head from 'next/head'
import Nav from '../components/bin/nav'
// import BGImg from '../components/background-image'
import Footer from '../components/bin/Footer'
// import ForceTheme from '../components/force-theme'

import fs from 'fs'
import path from 'path'
import {startCase} from 'lodash'

const color = '#EC37AD'

function customStartCase(st) {
    return st
        .replace(/\.(svg|png)$/, '')
        .replace(/[_-]+/g, ' ')
        .replace(/\b\w/g, char => char.toUpperCase());
}

const StickersPage = ({stickers = []}) => [
    <Box as="main" key="main" sx={{textAlign: 'center'}}>
        // <ForceTheme theme="dark"/>
        <Nav dark/>
        <Meta
            as={Head}
            title="Stickers"
            description="Check out Hack Club’s stickers."
            image="https://cdn.glitch.com/a7605379-7582-4aac-8f44-45bbdfca0cfa%2Fstickers.png?v=1588012712143"
        />
        <Box
            as="article"
            sx={{position: 'relative', overflow: 'hidden', py: [6, 7], px: 4}}
        >
            <Card
                sx={{
                    variant: 'cards.translucentDark',
                    bg: 'rgba(0, 0, 0, 0.5) !important',
                    position: 'relative',
                    overflow: 'visible',
                    maxWidth: 'copy',
                    mx: 'auto',
                    my: [4, 5],
                    py: 3
                }}
            >
                <Box
                    as="aside"
                    sx={{
                        display: ['none', 'flex'],
                        justifyContent: 'center',
                        alignItems: 'center',
                        position: 'absolute',
                        top: 0,
                        left: '50%',
                        transform: 'translateX(-50%) translateY(-50%)',
                        width: '100%',
                        img: {
                            mx: 3,
                            flexShrink: 0,
                            filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.25))'
                        }
                    }}
                >
                    <Image
                        src="/stickers/macintosh.svg"
                        alt="Macintosh sticker"
                        sx={{
                            transform: 'rotate(-12deg)',
                            width: '4.5rem',
                            height: '6rem'
                        }}
                    />
                    <Image
                        src="/stickers/2020_progress.png"
                        alt="Pride sticker"
                        sx={{
                            transform: 'rotate(3deg)',
                            width: ['4rem', '6rem'],
                            height: ['4rem', '6rem']
                        }}
                    />
                    <Image
                        src="/stickers/enjoy.svg"
                        alt="Enjoy Hack Club Coca-Cola sticker"
                        sx={{
                            transform: 'rotate(-12deg)',
                            width: ['6rem', '7.5rem'],
                            height: ['4rem', '5rem']
                        }}
                    />
                </Box>
                <Heading
                    as="h1"
                    variant="ultratitle"
                    sx={theme => ({
                        color: 'primary',
                        ...theme.util.gxText(color, 'red'),
                        mt: [3, 4]
                    })}
                >
                    Unparalleled stickers.
                </Heading>
                <Text as="p" variant="lead" color="muted">
                    Every Hack Club gets free, high-quality stickers.
                </Text>
            </Card>
        </Box>
        <Card
            as="section"
            sx={{
                bg: 'darkless',
                maxWidth: 'copyUltra',
                mx: 'auto',
                my: [4, 5],
                py: [3, 4],
                overflow: 'visible'
            }}
        >
            <Heading as="h2" variant="title" color="white">
                Gotta collect ‘em all.
            </Heading>
            <Grid columns={[2, 3]} gap={[3, 4]} mt={[3, 4]}>
                {stickers.map(st => (
                    <Flex
                        key={st}
                        sx={{
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            img: {
                                objectFit: 'contain',
                                width: [128, 160],
                                height: [128, 160],
                                transition: '.25s transform ease-in-out',
                                ':hover': {
                                    transform: 'scale(1.5)',
                                    filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.25))'
                                }
                            }
                        }}
                    >
                        <Image
                            src={`/stickers/${st}`}
                            width={128}
                            height={128}
                            alt={st.split('.')[0]}
                        />
                        <Text as="span" variant="caption" sx={{fontSize: 2, mt: [2, 3]}}>
                            {customStartCase(st)}
                        </Text>
                    </Flex>
                ))}
            </Grid>
        </Card>
    </Box>,
    <Footer dark key="footer"/>
]

export default StickersPage

export const getStaticProps = () => {
    const stickersDir = path.join(process.cwd(), 'public', 'stickers')
    const stickers = fs
        .readdirSync(stickersDir)
        .filter(sticker => sticker !== 'hero.jpg')
    return {props: {stickers}}
}