import React, {useState, useEffect} from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const AlbumList = () => {
    const [albums, setAlbums] = React.useState([]);
    
    useEffect(() => {
        getAlbums();
    }, []);

    const getAlbums = async () => {
        const {data} = await axios.get("http://localhost:3001/api/albums?limit=20&page=1");
        setAlbums(data.data);
    };

    const deleteAlbum = async (albumId) => {
        try {
          await axios.delete(`http://localhost:3001/api/albums/${albumId}`);
          getAlbums();
        } catch (error) {
          console.log(error);
        }
      };

  return (
    <div className="container mt-5">
        <Link to="/add" className="button is-success">
            Add New
       </Link>
        <div className="columns is-multiline mt-2">
            {albums.map(album => (
                <div className="column is-one-quarter" key={album.id}>
                    <div class="card">
                        <div class="card-image">
                            <figure class="image is-4by3">
                                <img src={'http://localhost:3001' + album.imagePath} alt="Image"/>
                            </figure>
                        </div>
                        <div class="card-content">
                            <div class="media">
                                <div class="media-content">
                                    <p class="title is-4">{album.name}</p>
                                    <p class="subtitle is-6">{album.nameArtist}</p>
                                    <p class="subtitle is-6">{album.yearAlbum}</p>
                                </div>
                            </div>
                        </div>
                    
                        <footer className="card-footer">
                            <Link to={`edit/${album.id}`} className="card-footer-item">Edit</Link>
                            <a 
                                onClick={() => deleteAlbum(album.id)}
                                className="card-footer-item">
                                Delete
                            </a>
                            <Link to={`songs/id/${album.id}`} className="card-footer-item">Songs</Link>
                        </footer>
                    </div>
                </div>
            ))}
        </div>
    </div>
  );
};

export default AlbumList