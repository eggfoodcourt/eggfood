import { Box, Stack } from '@mui/material'
import type { FC } from 'react'
import React from 'react'
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import InstagramIcon from '@mui/icons-material/Instagram';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import CallIcon from '@mui/icons-material/Call';
import FacebookIcon from '@mui/icons-material/Facebook';
import Image from 'next/image';
import { IconButton, Link } from '@mui/material';
import NextLink from 'next/link';

import { footersection } from '@/theme/content';

const { logo, title1, Title2, area, city, title3, content } = footersection

const Footer: FC = () => {
  return (
    <Box sx={{
      backgroundColor: 'secondary.main', color: '#F2F2F2', width: '100%', textAlign: 'center', py: 3, mt: 'auto'
    }}>
      <Container maxWidth='xl'>
        <Grid container spacing={4}>
          {/* <Grid item md={2} xs={12}>  
              <Image
                src={logo}
                //layout="fill"
                width={500}
                height={500}
                alt="Picture of the author"
                style={{
                  position: 'absolute',
                  bottom: '30',
                  left: '20',
                  width: '70px',
                  height: '70px',
                }}
              />
          </Grid> */}
          
          <Grid item md={3} xs={12}>
            <Grid item xs={12} justifyContent="center" alignItems="left">
              <Typography variant='body1'>{title3}</Typography>
            </Grid>
            <Grid item xs={12} justifyContent="center" alignItems="center">
              <Typography variant='subtitle2' sx={{ opacity: 0.5, mt: 1 }}>
                {content}
              </Typography>

            </Grid>
          </Grid>
          <Grid item md={3} xs={12}>
            <Stack direction={'column'}>
              <Typography variant='body1'>
                {title1}
              </Typography>
              <Typography variant='subtitle2' sx={{ opacity: 0.5, mt: 1 }}>{area}</Typography>
              <Typography variant='subtitle2' sx={{ opacity: 0.5, mt: 1 }}>{city}</Typography>
              <Typography variant='subtitle2' sx={{ opacity: 0.5, mt: 1 }}></Typography>

            </Stack>
          </Grid>
          <Grid item md={4} xs={12} justifyContent="center" alignItems="center">
            <Grid item xs={12}>
              <Typography align="center" variant='body1'>
                Connect With Us
              </Typography>
            </Grid>

            <Grid item md={12} xs={12} sx={{ mt: 1 }} >
              <Stack direction="row" spacing={2} justifyContent="center" alignItems="center" >
              <NextLink href="tel:7845217303">
            <IconButton>
              <CallIcon sx={{ color: 'rgba(255, 255, 255, 0.5)' }} />
            </IconButton>
          </NextLink>
          <NextLink href="mailto:eggfoodcourt@gmail.com">
            <IconButton>
              <MailOutlineIcon sx={{ color: 'rgba(255, 255, 255, 0.5)' }} />
            </IconButton>
          </NextLink>
                <NextLink href="https://www.instagram.com/eggfoodcourt/" passHref>
                    <IconButton>
                      <InstagramIcon sx={{ color: 'rgba(255, 255, 255, 0.5)' }} />
                    </IconButton>
                </NextLink>
                <IconButton component="a" href="https://www.facebook.com/profile.php?id=61555580112719" target="_blank" rel="noopener noreferrer">
  <FacebookIcon sx={{ color: 'rgba(255, 255, 255, 0.5)' }} />
</IconButton>
              </Stack>
            </Grid>
          </Grid>

          <Grid item xs={12}>
            <Typography align="center" sx={{ mt: 4, opacity: 0.5 }}>
              &copy; {new Date().getFullYear()} Egg-Food-Court. All Rights Reserved.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default Footer