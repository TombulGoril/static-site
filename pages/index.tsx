import { NextPage } from "next";
import PageTitle from "../Components/PageTitle";
import Layout from "../Layout/Layout";
import ImageGallery from "react-image-gallery";

const Home: NextPage = () => {
  const sliderImages = [
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
