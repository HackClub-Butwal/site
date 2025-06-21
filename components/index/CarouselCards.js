/** @jsxImportSource theme-ui */
import { Box, Card, Image, Link, Text } from 'theme-ui'
import IconComponent from '../icon'
import GitHub from './github'
import HoverSparkles from '../sparkles/HoverSparkles'

export default function CarouselCards({
  background,
  titleColor,
  descriptionColor,
  title,
  description,
  img,
  link,
  github // new prop for github card data
}) {
  // If github prop is provided, render the GitHub card instead
  if (github) {
    return <GitHub {...github} />
  }
  return renderCard({
    background,
    titleColor,
    descriptionColor,
    title,
    description,
    img,
    link
  })
}

function renderCard({
  background,
  titleColor,
  descriptionColor,
  title,
  description,
  img,
  link
}) {
  return (
    <HoverSparkles>
      <Box
        sx={{
          position: 'relative',
          display: 'inline-block',
          transition: 'transform .125s ease-in-out, box-shadow .125s ease-in-out',
          width: ['300px', '300px', '300px'], // Desktop width
          height: ['220px', '220px', '220px'], // Desktop height
          '@media (max-width: 600px)': {
            width: '480px', // 300 * 1.6 for mobile
            height: '352px', // 220 * 1.6 for mobile
          },
          '&:hover': { transform: 'scale(1.0625)' },
          '.icon': {
            transition: 'transform 0.25s ease-in-out, opacity 0.43s ease-in-out'
          },
          ':hover,:focus': {
            '.icon': {
              transform: 'translateX(28px) translateY(-28px)',
              opacity: 0
            }
          }
        }}
      >
        <Link
          sx={{
            textDecoration: 'none',
            '&:hover': { cursor: 'pointer' },
            '&:hover svg': { opacity: 0.5 }
          }}
          href={link}
          target="_blank"
          rel="noopener"
        >
          <Image
            src={img}
            alt="carousel card"
            sx={{
              position: 'absolute',
              top: ['-26px', '-30px', '-35px'],
              left: ['10px', '12px', '15px'],
              zIndex: 2,
              width: ['42px', '50px', '58px'],
              height: ['42px', '50px', '58px']
            }}
          />
          <Card
            sx={{
              mr: 3,
              background,
              position: 'relative',
              color: 'white',
              width: '100%', // Match Box width
              minHeight: '180px',
              padding: ['12px !important', '16px !important', '20px !important'],
              paddingTop: [
                '14px !important',
                '20px !important',
                '24px !important'
              ],
              height: '100%',
              '@media (max-width: 600px)': {
                minHeight: '288px', // 180 * 1.6 for mobile
                fontSize: '1.1em',
              },
            }}
          >
            <Text
              as="h3"
              sx={{ color: titleColor, fontSize: ['20px', '21px', '22px'] }}
            >
              {title}
            </Text>
            <Text
              as="p"
              sx={{ color: descriptionColor, fontSize: [1, '16px', '20px'] }}
            >
              {description}
            </Text>
            <IconComponent
              glyph="external"
              size={32}
              color="#E9E9E9"
              sx={{
                position: 'absolute',
                top: 2,
                right: 2,
                opacity: 0.3,
                fontSize: [1, '16px', '20px']
              }}
              className="icon"
            />
          </Card>
        </Link>
      </Box>
    </HoverSparkles>
  )
}
