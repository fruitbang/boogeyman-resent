import dayjs from 'dayjs';
import 'dayjs/locale/ru';
import customParseFormat from 'dayjs/plugin/customParseFormat';

import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';

import useFetchImage from '@/hooks/useFetchImage';

dayjs.extend(customParseFormat).locale('ru');

interface Ticket {
    arrivalDate: string;
    arrivalTime: string;
    carrier: string;
    departureDate: string;
    departureTime: string;
    destination: string;
    destinationName: string;
    origin: string;
    originName: string;
    stops: number;
    price: number;
}

const Ticket = ({
    arrivalDate,
    arrivalTime,
    carrier,
    departureDate,
    departureTime,
    destination,
    destinationName,
    origin,
    originName,
    price,
    stops,
}: Ticket) => {
    const logo = useFetchImage({ imgName: carrier });

    return (
        <Card elevation={10} sx={{ display: 'flex', m: 3 }}>
            <Box p={2}>
                <Stack>
                    <CardMedia
                        component='img'
                        sx={{
                            width: 200,
                            height: 80,
                            p: 1,
                            objectFit: 'contain',
                        }}
                        image={logo}
                        alt='carrier logo'
                    />
                    <Button
                        sx={{ textTransform: 'inherit', display: 'block' }}
                        size='large'
                        color='warning'
                        variant='contained'
                    >
                        <Typography>Купить</Typography>
                        <Typography>{'за ' + price + '₽'}</Typography>
                    </Button>
                </Stack>
            </Box>
            <Divider flexItem orientation='vertical' />
            <Grid container my={2} sx={{ textAlign: 'center' }}>
                <Grid item xs={4} sx={{ textAlign: 'end' }}>
                    <Typography variant='h1'>{departureTime}</Typography>
                </Grid>
                <Grid item xs={4}>
                    <Stack>
                        <Typography
                            variant='body3'
                            color={'GrayText'}
                            sx={{ width: '100%' }}
                        >
                            {stops + ' пересадок'}
                        </Typography>
                        <Stack direction={'row'} alignItems={'center'} px={2}>
                            <Box
                                sx={{
                                    position: 'relative',
                                    display: 'block',
                                    width: '90%',
                                    height: '.125rem',
                                    m: 0,
                                    p: 0,
                                    borderRadius: '.5rem',
                                    backgroundColor: '#545860',
                                    lineHeight: 0,
                                    textAlign: 'center',
                                }}
                            ></Box>
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                viewBox='0 0 12 12'
                                style={{ height: '15px' }}
                            >
                                <path
                                    fill='#898294'
                                    d='M3.922 12h.499a.52.52 0 0 0 .444-.247L7.949 6.8l3.233-.019A.8.8 0 0 0 12 6a.8.8 0 0 0-.818-.781L7.949 5.2 4.866.246A.525.525 0 0 0 4.421 0h-.499a.523.523 0 0 0-.489.71L5.149 5.2H2.296l-.664-1.33a.523.523 0 0 0-.436-.288L0 3.509 1.097 6 0 8.491l1.196-.073a.523.523 0 0 0 .436-.288l.664-1.33h2.853l-1.716 4.49a.523.523 0 0 0 .489.71'
                                ></path>
                            </svg>
                        </Stack>
                    </Stack>
                </Grid>
                <Grid item xs={4} sx={{ textAlign: 'start' }}>
                    <Typography variant='h1'>{arrivalTime}</Typography>
                </Grid>
                <Grid item xs={6}>
                    <Typography variant='h5'>{origin + ', ' + originName}</Typography>
                    <Typography variant='body1' color='GrayText'>
                        {dayjs(departureDate.replace('.', '/'), 'DD/MM/YY').format(
                            'DD MMM YYYY, dd'
                        )}
                    </Typography>
                </Grid>
                <Grid item xs={6}>
                    <Typography variant='h5'>
                        {destination + ', ' + destinationName}
                    </Typography>
                    <Typography variant='body1' color='GrayText'>
                        {dayjs(arrivalDate.replace('.', '/'), 'DD/MM/YY').format(
                            'DD MMM YYYY, dd'
                        )}
                    </Typography>
                </Grid>
            </Grid>
        </Card>
    );
};

export default Ticket;
