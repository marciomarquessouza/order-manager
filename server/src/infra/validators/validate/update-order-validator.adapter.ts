import { UpdateOrderController } from '@/presentation/controllers/update-order.controller';
import { Validation } from '@/presentation/validation/validation.protocol';
import Schema from 'validate';

export class UpdateOrderValidatorAdapter implements Validation<UpdateOrderController.Request> {
    validate(input: UpdateOrderController.Request): Error {
        const updateOrderValidationSchema = new Schema({
            uid: {
                type: String,
                required: true,
            },
            title: {
                type: String,
                length: { min: 3 },
            },
            bookingDate: {
                type: Number,
            },
        });

        const errors = updateOrderValidationSchema.validate(input);
        if (errors.length) {
            return Error(`Incorrect field: ${errors[0].path}`);
        }

        return null;
    }
}
