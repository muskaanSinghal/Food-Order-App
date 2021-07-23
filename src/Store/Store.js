import React from "react";

const store = React.createContext();

// const StateInitialiser = function (props) {
//   const [value, setValue] = useState(0);

//   return (
//     <React.Fragment>
//       <store.Provider value={{ value: value, setValue: setValue }}>
//         {props.children}
//       </store.Provider>
//     </React.Fragment>
//   );
// };

export default store;
