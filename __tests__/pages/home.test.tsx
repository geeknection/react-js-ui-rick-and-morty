import HomePage from "#/pages/home";
import { act, screen } from '@testing-library/react'
import { characterMock, charactersStoreMock } from "../../__mocks__/redux-stores";
import { render } from "../custom-render";

describe('Home Page Tests', () => {
    beforeAll(() => {
        render(<HomePage />);
    })
    test('Should it render', async () => {
        await screen.findByTestId('homePageID');
        expect(screen.getByTestId('homePageID')).toContainElement
    });
    test('Should it have pre-load list', async () => {
        await screen.findAllByTestId('SearchItemSkeleton');
        expect(screen.findAllByTestId('SearchItemSkeleton')).toHaveLength
    });
    test('Should it have characters list with initial state', async () => {
        render(<HomePage />, {
            preloadedState: {
                charactersStore: {
                    ...charactersStoreMock,
                    loading: false,
                    results: [characterMock]
                }
            }
        });
        await screen.findAllByTestId('SearchItem');
        expect(screen.getAllByTestId('SearchItem')).toHaveLength
    });
    test('Should it have characters list with request api', async () => {
        jest.useFakeTimers()
        jest.setTimeout(30000);
        render(<HomePage />);
        act(() => {
            jest.runAllTimers();
        });
        await screen.findAllByTestId('SearchItem');
        expect(screen.getAllByTestId('SearchItem')).toHaveLength
    });
})
export { }