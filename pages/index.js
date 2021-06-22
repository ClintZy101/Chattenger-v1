import { getSession } from 'next-auth/client';
import Head from 'next/head'
import Channel from '../components/Channel';
import Header from '../components/Header';
import Login from '../components/Login';
import MessageInput from '../components/MessageInput';



export default function Home({ session }) {

  if (!session) return <Login />;

  return (
    <div className="bg-purple-50" >
      <Head>
        <title>Next Chat</title>
      </Head>

      <div className="top-0 sticky z-10">
      <Header  />
      <MessageInput />
      </div>
      

      
      <Channel />




    </div>
  )
}


export async function getServerSideProps(context) {
  const session = await getSession(context);

  return {
    props: {
      session
    }
  }
}