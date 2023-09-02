import { Modal } from "../../components/home/Modal";
import { Layout } from "../../components/layout";

function HomePage() {
  return (
    <Layout>
      <h1 className="text-3xl">All workflows</h1>
      <Modal />
    </Layout>
  );
}

export default HomePage;
