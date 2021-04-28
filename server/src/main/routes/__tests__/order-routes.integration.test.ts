import { app } from '@/main/config';
import { mockOrder } from '@/entities/mocks/mock-order';
import request from 'supertest';

jest.mock('../../../infra/database/firebase/firebase-helper', () => ({
    FirebaseHelper: {
        initialize: jest.fn(),
        getCollection: () => ({
            doc: () => ({
                set: jest.fn(),
                update: jest.fn(),
            }),
            get: jest.fn().mockResolvedValueOnce({
                empty: false,
                docs: [{ data: () => ({ ...mockOrder(), uid: 'orderId' }) }],
            }),
        }),
        parserResult: jest.fn().mockReturnValueOnce({
            title: 'title',
            bookingDate: new Date().valueOf(),
            customer: {},
            address: {},
            uid: 'orderId',
        }),
        getUid: () => 'orderId',
    },
}));

jest.mock('../../../infra/auth/firebase/firebase-helper', () => ({
    FirebaseAuthHelper: {
        verifyIdToken: jest.fn().mockResolvedValue({
            uid: 'USER_ID',
        }),
        getDevToken: jest.fn().mockResolvedValue('DEV_TOKEN'),
    },
}));

describe('#Routes | Order', () => {
    describe('GET /api/orders', () => {
        test('Return 200 on orders return', async () => {
            await request(app).get('/api/orders').set('Authorization', 'Bearer token').expect(200);
        });

        test('Return 403 on request without token', async () => {
            await request(app).get('/api/orders').expect(403);
            await request(app).get('/api/orders').set('Authorization', '').expect(403);
        });
    });

    describe('POST /api/orders', () => {
        test('Return 201 on created orders', async () => {
            await request(app)
                .post('/api/orders')
                .set('Authorization', 'Bearer token')
                .send({
                    customer: {
                        email: 'emad.alam@construyo.de',
                        phone: '015252098067',
                        name: 'Marcio',
                    },
                    title: 'My Test Order 3',
                    bookingDate: 1554284950000,
                    address: {
                        street: 'Wriezener Str. 12',
                        zip: '13055',
                        country: 'Germany',
                        city: 'Berlin',
                    },
                })
                .expect(201);
        });

        test('Return 400 in invalid body (without title)', async () => {
            await request(app)
                .post('/api/orders')
                .set('Authorization', 'Bearer token')
                .send({
                    customer: {
                        email: 'emad.alam@construyo.de',
                        phone: '015252098067',
                        name: 'Marcio',
                    },
                    bookingDate: 1554284950000,
                    address: {
                        street: 'Wriezener Str. 12',
                        zip: '13055',
                        country: 'Germany',
                        city: 'Berlin',
                    },
                })
                .expect(400, { error: 'Incorrect field: title' });
        });

        test('Return 403 on request without token', async () => {
            await request(app).post('/api/orders').send().expect(403);
            await request(app).post('/api/orders').set('Authorization', '').expect(403);
        });
    });

    describe('PUT /api/orders/:uid', () => {
        test('Return 200 on updated order', async () => {
            await request(app)
                .put('/api/orders/order_id')
                .set('Authorization', 'Bearer token')
                .send({
                    title: 'My Test with new Title',
                    bookingDate: 1554284950000,
                })
                .expect(200);
        });

        test('Return 400 in invalid body (invalid BookingDate)', async () => {
            await request(app)
                .put('/api/orders/order_id')
                .set('Authorization', 'Bearer token')
                .send({
                    title: 'My Test with new Title',
                    bookingDate: 'Invalid Date',
                })
                .expect(400, { error: 'Incorrect field: bookingDate' });
        });

        test('Return 403 on request without token', async () => {
            await request(app).put('/api/orders/order_id').send().expect(403);
            await request(app).put('/api/orders/order_id').set('Authorization', '').expect(403);
        });
    });
});
