export default function GeographiesDuCalme() {
  const deals = [
    {
      title: "Paris → Tokyo",
      price: "~1 019€ à 1 167€ A/R",
      period: "Juin + automne 2026",
      text: "Le Japon reste étonnamment stable malgré une demande toujours très forte.",
      image:
        "https://images.unsplash.com/photo-1542051841857-5f90071e7989?q=80&w=1800&auto=format&fit=crop",
      link: "https://wwws.airfrance.fr/fr-fr/vols-de-paris-a-tokyo",
    },
    {
      title: "Minorque",
      price: "~170–200€/nuit",
      period: "Juin + septembre 2026",
      text: "Une Méditerranée encore respirable : concept qui devient légèrement premium.",
      image:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1800&auto=format&fit=crop",
      link: "https://www.menorcaexperimental.com/",
    },
    {
      title: "New York",
      price: "~445–510€ A/R",
      period: "Juin + juillet 2026",
      text: "Même les marchés semblent légèrement fatigués cet été.",
      image:
        "https://images.unsplash.com/photo-1496588152823-86ff7695e68f?q=80&w=1800&auto=format&fit=crop",
      link: "https://wwws.airfrance.fr",
    },
    {
      title: "Copenhague",
      price: "~220–250€/nuit",
      period: "Été 2026",
      text: "Le nouvel été nordique devient émotionnellement très désirable.",
      image:
        "https://images.unsplash.com/photo-1513622470522-26c3c8a854bc?q=80&w=1800&auto=format&fit=crop",
      link: "https://hotelsanders.com/",
    },
    {
      title: "Cyclades",
      price: "~205–242€/nuit",
      period: "Septembre 2026",
      text: "Le vrai luxe méditerranéen commence peut-être après août.",
      image:
        "https://images.unsplash.com/photo-1469796466635-455ede028aca?q=80&w=1800&auto=format&fit=crop",
      link: "https://www.thethinkingtraveller.com/greece/cyclades",
    },
  ];

  const destinations = [
    {
      title: "Fukuoka",
      text: "Un Japon plus respirable, plus quotidien, plus subtil.",
      image:
        "https://images.unsplash.com/photo-1526481280695-3c4691f8f25c?q=80&w=1800&auto=format&fit=crop",
    },
    {
      title: "Trieste",
      text: "Une Europe introspective où les cafés durent deux heures.",
      image:
        "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?q=80&w=1800&auto=format&fit=crop",
    },
    {
      title: "Mascate",
      text: "Le luxe du silence dans un Golfe saturé de spectaculaire.",
      image:
        "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1800&auto=format&fit=crop",
    },
    {
      title: "Jeju",
      text: "Une Corée plus douce, plus volcanique, plus contemplative.",
      image:
        "https://images.unsplash.com/photo-1519046904884-53103b34b206?q=80&w=1800&auto=format&fit=crop",
    },
    {
      title: "Aarhus",
      text: "Une Scandinavie plus calme, plus respirable, plus humaine.",
      image:
        "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1800&auto=format&fit=crop",
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
            Premium Travel & Lifestyle
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

      <section className="max-w-4xl mx-auto px-6 py-32">
        <p className="uppercase tracking-[0.3em] text-xs text-stone-500 mb-6">
          Opening Editorial Note
        </p>

        <h2 className="text-5xl font-light leading-tight mb-12">
          Le climat redessine discrètement les saisons du luxe.
        </h2>

        <div className="space-y-10 text-xl leading-relaxed text-stone-700">
          <p>
            Pendant longtemps, le luxe consistait surtout à accéder à davantage.
          </p>

          <p>
            Mais quelque chose commence discrètement à bouger ailleurs : moins de saturation, moins de bruit, moins de chaleur écrasante.
          </p>

          <blockquote className="border-l border-stone-300 pl-8 italic text-3xl text-stone-900 leading-relaxed">
            “Beaucoup de voyageurs décrivent désormais une destination comme calme avant de la qualifier de belle.”
          </blockquote>
        </div>
      </section>

      <section className="relative py-40 px-6 overflow-hidden bg-white">
        <img
          src="https://images.unsplash.com/photo-1500375592092-40eb2168fd21?q=80&w=2200&auto=format&fit=crop"
          className="absolute inset-0 w-full h-full object-cover opacity-10"
        />

        <div className="relative z-10 max-w-5xl mx-auto">
          <p className="uppercase tracking-[0.3em] text-xs text-stone-500 mb-6">
            Emerging Editorial Narratives
          </p>

          <h2 className="text-5xl md:text-6xl font-light leading-tight mb-16">
            Le luxe semble aujourd’hui moins lié à l’intensité qu’à la régulation.
          </h2>

          <div className="space-y-10 text-xl leading-relaxed text-stone-700">
            <p>
              Les voyageurs sophistiqués semblent désormais réorganiser leurs habitudes autour du confort thermique et de la fatigue sensorielle.
            </p>

            <p>
              Septembre paraît parfois plus luxueux que juillet. Les villes nordiques gagnent du terrain. On voyage toujours loin parfois : mais plus doucement.
            </p>

            <p>
              Même la manière de parler des destinations évolue. Le mot “calme” devient presque un indicateur culturel.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-stone-100 py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <p className="uppercase tracking-[0.3em] text-xs text-stone-500 mb-6">
              Smart Deals de la semaine
            </p>

            <h2 className="text-5xl font-light">
              Opportunités discrètes
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

      <section className="bg-white py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <p className="uppercase tracking-[0.3em] text-xs text-stone-500 mb-6">
              Destinations Gaining Cultural Momentum
            </p>

            <h2 className="text-5xl font-light">
              Là où les voyageurs ralentissent
            </h2>
          </div>

          <div className="space-y-16">
            {destinations.map((destination) => (
              <div
                key={destination.title}
                className="grid lg:grid-cols-2 gap-10 items-center"
              >
                <img
                  src={destination.image}
                  alt={destination.title}
                  className="rounded-[2rem] h-[520px] w-full object-cover"
                />

                <div>
                  <h3 className="text-5xl font-light mb-8">
                    {destination.title}
                  </h3>

                  <p className="text-2xl leading-relaxed text-stone-700 max-w-xl">
                    {destination.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-stone-900 text-stone-100 py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <p className="uppercase tracking-[0.3em] text-xs text-stone-400 mb-6">
              Luxury & Lifestyle Shifts
            </p>

            <h2 className="text-5xl font-light">
              Le luxe devient plus respirable
            </h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="bg-stone-800 rounded-[2rem] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=1800&auto=format&fit=crop"
                className="h-72 w-full object-cover"
              />

              <div className="p-8">
                <h3 className="text-3xl font-light mb-6">
                  Le luxe devient une question de soulagement cognitif
                </h3>

                <p className="leading-relaxed text-stone-300">
                  Les hôtels les plus désirables ne sont plus forcément les plus spectaculaires.
                </p>
              </div>
            </div>

            <div className="bg-stone-800 rounded-[2rem] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1800&auto=format&fit=crop"
                className="h-72 w-full object-cover"
              />

              <div className="p-8">
                <h3 className="text-3xl font-light mb-6">
                  L’hôtellerie s’éloigne enfin de l’ère Instagram
                </h3>

                <p className="leading-relaxed text-stone-300">
                  Le luxe redevient progressivement sensoriel plutôt que performatif.
                </p>
              </div>
            </div>

            <div className="bg-stone-800 rounded-[2rem] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1529074963764-98f45c47344b?q=80&w=1800&auto=format&fit=crop"
                className="h-72 w-full object-cover"
              />

              <div className="p-8">
                <h3 className="text-3xl font-light mb-6">
                  L’aviation à taille humaine devient un vrai signal premium
                </h3>

                <p className="leading-relaxed text-stone-300">
                  Le vrai luxe moderne est peut-être simplement d’arriver encore de bonne humeur.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-40 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <p className="uppercase tracking-[0.3em] text-xs text-stone-500 mb-12">
            Under-the-Radar Observations
          </p>

          <div className="space-y-32">
            <blockquote className="text-4xl md:text-5xl font-light italic leading-relaxed text-stone-800">
              “Beaucoup de voyageurs premium craignent désormais davantage la foule que les prix.”
            </blockquote>

            <blockquote className="text-4xl md:text-5xl font-light italic leading-relaxed text-stone-800">
              “Les voyageurs qui retournent régulièrement au Japon descendent de plus en plus vers le sud : et ralentissent.”
            </blockquote>

            <blockquote className="text-4xl md:text-5xl font-light italic leading-relaxed text-stone-800">
              “Les hôtels les plus désirables donnent souvent l’impression que personne n’a essayé trop fort.”
            </blockquote>
          </div>
        </div>
      </section>

      <section
        className="relative py-40 px-6 text-white"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2200&auto=format&fit=crop')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <p className="uppercase tracking-[0.3em] text-xs text-stone-300 mb-8">
            Closing Reflection
          </p>

          <h2 className="text-5xl md:text-6xl font-light leading-tight mb-10">
            Les destinations qui émergent aujourd’hui promettent rarement plus.
          </h2>

          <p className="text-2xl leading-relaxed text-stone-200">
            Elles promettent souvent autre chose : un peu plus d’espace mental : un peu moins de bruit : parfois simplement la sensation de pouvoir encore habiter pleinement un lieu.
          </p>

          <p className="mt-20 text-sm tracking-[0.3em] uppercase text-stone-400">
            Édition suivante : bientôt.
          </p>
        </div>
      </section>
    </div>
  );
}
