import { compare, hash } from "bcryptjs";
import { IHashProvider } from "./IHashProvider";



class BcryptHashProvider implements IHashProvider {
    async encrypt(value: string): Promise<string> {
       return await hash(value, 6);
    }
    compare(value: string, hashedValue: string): Promise<boolean> {
       return  compare(value, hashedValue);
    }
  

}

export { BcryptHashProvider };
