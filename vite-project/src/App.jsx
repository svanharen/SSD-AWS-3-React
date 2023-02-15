import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'

//Components
import ImageList from './components/ImageList'

export default function App() {
  const [file, setFile] = useState()
  const [description, setDescription] = useState("")
  const[imageName, setImageName] = useState()
  const[images, setImages] = useState([])

  useEffect(() => {
    async function getImages() {
      const result = await axios.get('/api/images')
      console.log(result.data.images)
      setImages(result.data.images)
    }
    getImages()
  }, [])

  const submit = async event => {
    event.preventDefault()

    // Send the file and description to the server
    const formData = new FormData()
    formData.append("image", file)
    formData.append("description", description)

    const result = await axios.post('/api/images', formData, { headers: {'Content-Type': 'multipart/form-data'}})
    setImageName(result.data.imageName)
  }

  return (
    <div className="App">
      <form onSubmit={submit}>
        <input
          filename={file} 
          onChange={e => setFile(e.target.files[0])} 
          type="file" 
          accept="image/*"
        ></input>
        <input
          onChange={e => setDescription(e.target.value)} 
          type="text"
        ></input>
        <button type="submit">Submit</button>
      </form>
      <ImageList images={images} />
    </div>
  )
}