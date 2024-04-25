import {APP_URLS} from '@routes/app-urls';
import {PrivateRoutes} from '@routes/private-routes';
import {PublicRoutes} from '@routes/public-routes';
import {queryClient} from '@shared/providers';
import {QueryClientProvider} from '@tanstack/react-query';
import {Route, BrowserRouter as Router, Routes} from 'react-router-dom';

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <Router>
                <Routes>
                    {/* Public */}
                    <Route
                        path={APP_URLS.ROOT_FOLDER}
                        element={<PublicRoutes />}
                    />
                    {/* Private */}
                    <Route
                        path={APP_URLS.APP_ROOT_FOLDER}
                        element={<PrivateRoutes />}
                    />
                </Routes>
            </Router>
        </QueryClientProvider>
    );
}

export default App;
