import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import CheckoutForm from "./CheckoutForm";
import { act } from "react-dom/test-utils";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    render(<CheckoutForm />);
    const header = screen.getByText(/checkout form/i);
    expect(header).toBeInTheDocument();
});

test("form shows success message on submit with form details", async() => {
    render(<CheckoutForm />);
    const firstNameInput = screen.getByLabelText(/first name/i);
    const lastNameInput = screen.getByLabelText(/last name/i);
    const addressInput = screen.getByLabelText(/address/i);
    const cityInput = screen.getByLabelText(/city/i);
    const stateInput = screen.getByLabelText(/state/i);
    const zipInput = screen.getByLabelText(/zip/i);

    const checkoutButton = screen.getByRole("button");

    expect(firstNameInput).toBeInTheDocument();

    userEvent.click(firstNameInput);
    userEvent.type(firstNameInput, "Joshua");

    userEvent.click(lastNameInput);
    userEvent.type(lastNameInput, "Lovins");

    userEvent.click(addressInput);
    userEvent.type(addressInput, "602 West Somewhere Street");
    
    userEvent.click(cityInput);
    userEvent.type(cityInput, "New York");
    
    userEvent.click(stateInput);
    userEvent.type(stateInput, "NY");

    userEvent.click(zipInput);
    userEvent.type(zipInput, "11222");

    userEvent.click(checkoutButton);

    const successMessage = screen.queryByText(/you have ordered some plants/i);
    expect(successMessage).toBeInTheDocument();

    const messageFirstName = screen.queryByText(/joshua/i);
    const messageLastName = screen.queryByText(/lovins/i);
    const messageAddress = screen.queryByText(/602 West Somewhere Street/i);
    const messageCity = screen.queryByText(/new york/i);
    const messageState = screen.queryByText(/ny/i);
    const messageZip = screen.queryByText(/11222/i);

    expect(messageFirstName).toBeInTheDocument();
    expect(messageLastName).toBeInTheDocument();
    expect(messageAddress).toBeInTheDocument();
    expect(messageCity).toBeInTheDocument();
    expect(messageState).toBeInTheDocument();
    expect(messageZip).toBeInTheDocument();
});

// await act(async () => {
//     userEvent.click(lastNameInput);
//     userEvent.type(lastNameInput, "Lovins");

//     userEvent.click(addressInput);
//     userEvent.type(addressInput, "602 West Somewhere Street");
    
//     userEvent.click(cityInput);
//     userEvent.type(cityInput, "New York");
    
//     userEvent.click(stateInput);
//     userEvent.type(stateInput, "NY");

//     userEvent.click(zipInput);
//     userEvent.type(zipInput, "11222");

//     userEvent.click(firstNameInput);
//     userEvent.type(firstNameInput, "Joshua");

//     userEvent.click(checkoutButton);
// });

    // await act(async () => {
    //     userEvent.click(firstNameInput);
    //     userEvent.type(firstNameInput, "Joshua");
    // });

    // userEvent.click(firstNameInput);
    // userEvent.type(firstNameInput, "Joshua");
    // userEvent.click(checkoutButton);

    // await act(async () => {
        // userEvent.click(lastNameInput);
        // userEvent.type(lastNameInput, "Lovins");

        // userEvent.click(addressInput);
        // userEvent.type(addressInput, "602 West Somewhere Street");
        
        // userEvent.click(cityInput);
        // userEvent.type(cityInput, "New York");
        
        // userEvent.click(stateInput);
        // userEvent.type(stateInput, "NY");

        // userEvent.click(zipInput);
        // userEvent.type(zipInput, "11222");

        // userEvent.click(firstNameInput);
        // userEvent.type(firstNameInput, "Joshua");

        // userEvent.click(checkoutButton);
    // });