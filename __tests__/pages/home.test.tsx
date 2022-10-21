import HomePage from "#/pages/home";
import { screen } from '@testing-library/react'
import { render } from "../custom-render";

describe('Home Page Tests', () => {
    test('Should it render Home Page', async () => {
        render(<HomePage />);
        await screen.findByTestId('homePageID');
        expect(screen.getByTestId('homePageID')).toContainElement
    });
})
export {}