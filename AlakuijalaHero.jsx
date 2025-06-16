// AlakuijalaHero.jsx
import React from "react";

export default function AlakuijalaHero() {
  return (
    <section
  className="relative w-full min-h-screen overflow-hidden bg-cover bg-right-bottom"
  style={{ backgroundImage: "url('/img/kuva3.png')" }}
>

>

      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between max-w-7xl mx-auto px-6 py-16">
        {/* Tekstisisältö */}
        <div className="text-white max-w-xl space-y-6 bg-white/10 backdrop-blur-lg rounded-xl p-8 shadow-xl">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Rakennetaan yhteydet – maasta taivaaseen
          </h1>
          <p className="text-lg md:text-xl">
            Valokuitu-, maasähkö- ja ilmakaapelityöt Pohjois-Suomessa yli 50 vuoden kokemuksella.
          </p>
          <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-3 px-6 rounded shadow-md transition duration-200">
            Tutustu palveluihin
          </button>
        </div>

        {/* Kuvan osio */}
        <div className="w-full lg:w-[55%] mt-12 lg:mt-0">
          <img
            src="img/kuva3.png"
            alt="Hero-kuva"
            className="w-full h-auto object-cover object-right-bottom max-h-[90vh]"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
