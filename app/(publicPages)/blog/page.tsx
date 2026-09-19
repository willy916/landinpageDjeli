import { posts } from "@/data/blogPostes";
import Image from "next/image";
import Link from "next/link";

const BlogPage = () => {
  const featuredPost = posts.find((p) => p.featured);
  const regularPosts = posts.filter((p) => !p.featured);
  return (
    <div
      id="blog"
      className="w-full min-h-screen bg-background text-foreground py-12 px-4 sm:px-6 lg:px-8">
      {/* En-tête de la page */}
      <div className="max-w-4xl mx-auto text-center space-y-4 mb-16">
        <span className="text-xs font-semibold uppercase tracking-widest text-primary px-3 py-1 bg-primary/10 rounded-full">
          Actualités & Réalisations
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
          Le Blog Djeli
        </h1>
        <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
          Suivez nos événements, nos trophées et nos conseils pratiques pour
          gérer votre commerce et débloquer vos financements.
        </p>
      </div>

      <div className="max-w-6xl mx-auto space-y-12">
        {/* Article à la une (Réalisation / Trophée) */}
        {featuredPost && (
          <div className="group relative border rounded-3xl overflow-hidden bg-card hover:shadow-xl transition-all duration-300 grid grid-cols-1 md:grid-cols-2 gap-6 p-6 sm:p-8">
            <div className="relative aspect-video md:aspect-auto rounded-2xl overflow-hidden bg-muted flex items-center justify-center">
              <Image
                src={featuredPost.image}
                alt={featuredPost.title}
                className="object-cover"
                width={600}
                height={400}
              />
            </div>
            <div className="flex flex-col justify-center space-y-4">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-primary text-primary-foreground">
                  À LA UNE
                </span>
                <span className="text-xs text-muted-foreground">
                  {featuredPost.category}
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold leading-tight group-hover:text-primary transition-colors">
                <Link href={`/blog/${featuredPost.slug}`}>
                  {featuredPost.title}
                </Link>
              </h2>
              <p className="text-sm text-muted-foreground line-clamp-3">
                {featuredPost.excerpt}
              </p>
              <div>
                <Link
                  href={`https://www.facebook.com/share/p/1CCPCxKn8M/`}
                  className="inline-flex items-center text-sm font-semibold text-primary hover:underline gap-1">
                  Lire l'article complet →
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* Grille des autres articles */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {regularPosts.map((post) => (
            <article
              key={post.slug}
              className="border rounded-2xl overflow-hidden bg-card hover:shadow-lg transition-all duration-200 flex flex-col">
              <div className="aspect-video relative bg-muted flex items-center justify-center">
                <Image
                  src={post.image}
                  fill
                  alt={post.title}
                  className="object-cover"
                />
              </div>
              <div className="p-6 flex flex-col flex-1 justify-between space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-xs text-muted-foreground">
                    <span className="font-semibold text-primary">
                      {post.category}
                    </span>
                    <span>{post.date}</span>
                  </div>
                  <h3 className="font-bold text-lg leading-snug hover:text-primary transition-colors">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </h3>
                  <p className="text-sm text-muted-foreground line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>
                <Link
                  href={`/blog/${post.slug}`}
                  className="text-xs font-semibold text-primary hover:underline pt-2 inline-block">
                  En savoir plus →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
