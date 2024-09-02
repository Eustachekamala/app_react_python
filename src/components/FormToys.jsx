import { useState } from 'react'
import DataSaverOnIcon from '@mui/icons-material/DataSaverOn';

function FormToys(){ 
    const [name, setName] = useState('')
    const [image, setImage] = useState('')
    const [likes, setLikes] = useState('')

    function handleSubmit(e){
        e.preventDefault()
        console.log(name, image, likes)
    }

    return( 
        <>
            <h1 className='text-2xl text-center py-2 font-bold'>Form Toys</h1>
            <form onSubmit={handleSubmit} className='flex flex-col gap-2 justify-center items-center m-2 border p-8 border-gray-300 rounded-lg'>
                <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} className='border-2 border-gray-300 rounded-lg p-2 w-full' />
                <input type="text" placeholder="Image" value={image} onChange={(e) => setImage(e.target.value)} className='border-2 border-gray-300 rounded-lg p-2 w-full' />
                <input type="text" placeholder="Likes" value={likes} onChange={(e) => setLikes(e.target.value)} className='border-2 border-gray-300 rounded-lg p-2 w-full' />
                <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full'>
                    <DataSaverOnIcon/>
                </button>
            </form>
        </>
    )
}

export default FormToys