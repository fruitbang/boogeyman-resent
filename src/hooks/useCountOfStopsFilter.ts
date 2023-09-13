import { useCallback, useState } from 'react';

export const stopsFilterVariantList = [
    {
        name: 'all',
        label: 'Все',
        stopsCount: null,
    },
    {
        name: 'direct',
        label: 'Без пересадок',
        stopsCount: 0,
    },
    {
        name: 'oneStop',
        label: '1 пересадка',
        stopsCount: 1,
    },
    {
        name: 'twoStops',
        label: '2 пересадки',
        stopsCount: 2,
    },
    {
        name: 'threeStops',
        label: '3 пересадки',
        stopsCount: 3,
    },
] as const;

type StopsFilterVariantList = typeof stopsFilterVariantList;

type StopsFilterVariant = StopsFilterVariantList[number];
type StopsFilterVariantName = StopsFilterVariant['name'];

const useCountOfStopsFilter = () => {
    const [filter, setFilter] = useState<StopsFilterVariant[]>([]);

    const [showOnlyButton, setShowOnlyButton] = useState<
        undefined | StopsFilterVariantName
    >();

    const onChangeFilter = useCallback(
        (variant: StopsFilterVariant) =>
            setFilter((prev) => {
                if (variant.name === 'all') {
                    return [];
                }

                return prev.includes(variant)
                    ? prev.filter((el) => el !== variant)
                    : [...prev, variant];
            }),
        []
    );

    const handleClickOnlyButton = useCallback(
        (variant: StopsFilterVariant) =>
            setFilter(variant.name === 'all' ? [] : [variant]),
        []
    );

    return {
        filter,
        showOnlyButton,
        setShowOnlyButton,
        onChangeFilter,
        handleClickOnlyButton,
    };
};

export type FilterState = ReturnType<typeof useCountOfStopsFilter>;

export default useCountOfStopsFilter;
