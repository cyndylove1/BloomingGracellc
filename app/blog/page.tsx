import Image from "next/image";
import Navbar from "../components/navbar";
import Cta from "../components/cta";

export interface Post {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  image: string;
  author: string;
}

const posts: Post[] = [
  {
    id: 1,
    category: "Management",
    title: "How an Estate Manager Can Transform Your Household Operations",
    excerpt:
      "Managing a high-net-worth estate requires more than just organization—it requires a vision for seamless living.",
    date: "April 2, 2026",
    author: "Eleanor Vance",
    image:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 2,
    category: "Childcare",
    title: "The Evolution of the Modern Governess in 2026",
    excerpt:
      "Why families are shifting back toward specialized private educators for their children's development.",
    date: "March 28, 2026",
    author: "Julian Thorne",
    image:
      "/assets/nanny.jpg",
  },
  {
    id: 3,
    category: "Culinary",
    title: "Seasonal Nutrition: Finding the Right Private Chef",
    excerpt:
      "The benefits of farm-to-table dining within the comfort of your private residence.",
    date: "March 15, 2026",
    author: "Marcus Chen",
    image:
      "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&q=80&w=800",
  },
];

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-[#D1D5F5]">
        {/* Navigation */}

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 pt-[10rem]">
          {/* Header Section */}
          <header className="mb-16 text-center md:text-left">
            <h1 className="text-xl md:text-4xl font-serif text-slate-900 mb-4">
              The Household Journal
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl">
              Expert insights on residential staffing, luxury lifestyle
              management, and maintaining the sanctuary of your home.
            </p>
          </header>

          {/* Featured Post */}
          <section className="mb-20">
            <div className="group relative overflow-hidden rounded-2xl bg-slate-900 aspect-[16/9] md:aspect-[21/9]">
              <Image
                width={200}
                height={200}
                src="/assets/livingRoom.jpg"
                alt="Luxury Living Room"
                className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:scale-105 transition duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
              <div className="absolute bottom-0 p-6 md:p-12 text-white">
                <span className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-widest uppercase bg-[#8268EE] rounded">
                  Featured Guide
                </span>
                <h2 className="text-md md:text-xl lg:text-5xl font-serif mb-4 max-w-3xl">
                  The Art of Discretion: Defining Excellence in Modern Private
                  Service
                </h2>
                <p className="text-slate-200 mb-6 max-w-xl hidden md:block">
                  Learn the core principles that define the world's most
                  successful residential staff and how they maintain privacy in
                  a digital age.
                </p>
                {/* <button className="bg-[#FFD700] text-[#0A0F2D] px-8 py-4 rounded-lg font-bold text-base flex items-center gap-2 hover:bg-yellow-400 transition-all shadow-md">
                  Work With Us <ArrowUpRight size={18} />
                </button> */}
                {/* <button className="bg-white text-slate-900 px-6 py-3 font-medium rounded hover:bg-amber-50 transition">
                  Read Article
                </button> */}
              </div>
            </div>
          </section>

          {/* Recent Posts Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {posts.map((post) => (
              <article key={post.id} className="flex flex-col group">
                <div className="overflow-hidden rounded-lg mb-6">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="aspect-[4/3] object-cover group-hover:scale-105 transition duration-500"
                  />
                </div>
                <span className="text-[#8268EE] text-xs font-bold uppercase tracking-widest mb-3">
                  {post.category}
                </span>
                <h3 className="text-2xl font-serif text-gray-900 mb-3">
                  {post.title}
                </h3>
                <p className="text-slate-600 mb-4 flex-grow line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="flex items-center text-sm text-slate-400">
                  <span>{post.date}</span>
                  <span className="mx-2">•</span>
                  <span>By {post.author}</span>
                </div>
              </article>
            ))}
          </div>
        </main>
      </div>
      <Cta />
    </>
  );
}
