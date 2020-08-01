1. What problem does the context API help solve?
Context Api help us to share data across all levels of the application and resolve the prop drilling problem

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
Actions: the code used to describe what changes will take effect in the Application Store
Reducers: is a pure function that takes a prev state value and an action and returns the new state with the proper changes.
Store: contains the whole state values for the application, the only way to change it is using dispatch with action on it. and this is why is called single source of truth cause it can only being changed in one place, the reducer

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?
Application State is a general state accessible from all the app, and component state is more a local state within that component that is not accessible for other components unless the state is passed down in form of props

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
thunk allow us to use dispatch into our action-creators at our will, we can make more than one dispatch in the same action.

1. What is your favorite state management system you've learned and this sprint? Please explain why!
i think i prefer to use ContextAPI, i see it more intuitive and i don't like the way we need to set up Redux and all the code we need to write to start using it, i think ContextAPI is more straight forward and fast to work with