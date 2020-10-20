import { NextPage } from "next";
import PageTitle from "../Components/PageTitle";
import Layout from "../Layout/Layout";
import ImageGallery from "react-image-gallery";

const Home: NextPage = () => {
  return (
    <Layout>
      <PageTitle styleName='large'>Tombul Goril</PageTitle>
      <ImageGallery
        items={[
          {
            thumbnail: "/logo.jpeg",
            original: "/logo.jpeg",
          },
          {
            thumbnail: "/logo.jpeg",
            original: "/logo.jpeg",
          },
          {
            thumbnail: "/logo.jpeg",
            original: "/logo.jpeg",
          },
          {
            thumbnail: "/logo.jpeg",
            original: "/logo.jpeg",
          },
          {
            thumbnail: "/logo.jpeg",
            original: "/logo.jpeg",
          },
        ]}
      ></ImageGallery>
    </Layout>
  );
};

export default Home;
