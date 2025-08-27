import React from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";

type SocialPost = {
  src: string;        // e.g. "/images/social/ultrafocus-sale-01.jpg"
  alt: string;        // accessible alt text
  platform: string;   // e.g. "Instagram"
  month: string;      // e.g. "Aug 2025"
  country: string;    // e.g. "India"
  caption?: string;   // optional longer text
  tags?: string[];    // e.g. ["Promo", "Carousel"]
};

export function SocialThumb({ post }: { post: SocialPost }) {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      {/* Thumbnail */}
      <button
        onClick={() => setOpen(true)}
        className="group relative overflow-hidden rounded-xl border focus:outline-none focus:ring-2 focus:ring-slate-300"
        aria-label={`Open ${post.platform} post`}
      >
        <img
          src={post.src}
          alt={post.alt}
          className="h-36 sm:h-40 w-full object-cover transition-transform duration-200 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white px-2 py-1 text-xs flex items-center justify-between">
          <span className="truncate">{post.platform}</span>
          <span>{post.month}</span>
        </div>
      </button>

      {/* Lightbox */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-3xl p-0 overflow-hidden">
          <img src={post.src} alt={post.alt} className="w-full h-auto" />
          <div className="p-4 text-sm text-slate-700">
            <div className="font-medium">
              {post.platform} · {post.month} · {post.country}
            </div>
            {post.caption && <p className="mt-1">{post.caption}</p>}
            {post.tags?.length ? (
              <div className="mt-2 flex flex-wrap gap-2">
                {post.tags.map((t) => (
                  <Badge key={t} variant="secondary">{t}</Badge>
                ))}
              </div>
            ) : null}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}