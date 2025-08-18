import type { Route } from "./+types/home";
import Navbar from "~/components/Navbar";
import {resumes} from "../../constants";
import  ResumeCard from "~/components/ResumeCard";


export function meta({}: Route.MetaArgs) {
  return [
    { title: "Resumind" },
    { name: "description", content: "Smart Feedback for your job" },
  ];
}

export default function Home() {

  return <main className="bg-[url('./images/bg-main.svg')] bg-cover">
      <Navbar/>

<section className="main-section">
    <div className="page-heading">
     <h1>
         Track Your Applications & Resume Ratings
     </h1>
        <h2>
        Review your submission and check AI-powered feedback.
        </h2>
    </div>
    {
        resumes.length > 0 &&  (
            <div className="resumes-section">
                {resumes.map((resume)=>(
                    <div>
                        <ResumeCard key={resume.id} resume={resume} />
                    </div>
                ))}
            </div>
        )
    }
</section>



  </main>
}
