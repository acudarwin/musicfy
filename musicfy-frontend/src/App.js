import {BrowserRouter, Routes, Route} from 'react-router-dom';
import AlbumList from './components/AlbumList';
import AddAlbum from './components/AddAlbum';
import EditAlbum from './components/EditAlbum';
import SongList from './components/SongList';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AlbumList />} />
        <Route path="/add" element={<AddAlbum />} />
        <Route path="/edit/:id" element={<EditAlbum />} />
        <Route path="/songs/id/:id" element={<SongList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
