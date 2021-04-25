import React from 'react';

import { addDecorator } from '@storybook/react';
import { ThemeProvider } from '@material-ui/core/styles';
import '../src/styles/tailwind.css';
import { theme } from '../src/theme';
import '../src/styles/tailwind.css';

addDecorator((story) => <ThemeProvider theme={theme}>{story()}</ThemeProvider>);

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
};
