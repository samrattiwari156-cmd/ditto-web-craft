import blog1 from "@/assets/blog-1.jpg";
import blog2 from "@/assets/blog-2.jpg";
import blog3 from "@/assets/blog-3.jpg";
import blog4 from "@/assets/blog-4.jpg";

const thumbs = [blog1, blog2, blog3, blog4];

export function blogThumb(index: number) {
  return thumbs[Math.abs(index) % thumbs.length] as string;
}
