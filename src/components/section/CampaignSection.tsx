import { CampaignSectionProps } from "@/types/types";
import CardItem from "../ui/Card/CardItem";

const CampaignSection: React.FC<CampaignSectionProps> = ({
  title,
  description,
  campaigns,
  bgColor = "bg-white",
}) => {
  return (
    <section className={`py-8 ${bgColor}`}>
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

      {/* Kampanya Kartları */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto px-4">
        {campaigns.map((campaign, index) => (
          <CardItem
            key={index}
            imageUrl={campaign.imageUrl}
            title={campaign.title}
            description={campaign.description}
          />
        ))}
      </div>
    </section>
  );
};

export default CampaignSection;
