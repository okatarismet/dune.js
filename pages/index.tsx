import Layout from '../components/Layout';

export default function Home({ }) {

    return (
        <>
            <Layout title="Dune.js">

            </Layout>
        </>
    );
}
export const getServerSideProps = async () => {

    return {
        redirect: {
            permanent: false,
            destination: '/dashboard'
        }
    }
}