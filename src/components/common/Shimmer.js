const Shimmer = () => {
  return (
    <div className="shimmer-container">
      {Array(12)
        .fill("")
        .map((_, index) => (
          <div className="shimmer-card" key={index}>
            <div className="shimmer-img"></div>
            <div className="shimmer-title"></div>
            <div className="shimmer-text"></div>
            <div className="shimmer-text short"></div>
          </div>
        ))}
    </div>
  );
};

export default Shimmer;