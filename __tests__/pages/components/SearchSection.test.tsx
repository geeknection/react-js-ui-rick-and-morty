import { render } from "../../custom-render";
import { act, fireEvent, screen } from '@testing-library/react'
import SearchSection from "#/pages/home/components/SearchSection";
import { ReactElement, JSXElementConstructor } from "react";

describe('SearchSection Tests', () => {
    let rerender: (ui: ReactElement<any, string | JSXElementConstructor<any>>) => void;
    beforeAll(() => {
        const { rerender: searchRerender } = render(<SearchSection />);
        rerender = searchRerender;
    });
    test('Should it render content', async () => {
        await screen.findByTestId('SearchSection');
        expect(screen.findByTestId('SearchSection')).toContainElement
    });
    
    test('it should change input value', async () => {
        await screen.findByTestId('SearchSectionInput');
        expect(screen.findByTestId('SearchSectionInput')).toContainElement
        const input: HTMLInputElement = screen.getByTestId('SearchSectionInput');
        expect(input.value).toBe('')
        fireEvent.change(input, {target: {value: 'Rick'}});
        expect(input.value).toBe('Rick')
    });
    test('it should search characters', async () => {
        jest.useFakeTimers()
        jest.setTimeout(30000);
        rerender(<SearchSection />);
        await screen.findByTestId('SearchSectionSubmit');
        expect(screen.findByTestId('SearchSectionSubmit')).toContainElement
        const button: HTMLButtonElement = screen.getByTestId('SearchSectionSubmit');
        const clicked = fireEvent.click(button);
        act(() => {
            jest.runAllTimers();
        });
        expect(clicked).toBe(true);
    });
})
export { };