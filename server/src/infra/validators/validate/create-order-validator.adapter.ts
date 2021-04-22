import { CreateOrderController } from '@/presentation/controllers/create-order.controller';
import { Validation } from '@/presentation/validation/validation.protocol';
import Schema from 'validate';

export class CreateOrderValidatorAdapter implements Validation<CreateOrderController.Request> {
    validate(input: CreateOrderController.Request): Error {
        const createOrderSchemaValidation = new Schema({
            title: {
                type: String,
                required: true,
                length: { min: 3 },
            },
            bookingDate: {
                type: Number,
                required: true,
            },
            address: {
                city: {
                    type: String,
                    required: true,
                },
                country: {
                    type: String,
                    required: true,
                },
                street: {
                    type: String,
                    required: true,
                },
                zip: {
                    type: String,
                    required: true,
                },
            },
            customer: {
                email: {
                    type: String,
                    required: true,
                },
                name: {
                    type: String,
                    required: true,
                },
                phone: {
                    type: String,
                    required: true,
                },
            },
        });

        const errors = createOrderSchemaValidation.validate(input);
        if (errors.length) {
            return Error(`Incorrect field: ${errors[0].path}`);
        }

        return null;
    }
}
