import MainLayout from '../shared/layouts/MainLayout'
import { factPosts } from "../entities/post/model/mocks/factPosts";
import { Routing } from './providers/router'

function App() {
    return (
        <div >
            <MainLayout>
                <Routing />
            </MainLayout>
        </div>
    );

}

export default App