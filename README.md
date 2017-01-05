http://reduxblog.herokuapp.com/

# ReactRouter
Whenever the URL changes, history library listens to the change and send the new URL to ReactRouter  

ReactRouter matches the route with a set of components and send it to React  

React  renders the components to the screen.

## How to hook it up?
Create a routes.js file with the mapping:
```
import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/app';
import Greeting from './componenets/greeting';

export default (
<Route path="/" component={App}>
	<IndexRoute component={Index} />
  <Route path="greet" component={Greeting} />
</Route>
);
```
Note: The greet Route is nested inside / Route.  
Note2: IndexRoute is the default if nothing else is passed after the parent Route.

On index.js, create the Router component inside your root component:  
```
import { Router, browserHistory }  from 'react-router';
import routes from './routes.js';

<Router history={browserHistory} routes={routes} />
```

browserHistory is matches everything after the first /.   
Now `http:domain.com/` will render the App component and `http:domain.com/greet` will render the App component with the Greet componenet as its child.

# When to fetch data from the server?
A good time to fetch data from the server is whenever the componenet will be rendered. We can do this on the lifecycle method `componentWillMount`.


# Router Params
When defining a route on the router, we can use colons to define a param.
```
<Route path="post/:id" component={PostShow} />
```

This param will be available on the rendered component on `this.props.params.id`

## Link Tags
Link tags are like anchor tags  
They don't reload the whole page which is good.  
```
import { Link } from 'react-router';
<Link to="/" className="btn btn-danger">Cancel</Link>
```

## Router.pushrouter.push
A programmatically way to change the route of our app.
`router.push('/')`

In this code, we got access to the router.push from inside the component by using componenet context.

# Context
We should avoid using context with React.
Context let's you access a parent component data without explicitly passing it down through the componenet tree.

In this project, we did this to get the router.push property from the router to our smart-components.
To do so, we first `import {PropTypes} from 'react';`
then, inside the componenet class we set the context types with
```
static contextTypes = {
	router: PropTypes.object
};
```
finally, we are able to access the router with `this.context.router.push('/')`


# Redux Form
Handles form control for you.  
- Handles Validation
- Handles form state

There's too much code for that, so just check the post_new.js file :).

# ES6 syntax learned
Destructuring: `<input className="form-control" name="title" type="text" {...title} />`  
Here we are getting every prop of title object and sending it to the input props.
