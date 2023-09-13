import { useState } from 'react';

import { Currency } from '@/app/constants';

import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';

import CountOfStopsFilter from '@/components/CountOfStopsFilter';

import { FilterState } from '@/hooks/useCountOfStopsFilter';

const Filter = ({
    filter,
    showOnlyButton,
    setShowOnlyButton,
    onChangeFilter,
    handleClickOnlyButton,
}: FilterState) => {
    const [currency, setCurrency] = useState<Currency>(Currency.rub);

    return (
        <Paper sx={{ height: 'fit-content' }}>
            <Stack gap={1} m={2}>
                <Typography variant='h5'>Валюта</Typography>
                <ButtonGroup color='primary' fullWidth>
                    <Button
                        key={Currency.rub}
                        variant={currency === Currency.rub ? 'contained' : 'outlined'}
                        onClick={() => setCurrency(Currency.rub)}
                    >
                        {Currency.rub}
                    </Button>
                    <Button
                        key={Currency.usd}
                        variant={currency === Currency.usd ? 'contained' : 'outlined'}
                        onClick={() => setCurrency(Currency.usd)}
                    >
                        {Currency.usd}
                    </Button>
                    <Button
                        key={Currency.eur}
                        variant={currency === Currency.eur ? 'contained' : 'outlined'}
                        onClick={() => setCurrency(Currency.eur)}
                    >
                        {Currency.eur}
                    </Button>
                </ButtonGroup>
                <Typography variant='h5' mt={2}>
                    Количество пересадок
                </Typography>
                <CountOfStopsFilter
                    filter={filter}
                    showOnlyButton={showOnlyButton}
                    setShowOnlyButton={setShowOnlyButton}
                    onChangeFilter={onChangeFilter}
                    handleClickOnlyButton={handleClickOnlyButton}
                />
            </Stack>
        </Paper>
    );
};

export default Filter;
