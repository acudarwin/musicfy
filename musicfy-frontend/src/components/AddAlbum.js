import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const AddAlbum = () => {
    const [data, setData] = useState({
      name: '',
      nameArtist: '',
      yearAlbum: '',
    });
    const [error, setError] = useState(null);
    const [file, setFile] = useState(null);
    const [preview, setPreview] = useState("");
    const navigate = useNavigate();
  
    const loadImage = (e) => {
      const image = e.target.files[0];
      setFile(e.target.files[0]);
      setPreview(URL.createObjectURL(image));  
    };
  
    const saveAlbum = async (e) => {
      e.preventDefault();
      let formData = new FormData();
      formData.append("name", data.name);
      formData.append("nameArtist", data.nameArtist);
      formData.append("yearAlbum", data.yearAlbum);
      formData.append("image", file);
      
      try {
        await axios.post("http://localhost:3001/api/albums", formData, {
          headers: {
            "Content-type": "multipart/form-data",
          },
        });
        navigate("/");
        setError(null);
      } catch (error) {
        setError(error)
      }
    };
  
    return (
      <div className="columns is-centered mt-5">
        <Link to="/" className="button is-success">
            Home
       </Link>
        <div className="column is-half">
          <form onSubmit={saveAlbum}>
            {error && <article class="message is-danger">
                        <div class="message-header">
                          <p>{"You must fill in all the required fields or You can not create more albums"}</p>
                          <button class="delete" aria-label="delete"></button>
                        </div>
                      </article>}
            <div className="field">
              <label className="label">Album Name</label>
              <div className="control">
                <input
                  type="text"
                  className="input"
                  value={data.name}
                  onChange={(e) => setData(prev => ({
                    ...prev,
                    name: e.target.value
                  }))}
                  placeholder="Album Name"
                />
              </div>
            </div>

            <div className="field">
              <label className="label">Name Artist</label>
              <div className="control">
                <input
                  type="text"
                  className="input"
                  value={data.nameArtist}
                  onChange={(e) => setData(prev => ({
                    ...prev,
                    nameArtist: e.target.value
                  }))}
                  placeholder="Name Artist"
                />
              </div>
            </div>

            <div className="field">
              <label className="label">Year Album</label>
              <div className="control">
                <input
                  type="text"
                  className="input"
                  value={data.yearAlbum}
                  onChange={(e) => setData(prev => ({
                    ...prev,
                    yearAlbum: e.target.value
                  }))}
                  placeholder="Year Album"
                />
              </div>
            </div>
  
            <div className="field">
              <label className="label">Image</label>
              <div className="control">
                <div className="file">
                  <label className="file-label">
                    <input
                      type="file"
                      className="file-input"
                      onChange={loadImage}
                    />
                    <span className="file-cta">
                      <span className="file-label">Choose a file...</span>
                    </span>
                  </label>
                </div>
              </div>
            </div>
  
            {preview ? (
              <figure className="image is-128x128">
                <img src={preview} alt="Preview Image" />
              </figure>
            ) : (
              ""
            )}
  
            <div className="field">
              <div className="control">
                <button type="submit" className="button is-success">
                  Save
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  };
  
  export default AddAlbum;