import { NextPage } from "next";
import PageTitle from "../Components/PageTitle";
import Layout from "../Layout/Layout";
import ImageGallery from "react-image-gallery";

const Home: NextPage = () => {
  const sliderImages = [
    {
      original: "/banner (4).png",
    },
    {
      original: "/banner (2).png",
    },
    {
      original: "/banner (3).png",
    },
    {
      original: "/banner (1).png",
    },
    {
      original: "/banner (5).png",
    },
    {
      original: "/banner (6).png",
    },
  ];
  return (
    <Layout>
      <PageTitle styleName='large'>Tombul Goril</PageTitle>
      <section style={{ marginBottom: "1rem" }}>
        <ImageGallery
          items={sliderImages}
          showPlayButton={false}
          showFullscreenButton={false}
          showThumbnails={false}
        />
      </section>
    </Layout>
  );
};

export default Home;
