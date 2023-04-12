export class EmailAlreadyRegisteredError extends Error {
    constructor() {
        super(`Email Already registered`);
    }
}
