"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Instagram, Twitter, Youtube, Linkedin, Mail, Phone, Github } from "lucide-react"
import { useEffect, useRef, useState } from "react"

export function PromotionSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const teamMembers = [
    {
      name: "Siddhant Patel",
      role: "Founder & President",
      expertise: "Competitive Coder",
      image: "/1000240907.png",
      skills: ["JAVA", "C & CPP", "SQL", "NETOWRKING"],
      linkedin: "https://linkedin.com/in/siddhant-patel-31074119b",
      github: "https://github.com/Siddhant403",
    },
    {
      name: "Saket Dubey",
      role: "Vice President",
      expertise: "Python Developer",
      image: "/1000241315.png",
      skills: ["Power BI", "Content Creator", "Python"],
      linkedin: "https://linkedin.com/in/saket-dubey-9a4725254",
      github: "https://github.com/saketdubey",
    },
    {
      name: "Sneha Kushwaha",
      role: "Executive Head",
      expertise: "Data Analyst & Web Development",
      image: "/1000240922.png",
      skills: ["Front End Dev", "AI/ML", "Data Analysis"],
      linkedin: "https://linkedin.com/in/kushwahasneha874",
      github: "https://github.com/snehakushwaha874",
    },
    {
      name: "Vedant Vashishth",
      role: "Executive Head",
      expertise: "Data Analyst",
      image: "/1000240908.png",
      skills: ["Python", "AI/ML", "Business Insights"],
      linkedin: "https://linkedin.com/in/VedantVas",
      github: "https://github.com/vedant-vashishth-4933b3301",
    },
  ]

  const facultyMembers = [
    {
      name: "Lucky Faujdar",
      subject: "Web Development Lead",
      image: "/1000240916.png",
      linkedin: "https://linkedin.com/in/lucky-faujdar-21262826b",
      github: "https://github.com/Lucky-Faujdar",
    },
    {
      name: "Vaishnavi Tiwari",
      subject: "Co - Web Development Lead",
      image: "/1000240903.png",
      linkedin: "https://linkedin.com/in/vaishnavi-tiwari-9a081030b",
      github: "https://github.com/kavita-singh",
    },
    {
      name: "Dhara Nagwani",
      subject: "DSA Lead",
      image: "/1000240911.png",
      linkedin: "https://linkedin.com/in/ramesh-verma",
      github: "https://github.com/ramesh-verma",
    },
    {
      name: "Ritik Yadav",
      subject: "Python Lead",
      image: "/1000240912.png",
      linkedin: "https://linkedin.com/in/ritik-yadav-b4914a2b8",
      github: "https://github.com/Ritikyadav2004",
    },
    {
      name: "Harshit Khare",
      subject: "JAVA Lead",
      image: "/1000240913.png",
      linkedin: "https://linkedin.com/in/harshitkhare4",
      github: "https://github.com/harshitkhare4",
    },
    {
      name: "Siddharth Pathak",
      subject: "Co - JAVA Lead",
      image: "/1000240904.png",
      linkedin: "https://linkedin.com/in/siddharth-pathak-63b7b0279",
      github: "https://github.com/Siddharth13-cpu",
    },
    {
      name: "Srajal Vishwakarma",
      subject: "Co - Graphic Designer Lead",
      image: "/Picsart_25-08-18_19-08-55-838.png",
      linkedin: "https://linkedin.com/in/srajal-vishwakarma",
      github: "https://github.com/Srajal222",
    },
    {
      name: "Deshna Jain",
      subject: "Promotion Lead",
      image: "/1000240909.png",
      linkedin: "https://linkedin.com/in/deshnajain95",
      github: "https://github.com/deshnajain95",
    },
    {
      name: "Shruti Patel",
      subject: "Co - Promotion Lead",
      image: "/1000240905.png",
      linkedin: "https://linkedin.com/in/shrutipatel1518",
      github: "https://github.com/shrutipatel1518",
    },
    {
      name: "Deeksha Soni",
      subject: "Event Lead",
      image: "/1000240915.png",
      linkedin: "https://linkedin.com/in/deeksha-soni-516236330",
      github: "https://github.com/deekshasoni28",
    },
    {
      name: "Anamika Lodhi",
      subject: "Co - Event Lead",
      image: "/1000240910.png",
      linkedin: "https://linkedin.com/in/anamika",
      github: "https://github.com/anamika",
    },
  ]

  const socialLinks = [
    { icon: Instagram, label: "Instagram", href: "https://www.instagram.com/adhyan.core?igsh=MWNqYmcxYTNwZmVzMQ==", color: "from-pink-500 to-purple-600" },
    { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/groups/10050483/", color: "from-blue-600 to-blue-800" },
  ]

  return (
    <section ref={sectionRef} id="team" className="relative">
      <div className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div
            className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-20"}`}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Connect With Us</h2>
            <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
              Follow us on social media for daily updates, study tips, and educational content.
            </p>

                <div className="flex flex-wrap justify-center gap-6 mb-12">
      {socialLinks.map((social, index) => (
        <Button
          key={index}
          variant="outline"
          size="lg"
          className={`group relative overflow-hidden border-2 bg-gradient-to-r ${social.color} text-white hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl`}
          onClick={() => window.open(social.href, "_blank")}
        >
          <social.icon className="h-6 w-6 mr-3" />
          <span className="font-semibold">{social.label}</span>
        </Button>
      ))}
    </div>

            <div className="flex flex-wrap justify-center gap-8 text-gray-700">
              <div className="flex items-center group hover:text-blue-600 transition-colors">
                <Mail className="h-6 w-6 mr-3 group-hover:scale-110 transition-transform" />
                <span className="text-lg">adhyan.core@gmail.com</span>
              </div>
              <div className="flex items-center group hover:text-blue-600 transition-colors">
                <Phone className="h-6 w-6 mr-3 group-hover:scale-110 transition-transform" />
                <span className="text-lg">+91 89629 04119</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-teal-900 to-slate-900 overflow-hidden relative">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl animate-float"></div>
          <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-float-delayed"></div>
          <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl animate-pulse-glow"></div>
        </div>

        <div className="relative max-w-7xl mx-auto">
          <div
            className={`text-center mb-16 transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-20"}`}
          >
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white via-teal-200 to-cyan-200 bg-clip-text text-transparent mb-6">
              Our Team
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Our dedicated team of educators and professionals working tirelessly to provide you with the best learning
              experience.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {teamMembers.map((member, index) => (
              <Card
                key={index}
                className={`group relative overflow-hidden bg-white/10 backdrop-blur-lg border border-white/20 hover:bg-white/20 hover:scale-105 transition-all duration-500 shadow-xl hover:shadow-2xl hover:border-teal-400 animate-fade-in-up`}
                style={{ animationDelay: `${0.6 + index * 0.1}s` }}
              >
                <CardContent className="pt-8 pb-6 text-center relative z-10">
                  <div className="mb-6 relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full blur-lg opacity-50 group-hover:opacity-75 transition-opacity"></div>
                    <img
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      className="relative w-32 h-32 rounded-full mx-auto object-cover border-4 border-white/30 group-hover:border-white/50 transition-all duration-300"
                    />
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-teal-200 transition-colors">
                    {member.name}
                  </h3>

                  <p className="text-teal-300 font-semibold mb-2 text-sm">{member.role}</p>

                  <p className="text-gray-300 text-sm mb-4 leading-relaxed">{member.expertise}</p>

                  <div className="flex justify-center gap-3 mb-4">
                    <Button
                      size="sm"
                      variant="outline"
                      className="bg-blue-600/20 border-blue-400/30 text-blue-300 hover:bg-blue-600/40 hover:scale-110 transition-all duration-300"
                      onClick={() => window.open(member.linkedin, "_blank")}
                    >
                      <Linkedin className="h-4 w-4" />
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="bg-gray-600/20 border-gray-400/30 text-gray-300 hover:bg-gray-600/40 hover:scale-110 transition-all duration-300"
                      onClick={() => window.open(member.github, "_blank")}
                    >
                      <Github className="h-4 w-4" />
                    </Button>
                  </div>

                  <div className="flex flex-wrap justify-center gap-2">
                    {member.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-1 bg-gradient-to-r from-teal-500/30 to-cyan-500/30 rounded-full text-xs text-white border border-white/20 backdrop-blur-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </CardContent>

                <div className="absolute inset-0 bg-gradient-to-r from-teal-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </Card>
            ))}
          </div>

          <div
            className={`text-center mb-12 transition-all duration-1000 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <h3 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-white via-teal-200 to-cyan-200 bg-clip-text text-transparent mb-4">
              Meet Our Pillars
            </h3>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Students specializing in various subjects to guide your learning journey.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {facultyMembers.map((faculty, index) => (
              <Card
                key={index}
                className={`group relative overflow-hidden bg-white/10 backdrop-blur-lg border border-white/20 hover:bg-white/20 hover:scale-105 transition-all duration-500 shadow-lg hover:shadow-xl hover:border-blue-400 animate-fade-in-up`}
                style={{ animationDelay: `${1.0 + index * 0.05}s` }}
              >
                <CardContent className="pt-4 pb-4 text-center relative z-10">
                  <div className="mb-3 relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full blur-md opacity-40 group-hover:opacity-60 transition-opacity"></div>
                    <img
                      src={faculty.image || "/placeholder.svg"}
                      alt={faculty.name}
                      className="relative w-16 h-16 rounded-full mx-auto object-cover border-2 border-white/30 group-hover:border-white/50 transition-all duration-300"
                    />
                  </div>

                  <h4 className="text-sm font-bold text-white mb-1 group-hover:text-teal-200 transition-colors leading-tight">
                    {faculty.name}
                  </h4>

                  <p className="text-teal-300 font-medium mb-1 text-xs">{faculty.subject}</p>

                  <p className="text-gray-400 text-xs mb-3">{faculty.experience}</p>

                  <div className="flex justify-center gap-2">
                    <Button
                      size="sm"
                      variant="outline"
                      className="h-6 w-6 p-0 bg-blue-600/20 border-blue-400/30 text-blue-300 hover:bg-blue-600/40 hover:scale-110 transition-all duration-300"
                      onClick={() => window.open(faculty.linkedin, "_blank")}
                    >
                      <Linkedin className="h-3 w-3" />
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="h-6 w-6 p-0 bg-gray-600/20 border-gray-400/30 text-gray-300 hover:bg-gray-600/40 hover:scale-110 transition-all duration-300"
                      onClick={() => window.open(faculty.github, "_blank")}
                    >
                      <Github className="h-3 w-3" />
                    </Button>
                  </div>
                </CardContent>

                <div className="absolute inset-0 bg-gradient-to-r from-teal-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
