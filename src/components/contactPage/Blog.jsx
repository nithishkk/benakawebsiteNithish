import React from "react";
import { Calendar, ArrowRight } from "lucide-react";
import BlogImage from "../../assets/Images/mobile1.png";
import BlogImage2 from "../../assets/Images/mobile2.png";
import BlogImage3 from "../../assets/Images/3.png";

function BlogPage() {
  const blogs = [
    {
      id: 1,
      title: "The Art of Crafting Fine Gold Jewelry",
      description:
        "Explore how Benaka artisans create stunning gold pieces with precision and passion, blending tradition with modern design.",
      date: "October 12, 2025",
      image: BlogImage,
    },
    {
      id: 2,
      title: "How to Choose the Perfect Gold for Every Occasion",
      description:
        "Learn how to select gold jewelry that complements your personal style and special moments.",
      date: "September 25, 2025",
      image: BlogImage2,
    },
    {
      id: 3,
      title: "Why 22K Gold Remains Timeless",
      description:
        "Discover the unmatched value, purity, and durability of 22K gold that make it a timeless investment.",
      date: "August 10, 2025",
      image: BlogImage3,
    },
  ];

  return (
    <div className="bg-gradient-to-b from-[#fffdf8] to-[#fff3d9] text-gray-800 min-h-screen">
      {/* Hero Section */}
      <section className="text-center py-20 px-6">
        <h1 className="text-5xl font-bold text-[#b8860b] mb-4">Our Blog</h1>
        <p className="max-w-2xl mx-auto text-gray-700 text-lg leading-relaxed">
          Stay inspired with our latest insights, stories, and trends from the
          world of fine jewelry.
        </p>
      </section>

      {/* Blog Grid */}
      <section className="max-w-7xl mx-auto px-6 pb-20 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
          >
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-56 object-cover"
            />
            <div className="p-6 flex flex-col justify-between h-full">
              <div>
                <div className="flex items-center text-sm text-gray-500 mb-2">
                  <Calendar className="h-4 w-4 mr-2 text-[#b8860b]" />
                  {blog.date}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {blog.title}
                </h3>
                <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                  {blog.description}
                </p>
              </div>
              <button className="inline-flex items-center gap-2 text-[#b8860b] font-medium hover:text-[#8a6a00] transition">
                Read More <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}

export default BlogPage;
