import { Order } from '@/entities/Order';
import firebase, { ServiceAccount } from 'firebase-admin';
import { uuid } from 'uuidv4';

export const FirebaseHelper = {
    initialize(serviceAccount: ServiceAccount) {
        firebase.initializeApp({
            credential: firebase.credential.cert(serviceAccount),
        });
    },
    getCollection(name: string) {
        return firebase.firestore().collection(name);
    },
    getUid() {
        return uuid();
    },
    parserResult(data: FirebaseFirestore.DocumentData, id: string): Order {
        const parsedOrder: Order = {
            uid: id,
            title: data.title,
            bookingDate: data.bookingDate,
            customer: data.customer || {},
            address: data.address || {},
        };
        return parsedOrder;
    },
    removeWithoutTitleAndDate: (order: any) => !!order.title || !!order.bookingDate,
};
