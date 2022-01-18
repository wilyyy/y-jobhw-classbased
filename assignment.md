## REACT Assignment

#### NOTE: need to install https://styled-components.com/docs/basics#installation and https://ant.design/docs/react/introduce#Installation using YARN or NPM. Don't forget to commit the package.json and package-lock.json files

1. Create a new component (Class component) named `StyledCounter` where you display the value of the counter from the store
2. In `StyledCounter` use `style-components` to add the main element. Add some formatting: border, font-size, color, background-color
3. Pass one property (isOdd) to the `StyledCounter` and when that prop is true (counter value is an odd number), set CSS color as green (styled-components adapting technique)
4. Create a second component (Class component) named `AntDesignCounter` where you will use this UI library https://ant.design/components/overview/
5. In here you are going to create a second version of the counter but using this 3 components from that antdesign library: Card: https://ant.design/components/card/ , Typography: https://ant.design/components/typography/ and Button: https://ant.design/components/button/
6. Add `Typography` component to display the counter value and `Button` component to reset the counter value to 0 using a new reducer in file components/counter/counterSlice.js (don't care about extra styling here)
7. Need to use React constructor and lifecycles: constructor, componentDidMount (to set the timer), componentWillUnmount (to remove the timer). 
8. Add a single state value (Array) named `counterHistory` and push it to that array the counter value (from the store). Do this using setTimeout every 2 seconds. Display this array in a simple list (using ul and li). Slice the array to display only the last 10 values.

### NOTE: Add every task as a different commit: Assignment 1, Assignment 2, etc


Please resend this as a compressed file or push this to your own repo and send us the link 