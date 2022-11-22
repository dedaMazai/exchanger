import { render } from 'react-dom';
import { ErrorBoundary } from 'app/providers/ErrorBoundary';
import { StoreProvider } from 'app/providers/StoreProvider';
import { App } from './app/App';

render(
    <StoreProvider>
        <ErrorBoundary>
            <App />
        </ErrorBoundary>
    </StoreProvider>,
    document.getElementById('root'),
);
