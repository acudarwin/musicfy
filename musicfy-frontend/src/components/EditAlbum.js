import React, { useState, useEffect  } from "react";
import axios from "axios";
import { useParams, useNavigate, Link } from "react-router-dom";

const EditAlbum = () => {

    const [data, setData] = useState({
      name: '',
      nameArtist: '',
      yearAlbum: '',
    });
    
    const [file, setFile] = useState("");
    const [preview, setPreview] = useState("");
    const { id } = useParams();
    const navigate = useNavigate();
  
    useEffect(() => {
        getAlbumById();
    }, []);

    const getAlbumById = async () => {
      const {data} = await axios.get(`http://localhost:3001/api/albums/${id}`);
      setData(data);
      setPreview('http://localhost:3001' + data.imagePath);
      setFile(data.imagePath);
    };

    const loadImage = (e) => {
      const image = e.target.files[0];
      setFile(image);
      setPreview(URL.createObjectURL(image));
    };
  
    const updateAlbum = async (e) => {
      e.preventDefault();
      const formData = new FormData();
      formData.append("name", data.name);
      formData.append("nameArtist", data.nameArtist);
      formData.append("yearAlbum", data.yearAlbum);
      formData.append("image", file);
      
      try {
        await axios.patch(`http://localhost:3001/api/albums/${id}`, formData, {
          headers: {
            "Content-type": "multipart/form-data",
          },
        });
        navigate("/");
      } catch (error) {
        console.log(error);
      }
    };
  
    return (
      <div className="columns is-centered mt-5">
        <Link to="/" className="button is-success">
            Home
       </Link>
        <div className="column is-half">
          <form onSubmit={updateAlbum}>
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
                  onChange={(e) =>  setData(prev => ({
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
                  Update
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  };
  
  export default EditAlbum;