import { HttpResponse } from '@/presentation/helpers';

export interface Middleware<T = any> {
    handle(request: T): Promise<HttpResponse>;
}
