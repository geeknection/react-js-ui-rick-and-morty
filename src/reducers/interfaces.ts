import { storesCombined } from '.';

namespace Reducers {
    export interface Character {
        id: number;
        name: string;
        status: string;
        species: string;
        type: string;
        gender: string;
        origin: {
            name: string;
            url: string;
        };
        location: {
            name: string;
            url: string;
        };
        image: string;
        episode: string[];
        url: string;
        created: Date;
    }
    export type setStoreValue = {
        reducer: keyof typeof storesCombined;
        type: string;
        value: unknown;
    }
}
export default Reducers;
