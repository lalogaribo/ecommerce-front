import React from "react";
import { FeaturedCollection } from "../featured-collection/FeaturedCollection";
import { Hero } from "../hero/Hero";
import MainSection from "../main-section/MainSection";
import { Layout } from "../shared/Layout";

export const HomePage = () => {
  return (
    <>
      <Layout>
        <Hero />
        <MainSection />
        <FeaturedCollection />
      </Layout>
    </>
  );
};
