const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div className="md:w-4/12 mx-auto my-8 space-y-2">
      <p className="text-center text-yellow-600">--- {subHeading} ---</p>
      <h3 className="text-center text-3xl uppercase border-y-2 p-4">{heading}</h3>
    </div>
  );
};

export default SectionTitle;
