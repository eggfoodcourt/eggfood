import type { FC } from 'react'
import { Box, Typography, Stack, Container, Hidden, useMediaQuery, useTheme, Grid, } from '@mui/material'
import Image from 'next/image'
import { hero } from '@/theme/content'

const { MainBG1,MainBG, title, subtitle2, subtitle, guitter } = hero;
export const Hero: FC = () => {

  
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));


  return (<>
    <>
    <Box
  sx={{
    minHeight: '100vh',
    minWidth: '100%',
    mt: { md: '0', lg: '0', sm: '20' },
    backgroundImage: `url(${MainBG})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    display: 'flex',
    justifyContent: 'center', // Center-align horizontally
    alignItems: 'center', // Center-align vertically
  }}
>
<Image
  src="/bg.jpg"
//   layout="fill"
width={500}
height={500}
alt="Picture of the author"
  style={{
    position: 'absolute',
    bottom: '30',
    left: '20',
    width: '200px', // Set the width to your desired value
    height: '200px', // Set the height to your desired value
  }}
/>
  <Container>
    <Grid container>
      <Grid item md={6} xs={12}>
        <Box
          sx={{
            width: '100%',
            height: '100%',
            textAlign: 'center', // Center-align text content
          }}
        >
          <Stack
            sx={{ height: '100%' }}
            textAlign={'left'}
            display={'flex'}
            justifyContent="center"
            alignItems={'center'}
          >
            <Typography variant="h3" sx={{ mb: 2, fontWeight: 600 }}>
              {title}
            </Typography>
            {/* <Typography variant="h4"  textAlign={'left'}>{title}</Typography> */}
            <Typography variant="h5"  sx={{ mb: 1 }}>{subtitle}</Typography>
            <Typography variant="h5" sx={{ mb: 6 }}>
              {subtitle2}
            </Typography>
          </Stack>
        </Box>
      </Grid>
      {/* Add your Image Grid here */}
    </Grid>
  </Container>
</Box>

    </>
  </>)}