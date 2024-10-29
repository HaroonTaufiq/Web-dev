import "./App.css";
// import ListGroup from "./components/ListGroup";
// import Alert from "./components/Alert";
// import Button from "./components/Button";
// import { Updating_objects } from "./components/Updating_objects";
// import {Updating_nestedObjects} from "./components/Updating_nestedObjects";
// import { Updating_arrarys } from "./components/Updating_arrarys";
// import { Updating_objectsonArray } from "./components/Updating_objectsonArray";
// import  {Navbar}  from "./components/Navbar";
// import  {Cart}  from "./components/Cart";
import { Expandable_textComponent } from "./components/Expandable_textComponent";
// import { useState } from "react";

function App() {
  // const items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

  // const [ cartItems, setCartItems ] = useState([
  //   'Product1', 'Product2', 'Product3']);



  // const [alertVisible, setAlertVisibility] = useState(false);

  // const handleSelectItem = (item: string) => {
  //   console.log(item);
  // };

  return (
    <div>
      {/* <ListGroup
        heading="Cities"
        items={items}
        onSelection={handleSelectItem}
      />

      {alertVisible == true && < Alert onClose={() => setAlertVisibility(false)}>
        Alert
      </Alert>}

      <Button color="primary" onClick={() => setAlertVisibility(true)}>
        Alert Button
      </Button> */}

        {/* <Updating_objects /> */}
        {/* <Updating_nestedObjects/> */}
        {/* <Updating_arrarys/> */}
        {/* <Updating_objectsonArray/> */}

        {/* <Navbar cartItemsCount={cartItems.length}/>
        <Cart cartItems={cartItems} onClear={() => setCartItems([])}/> */}
        <Expandable_textComponent/>
    </div>
  );
}

export default App;
