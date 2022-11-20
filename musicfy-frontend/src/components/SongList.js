import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate, Link } from "react-router-dom";

const SongList = () => {
  const [error, setError] = useState(null);
  const [songs, setSong] = useState([]);
  const [name, setName] = useState("");
  const [currentSong, setCurrentSong] = useState({});
  const { id } = useParams();

  
  useEffect(() => {
    getSongs();
  }, []);
 
  const getSongs = async () => {
    const {data} = await axios.get(`http://localhost:3001/api/songs/id/${id}`);
    setSong(data);
  };
 
  const saveSong = async (e) => {
    e.preventDefault();
   
    try {
      await axios.post("http://localhost:3001/api/songs", {
        name: name,
        albumId: id,
      }, {
        headers: {
          "Content-type": "application/json",
        },
      });
      await getSongs();
      setName("");
      setError(null);
    } catch (error) {
      setError(error);
    }
  };

  const updateSong = async (song) => {
    setCurrentSong(song);
  }

  const saveUpdateSong = async (id) => {
    try {
        if (id === currentSong.id) {
          await axios.patch(`http://localhost:3001/api/songs/${id}`, {
          name: currentSong.name,
          }, {
            headers: {
              "Content-type": "application/json",
            },
          });
          await getSongs();
          setCurrentSong({});
        }
        
      } catch (error) {
        setCurrentSong({});
      }
  }

  const deleteSong = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/api/songs/${id}`);
      getSongs();
    } catch (error) {
      console.log(error);
    }
  };
 
  return (
    <div className="container mt-5">
        <Link to="/" className="button is-success">
            Home
        </Link>
        <div className="columns mt-5">
            <div className="column is-half">
            <form onSubmit={saveSong}>
            {error && <article class="message is-danger">
                        <div class="message-header">
                          <p>{"You must fill in all the required fields"}</p>
                          <button class="delete" aria-label="delete"></button>
                        </div>
                      </article>}
              <div className="field">
                <label className="label">Song Name</label>
                <div className="control">
                  <input
                    type="text"
                    className="input"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Song Name"
                  />
                </div>

              </div>
              
              <div className="field">
                <div className="control">
                  <button type="submit" className="button is-success">
                    Add New Song
                  </button>
                </div>
              </div>
            </form>
                    
                <table className="table is-striped is-fullwidth mt-2">
                    <thead>
                        <tr>
                        <th>No</th>
                        <th>Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {songs.map((song, index) => (
                        <tr key={song.id}>
                            <td>{index + 1}</td>
                            <td>{currentSong.id !== song.id && song.name} 
                              {currentSong.id === song.id && <input className="input" type="text" value={currentSong.name} onChange={(e) => setCurrentSong({...currentSong, name: e.target.value})} />}
                            </td>

                            <td>
                            <div class="buttons">
                            {currentSong.id !== song.id && <button
                                onClick={() => updateSong(song)}
                                className="button is-warning is-hovered small"
                            >
                                Edit
                            </button>}
                            {currentSong.id === song.id && <button
                                onClick={() => saveUpdateSong(song.id)}
                                className="button is-success is-hovered small"
                            >
                                Save
                            </button>}
                            <button
                                onClick={() => deleteSong(song.id)}
                                className="button is-danger small"
                            
                            >
                                Delete
                            </button>
                            </div>
                            </td>
                        </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    </div>
  );
};
 
export default SongList;