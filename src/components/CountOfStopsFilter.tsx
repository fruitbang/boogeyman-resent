import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import { FilterState, stopsFilterVariantList } from '@/hooks/useCountOfStopsFilter';

const CountOfStopsFilter = ({
    filter,
    showOnlyButton,
    setShowOnlyButton,
    onChangeFilter,
    handleClickOnlyButton,
}: FilterState) => {
    return (
        <FormGroup>
            {stopsFilterVariantList.map((el) => (
                <Box
                    sx={{
                        minWidth: '250px',
                        display: 'flex',
                        justifyContent: 'space-between',
                    }}
                    key={el.name}
                    onMouseOut={() => setShowOnlyButton(undefined)}
                    onMouseOver={() => setShowOnlyButton(el.name)}
                >
                    <FormControlLabel
                        label={el.label}
                        control={
                            <Checkbox
                                checked={
                                    el.name === 'all'
                                        ? filter.length === 0
                                        : filter.includes(el)
                                }
                            />
                        }
                        onChange={() => onChangeFilter(el)}
                    />
                    {showOnlyButton === el.name ? (
                        <Button variant='text' onClick={() => handleClickOnlyButton(el)}>
                            Только
                        </Button>
                    ) : null}
                </Box>
            ))}
        </FormGroup>
    );
};

export default CountOfStopsFilter;
