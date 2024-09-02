import axios from 'axios'
import { useState, useEffect } from 'react'
import AddIcon from '@mui/icons-material/Add';


function Dashboard(){
    const [toys, setToys] = useState([])
    
    const FetchAPI = async () => {
        const res = await axios.get('http://172.30.38.207:8080/api/toys')
        setToys(res.data.toys)
    }

    useEffect(() => {
        FetchAPI()
    },[])

    function addToy(e){
        e.preventDefault()
        setToys([...toys, {id: toys.length + 1, name: 'New Toy', image: 'https://cdn140.picsart.com/244090226021212.png?r1024x1024', likes: 20}])
    }
    
    return(
        <div className="flex flex-col gap-4 justify-center items-center pb-4">
            <h1 className='text-center text-2xl font-bold py-2'>Toys List</h1>
            <div className="flex flex-wrap gap-4 justify-center items-center">
                {toys.map((toy, index) => (
                    <div className="flex flex-col gap-2 justify-center items-center w-44 p-4  border-2 border-gray-300 rounded-lg  hover:scale-110" key={index}>
                        <img src={toy.image} alt={toy.name} className="w-32 h-32 rounded-full" />
                        <div className="flex flex-col gap-1 justify-center items-center">
                            <h2 className='text-center text-xl font-bold'>{toy.name}</h2>
                            <p>{toy.likes}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className='flex flex-col gap-2 justify-center items-center'>
                <button onClick={addToy} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full'>
                    <AddIcon />
                </button>
            </div>
        </div>
    )
}
export default Dashboard