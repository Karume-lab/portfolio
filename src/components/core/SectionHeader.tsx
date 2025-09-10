interface SectionHeaderProps {
  title: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title }) => {
  return (
    <section>
      <h2 className="font-bold text-xs">{title}</h2>
    </section>
  );
};

export default SectionHeader;
