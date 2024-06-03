const GiftCard = () => {
  return (
    <div className="container mx-auto px-10">
      <div className="flex justify-between mt-20 mb-10">
        <p
          style={{
            fontWeight: 600,
            fontSize: "20px",
            lineHeight: "24px",
            color: "var(--Text-Regular, #222222)",
          }}
        >
          Gift Cards (1500)
        </p>

        <button
          style={{
            fontWeight: 400,
            fontSize: "18px",
            lineHeight: "21px",
            color: "var(--Text-Regular, #222222)",
            textDecoration: "underline",
          }}
        >
          View All
        </button>
      </div>
    </div>
  );
};

export default GiftCard;
