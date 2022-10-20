import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { dispatchCharacters } from '#/reducers/slices/characters';

function HomePage() {
    const characters = useSelector((state: any) => state.charactersStore.data);
    const dispatch = useDispatch();
    const onClick = () => {
        dispatch(dispatchCharacters([{
            "id": 1,
            "name": "Rick Sanchez",
            "status": "Alive",
            "species": "Human",
            "type": "",
            "gender": "Male",
            "origin": {
                "name": "Earth",
                "url": "https://rickandmortyapi.com/api/location/1"
            },
            "location": {
                "name": "Earth",
                "url": "https://rickandmortyapi.com/api/location/20"
            },
            "image": "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
            "episode": [
                "https://rickandmortyapi.com/api/episode/1",
                "https://rickandmortyapi.com/api/episode/2",
            ],
            "url": "https://rickandmortyapi.com/api/character/1",
            "created": "2017-11-04T18:48:46.250Z"
        }]));
    }
    return (
        <>
            total: {characters.length}
            <button onClick={onClick} type='button' className='btn btn-primary'>teste</button>
        </>
    );
}
export default HomePage;
