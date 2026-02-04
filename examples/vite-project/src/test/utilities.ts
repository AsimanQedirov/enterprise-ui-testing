import '@testing-library/jest-dom';
import { render as renderComponent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

export const render = (ui : React.ReactElement, options? : any) => {
    const user = userEvent.setup();
    const rendered = renderComponent(ui, options);
    return {
        ...rendered,
        user,
    };
}