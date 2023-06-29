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
            Contact
          </h2>
          <form onSubmit={sendEmail} className="form mt-12">
            <input
              className="input"
              type="text"
              required
              name="name"
              placeholder="Enter your name"
            />
            <input
              className="input"
              type="email"
              required
              name="email"
              placeholder="Enter your email"
            />
            <textarea
              className="input"
              name="message"
              required
              placeholder="Enter your message"
            />
            <button type="submit" className="link relative overflow-hidden">
              {loading ? (<svg aria-hidden="true" role="status" className="inline mr-3 w-4 h-4 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB"></path>
    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor"></path>
    </svg>):"Submit"}
    
            </button>
          </form>
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
