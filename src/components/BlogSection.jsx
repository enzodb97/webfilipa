import { posts } from "../assets/assets";
import { motion } from "motion/react";
export default function BlogSection() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 200 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="bg-white py-24 sm:py-32"
      id="Blog"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
        <div className="mx-auto max-w-2xl lg:mx-0 ">
          <h1 className="text-2xl sm:text-4xl md-2 bebas text-yellow">
            BLOG <span>{String.fromCharCode(32)}</span>
          </h1>
          <p className="mt-2 text-lg text-gray-600">
            Te cuento como fue algunos murales.
          </p>
        </div>
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.id}
              className="flex max-w-xl flex-col items-start justify-between"
            >
              <img
                src={post.image}
                alt="Post Image"
                className="w-full h-48 object-cover rounded-lg"
              />
              <div className="flex items-center gap-x-4 text-xs mt-4">
                <time dateTime={post.datetime} className="text-gray-500">
                  {post.date}
                </time>
                <a
                  href={post.category.href}
                  className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                >
                  {post.category.title}
                </a>
              </div>
              <div className="group relative">
                <h3 className="mt-3 text-lg font-semibold text-gray-900 group-hover:text-gray-600">
                  <a href={post.href}>
                    <span className="absolute inset-0" />
                    {post.title}
                  </a>
                </h3>
                <p className="mt-5 text-sm text-gray-600">{post.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
