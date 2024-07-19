import { useEffect, useState } from 'react'
import axios from 'axios'
//import dotenv from 'dotenv'

//dotenv.config();

function App() {
  const [data, setData] = useState([])

  const newEnv = import.meta.env;
  const getData = async ()=>{
    const mainData = await axios.get(newEnv.VITE_URL)
    console.log(mainData.data)
    setData(mainData.data)
  }

  useEffect(()=>{
    getData()
  }, [])

  return (
    <>
    <table border={1}>
      <tr>
        <th>Id</th>
        <th>courseName</th>
      </tr>
      {
        data.map((val, index)=>{
          return(
            <tr key={val.id}>
              <td>{index+1}</td>
              <td>{val.courseName}</td>
            </tr>
          )
        })
      }
    </table>
      
    </>
  )
}

export default App
