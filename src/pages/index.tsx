import { ContactsList } from 'src/components/Contacts'

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
