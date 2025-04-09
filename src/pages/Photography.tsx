
import { Layout } from "@/components/Layout";
import { SectionTitle } from "@/components/SectionTitle";
import { cn } from "@/lib/utils";
import { photos } from "@/data";

const PhotographyPage = () => {
  // Photography data - extended collection

  return (
    <Layout>
      <section className="py-10 md:py-16">
        <div className="container px-4 mx-auto">
          <SectionTitle
            title="Photography"
            subtitle="Capturing moments through my lens"
            center
          />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4 mt-10">
            {photos.map((photo, index) => {
              // Make some photos span 2 rows for visual interest
              // Using a simple pattern for demonstration
              const isDoubleHeight = index % 5 === 0 || index % 7 === 0;
              
              // Make some photos span 2 columns on larger screens
              const isDoubleWidth = index % 8 === 0;
              
              return (
                <div 
                  key={photo.id}
                  className={cn(
                    "overflow-hidden rounded-lg shadow-sm animate-on-scroll transition-all duration-300 hover:scale-[1.03] hover:shadow-md",
                    isDoubleHeight ? "row-span-2" : "",
                    isDoubleWidth ? "sm:col-span-2" : ""
                  )}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="relative h-full">
                    <img 
                      src={photo.imageUrl} 
                      alt={photo.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-3">
                      <h3 className="text-white font-medium">{photo.title}</h3>
                      <span className="text-white/80 text-sm">{photo.category}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PhotographyPage;
