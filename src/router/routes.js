import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import routes from './routes.config';

const AppRouter = (props) => {
  return (
    <Router>
      <Switch>
        {
          routes.map((route, idx) => {
            if (route.component) {
              return (
                <Route path={route.path} exact={route.exactPath}>
                  <route.component />
                </Route>
              )
            }
            return null
          })
        }
      </Switch>
    </Router>
  )
}

export default AppRouter;
