import './App.css';
import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';
import Tabla from './Componentes/Tabla';

function App() {
  return (
    <MantineProvider>
      <Tabla />
    </MantineProvider>
  )
}

export default App
