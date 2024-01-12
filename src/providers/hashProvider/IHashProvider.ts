


export interface IHashProvider {
    encrypt(value: string): Promise<string>;
    compare(value: string, hashedValue: string): Promise<boolean>;
}