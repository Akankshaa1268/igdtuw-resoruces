import Navigation from "@/components/Navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Heart, BookOpen } from "lucide-react";

const About = () => {
  const teamMembers = [
    {
      name: "Akanksha Pal",
      role: "CSE 1, Batch 2028",
      linkedin: "https://www.linkedin.com/in/akankshapal1268",
      email: "akanksha011btcse24@igdtuw.ac.in",
    },
    {
      name: "Apoorva Shrivastava",
      role: "CSE 1, Batch 2028",
      linkedin: "https://www.linkedin.com/in/apoorva-shrivastava-a3955321b/",
      email: "apoorva038btcse24@igdtuw.ac.in",
    },
    {
      name: "Bhawana Singh",
      role: "CSE 1, Batch 2028",
      linkedin: "https://www.linkedin.com/in/bhawana-singh-ba74a6322/",
      email: "bhawana050btcse24@igdtuw.ac.in",
    },
    {
      name: "Disha Jain",
      role: "CSE 1, Batch 2028",
      linkedin: "https://www.linkedin.com/in/dishajain15",
      email: "disha061btcse24@igdtuw.ac.in",
    },
    {
      name: "Kanika Bhardwaj",
      role: "CSE 1, Batch 2028",
      linkedin: "https://www.linkedin.com/in/ikanikabhardwaj",
      email: "kanika087btcse24@igdtuw.ac.in",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      <Navigation />

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center fade-in mb-16">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-gradient-to-tr from-blue-900 to-cyan-700 rounded-full flex items-center justify-center shadow-lg">
              <Heart className="h-10 w-10 text-cyan-400" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">About Us</h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            This portal is created by seniors at IGDTUW to help juniors with PYQs, notes, and books, organized by branch and semester. We believe in the power of shared knowledge and community support.
          </p>
        </div>

        {/* Mission Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <Card className="shadow-xl hover:shadow-cyan-600/50 text-center bg-slate-900 border border-slate-700">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-gradient-to-tr from-blue-800 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-cyan-300" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Community First</h3>
              <p className="text-slate-400">
                Built by students, for students. We understand the challenges you face and are here to help.
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-xl hover:shadow-cyan-600/50 text-center bg-slate-900 border border-slate-700">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-gradient-to-tr from-cyan-700 to-blue-800 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="h-8 w-8 text-cyan-300" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Quality Resources</h3>
              <p className="text-slate-400">
                Carefully curated and verified academic materials to ensure you get the best study resources.
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-xl hover:shadow-cyan-600/50 text-center bg-slate-900 border border-slate-700">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-gradient-to-tr from-blue-800 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-cyan-300" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Pay It Forward</h3>
              <p className="text-slate-400">
                Just as seniors helped us, we're here to help you succeed in your academic journey.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Team Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-cyan-400 mb-4">Meet Our Team</h2>
          <p className="text-slate-400 text-lg">The passionate seniors who made this portal possible</p>
        </div>

        {/* Five team members in single row */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          {teamMembers.map((member, index) => (
            <Card
              key={index}
              className="bg-slate-900 border border-slate-700 shadow-lg text-center rounded-2xl transition-transform hover:scale-105 duration-200"
              style={{ minHeight: 290, color: "#f0f9ff" }}
            >
              <CardContent className="pt-8 pb-8 flex flex-col items-center justify-center">
                <div
                  className="w-20 h-20 flex items-center justify-center rounded-full mb-4"
                  style={{
                    background: "linear-gradient(135deg,#0e2d52 60%,#13aac9 100%)",
                    color: "#c7f2ff",
                    fontWeight: 700,
                    fontSize: 28,
                    letterSpacing: 1,
                  }}
                >
                  {member.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")
                    .slice(0, 2)
                    .toUpperCase()}
                </div>
                <h3 className="text-[1.1rem] font-bold mb-1">{member.name}</h3>
                <p className="text-cyan-400 font-bold mb-2">{member.role}</p>
                <p className="mb-1">
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline text-cyan-400 font-semibold"
                  >
                    LinkedIn
                  </a>
                </p>
                <p className="text-slate-400 break-all text-[0.95rem]">{member.email}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 p-8 bg-slate-900 border border-slate-700 rounded-2xl shadow-lg text-slate-400">
          <h3 className="text-2xl font-bold mb-4 text-cyan-400">Want to Contribute?</h3>
          <p className="text-lg opacity-90 mb-6">
            If you have quality study materials, PYQs, or notes that could help other students, we'd love to include them in our portal.
          </p>
          <p className="opacity-75">Contact us through the college portal or reach out to any team member.</p>
        </div>
      </main>
    </div>
  );
};

export default About;
