export default function GeographiesDuCalme() {
  const deals = [
    {
      title: "Paris → Tokyo avec Etihad Airways",
      price: "À partir de 759€ A/R",
      period: "Automne 2026",
      text: "Etihad semble actuellement proposer l’un des tarifs les plus cohérents du marché vers Tokyo. Une option intéressante pour éviter les pics tarifaires habituels du Japon.",
      image:
        "https://images.unsplash.com/photo-1542051841857-5f90071e7989?q=80&w=1800&auto=format&fit=crop",
      link: "https://www.etihad.com/",
    },
    {
      title: "Paris → Séoul",
      price: "À partir de 690€ A/R",
      period: "Septembre + octobre 2026",
      text: "Séoul continue d’attirer une génération de voyageurs fascinés par la culture coréenne, mais qui cherchent désormais des expériences plus lentes et plus locales.",
      image:
        "https://images.unsplash.com/photo-1538485399081-7191377e8241?q=80&w=1800&auto=format&fit=crop",
      link: "https://www.klm.fr/",
    },
    {
      title: "New York",
      price: "445–510€ A/R",
      period: "Juin + juillet 2026",
      text: "Même les grandes capitales saturées connaissent encore quelques fenêtres tarifaires étonnamment cohérentes hors très haute saison.",
      image:
        "https://images.unsplash.com/photo-1496588152823-86ff7695e68f?q=80&w=1800&auto=format&fit=crop",
      link: "https://wwws.airfrance.fr",
    },
    {
      title: "Minorque",
      price: "170–200€ / nuit",
      period: "Juin + septembre 2026",
      text: "Certaines îles méditerranéennes redeviennent désirables précisément lorsqu’elles redeviennent respirables.",
      image:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1800&auto=format&fit=crop",
      link: "https://www.menorcaexperimental.com/",
    },
    {
      title: "Paros",
      price: "205–242€ / nuit",
      period: "Septembre 2026",
      text: "Paros semble aujourd’hui offrir une alternative plus équilibrée aux Cyclades les plus saturées.",
      image:
        "https://images.unsplash.com/photo-1469796466635-455ede028aca?q=80&w=1800&auto=format&fit=crop",
      link: "https://www.thethinkingtraveller.com/greece/cyclades/paros",
    },
    {
      title: "Syracuse",
      price: "160–210€ / nuit",
      period: "Automne 2026",
      text: "La Sicile continue de séduire les voyageurs qui recherchent davantage de texture culturelle que de perfection touristique.",
      image:
        "https://images.unsplash.com/photo-1523531294919-4bcd7c65e216?q=80&w=1800&auto=format&fit=crop",
      link: "https://www.booking.com/",
    },
    {
      title: "Copenhague",
      price: "220–250€ / nuit",
      period: "Été 2026",
      text: "Le nord de l’Europe attire désormais des voyageurs qui cherchent davantage de fraîcheur et de simplicité.",
      image:
        "https://images.unsplash.com/photo-1513622470522-26c3c8a854bc?q=80&w=1800&auto=format&fit=crop",
      link: "https://hotelsanders.com/",
    },
    {
      title: "Édimbourg",
      price: "145–190€ / nuit",
      period: "Septembre 2026",
      text: "Les villes plus tempérées et plus marchables semblent gagner discrètement du terrain auprès des voyageurs européens.",
      image:
        "https://images.unsplash.com/photo-1526129318478-62ed807ebdf9?q=80&w=1800&auto=format&fit=crop",
      link: "https://www.thewitchery.com/",
    },
    {
      title: "Hydra",
      price: "210–260€ / nuit",
      period: "Septembre + octobre 2026",
      text: "Hydra continue d’incarner une certaine idée du voyage méditerranéen lent, silencieux et légèrement hors du temps.",
      image:
        "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?q=80&w=1800&auto=format&fit=crop",
      link: "https://www.hydrahotel.gr/",
    },
  ];

  const destinations = [
    {
      title: "Fukuoka",
      text: "Un Japon plus respirable, plus quotidien et plus subtil. Les voyageurs qui reviennent régulièrement au Japon semblent désormais chercher davantage de fluidité que d’intensité.",
      image:
        "https://images.unsplash.com/photo-1528164344705-47542687000d?q=80&w=1800&auto=format&fit=crop",
      link: "/fukuoka",
    },
    {
      title: "Trieste",
      text: "Une Europe adriatique introspective où les cafés semblent parfois durer tout l’après-midi.",
      image:
        "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?q=80&w=1800&auto=format&fit=crop",
      link: "/trieste",
    },
    {
      title: "Mascate",
      text: "Le luxe du silence dans un Golfe souvent saturé de spectaculaire.",
      image:
        "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1800&auto=format&fit=crop",
      link: "/mascate",
    },
    {
      title: "Jeju",
      text: "Une Corée volcanique et balnéaire où beaucoup viennent désormais davantage ralentir que performer.",
      image:
        "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?q=80&w=1800&auto=format&fit=crop",
      link: "/jeju",
    },
    {
      title: "Aarhus",
      text: "Une Scandinavie plus calme et plus humaine où la simplicité semble encore exister naturellement.",
      image:
        "https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=1800&auto=format&fit=crop",
      link: "/aarhus",
    },
  ];

  return (
    <div className="bg-stone-50 text-stone-800 font-serif">
      <section
        className="relative h-screen flex items-end"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=2200&auto=format&fit=crop')",
          backgroundSize: "cover",
          backgroundPosition: "center",
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
            Le calme devient un critère. La fraîcheur un luxe. La discrétion une nouvelle forme de sophistication.
          </p>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-32">
        <p className="uppercase tracking-[0.3em] text-xs text-stone-500 mb-6">
          Préambule
        </p>

        <h2 className="text-5xl font-light leading-tight mb-12">
          Bienvenue dans cette première newsletter dédiée au slow travel.
        </h2>

        <div className="space-y-10 text-xl leading-relaxed text-stone-700">
          <p>
            Bienvenue dans cette nouvelle édition des Géographies du Calme, une newsletter hebdomadaire imaginée pour celles et ceux qui aiment voyager un peu moins vite, observer davantage et parfois simplement rester plus longtemps au même endroit.
          </p>

          <p>
            Cette publication a été pensée par une petite équipe amoureuse du voyage où l'on aime prendre son temps, des cafés qui ferment tard, des hôtels silencieux, des déplacements en train et des villes dans lesquelles on oublie légèrement l'heure qu'il est.
          </p>

          <p>
            Chaque semaine, nous explorerons plusieurs thèmes récurrents : destinations émergentes, nouvelles thématiques liées au voyage ainsi que nos smart deals de la semaine.
          </p>

          <blockquote className="border-l border-stone-300 pl-8 italic text-3xl text-stone-900 leading-relaxed">
            “Beaucoup de voyageurs décrivent désormais une destination comme calme avant de la qualifier de belle.”
          </blockquote>
        </div>
      </section>

      <section className="bg-stone-100 py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <p className="uppercase tracking-[0.3em] text-xs text-stone-500 mb-6">
              Smart Deals de la semaine
            </p>

            <h2 className="text-5xl font-light leading-tight max-w-5xl">
              Cette semaine, plusieurs opportunités tarifaires particulièrement intéressantes ont retenu notre attention.
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
          <div className="mb-20">
            <p className="uppercase tracking-[0.3em] text-xs text-stone-500 mb-6">
              Là où les voyageurs ralentissent
            </p>

            <h2 className="text-5xl font-light">
              Certaines destinations semblent aujourd’hui offrir quelque chose de devenu étonnamment rare : un peu plus d’espace mental.
            </h2>
          </div>

          <div className="space-y-24">
            {destinations.map((destination) => (
              <div
                key={destination.title}
                className="grid lg:grid-cols-2 gap-12 items-center"
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

                  <p className="text-2xl leading-relaxed text-stone-700 mb-8">
                    {destination.text}
                  </p>

                  <a
                    href={destination.link}
                    className="inline-block border border-stone-300 rounded-full px-5 py-3 text-sm hover:bg-stone-900 hover:text-white transition-all"
                  >
                    Découvrir la destination
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-stone-900 text-stone-100 py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <p className="uppercase tracking-[0.3em] text-xs text-stone-400 mb-6">
              Thématiques voyage de la semaine
            </p>

            <h2 className="text-5xl font-light max-w-5xl leading-tight">
              De nouvelles attentes semblent progressivement transformer la manière dont beaucoup de voyageurs choisissent leurs destinations et leurs hôtels.
            </h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="bg-stone-800 rounded-[2rem] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1522798514-97ceb8c4f1c8?q=80&w=1800&auto=format&fit=crop"
                className="h-72 w-full object-cover"
              />

              <div className="p-8">
                <h3 className="text-3xl font-light mb-6">
                  Les hôtels calmes deviennent plus désirables
                </h3>

                <p className="leading-relaxed text-stone-300">
                  Beaucoup de voyageurs semblent aujourd’hui rechercher des hôtels plus silencieux, plus simples et moins démonstratifs. Une chambre lumineuse avec une belle vue ou un petit-déjeuner tranquille devient parfois plus désirable qu’un hôtel conçu uniquement pour impressionner.
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
                  L’hôtellerie s’éloigne progressivement de l’esthétique Instagram
                </h3>

                <p className="leading-relaxed text-stone-300">
                  Beaucoup de lieux qui séduisent aujourd’hui semblent plus chaleureux, plus vivants et parfois légèrement imparfaits. L’atmosphère reprend progressivement le dessus sur la mise en scène.
                </p>
              </div>
            </div>

            <div className="bg-stone-800 rounded-[2rem] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=1800&auto=format&fit=crop"
                className="h-72 w-full object-cover"
              />

              <div className="p-8">
                <h3 className="text-3xl font-light mb-6">
                  Voyager confortablement redevient un vrai critère
                </h3>

                <p className="leading-relaxed text-stone-300">
                  Beaucoup de voyageurs privilégient désormais des itinéraires plus simples, des horaires plus confortables et des trajets moins épuisants. Le voyage lui-même redevient progressivement une partie importante de l’expérience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
