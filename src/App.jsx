
import { useEffect, useState } from 'react'
import './App.css'
import Card from './component/Card'

function App() {
const [like, setLike] = useState(0)
const [share, setShare] = useState(0)
const [save, setSave] = useState(0)




  return (
    <><div className='flex justify-center mx-20 my-10'>

      <Card setLike={setLike} like={like}   share={share} save={save} setSave={setSave} setShare={setShare} />

    </div><div className='flex justify-center gap-3   text-center '>
        <p className='p-3 border rounded-lg '>Like: {like}</p>
        <p className='p-3 border rounded-lg '>Share: {share}</p>
        <p className='p-3 border rounded-lg '>Save: {save}</p>
        {/* {comment.map((a, i) => {
      // return <p key={i}>sdfs{a}</p>
    })} */}
      </div></>
  )
}

export default App
