interface CategoryCardProps {
  icon: string;
  title: string;
  description: string;
}

export default function CategoryCard({
  icon,
  title,
  description,
}: CategoryCardProps) {
  return (
    <div className="category-card">

      <div className="category-icon">
        {icon}
      </div>

      <h3>{title}</h3>

      <p>{description}</p>

    </div>
  );
}