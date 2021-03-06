import { NextPage } from "next";
import PageTitle from "../Components/PageTitle";
import Layout from "../Layout/Layout";
import ImageGallery from "react-image-gallery";

const Home: NextPage = () => {
  const sliderImages = [
    {
      original: "/banner (4).jpeg",
    },
    {
      original: "/banner (2).jpeg",
    },
    {
      original: "/banner (3).jpeg",
    },
    {
      original: "/banner (1).jpeg",
    },
    {
      original: "/banner (5).jpeg",
    },
    {
      original: "/banner (6).jpeg",
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
          autoPlay={true}
        />
      </section>
    </Layout>
  );
};

export default Home;
