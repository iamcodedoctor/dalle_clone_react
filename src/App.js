import { BrowserRouter, Link, Routes, Route } from 'react-router-dom'
import { Home, CreatePost } from './pages'

function App() {
    return (
        <BrowserRouter>
            <header className="w-full flex justify-between items-center bg-white sm:px-8 px-4 py-4 ">
                <Link to="/">
                    <p className="text-2xl">Open AI</p>
                    {/* w-28 object-contained */}
                </Link>
                <Link
                    to="/create-post"
                    className="font-inter font-medium text-white px-4 py-2 rounded-md bg-[#6666EA]"
                >
                    Create
                </Link>
            </header>
            <main className="sm:p-8 px-4 py-8 w-full bg-[#F1EFEE] min-h-[calc(100vh-73px)]">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/create-post" element={<CreatePost />} />
                </Routes>
            </main>
        </BrowserRouter>
    )
}

export default App
