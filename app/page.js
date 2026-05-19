export default function GeographiesDuCalme() {
  const deals = [
    {
      title: "Paris → Tokyo",
      price: "~1 019€ à 1 167€ A/R",
      period: "Juin + automne 2026",
      text: "Le Japon reste étonnamment stable malgré une demande toujours très forte. Une rare combinaison entre désirabilité culturelle et accessibilité relative.",
      image:
        "https://images.unsplash.com/photo-1542051841857-5f90071e7989?q=80&w=1800&auto=format&fit=crop",
      link: "https://wwws.airfrance.fr/fr-fr/vols-de-paris-a-tokyo",
    },
    {
      title: "Minorque",
      price: "~170–200€/nuit",
      period: "Juin + septembre 2026",
      text: "Une Méditerranée encore respirable : concept qui devient doucement premium sans vraiment le dire.",
      image:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1800&auto=format&fit=crop",
      link: "https://www.menorcaexperimental.com/",
    },
    {
      title: "New York",
      price: "~445–510€ A/R",
      period: "Juin + juillet 2026",
      text: "Même les grandes capitales saturées semblent connaître de discrètes fenêtres de respiration tarifaire.",
      image:
        "https://images.unsplash.com/photo-1496588152823-86ff7695e68f?q=80&w=1800&auto=format&fit=crop",
      link: "https://wwws.airfrance.fr",
    },
    {
      title: "Copenhague",
      price: "~220–250€/nuit",
      period: "Été 2026",
      text: "Le nouvel été nordique devient émotionnellement très désirable : moins spectaculaire : souvent plus vivable.",
      image:
        "https://images.unsplash.com/photo-1513622470522-26c3c8a854bc?q=80&w=1800&auto=format&fit=crop",
      link: "https://hotelsanders.com/",
    },
    {
      title: "Cyclades",
      price: "~205–242€/nuit",
      period: "Septembre 2026",
      text: "Le vrai luxe méditerranéen commence peut-être après août : lorsque les îles recommencent enfin à respirer.",
      image:
        "https://images.unsplash.com/photo-1469796466635-455ede028aca?q=80&w=1800&auto=format&fit=crop",
      link: "https://www.thethinkingtraveller.com/greece/cyclades",
    },
  ];

  const destinations = [
    {
      title: "Fukuoka",
      text: "Un Japon plus respirable, plus quotidien, plus subtil. Les voyageurs qui reviennent régulièrement au Japon semblent désormais chercher davantage de fluidité que d’intensité.",
      image:
        "https://images.unsplash.com/photo-1528164344705-47542687000d?q=80&w=1800&auto=format&fit=crop",
      link: "#",
    },
    {
      title: "Trieste",
      text: "Une Europe introspective où les cafés durent deux heures et où la frontière entre nostalgie et élégance devient délicieusement floue.",
      image:
        "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?q=80&w=1800&auto=format&fit=crop",
      link: "#",
    },
    {
      title: "Mascate",
      text: "Le luxe du silence dans un Golfe saturé de spectaculaire. Mascate semble parfois fonctionner à contre-courant du reste de la région.",
      image:
        "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1800&auto=format&fit=crop",
      link: "#",
    },
    {
      title: "Jeju",
      text: "Une Corée plus volcanique, plus contemplative, plus lente aussi. Une île qui semble davantage pensée pour respirer que pour performer.",
      image:
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1800&auto=format&fit=crop",
      link: "#",
    },
    {
      title: "Aarhus",
      text: "Une Scandinavie plus calme, plus humaine, presque anti-performance. Ce qui devient étonnamment rare.",
      image:
        "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1800&auto=format&fit=crop",
      link: "#",
    },
  ];

  return (
    <div className="bg-stone-50 text-stone-800 font-serif">
      <section
        className="relative h-screen flex items-end"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=2200&auto=format&fit=crop')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/40" />

        <div className="relative z-10 max-w-6xl px-8 pb-24 text-white">
          <p className="uppercase tracking-[0.4em] text-xs mb-6 opacity-80">
            Newsletter hebdomadaire dédiée au slow travel
          </p>

          <h1 className="text-6xl md:text-8xl font-light leading-none mb-10">
            Les Géographies
            <br />
            du Calme
          </h1>

          <p className="max-w-3xl text-xl md:text-2xl leading-relaxed text-stone-100">
            Le calme devient un critère : la fraîcheur un luxe : la discrétion une nouvelle forme de sophistication.
          </p>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-32">
        <p className="uppercase tracking-[0.3em] text-xs text-stone-500 mb-6">
          Édito de la semaine
        </p>

        <h2 className="text-5xl font-light leading-tight mb-12">
          Le climat redessine discrètement les saisons du voyage.
        </h2>

        <div className="space-y-10 text-xl leading-relaxed text-stone-700">
          <p>
            Bienvenue dans cette nouvelle édition des Géographies du Calme : une newsletter hebdomadaire imaginée pour celles et ceux qui aiment voyager un peu moins vite : observer davantage : et parfois simplement rester plus longtemps au même endroit.
          </p>

          <p>
            Cette publication a été pensée par une petite équipe amoureuse du voyage : des cafés qui ferment tard : des hôtels silencieux : des trains un peu trop longs : et des villes où l’on oublie légèrement l’heure qu’il est.
          </p>

          <p>
            Chaque semaine : nous explorerons plusieurs thèmes récurrents : destinations émergentes : nouvelles sensibilités du luxe : signaux faibles du voyage contemporain : ainsi que quelques opportunités tarifaires discrètement intéressantes.
          </p>

          <p>
            Pendant longtemps : le luxe consistait surtout à accéder à davantage. Mais quelque chose semble discrètement changer. Les voyageurs sophistiqués réorganisent progressivement leurs habitudes autour du confort thermique : de la fatigue sensorielle : et d’un besoin croissant de respiration mentale.
          </p>

          <blockquote className="border-l border-stone-300 pl-8 italic text-3xl text-stone-900 leading-relaxed">
            “Beaucoup de voyageurs décrivent désormais une destination comme calme avant de la qualifier de belle.”
          </blockquote>

          <p>
            Septembre paraît parfois plus luxueux que juillet. Les villes nordiques gagnent du terrain. Même la manière de parler des destinations évolue : le calme devient progressivement un indicateur culturel.
          </p>
        </div>
      </section>

      <section className="bg-stone-100 py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <p className="uppercase tracking-[0.3em] text-xs text-stone-500 mb-6">
              Smart Deals de la semaine
            </p>

            <h2 className="text-5xl font-light">
              Cette semaine : quelques fenêtres tarifaires particulièrement intéressantes ont retenu notre attention.
            </h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {deals.map((deal) => (
              <div
                key={deal.title}
                className="bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500"
              >
                <img
                  src={deal.image}
                  alt={deal.title}
                  className="h-80 w-full object-cover"
                />

                <div className="p-8">
                  <p className="uppercase tracking-[0.25em] text-xs text-stone-500 mb-4">
                    {deal.period}
                  </p>

                  <h3 className="text-3xl font-light mb-4">
                    {deal.title}
                  </h3>

                  <p className="text-stone-500 italic mb-6">
                    {deal.price}
                  </p>

                  <p className="leading-relaxed text-stone-700 mb-8">
                    {deal.text}
                  </p>

                  <a
                    href={deal.link}
                    target="_blank"
                    className="inline-block border border-stone-300 rounded-full px-5 py-3 text-sm hover:bg-stone-900 hover:text-white transition-all"
                  >
                    Voir l’offre
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
