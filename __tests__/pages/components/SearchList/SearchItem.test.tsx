import SearchItem from "#/pages/home/components/SearchList/SearchItem";
import { render } from "../../../custom-render";
import { screen } from '@testing-library/react'
import { characterMock } from "../../../../__mocks__/redux-stores";

describe('SearchItem Tests', () => {
    test('it should render component', async () => {
        render(<SearchItem data={characterMock} />);
        await screen.findByText(characterMock.name);
        expect(screen.getByText(characterMock.name)).toContainElement
    });
})
export { };