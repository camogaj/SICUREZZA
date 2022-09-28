import React from "react";
import { Route, Redirect } from "react-router-dom";

function AuthRoute({ authenticated, component: Component, render, ...restProps }) {

  const algo = (props) => {
    if (authenticated) {
      // Si hay usuario, según como hayamos llamado (renderizado) a <AuthRoute /> hará uno u otro
      if(render) {
        // <AuthRoute path="/pepe" render={() => <div>Hello world</div>} />
        return render(props);
      } else {
        // <AuthRoute path="/pepe" component={<HelloWorld />} />
        return <Component {...props} />
      }

    } else {

      // Si no hay usuario, el portero de discoteca lo manda al login.
      return <Redirect to={{ pathname: "/login", state: { from: props.location } }}/>
    }
  }

  return (
    <Route
      {...restProps}
      render={algo}
    />
  );
}

export default AuthRoute;