export default function GeographiesDuCalme() {
  const deals = [
    {
      title: "Paris → Tokyo avec Etihad Airways",
      price: "À partir de 759€ A/R",
      period: "Automne 2026",
      dates: [
        "12 → 19 septembre",
        "18 → 27 septembre",
        "3 → 10 octobre",
        "14 → 22 octobre",
      ],
      text: "Etihad semble actuellement proposer l’un des tarifs les plus cohérents du marché vers Tokyo au départ de Paris. Une option particulièrement intéressante pour les voyageurs qui souhaitent éviter les périodes de très forte tension tarifaire sur le Japon.",
      image:
        "https://images.unsplash.com/photo-1536098561742-ca998e48cbcc?q=80&w=1800&auto=format&fit=crop",
      link: "https://www.etihad.com/",
    },
    {
      title: "Paris → Séoul",
      price: "À partir de 690€ A/R",
      period: "Septembre + octobre 2026",
      dates: [
        "7 → 15 septembre",
        "18 → 28 septembre",
        "2 → 10 octobre",
      ],
      text: "Séoul continue d’attirer une génération de voyageurs fascinés par la culture coréenne mais qui cherchent désormais des expériences plus lentes et plus locales.",
      image:
        "https://images.unsplash.com/photo-1549693578-d683be217e58?q=80&w=1800&auto=format&fit=crop",
      link: "https://www.klm.fr/",
    },
    {
      title: "New York",
      price: "445–510€ A/R",
      period: "Juin + juillet 2026",
      dates: [
        "4 → 11 juin",
        "15 → 22 juin",
        "7 → 14 juillet",
      ],
      text: "Même les grandes capitales habituellement saturées connaissent parfois quelques fenêtres tarifaires étonnamment accessibles.",
      image:
        "https://images.unsplash.com/photo-1499092346589-b9b6be3e94b2?q=80&w=1800&auto=format&fit=crop",
      link: "https://wwws.airfrance.fr",
    },
    {
      title: "Minorque",
      price: "170–200€ / nuit",
      period: "Juin + septembre 2026",
      dates: [
        "9 → 14 juin",
        "15 → 21 septembre",
      ],
      text: "Certaines îles méditerranéennes semblent redevenir désirables précisément lorsqu’elles redeviennent respirables.",
      image:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1800&auto=format&fit=crop",
      link: "https://www.menorcaexperimental.com/",
    },
    {
      title: "Paros",
      price: "205–242€ / nuit",
      period: "Septembre 2026",
      dates: [
        "2 → 8 septembre",
        "12 → 19 septembre",
      ],
      text: "Paros semble aujourd’hui représenter une alternative plus équilibrée aux Cyclades les plus saturées.",
      image:
        "https://images.unsplash.com/photo-1469796466635-455ede028aca?q=80&w=1800&auto=format&fit=crop",
      link: "https://www.thethinkingtraveller.com/greece/cyclades/paros",
    },
    {
      title: "Syracuse",
      price: "160–210€ / nuit",
      period: "Automne 2026",
      dates: [
        "18 → 23 septembre",
        "4 → 10 octobre",
      ],
      text: "La Sicile continue de séduire les voyageurs qui recherchent davantage de texture culturelle que de perfection touristique.",
      image:
        "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?q=80&w=1800&auto=format&fit=crop",
      link: "https://www.booking.com/",
    },
    {
      title: "Copenhague",
      price: "220–250€ / nuit",
      period: "Été 2026",
      dates: [
        "11 → 15 juin",
        "6 → 11 juillet",
      ],
      text: "Le nord de l’Europe attire désormais des voyageurs qui cherchent davantage de fraîcheur et de simplicité.",
      image:
        "https://images.unsplash.com/photo-1513622470522-26c3c8a854bc?q=80&w=1800&auto=format&fit=crop",
      link: "https://hotelsanders.com/",
    },
    {
      title: "Édimbourg",
      price: "145–190€ / nuit",
      period: "Septembre 2026",
      dates: [
        "3 → 7 septembre",
        "18 → 24 septembre",
      ],
      text: "Les villes plus tempérées et plus marchables semblent gagner discrètement du terrain auprès des voyageurs européens.",
      image:
        "https://images.unsplash.com/photo-1526129318478-62ed807ebdf9?q=80&w=1800&auto=format&fit=crop",
      link: "https://www.thewitchery.com/",
    },
    {
      title: "Hydra",
      price: "210–260€ / nuit",
      period: "Septembre + octobre 2026",
      dates: [
        "9 → 14 septembre",
        "2 → 8 octobre",
      ],
      text: "Hydra continue d’incarner une certaine idée du voyage méditerranéen lent et légèrement hors du temps.",
      image:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1800&auto=format&fit=crop",
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
        "https://images.unsplash.com/photo-1504609813442-a8924e83f76e?q=80&w=1800&auto=format&fit=crop",
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
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1800&auto=format&fit=crop",
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

      {/* PREAMBULE */}

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

          <blockquote className="border-l border-stone-300 pl-8 italic text-3xl text-stone-900 leading-relaxed">
            “Beaucoup de voyageurs décrivent désormais une destination comme calme avant de la qualifier de belle.”
          </blockquote>
        </div>
      </section>

      {/* SMART DEALS */}

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

                  <p className="leading-relaxed text-stone-700 mb-6">
                    {deal.text}
                  </p>

                  <div className="mb-8">
                    <p className="text-sm uppercase tracking-[0.2em] text-stone-400 mb-3">
                      Dates observées
                    </p>

                    <div className="space-y-2 text-sm text-stone-600">
                      {deal.dates.map((date) => (
                        <p key={date}>{date}</p>
                      ))}
                    </div>
                  </div>

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
