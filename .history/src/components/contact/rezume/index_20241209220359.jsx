import React from "react";

const Rezume = () => {
  return (
    <section className="text-center py-4">
      <p className="text-lg">
        <strong>Resume: </strong>
        <a
          href="../../../assets/pdf/Jamshidov Shohjahon, Frontend developer.pdf"
          download
          className="text-blue-600 underline hover:text-blue-800 transition-colors"
        >
          Download PDF
        </a>
      </p>
    </section>
  );
};

export default Rezume;
