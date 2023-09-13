import { rest } from 'msw';

import images from './images';
import dbData from './tickets.json';

export const handlers = [
    rest.get('/', (req, res, ctx) => {
        let data = dbData.tickets;

        const count = req.url.searchParams.get('count')?.split(',');

        if (count) {
            data = data.filter((ticket) => count.includes(String(ticket.stops)));
        }

        return res(ctx.status(200), ctx.json(data));
    }),

    rest.get('/carrier-logo/:name', async (req, res, ctx) => {
        const name = req.params.name;

        const image = await fetch(images[`${name}`]).then((res) => res.arrayBuffer());
        return res(
            ctx.status(200),
            ctx.set('Content-Length', image.byteLength.toString()),
            ctx.set('Content-Type', 'image/png'),
            ctx.body(image)
        );
    }),
];
