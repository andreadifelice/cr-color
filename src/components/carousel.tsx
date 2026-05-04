import * as React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils"; // Your utility for merging Tailwind classes

// Define the type for a single report item
export interface Report {
  id: string;
  quarter: string;
  period: string;
  imageSrc: string;
  isNew?: boolean;
}

// Define the props for the main component
interface ShareholderReportsProps {
  reports: Report[];
  title?: string;
  subtitle?: string;
  className?: string;
}

export const ShareholderReports = React.forwardRef<
  HTMLDivElement,
  ShareholderReportsProps
>(({ reports, title = "progetti", subtitle = "Powering India's changing lifestyles", className, ...props }, ref) => {
  const scrollContainerRef = React.useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = React.useState(false);
  const [canScrollRight, setCanScrollRight] = React.useState(true);

  // Function to handle scrolling and update arrow visibility
  const checkScrollability = React.useCallback(() => {
    const container = scrollContainerRef.current;
    if (container) {
      const { scrollLeft, scrollWidth, clientWidth } = container;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1); // -1 for precision
    }
  }, []);

  React.useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      checkScrollability();
      container.addEventListener("scroll", checkScrollability);
    }
    return () => {
      if (container) {
        container.removeEventListener("scroll", checkScrollability);
      }
    };
  }, [reports, checkScrollability]);

  // Scroll handler for navigation buttons
  const scroll = (direction: "left" | "right") => {
    const container = scrollContainerRef.current;
    if (container) {
      const scrollAmount = container.clientWidth * 0.8; // Scroll by 80% of the visible width
      container.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      ref={ref}
      className={cn("w-full max-w-7xl mx-auto py-8", className)}
      aria-labelledby="reports-heading"
      {...props}
    >
      <div className="flex items-center justify-between mb-4">
        <h2 id="reports-heading" className="text-2xl font-semibold capitalize text-foreground">
          {title}
        </h2>
        <div className="hidden sm:flex items-center gap-2">
          {/* Left Arrow Button */}
          <button
            onClick={() => scroll("left")}
            disabled={!canScrollLeft}
            aria-label="Scroll left"
            className={cn(
              "p-2 rounded-full border border-border bg-card text-card-foreground transition-opacity duration-300 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-muted"
            )}
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          {/* Right Arrow Button */}
          <button
            onClick={() => scroll("right")}
            disabled={!canScrollRight}
            aria-label="Scroll right"
            className={cn(
              "p-2 rounded-full border border-border bg-card text-card-foreground transition-opacity duration-300 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-muted"
            )}
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>

      <div
        ref={scrollContainerRef}
        className="flex overflow-x-auto scroll-smooth snap-x snap-mandatory scrollbar-hide space-x-4 md:space-x-6 px-4 sm:px-6"
      >
        {reports.map((report) => (
          <div
            key={report.id}
            className="shrink-0 w-60 sm:w-70 snap-start"
          >
            {/* Report Card */}
            <div className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-lg bg-card border border-border mb-3 transition-all duration-300 ease-in-out group-hover:shadow-lg group-hover:-translate-y-1">
                <img
                  src={report.imageSrc}
                  alt={`Report for ${report.quarter}`}
                  className="w-full h-80 sm:h-95 object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/90 to-transparent p-4 flex flex-col justify-end text-white">
                  <p className="text-sm font-medium">{subtitle}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
});

ShareholderReports.displayName = "ShareholderReports";