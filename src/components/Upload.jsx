import { upload } from '@testing-library/user-event/dist/upload'
import React,{useState} from 'react'
import './upload.css'

export default function Upload () {
  const [uploadData, setUploadData] = useState({
    title:"",
    description:"",
    ingredients:[],
    instructions:""
  })
  return (
    <>
    <div className='form_container'>
    <h1>Content Model</h1>
    <form method="POST" action="http://localhost:3000/upload" encType="multipart/form-data">
    <label htmlFor="title">Title:</label>
    <input type="text" name="title" placeholder="Title" maxLength="255" required/>
    <label htmlFor="description">Description:</label>
    <input type="text" name="description" placeholder="Description" maxLength="255" required/>
    <label htmlFor="ingredients">Ingredients:</label>
    <input type="text" name="ingredients" placeholder="Ingredients" required/>
    <label htmlFor="instructions">How to make it</label>
    <textarea name="instructions" placeholder="Instructions" required></textarea>
    <label htmlFor="mainImage">MainImage:</label>
    <input type="file" name="mainImage" id="imageUpload" accept="image/*" required/>
    <button type="submit">Submit here</button>
</form>
</div>
    </>
  )
}
