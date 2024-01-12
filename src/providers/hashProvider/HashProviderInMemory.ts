import { IHashProvider } from "./IHashProvider";


class HashProviderInMemory implements IHashProvider {
   async  encrypt(value: string): Promise<string> {
        return value
    }
   async compare(value: string, hashedValue: string): Promise<boolean> {
       return value === hashedValue;
    }
 
}

export { HashProviderInMemory };
