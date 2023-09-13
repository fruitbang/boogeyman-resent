export enum Currency {
    eur = 'EUR',
    rub = 'RUB',
    usd = 'USD',
}

export interface BaseResponse {
    origin: string;
    origin_name: string;
    destination: string;
    destination_name: string;
    departure_date: string;
    departure_time: string;
    arrival_date: string;
    arrival_time: string;
    carrier: string;
    stops: number;
    price: number;
}

export interface NormalizedResponse {
    origin: string;
    originName: string;
    destination: string;
    destinationName: string;
    departureDate: string;
    departureTime: string;
    arrivalDate: string;
    arrivalTime: string;
    carrier: string;
    stops: number;
    price: number;
}
