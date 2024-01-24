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

import logo from '../../../public/logo/android-chrome-192x192.png'


const Footer: FC = () => {
  return (
    <Box sx={{
      backgroundColor: 'secondary.main', color: '#F2F2F2', width: '100%', textAlign: 'center', py: 3, mt:'auto'
    }}>
      <Container maxWidth='xl'>
        <Grid container spacing={0}>
          <Grid item md={4} xs={12}>
            <Grid item xs={12}>
             
            </Grid>
          </Grid>

          <Grid item md={4} xs={12}>
            <Grid item xs={12} justifyContent="center" alignItems="center">
              <Typography variant='body1'>About us</Typography>
            </Grid>
            <Grid item xs={12} justifyContent="center" alignItems="center">
              <Typography variant='subtitle2' sx={{ opacity: 0.5, mt: 1 }}>
                Simplifying surveys for all. Empowering insights.
              </Typography>

            </Grid>
          </Grid>


          <Grid item md={4} xs={12} justifyContent="center" alignItems="center">
            <Grid item xs={12}>
              <Typography align="center" variant='body1'>
                Connect With Us
              </Typography>
            </Grid>

            <Grid item md={12} xs={12} sx={{ mt: 1 }} >
              <Stack direction="row" spacing={2} justifyContent="center" alignItems="center" >
                <CallIcon sx={{ color: 'rgba(255, 255, 255, 0.5)' }} />
                <MailOutlineIcon sx={{ color: 'rgba(255, 255, 255, 0.5)' }} />
                <InstagramIcon sx={{ color: 'rgba(255, 255, 255, 0.5)' }} />
                <FacebookIcon sx={{ color: 'rgba(255, 255, 255, 0.5)' }} />
              </Stack>
            </Grid>
          </Grid>

          <Grid item xs={12}>
            <Typography align="center" sx={{ mt: 4, opacity: 0.5 }}>
              &copy; {new Date().getFullYear()} SurveyMachi. All Rights Reserved.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default Footer