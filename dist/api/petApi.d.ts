import http from 'http';
import { ApiResponse } from '../model/apiResponse';
import { Pet } from '../model/pet';
import { Authentication, Interceptor } from '../model/models';
import { ApiKeyAuth, OAuth } from '../model/models';
import { RequestFile } from './apis';
export declare enum PetApiApiKeys {
    api_key = 0
}
export declare class PetApi {
    protected _basePath: string;
    protected _defaultHeaders: any;
    protected _useQuerystring: boolean;
    protected authentications: {
        default: Authentication;
        petstore_auth: OAuth;
        api_key: ApiKeyAuth;
    };
    protected interceptors: Interceptor[];
    constructor(basePath?: string);
    set useQuerystring(value: boolean);
    set basePath(basePath: string);
    set defaultHeaders(defaultHeaders: any);
    get defaultHeaders(): any;
    get basePath(): string;
    setDefaultAuthentication(auth: Authentication): void;
    setApiKey(key: PetApiApiKeys, value: string): void;
    set accessToken(token: string);
    addInterceptor(interceptor: Interceptor): void;
    addPet(pet: Pet, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Pet;
    }>;
    deletePet(pet_id: number, api_key?: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    findPetsByStatus(status?: 'available' | 'pending' | 'sold', options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Array<Pet>;
    }>;
    findPetsByTags(tags?: Array<string>, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Array<Pet>;
    }>;
    getPetById(pet_id: number, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Pet;
    }>;
    updatePet(pet: Pet, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Pet;
    }>;
    updatePetWithForm(pet_id: number, name?: string, status?: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    uploadFile(pet_id: number, additional_metadata?: string, body?: RequestFile, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ApiResponse;
    }>;
}
