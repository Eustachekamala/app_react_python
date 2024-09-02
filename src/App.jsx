import Header from './components/Header.jsx'
import Dashboard from './components/Dashboard.jsx'
import FormToys from './components/FormToys.jsx'
import { useState } from 'react'


function App(){
  const [toys, setToys] = useState([])

  function addToy(e){
    e.preventDefault()
    setToys([...toys, {id: toys.length + 1, name: toys.name, image: toys.image, likes: toys.likes}])
  }

    return(
        <>
            <Header />
            <FormToys onAddToy={addToy}/>
            <Dashboard />
        </>
    )
}
export default App