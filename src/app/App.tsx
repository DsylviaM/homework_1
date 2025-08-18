import MainLayout from '../shared/layouts/MainLayout'
import { factPosts } from "../entities/post/model/mocks/factPosts";

function App() {
    return (
        <div >
            <MainLayout posts={factPosts} />
        </div>
    );

}

export default App