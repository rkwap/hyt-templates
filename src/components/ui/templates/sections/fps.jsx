import { ExternalLink } from "lucide-react";
import Link from "next/link";

const FeaturedSocialPostsSection = ({ featured_social_posts = [] }) => {
  if (!featured_social_posts.length) {
    return null;
  }

  return (
    <section className="mt-10 space-y-4" id="featured-social-posts">
      <h2 className="font-bold font-mono text-3xl text-white">
        Featured Social Posts
      </h2>
      <ul className="space-y-3 lg:space-y-2">
        {featured_social_posts.map((post, index) => (
          <li id={`featured-social-post-${index + 1}`} key={index}>
            <Link
              className="inline-flex items-center gap-1 font-mono font-semibold text-zinc-300 transition-colors hover:text-green-400 md:text-lg"
              href={post.post_url}
              rel="noopener noreferrer nofollow"
              target="_blank"
            >
              {post.post_title}
              <ExternalLink className="h-3 w-3" />
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default FeaturedSocialPostsSection;
