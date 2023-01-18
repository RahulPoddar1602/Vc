import React,{useState,useCallback} from 'react'
import {  useNavigate } from 'react-router-dom'
const HomePage = () => {
    const [roomCode, setRoomCode] = useState('')
    const navigate = useNavigate()
    const handleJoinRoom =useCallback(()=>{
        navigate(`/room/${roomCode}`)
    },[navigate, roomCode])
  return (
    <div>
        <input
         type="text" 
         placeholder='Enter Room Code'
         value={roomCode}
         onChange={(e)=>setRoomCode(e.target.value)}
          />
        <button onClick={handleJoinRoom}>Join</button>
    </div>
  )
}

export default HomePage