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
        created: string;
    }

    export interface InitialCharactersState {
        info: {
            count: number;
            pages: number;
            next: string;
            prev: null;
        },
        results: Reducers.Character[];
        loading: boolean;
    }

    export interface Action {
        type: string;
        payload: any;
    }

    export interface ResponseGenerator {
        config?:any,
        data?:any,
        headers?:any,
        request?:any,
        status?:number,
        statusText?:string
    }
}
export default Reducers;
