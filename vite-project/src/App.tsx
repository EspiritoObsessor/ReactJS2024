import { Button, ButtonCont } from './components/buttons';

import './App.css'

const colors = {
  primary:    "#2F4F4F",
  secundary:  "teal",
  tertiary:   "#8FBC8F",

  p2:         "#C71585",
  s2:         "#FF1493",
  t2:         "#DDA0DD",
}

function App() {
  return (
    <>
      <div className="btnText">
        <Button texto='Bom dia!' cor={colors.primary} corTexto={'white'} />
        <Button texto='Boa tarde!' cor={colors.secundary} corTexto={'white'} />
        <Button texto='Boa noite!' cor={colors.tertiary} corTexto={'white'} />
      </div>

      <div className="btnCont">
        <ButtonCont initNumber={0} razao={1} cor={colors.p2}/>
        <ButtonCont initNumber={5} razao={-5} cor={colors.s2}/>
        <ButtonCont initNumber={-5} razao={5} cor={colors.t2}/>
      </div>

    </>
  )
}

export default App
