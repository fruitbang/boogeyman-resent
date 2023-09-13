import React, { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from '@/app/store';
import { changeMode } from '@/app/userSlice';
import { useGetTicketsQuery } from '@/app/api/apiSlice';

import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';

import Brightness4Icon from '@mui/icons-material/Brightness4';

import Filter from '@/components/Filter';
import Ticket from '@/components/Ticket';

import useCountOfStopsFilter from '@/hooks/useCountOfStopsFilter';

const Home = () => {
    const dispatch = useAppDispatch();
    const mode = useAppSelector((state) => state.user.mode);

    const {
        filter,
        showOnlyButton,
        setShowOnlyButton,
        onChangeFilter,
        handleClickOnlyButton,
    } = useCountOfStopsFilter();

    const [searchParams] = useSearchParams();

    useEffect(() => {
        if (filter.length !== 0) {
            console.log('effect');
            const stopsCount = filter.map((el) => el.stopsCount);

            searchParams.set('count', stopsCount.join(','));
        } else {
            searchParams.delete('count');
        }
    }, [filter]);

    const { data: tickets, isLoading } = useGetTicketsQuery(
        searchParams.has('count') ? searchParams.toString() : undefined,
        {
            refetchOnMountOrArgChange: true,
        }
    );

    return (
        <Container sx={{ py: 2, position: 'relative' }}>
            <IconButton
                onClick={() => dispatch(changeMode())}
                sx={{ position: 'absolute', top: 10, right: 10 }}
            >
                <Brightness4Icon
                    sx={{
                        transition: 'transform 0.4s',
                        transform: mode === 'dark' ? 'rotateY(180deg)' : 'rotateY(0deg)',
                    }}
                />
            </IconButton>
            {isLoading || !tickets ? (
                <div>...Loading</div>
            ) : (
                <Stack direction={'row'} gap={1} my={2}>
                    <Filter
                        filter={filter}
                        showOnlyButton={showOnlyButton}
                        setShowOnlyButton={setShowOnlyButton}
                        onChangeFilter={onChangeFilter}
                        handleClickOnlyButton={handleClickOnlyButton}
                    />
                    <Paper>
                        {tickets.map((ticket) => (
                            <Ticket
                                key={`${ticket.price}-${ticket.arrivalTime}`}
                                {...ticket}
                            />
                        ))}
                    </Paper>
                </Stack>
            )}
        </Container>
    );
};

export default Home;
