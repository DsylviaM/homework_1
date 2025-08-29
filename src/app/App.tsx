import MainLayout from '../shared/layouts/MainLayout'
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