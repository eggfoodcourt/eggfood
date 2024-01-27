import type { FC } from 'react'
import { Box, Typography, Stack, Container, Hidden, useMediaQuery, useTheme, Grid, } from '@mui/material'
import Image from 'next/image'
import { hero } from '@/theme/content'

const { MainBG1,MainBG,  subtitle2, subtitle, guitter } = hero;
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
    justifyContent: 'center',
    textAlign:'left',
    alignItems: 'center', 
  }}
>
  <Box >

{/* <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'flex-end', position: 'relative' }}>
  <Image
    src="/bg.jpg"
    width={200}
    height={200}
    alt="Picture of the author"
    style={{
      width: '200px',
      height: '200px',
      borderRadius: '50%',
    }}
  />
</div> */}
  <Container>
    <Grid container>
      <Grid item md={3} xs={12}>
        <Box
          sx={{
            width: '100%',
            height: '100%',
            textAlign: 'left', // Center-align text content
          }}
        >
          <Stack
            sx={{ height: '100%' }}
            textAlign={'left'}
            display={'flex'}
            justifyContent="center"
            alignItems={'center'}
          >
           
            {/* <Typography variant="h4"  textAlign={'left'}>{title}</Typography> */}
            <Typography variant="h2"  sx={{ mt:12,mb:6,color:'#fff'}}>{subtitle}</Typography>
            <Typography variant="h5" sx={{ mb: 6 }}>
              {subtitle2}
            </Typography>
          </Stack>
        </Box>
      </Grid>
      {/* Add your Image Grid here */}
    </Grid>
  </Container>
</Box></Box>

    </>
  </>)}