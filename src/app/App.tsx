import { factPosts } from "../entities/post/model/mocks/types";
import MainLayout from '../shared/layouts/MainLayout'
import Footer from '../widgets/LayoutFooter/Footer'
import Header from '../widgets/LayoutHeader/Header'
import PostList from '../widgets/PostList/PostList'

function App() {
    return(
    <MainLayout
      header={<Header title="My Application for homework 3" />}
      footer={<Footer />}
      posts={factPosts}
    >
       <PostList />  
    </MainLayout>)
}

export default App