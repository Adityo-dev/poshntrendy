function Empty({ image, title, description }) {
  return (
    <div className="max-w-3xl mx-auto text-center pt-24">
      <h3 className="text-3xl">{title}</h3>
      <p className="mt-3">{description}</p>
    </div>
  );
}

export default Empty;
