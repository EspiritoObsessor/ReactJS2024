import Button from './components/button';

import './App.css'

function App() {
  const Juros = () => {
    alert('Juros');
  }

  return (
    <>
      <button onClick={Juros}>Juros Compostos</button>
      <Button name='Jamal Olinda'
              age={45}
              gender='Masculinio'
              email='oie@gmail.com'
              saudar={Juros}
      />
    </>
  )
}

export default App
