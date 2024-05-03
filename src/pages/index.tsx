import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Blob from "../../components/Blob/Blob";
import Typewriter from "../../components/Typewriter";
import Project from "../../components/Project/Project";
import Parallax from "../../components/Parallax";
import emailjs from "@emailjs/browser";
import client from "@/hooks/sanity";
import { useEffect, useState } from "react";
let message = "";

async function getProjects() {
  const projects = await client.fetch(
    `*[_type == "projects"]{"imageUrl": image.asset->url,name,link,description}`
  );
  return projects;
}

const inter = Inter({ subsets: ["latin"] });

export default function Home({ projects }:{projects:Project[]}) {

  function sendEmail(e: any) {
    e.preventDefault();
    setLoading(true)
    emailjs
      .sendForm(
        process.env.NEXT_EMAIL_SERVICE||"service_9wr4st9",
        "template_9bxgq3t",
        e.target,
        process.env.NEXT_EMAIL_SECRET||"kEDU61bozJ8RGniyY"
      )
      .then(
        (result: any) => {
          e.target.reset();
          setLoading(false)
          setTimeout(() => (message = ""), 3000);
        },
        (error: any) => {
          console.log("FAILED...", error.text);
        }
      );
  }

  const [windowAvailable,setWindow] = useState(false);
  const [loading,setLoading] = useState(false);

  useEffect(() => {
    if(window){
      setWindow(true);
    }
  },[])

  return (
    <>
      <Head>
        <title>Mahaveer Amrani</title>
        <meta
          name="description"
          content="I am an experienced web developer with a passion for building dynamic, responsive web applications. My skills include expertise in React, Node.js, MySQL, and Svelte, and I stay on top of the latest web development trends to deliver cutting-edge solutions to my clients."
        />
        <meta name="msvalidate.01" content="CEBFB380C8F6675127356EB2BD2B353A" />
        <meta property="og:image" content="/mahaveer.jpeg"></meta>
        <meta property="og:image:width" content="1200"></meta>
        <meta name="google-site-verification" content="sIb_6pn3SEuVd-r3vJnNpuHXaq4l7FVxU_5I35LE5_k" />
        <meta property="og:image:height" content="630"></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          property="og:image:alt"
          content="Depiction of Mahaveer Amrani"
        ></meta>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Blob />
      <main className={styles.main}>
        <Parallax intensity={-0.3}>
          <div className="h-[100vh] flex justify-center items-center flex-col ">
            <h1
              className="text-4xl md:text-7xl text-center mb-6 glow"
              style={{ fontFamily: "Oracle" }}
            >
              <Typewriter text="Mahaveer Amrani" />
            </h1>
            <article className="w-[80%] text-center">
              I am a web developer with 4 years of experience. My expertise
              includes using React, Node.js, MySQL,Nextjs and Svelte to build
              responsive and dynamic web applications. I am dedicated to staying
              up-to-date with the latest web development trends and technologies
              to deliver high-quality and efficient solutions to my clients.
            </article>
          </div>
        </Parallax>
        <Parallax intensity={0.04}>
        <div className="w-[80%] mx-auto mb-[200px]">
          <h2 className="text-3xl" style={{ fontFamily: "Oracle" }}>
            Skills
          </h2>
          <div className="flex flex-wrap w-full gap-2 mt-10">
            <div className="rounded bg-[rgba(255,255,255,.2)] w-[100px] h-[50px] flex justify-center items-center">
              Reactjs
            </div>
            <div className="rounded bg-[rgba(255,255,255,.2)] w-[100px] h-[50px] flex justify-center items-center">
              Express
            </div>
            <div className="rounded bg-[rgba(255,255,255,.2)] w-[100px] h-[50px] flex justify-center items-center">
              Nestjs
            </div>
            <div className="rounded bg-[rgba(255,255,255,.2)] w-[100px] h-[50px] flex justify-center items-center">
              Sveltekit
            </div>
            <div className="rounded bg-[rgba(255,255,255,.2)] w-[100px] h-[50px] flex justify-center items-center">
              Nextjs
            </div>
            <div className="rounded bg-[rgba(255,255,255,.2)] w-[100px] h-[50px] flex justify-center items-center">
              SQL
            </div>
            <div className="rounded bg-[rgba(255,255,255,.2)] w-[100px] h-[50px] flex justify-center items-center">
              MongoDb
            </div>
            <div className="rounded bg-[rgba(255,255,255,.2)] w-[100px] h-[50px] flex justify-center items-center">
              Html
            </div>
            <div className="rounded bg-[rgba(255,255,255,.2)] w-[100px] h-[50px] flex justify-center items-center">
              Css
            </div>
            <div className="rounded bg-[rgba(255,255,255,.2)] w-[100px] h-[50px] flex justify-center items-center">
              Tailwind
            </div>
          </div>
        </div>
        </Parallax>
          <Project projects={projects} />
        <div className="w-[80%] mx-auto mt-[80px]">
          <h2 className="text-3xl" style={{ fontFamily: "Oracle" }}>
            Contact: amrani.mahaveer223@gmail.com
          </h2>
        </div>
        <footer className="flex justify-center w-full bg-[rgba(255,255,255,.08)] p-3 mt-14">
          © Mahaveer Amrani
        </footer>
      </main>
    </>
  );
}

export async function getStaticProps(context:any) {
  const projects = await getProjects();
  return {
    props: {
      projects,
    }, // will be passed to the page component as props
    revalidate: 60 * 60 * 24,
  };
}
