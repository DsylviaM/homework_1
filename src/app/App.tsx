import MainLayout from '../shared/layouts/MainLayout'
import { factPosts } from "../shared/constants/posts";

function App() {
    return (
        <div >
            <MainLayout posts={factPosts} />
        </div>
    );

}

export default App