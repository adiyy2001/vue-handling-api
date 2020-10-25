export class UsersModel {
    id: number;
    name: string;
    usernmae: string;
    email: string;
    addres: {
        street: string;
        suite: string;
        city: string;
        zipcode: string;
    };
    geo: {
        lat: string;
        lng: string;
    };
}