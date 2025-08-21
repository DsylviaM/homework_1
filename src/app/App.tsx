import MainLayout from '../shared/layouts/MainLayout'
import Footer from '../widgets/LayoutFooter/Footer'
import Header from '../widgets/LayoutHeader/Header'
import PostList from '../widgets/PostList/PostList'

function App() {
    return(
    <MainLayout
      header={<Header title="My Application for homework 1" />}
      footer={<Footer />}
    >
       <PostList />  
    </MainLayout>)
}

export default App