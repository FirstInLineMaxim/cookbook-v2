import React from 'react'
import './upload.css'

export default function Upload () {
  return (
    <>
    <div className='form_container'>
    <h1>Content Model</h1>
    <form method="POST" action="http://localhost:3000/upload" enctype="multipart/form-data">
    <label for="title">Title:</label>
    <input type="text" name="title" placeholder="Title" maxlength="255" required/>
    <label for="description">Description:</label>
    <input type="text" name="description" placeholder="Description" maxlength="255" required/>
    <label for="ingredients">Ingredients:</label>
    <input type="text" name="ingredients" placeholder="Ingredients" required/>
    <label for="instructions">How to make it</label>
    <textarea name="instructions" placeholder="Instructions" required></textarea>
    <label for="mainImage">MainImage:</label>
    <input type="file" name="mainImage" id="imageUpload" accept="image/*" required/>
    <button type="submit">Submit here</button>
</form>
</div>
    </>
  )
}
