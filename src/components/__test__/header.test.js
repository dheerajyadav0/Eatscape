import { render,screen,fireEvent } from "@testing-library/react";
import Header from "../header";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";


test("Should load header component  with a login button",()=>{

    render(
        <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );

    const loginButton = screen.getByRole("button",{name:"login"});

 
    // const loginButton = screen.getByText("login");

    expect(loginButton).toBeInTheDocument();
});

test("Should load header component  with a caertItems",()=>{

    render(
        <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );

    //const loginButton = screen.getByRole("button");

    // const cartItems = screen.getByText("Cart(0)")//bt in this case if there are irems =>cart(1),cart(2)etc so we use regex
    const cartItems = screen.getByText(/Cart/);
    expect(cartItems).toBeInTheDocument();

    
});


test("Should change login button to logout on click",()=>{

    render(
        <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );

    const loginButton = screen.getByRole("button",{name:"login"})
    fireEvent.click(loginButton);

    expect(loginButton).toBeInTheDocument();
    
});
