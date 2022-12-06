import Head from "./components/Hero";
import Timeline from "./components/Timeline";
import Footer from "./components/Footer";
// import Birthday from "./components/Birthday";
import "./global.css";

function App() {
  return (
    <>
      <Head />
      <Timeline
        title="February 24th, 2021: Born"
        img1="/0/photo1.jpeg"
        img2="/0/photo2.jpeg"
        img3="/0/photo3.jpeg"
        img4="/0/photo4.jpeg"
        bgColor="#fff"
        color="pink"
      />

      <Timeline
        title="2022: Age 1"
        img1="/1/photo1.jpeg"
        img2="/1/photo2.jpeg"
        img3="/1/photo3.jpeg"
        img4="/1/photo4.jpeg"
        bgColor="#fff"
        color="pink"
      />

      <Footer />
    </>
  );
}

export default App;
