import CustomInput from './components/UI/CustomInput/CustomInput'

function App() {
   const name = true
   return (
      <div className="App">
         <CustomInput eyes={name} />
         <CustomInput type="text" />
      </div>
   )
}

export default App
