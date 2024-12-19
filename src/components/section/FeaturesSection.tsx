import { FeaturesSectionProps } from "@/types/types";
import DynamicCard from "../ui/Card/DynamicCard";



const FeaturesSection: React.FC<FeaturesSectionProps> = ({
  title,
  description,
  features, id
}) => {
  return (
    <section className="bg-gray-100 py-8 px-4" id={id}>
      {/* Başlık */}
      {title && (
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">
          {title}
        </h2>
      )}

      {/* Açıklama */}
      {description && (
        <p className="text-center mb-8 text-gray-600" >
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

      {/* Card Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6" >
        {features.map((item, index) => (
          <DynamicCard
            key={index}
            icon={item.icon}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
