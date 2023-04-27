import React from 'react';
import { AppUI } from './AppUI';
import { TodoProvider } from '../TodoContext';

// Esta etiqueta no es html si no jsx, no estamos escribiendo html
function App() {

  
  return (
    <TodoProvider>
        <AppUI 
          

        />    
    </TodoProvider>

  );
}

export default App;
