import { useEffect, useState } from "react";
import { cn } from "@/utils/cn.util";
import UnderlinedText from "@/components/underlined-text.component";
import type { ProjectItem as PI } from "@/config-and-data/projects.data";
import { styles_Typography } from "@/styles/typography/typography.styles";
import ArrowUpright from "@/components/arrow-upright.component";

interface Props {
  item: PI;
  index: number;
}

const ProjectItem = ({ item, index }: Props) => {
  const isEven = index % 2 === 0;

  const images = item.image ?? [];
  const total = images.length;
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    setActiveIndex(0);
  }, [item.id]);

  const prev = () => {
    if (total <= 1) return;
    setActiveIndex((i) => (i - 1 + total) % total);
  };

  const next = () => {
    if (total <= 1) return;
    setActiveIndex((i) => (i + 1) % total);
  };

  const imageWrapper = cn(
    "bg-black p-6",
    "flex flex-col items-center justify-center",
    "overflow-hidden"
  );

  const imageClasses = cn("max-w-full h-auto block");

  return (
    <article
      style={{
        direction: isEven ? "rtl" : undefined
      }}
      className={cn("grid grid-cols-1 lg:grid-cols-12 gap-8 items-start")}
    >
      <div
        className={cn(
          "lg:col-span-7",
          "flex flex-col gap-4 items-center justify-center"
        )}
      >
        <div className={imageWrapper}>
          {(() => {
            const src = images[activeIndex] ?? images[0];
            const isVideo =
              typeof src === "string" && /\.mp4(\?|#|$)/i.test(src);

            if (isVideo) {
              return (
                <video
                  key={src}
                  src={src}
                  className={imageClasses}
                  autoPlay
                  muted
                  loop
                  playsInline
                  aria-label={`${item.title} video ${activeIndex + 1}`}
                />
              );
            }

            return (
              <img
                src={src}
                alt={`${item.title} ${activeIndex + 1}`}
                className={imageClasses}
              />
            );
          })()}
        </div>

        {total > 1 && (
          <div className="flex items-center justify-between gap-2 w-full px-2">
            <div className="text-white/90 text-sm">
              {activeIndex + 1} / {total}
            </div>

            <div className="flex items-center space-x-2">
              <button
                onClick={prev}
                aria-label="Previous image"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15 18L9 12L15 6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

              <button
                onClick={next}
                aria-label="Next image"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 18L15 12L9 6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        )}
      </div>

      <div className="lg:col-span-2" />

      <div
        style={{ direction: "ltr" }}
        className={cn("lg:col-span-3", "h-full")}
      >
        <h3 className={styles_Typography["heading-3"]}>{item.title}</h3>
        <p className={cn(styles_Typography["paragraph-base-dark"], "mt-2")}>
          {item.subtitle}
        </p>
        <p className={cn(styles_Typography["paragraph-base-dark"], "mt-4")}>
          {item.year}
        </p>

        <div
          className={cn("mt-6 space-y-4", styles_Typography["paragraph-base"])}
        >
          <p>{item.short}</p>
          {item.description.map((d, i) => (
            <p key={i}>{d}</p>
          ))}
        </div>

        <div className={cn("mt-6")}>
          <UnderlinedText>
            <a
              href={item.website}
              target="_blank"
              rel="noreferrer"
              className={styles_Typography["paragraph-base-dark"]}
            >
              {item.website.replace(/^https?:\/\//, "")} <ArrowUpright />
            </a>
          </UnderlinedText>
        </div>
      </div>
    </article>
  );
};

export default ProjectItem;
