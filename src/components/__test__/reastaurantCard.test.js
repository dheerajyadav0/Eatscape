import { render,screen } from "@testing-library/react";
import reastaurantCard from "../reastaurantCard";
import MOCK_DATA from "../mocks/resCardMock.json";
import "@testing-library/jest-dom";

test('should render  restaurant component with props Data', () => {
  
        render(<reastaurantCard resData={MOCK_DATA}/>)

        const name = screen.getByText( "La Pino'z Pizza");

        expect(name).toBeInTheDocument();
})
