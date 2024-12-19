import { BrandsSectionProps } from "@/types/types";
import CardItem from "../ui/Card/CardItem";



export default function BrandsSection({
  title,
  description,
  brands, id,
  bgColor = "bg-white",
}: BrandsSectionProps) {
  return (
    <section className={`py-8 ${bgColor}`} id={id}> 
      {/* Başlık */}
      {title && (
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">{title}</h2>
      )}

      {/* Açıklama */}
      {description && (
        <p className="text-center mb-8 text-gray-600">
          {description.map((part, index) =>
            part.highlight ? (
              <span key={index} className="text-yellow-500 font-semibold">
                {part.text}
              </span>
            ) : (
              <span key={index}>{part.text}</span>
            )
          )}
        </p>
      )}

      {/* Marka Kartları */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-7xl mx-auto px-4">
        {brands.map((brand, index) => (
          <CardItem key={index} imageUrl={brand.imageUrl} />
        ))}
      </div>
    </section>
  );
}
