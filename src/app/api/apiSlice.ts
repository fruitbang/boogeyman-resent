import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BaseResponse, NormalizedResponse } from '@/app/constants';

const baseQuery = fetchBaseQuery({
    baseUrl: '',
});

export const apiSlice = createApi({
    reducerPath: 'ticketsApi',
    baseQuery: baseQuery,
    tagTypes: ['Tickets'],
    endpoints: (builder) => ({
        getTickets: builder.query<NormalizedResponse[], string | void>({
            query: (searchParams) => (searchParams ? `/?${searchParams}` : '/'),
            transformResponse: (res: BaseResponse[]) =>
                res.map((ticket) => ({
                    arrivalDate: ticket.arrival_date,
                    arrivalTime: ticket.arrival_time,
                    carrier: ticket.carrier,
                    departureDate: ticket.departure_date,
                    departureTime: ticket.departure_time,
                    destination: ticket.destination,
                    destinationName: ticket.destination_name,
                    origin: ticket.origin,
                    originName: ticket.origin_name,
                    price: ticket.price,
                    stops: ticket.stops,
                })),
            providesTags: ['Tickets'],
        }),
    }),
});

export const { useGetTicketsQuery } = apiSlice;
