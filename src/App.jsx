import { useEffect, useState } from 'react'
import axios from 'axios'

function App() {
  const [data, setData] = useState([])

  const getData = async ()=>{
    const mainData = await axios.get("https://project-backend-8b8h.onrender.com/courses")
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
