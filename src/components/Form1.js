import { useState, useEffect } from "react";

const Form1 = () => {
// name not persisting in local storage because initial state is set to empty 
//   const [name, setName] = useState("");
// Assign a function that accesses the local storage, retrieve the saved value, and use that value as the default.
const [name, setName] = useState(() => {
    // getting stored value
    const saved = localStorage.getItem("name");
    const initialValue = JSON.parse(saved);
    return initialValue || "";
  });

  useEffect(() => {
    // storing input name
    localStorage.setItem("name", JSON.stringify(name));
  }, [name]);

  return (
    <form>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Full name"
        aria-label="fullname"
      />
      <input type="submit" value="Submit"></input>
    </form>
  );
};

export default Form1;