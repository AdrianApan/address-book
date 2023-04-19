import ContactsList from 'src/components/ContactsList/ContactsList'

import Head from 'src/components/Head'
import Layout from 'src/layouts/default'

const Home = () => {
  return (
    <>
      <Head />
      <Layout>
        <ContactsList />
      </Layout>
    </>
  )
}

export default Home
