import React from 'react';
import systemRoutes from '#/routes';
import {
    BrowserRouter as Router,
    Route,
    Routes
} from 'react-router-dom';
import '#/theme/main.scss';

function App() {
    return (
        <Router>
            <Routes>
                {systemRoutes.map((item, key) => {
                    document.title = item.title;
                    return(
                        <Route path={item.path} key={key}>
                            <item.page />
                        </Route>
                    );
                })}
            </Routes>
        </Router>
    );
}

export default App;