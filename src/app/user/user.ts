/**
 * Created by lalit on 3/30/17.
 */
export class Address {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
}

export class User{
    name: string;
    email: string;
    phone: string;
    address = new Address();
}
