import React from 'react'

const App = () => {
  const [dark, setDark] = React.useState(localStorage.getItem('dark-mode') === 'true');

  React.useEffect(() => {
    localStorage.setItem('dark-mode', dark);
  }, [dark]);

  const toggleDarkMode = () => {
    setDark(!dark);
  };

  return (
    <div className={`app-wrapper ${dark ? 'dark' : ''}`}>
     <button className="dark-mode-toggle" onClick={toggleDarkMode}>
       <img src="https://felixgerschau.com/logos/lightbulb.svg" height="100px" width="100px"/>
       <h2>Click me!</h2>
     </button>
    </div>
  );
};

export default App;