import { ReusableSectionProps } from "@/types/types";

  
  const ReusableSection: React.FC<ReusableSectionProps> = ({
    title,
    description,
    bgColor = "bg-white",
    children,
  }) => {
    return (
      <section className={`py-8 px-4 ${bgColor}`}>
        {/* Başlık */}
        {title && (
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">{title}</h2>
        )}
  
        {/* Açıklama */}
        {description && (
          <p className="text-center mb-8 text-gray-600">
            {description.map((part, index) =>
              part.highlight ? (
                <span key={index} className="text-yellow-500 font-semibold">{part.text}</span>
              ) : (
                <span key={index}>{part.text}</span>
              )
            )}
          </p>
        )}
  
        {/* İçerik */}
        <div className="max-w-7xl mx-auto">{children}</div>
      </section>
    );
  };
  
  export default ReusableSection;
  