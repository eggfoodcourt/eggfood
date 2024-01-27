import { Box, Container, Grid, Card, CardActionArea, CardMedia } from '@mui/material';
import type { FC } from 'react';
import { Openindayimage } from '@/theme/content';

interface Opening {
    opening: string;
    id: string;
}

const { openingImage, eggs } = Openindayimage;
export const Openingday: FC = () => {
    return (
  
    <Box
    sx={{
      minHeight: '100vh',
      minWidth: '100%',
      mt: { md: '0', lg: '0', sm: '20' },
      backgroundPosition: 'center',
      backgroundSize: 'cover',
    //   backgroundImage: `url(${eggs})`,
      display: 'flex',
      justifyContent: 'center',
      textAlign: 'left',
      alignItems: 'center',
      // opacity:0.1,
      py: 5
    }}
  >
    <Box >
      <Container>
        <Grid container spacing={3}>
        {openingImage.map((Opening: Opening, index: number) => (
            <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
              <Card sx={{ maxWidth: 450, borderRadius: 5 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="200"
                    image={Opening.opening}
                   alt={'openingimages'}
                  />
                </CardActionArea>
              </Card>
            </Grid>
          ))}
          

        </Grid>
      </Container>
    </Box>
  </Box>
    );
};

export default Openingday;
