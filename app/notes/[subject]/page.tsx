"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Download, Eye, BookOpen } from "lucide-react"
import { useEffect, useRef } from "react"
import Link from "next/link"
import { useParams } from "next/navigation"

export default function SubjectNotesPage() {
  const sectionRef = useRef<HTMLElement>(null)
  const params = useParams()
  const subject = params.subject as string

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up")
          }
        })
      },
      { threshold: 0.1 },
    )

    const cards = sectionRef.current?.querySelectorAll(".pdf-card")
    cards?.forEach((card) => observer.observe(card))

    return () => observer.disconnect()
  }, [])

  const subjectData: Record<string, any> = {
    rgpv: {
      name: "RGPV",
      icon: "🎓",
      color: "from-teal-500 to-teal-600",
      description: "Rajiv Gandhi Proudyogiki Vishwavidyalaya study materials and resources",
      pdfs: [
        { title: "Big Data", file: "/BIG_DATA_SHIVANI.pdf", size: "2.5 MB" },
        { title: "Basic Mechanical Engineering", file: "https://drive.google.com/file/d/12AsXDuaNO7LEl1mDiZuJtzmFJdtRM8eN/view?usp=drive_link", size: "3.2 MB" },
        { title: "Basic Mechanical Engineering Handwritten", file: "https://drive.google.com/file/d/1ksr0dXOsgqPhg0xAxVZzk5tX17QQxjAB/view?usp=drive_link", size: "3.2 MB" },
        { title: "Cryptography & Information Security", file: "https://drive.google.com/file/d/1cOVREDDjwnCtyeH2Prmrf97keVdAkees/view?usp=drive_link", size: "4.1 MB" },
        { title: "Cyber Security", file: "https://drive.google.com/file/d/1OQkeQsWBuLindkyjIoX8MIW-sfORjKyo/view?usp=drive_link", size: "4.1 MB" },
        { title: "Cyber Security Handwritten", file: "https://drive.google.com/file/d/1L7zOUpfL8w-6lVjXqjno_zAdR_cmJwmM/view?usp=drive_link", size: "4.1 MB" },
        { title: "Data Mining & Warehousing", file: "https://drive.google.com/file/d/1rQQsSOjazH0FSXQXLYVey7EJqK1SjyPS/view?usp=drive_link", size: "4.1 MB" },
        { title: "Data Structure", file: "https://drive.google.com/file/d/1YU96aqbMzBkkvtMd-6q2pGa0psdYULbM/view?usp=drive_link", size: "4.1 MB" },
        { title: "Data Structure Handwritten", file: "https://drive.google.com/file/d/1KGTa7B1gCuCi8u5uucnpuuZDOa_EIv3F/view?usp=drive_linkf", size: "4.1 MB" },
        { title: "Database Management System", file: "https://drive.google.com/file/d/17B888NaSy_dh1pI_aloZHnrf5TkAYlY0/view?usp=drive_link", size: "4.1 MB" },
        { title: "Database Management System Handwritten", file: "https://drive.google.com/file/d/1ptWQABOezlpCK_KpFFnjP9cswvbtZDMG/view?usp=drive_link", size: "4.1 MB" },
        { title: "Digital System", file: "https://drive.google.com/file/d/1jtL4PpDx0_-kpM5jCJ9i9tU6ljqP2MEh/view?usp=drive_link", size: "4.1 MB" },
        { title: "Discrete Sturcture", file: "https://drive.google.com/file/d/1bUEL4acnG6GIchCOYDEZy0mEjHMD1i8p/view?usp=drive_link", size: "4.1 MB" },
        { title: "Discrete Structure Handwritten", file: "https://drive.google.com/file/d/1kZuK1RuVsckZs1iJl4nOeuR9IPMVpdhj/view?usp=drive_link", size: "4.1 MB" },
        { title: "Energy and Environmental Engineering", file: "https://drive.google.com/file/d/192eJ3k4Fzf1G4fBCPRT-fNw3b8caajEY/view?usp=drive_link", size: "4.1 MB" },
        { title: "Internet & Web Technology", file: "https://drive.google.com/file/d/1rmcWiE9yJeRNNwzWRCAgB9_FLe4YHZgM/view?usp=drive_link", size: "4.1 MB" },
        { title: "Internet & Web Technology Handwritten", file: "https://drive.google.com/file/d/1f-YAwLyMruiW1tjJ7PiuZFj2QMjMybzS/view?usp=drive_link", size: "4.1 MB" },
        { title: "Machine Learning", file: "https://drive.google.com/file/d/1etwhQzG582Y-UFeRnO-cZBm_vzv_w-Ht/view?usp=drive_link", size: "4.1 MB" },
        { title: "Machine Learning Handwritten", file: "https://drive.google.com/file/d/1m9uICjLEyfSjjqOY5uVYOMMSdsaF_1sA/view?usp=drive_link", size: "4.1 MB" },
        { title: "Object Oriented Programming & Methodology", file: "https://drive.google.com/file/d/10ztlbeNfDhwvWUsQA_4OfhfypnVS4qWZ/view?usp=drive_link", size: "4.1 MB" },
        { title: "Operating System", file: "https://drive.google.com/file/d/1rspyVM_Af34FI3xN1APRQb9k8ZH7giSQ/view?usp=drive_link", size: "4.1 MB" },
        { title: "Operating System Handwritten", file: "https://drive.google.com/file/d/1ZqO-6woUN-QWFCAj6XfT_z_JYjGsMUdc/view?usp=drive_link", size: "5.8 MB" },
        { title: "Engineering Physics", file: "https://drive.google.com/file/d/1Jb2EPgjfbQWfExpmQMXy2sYERm9kwgF0/view?usp=drive_link", size: "5.8 MB" },
        { title: "Engineering Physics Handwritten", file: "https://drive.google.com/file/d/1dboIxCymZWXT5K-eZNiIe8gdj2vZAcof/view?usp=drive_link", size: "5.8 MB" },
        { title: "Project Management", file: "https://drive.google.com/file/d/1hbbJgTpwOFULbx8i3ack21mOnC1Qdcas/view?usp=drive_link", size: "5.8 MB" },
        { title: "Software Architecture", file: "https://drive.google.com/file/d/1nbrH-BXXW9_fmdSg55XvzgAiambX5DEy/view?usp=drive_link", size: "5.8 MB" },
        { title: "Theory of Computation", file: "https://drive.google.com/file/d/1jhnSA-S94pFmh9B-yBAYJKqwt91nwe4P/view?usp=drive_link", size: "5.8 MB" },
        { title: "Analysis and Design of Algorithm", file: "https://drive.google.com/file/d/1T0e0umjasO_UG_HRnlZm-yfgM6LI7aOL/view?usp=sharing", size: "5.8 MB" },
        { title: "Basic Civil Engineering & Engineering Mechanics", file: "https://drive.google.com/file/d/1phdrjygcYwm9wfwKz4RArFtAXpmYDwyV/view?usp=drive_link", size: "5.8 MB" },
        { title: "Basic Computer Engineering", file: "https://drive.google.com/file/d/1eK4VvcshOcoAvZyWlmStnxT7SGQ-X6_X/view?usp=drive_link", size: "5.8 MB" },
        { title: "Basic Electrical & Electronics Engineering", file: "https://drive.google.com/file/d/1tFeh0cX-C1G4qkxh6DV1N5C5TJVxhMPK/view?usp=drive_link", size: "5.8 MB" },
        { title: "Basic Mechanical Engineering Handwritten", file: "https://drive.google.com/file/d/1ksr0dXOsgqPhg0xAxVZzk5tX17QQxjAB/view?usp=drive_link", size: "5.8 MB" },
        { title: "Engineering Chemistry", file: "https://drive.google.com/file/d/1PL_J7T4_3rJYwh8ly0ezEaMfv5a3TWK5/view?usp=drive_link", size: "5.8 MB" },
        { title: "Computer Organisation & Architecture", file: "https://drive.google.com/file/d/14SwjPsxSCP4jXH8vuRRjmZqOF3qc4zfJ/view?usp=drive_link", size: "5.8 MB" },
        { title: "Engineering Graphics", file: "https://drive.google.com/file/d/1vc3fsNliRghOrq5wyLg8tq6_m3cxb-Ve/view?usp=drive_link", size: "5.8 MB" },
        { title: "English", file: "https://drive.google.com/file/d/1746f80dDqJZwM5jXkOiKYqzp2raROnoI/view?usp=drive_link", size: "5.8 MB" },
        { title: "Mathematics - 1", file: "https://drive.google.com/file/d/1W4jnvtCZT0MLnmaGsjfdH1PhTGG7vEUO/view?usp=drive_link", size: "5.8 MB" },
        { title: "Mathematics - 2", file: "https://drive.google.com/file/d/1MOqgEfhY7PadcuKWCgg81dQOqW2GVvhI/view?usp=drive_link", size: "5.8 MB" },
        { title: "Mathematics - 3", file: "https://drive.google.com/file/d/1fpsmGimOjan73qEqIiRODZSffk5w1Jre/view?usp=drive_link", size: "5.8 MB" },
        { title: "Manufacturing Practices", file: "https://drive.google.com/file/d/1dl6MzBiEKurhp-Gx8DJZyanlOg2iXM12/view?usp=drive_link", size: "5.8 MB" },
        { title: "Software Engineering", file: "https://drive.google.com/file/d/18DlsIh06L0osEo6T3YRKdRcdTsei5xQQ/view?usp=drive_link", size: "5.8 MB" },
      ],
    },
    gate: {
      name: "GATE",
      icon: "🚪",
      color: "from-emerald-500 to-emerald-600",
      description: "Graduate Aptitude Test in Engineering preparation materials",
      pdfs: [
        { title: "GATE Preparation Guide", file: "/pdfs/gate/preparation-guide.pdf", size: "3.7 MB" },
        { title: "Mathematics Formula Sheet", file: "/pdfs/gate/math-formulas.pdf", size: "1.9 MB" },
        { title: "Previous Year Solutions", file: "/pdfs/gate/previous-solutions.pdf", size: "6.2 MB" },
      ],
    },
    python: {
      name: "Python",
      icon: "🐍",
      color: "from-cyan-500 to-cyan-600",
      description: "Python programming language tutorials and guides",
      pdfs: [
        { title: "Python Basics Handbook", file: "/pdfs/python/python-basics.pdf", size: "2.8 MB" },
        { title: "Data Structures in Python", file: "/pdfs/python/data-structures.pdf", size: "4.5 MB" },
        { title: "Web Development with Django", file: "/pdfs/python/django-guide.pdf", size: "5.1 MB" },
      ],
    },
    mern: {
      name: "MERN",
      icon: "⚛️",
      color: "from-teal-500 to-emerald-600",
      description: "MongoDB, Express.js, React.js, Node.js stack development",
      pdfs: [
        { title: "React.js Complete Guide", file: "/pdfs/mern/react-guide.pdf", size: "4.3 MB" },
        { title: "Node.js & Express", file: "/pdfs/mern/nodejs-express.pdf", size: "3.6 MB" },
        { title: "MongoDB Essentials", file: "/pdfs/mern/mongodb-guide.pdf", size: "2.9 MB" },
      ],
    },
    java: {
      name: "JAVA",
      icon: "☕",
      color: "from-emerald-500 to-teal-600",
      description: "Java programming language and framework tutorials",
      pdfs: [
        { title: "Core Java Concepts", file: "/pdfs/java/core-java.pdf", size: "3.4 MB" },
        { title: "Spring Boot Tutorial", file: "/pdfs/java/spring-boot.pdf", size: "4.7 MB" },
        { title: "Hibernate ORM Guide", file: "/pdfs/java/hibernate.pdf", size: "3.1 MB" },
      ],
    },
    dsa: {
      name: "DSA",
      icon: "🔢",
      color: "from-cyan-500 to-teal-600",
      description: "Data Structures and Algorithms comprehensive study materials",
      pdfs: [
        { title: "Algorithm Cheat Sheet", file: "/pdfs/dsa/algorithms.pdf", size: "2.2 MB" },
        { title: "Data Structures Guide", file: "/pdfs/dsa/data-structures.pdf", size: "3.8 MB" },
        { title: "Problem Solving Patterns", file: "/pdfs/dsa/problem-patterns.pdf", size: "4.6 MB" },
      ],
    },
  }

  const currentSubject = subjectData[subject]

  if (!currentSubject) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-teal-900 to-slate-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white mb-4">Subject Not Found</h1>
          <Link href="/#notes">
            <Button className="bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Notes
            </Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-teal-900 to-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <section ref={sectionRef} className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <Link href="/#notes">
              <Button variant="ghost" className="text-gray-300 hover:text-white hover:bg-white/10 mb-6">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to All Subjects
              </Button>
            </Link>

            <div className="flex items-center space-x-4 mb-6">
              <div
                className={`w-16 h-16 rounded-full bg-gradient-to-r ${currentSubject.color} flex items-center justify-center text-white text-2xl shadow-lg`}
              >
                {currentSubject.icon}
              </div>
              <div>
                <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-white to-teal-200 bg-clip-text text-transparent">
                  {currentSubject.name} Study Materials
                </h1>
                <p className="text-lg text-gray-300 mt-2">{currentSubject.description}</p>
              </div>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {currentSubject.pdfs.map((pdf: any, index: number) => (
              <Card
                key={index}
                className="pdf-card opacity-0 hover:scale-105 transition-all duration-300 bg-white/10 backdrop-blur-md border border-white/20 hover:border-teal-400/50 group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <CardTitle className="text-lg text-white group-hover:text-teal-200 transition-colors flex items-center">
                    <BookOpen className="h-5 w-5 mr-2 text-teal-400" />
                    {pdf.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="text-sm text-gray-300">
                      <span className="bg-white/10 px-2 py-1 rounded-full">Size: {pdf.size}</span>
                    </div>

                    <div className="flex space-x-2">
                      <Button
  onClick={() => {
    // Convert Google Drive "view" link to preview
    const fileId = pdf.file.match(/[-\w]{25,}/)?.[0]; 
    const previewUrl = `https://drive.google.com/file/d/${fileId}/preview`;
    window.open(previewUrl, "_blank");
  }}
  className="flex-1 bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white border-0"
>
  <Eye className="h-4 w-4 mr-2" />
  Preview
</Button>

                      <Button
    onClick={() => {
      const isDriveLink = pdf.file.includes("drive.google.com");

      if (isDriveLink) {
        const fileId = pdf.file.match(/[-\w]{25,}/)?.[0];
        if (fileId) {
          const downloadUrl = `https://drive.google.com/uc?export=download&id=${fileId}`;
          window.open(downloadUrl, "_blank");
        } else {
          alert("Invalid Google Drive link");
        }
      } else {
        const link = document.createElement("a");
        link.href = pdf.file;
        link.download = pdf.file.split("/").pop() || "file.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }
    }}
    className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white border-0"
  >
    <Download className="h-4 w-4 mr-2" />
    Download
  </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

