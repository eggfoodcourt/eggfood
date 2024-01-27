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
                minHeight: '50vh',
                minWidth: '100%',
                mt: { md: '0', lg: '0', sm: '20' },
                display: 'flex',
                justifyContent: 'center',
                textAlign: 'left',
                alignItems: 'center',
                backgroundColor: 'background.default',
                py: 5,
            }}
        >
            <Box sx={{ backdropFilter: 'blur(20px)' }}>
                <Grid container spacing={3}>
                    {openingImage.map((Opening: Opening, index: number) => (
                        <Grid item key={index} xs={12} sm={6} md={4} lg={3} spacing={6}>
                            <Card sx={{ maxWidth: 400, borderRadius: 8,mt:5, boxShadow: '0 0 20px 1px rgba(251, 255, 254, 0.6)' }}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height={200}
                                        image={Opening.opening}
                                        alt={"openingimages"}
                                    />
                                </CardActionArea>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Box>
    );
};

export default Openingday;
