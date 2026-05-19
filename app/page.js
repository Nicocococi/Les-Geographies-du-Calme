export default function GeographiesDuCalme() {
  const deals = [
    {
      title: "Paris → Tokyo avec Etihad Airways",
      price: "À partir de 759€ A/R",
      period: "Automne 2026",
      text: "Etihad semble actuellement proposer l’un des tarifs les plus cohérents du marché vers Tokyo au départ de Paris. Une option particulièrement intéressante pour les voyageurs qui souhaitent éviter les périodes de très forte tension tarifaire sur le Japon.",
      image:
        "https://images.unsplash.com/photo-1542051841857-5f90071e7989?q=80&w=1800&auto=format&fit=crop",
      link: "https://www.etihad.com/",
    },
    {
      title: "Minorque",
      price: "170–200€ / nuit",
      period: "Juin + septembre 2026",
      text: "Certaines îles méditerranéennes semblent redevenir désirables précisément lorsqu’elles redeviennent respirables. Minorque continue discrètement de gagner du terrain auprès des voyageurs qui cherchent davantage de calme que de spectacle.",
      image:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1800&auto=format&fit=crop",
      link: "https://www.menorcaexperimental.com/",
    },
    {
      title: "New York",
      price: "445–510€ A/R",
      period: "Juin + juillet 2026",
      text: "Même les grandes capitales habituellement saturées connaissent parfois quelques fenêtres tarifaires étonnamment accessibles. New York reste l’un des rares grands classiques qui continue d’offrir des opportunités relativement cohérentes hors pics extrêmes.",
      image:
        "https://images.unsplash.com/photo-1496588152823-86ff7695e68f?q=80&w=1800&auto=format&fit=crop",
      link: "https://wwws.airfrance.fr",
    },
    {
      title: "Copenhague",
      price: "220–250€ / nuit",
      period: "Été 2026",
      text: "Le nord de l’Europe attire désormais des voyageurs qui recherchent des températures plus douces, des villes plus respirables et une certaine simplicité de vie. Copenhague illustre parfaitement cette évolution.",
      image:
        "https://images.unsplash.com/photo-1513622470522-26c3c8a854bc?q=80&w=1800&auto=format&fit=crop",
      link: "https://hotelsanders.com/",
    },
    {
      title: "Paros",
      price: "205–242€ / nuit",
      period: "Septembre 2026",
      text: "Paros semble aujourd’hui représenter une alternative plus équilibrée aux Cyclades les plus saturées. Septembre reste probablement l’un des meilleurs moments pour profiter des îles grecques sans fatigue touristique excessive.",
      image:
        "https://images.unsplash.com/photo-1469796466635-455ede028aca?q=80&w=1800&auto=format&fit=crop",
      link: "https://www.thethinkingtraveller.com/greece/cyclades/paros",
    },
  ];

  const destinations = [
    {
      title: "Fukuoka",
      text: "Un Japon plus respirable, plus quotidien, plus subtil. Les voyageurs qui reviennent régulièrement au Japon semblent désormais chercher davantage de fluidité que d’intensité.",
      image:
        "https://images.unsplash.com/photo-1528164344705-47542687000d?q=80&w=1800&auto=format&fit=crop",
      link: "/fukuoka",
    },
    {
      title: "Trieste",
      text: "Une Europe introspective où les cafés durent deux heures et où la frontière entre nostalgie et élégance devient délicieusement floue.",
      image:
        "https://images.unsplash.com/photo-1504609813442-a8924e83f76e?q=80&w=1800&auto=format&fit=crop",
      link: "/trieste",
    },
    {
      title: "Mascate",
      text: "Le luxe du silence dans un Golfe saturé de spectaculaire. Mascate semble parfois fonctionner à contre-courant du reste de la région.",
      image:
        "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1800&auto=format&fit=crop",
      link: "/mascate",
    },
    {
      title: "Jeju",
      text: "Une Corée plus volcanique, plus contemplative et plus balnéaire. Une île qui semble davantage pensée pour respirer que pour performer.",
      image:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1800&auto=format&fit=crop",
      link: "/jeju",
    },
    {
      title: "Aarhus",
      text: "Une Scandinavie plus calme, plus humaine, presque anti-performance. Ce qui devient étonnamment rare.",
      image:
        "https://images.unsplash.com/photo-1518005020951-eccb494ad742?q=80&w=1800&auto=format&fit=crop",
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
            Cette publication a été pensée par une petite équipe amoureuse du voyage où l'on aime prendre son temps, des cafés qui ferment tard, des hôtels silencieux (ou pas), des déplacements en train et des villes dans lesquelles on oublie légèrement l'heure qu'il est.
          </p>

          <p>
            Chaque semaine, nous explorerons plusieurs thèmes récurrents : destinations émergentes, nouvelles thématiques liées au voyage ainsi que nos smart deals de la semaine.
          </p>

          <p>
            Depuis quelques années, quelque chose semble doucement évoluer dans la manière dont beaucoup de personnes voyagent. Certains voyageurs cherchent moins à accumuler les destinations qu’à mieux habiter les lieux. Les périodes hors saison deviennent plus désirables. Les villes tempérées attirent davantage. Et le calme commence progressivement à devenir un vrai critère de choix.
          </p>

          <blockquote className="border-l border-stone-300 pl-8 italic text-3xl text-stone-900 leading-relaxed">
            “Beaucoup de voyageurs décrivent désormais une destination comme calme avant de la qualifier de belle.”
          </blockquote>

          <p>
            Cette première édition explore justement cette évolution discrète du voyage contemporain. Moins de vitesse. Moins de saturation. Et peut-être simplement davantage d’attention portée aux lieux, aux rythmes et aux sensations.
          </p>
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
              De nouvelles attentes semblent progressivement transformer la manière dont beaucoup de voyageurs choisissent leurs destinations, leurs hôtels et même leurs moyens de transport.
            </h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="bg-stone-800 rounded-[2rem] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1800&auto=format&fit=crop"
                className="h-72 w-full object-cover"
              />

              <div className="p-8">
                <h3 className="text-3xl font-light mb-6">
                  Les hôtels calmes deviennent plus désirables
                </h3>

                <p className="leading-relaxed text-stone-300">
                  Pendant longtemps, beaucoup d’hôtels haut de gamme ont cherché à impressionner. Rooftops spectaculaires, design ultra travaillé, lieux très photogéniques et parfois musique omniprésente. Mais de plus en plus de voyageurs semblent aujourd’hui rechercher autre chose.
                  
                  Beaucoup apprécient désormais les établissements plus sobres, plus silencieux et surtout plus faciles à vivre. Une chambre épurée avec une belle lumière naturelle devient parfois plus attractive qu’un hôtel pensé uniquement pour les réseaux sociaux.
                  
                  On voit également revenir une certaine forme de simplicité dans l’hôtellerie. Des hôtels où l’on peut lire tranquillement, prendre son petit-déjeuner lentement ou simplement entendre un peu moins de bruit autour de soi.
                  
                  Ce changement semble particulièrement visible chez les voyageurs réguliers, souvent fatigués par les expériences trop scénarisées. Le vrai luxe devient parfois simplement la sensation de pouvoir ralentir un peu.
                </p>
              </div>
            </div>

            <div className="bg-stone-800 rounded-[2rem] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=1800&auto=format&fit=crop"
                className="h-72 w-full object-cover"
              />

              <div className="p-8">
                <h3 className="text-3xl font-light mb-6">
                  L’hôtellerie s’éloigne progressivement de l’esthétique Instagram
                </h3>

                <p className="leading-relaxed text-stone-300">
                  Certains établissements qui séduisent aujourd’hui ne sont plus forcément les plus parfaits visuellement. Beaucoup de voyageurs semblent au contraire apprécier des lieux plus chaleureux, plus vivants et parfois légèrement imparfaits.
                  
                  Des hôtels avec des livres qui traînent dans le salon, des matières naturelles, des chambres pas totalement standardisées ou des espaces qui donnent davantage l’impression d’être habités.
                  
                  Cette évolution est particulièrement visible dans de nombreux boutique hôtels européens ou japonais. L’atmosphère semble progressivement prendre le dessus sur la mise en scène.
                  
                  Cela ne signifie pas que le design disparaît. Mais beaucoup de voyageurs semblent désormais préférer des lieux qui procurent une sensation de confort réel plutôt qu’une succession de décors pensés uniquement pour être photographiés.
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
                  Pendant longtemps, beaucoup de voyageurs acceptaient facilement des vols compliqués, des correspondances agressives ou des trajets très fatigants pour réduire les prix ou multiplier les destinations.
                  
                  Mais une certaine fatigue du voyage semble aujourd’hui apparaître. Beaucoup privilégient désormais des itinéraires plus simples, des horaires plus confortables ou des compagnies capables d’offrir une expérience plus fluide.
                  
                  Cela explique aussi le retour progressif du train sur certaines destinations européennes. Le voyage lui-même redevient parfois une partie importante de l’expérience.
                  
                  Même dans l’aérien, certaines compagnies séduisent désormais moins par le prestige que par leur capacité à rendre le déplacement un peu moins épuisant. Et honnêtement, arriver de bonne humeur devient presque un luxe moderne.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-40 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <p className="uppercase tracking-[0.3em] text-xs text-stone-500 mb-12">
            Les citations du voyage de la semaine
          </p>

          <div className="space-y-32">
            <blockquote className="text-4xl md:text-5xl font-light italic leading-relaxed text-stone-800">
              “Beaucoup de voyageurs premium craignent désormais davantage la foule que les prix.”
            </blockquote>

            <blockquote className="text-4xl md:text-5xl font-light italic leading-relaxed text-stone-800">
              “Les voyageurs qui retournent régulièrement au Japon descendent de plus en plus vers le sud et ralentissent.”
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
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <p className="uppercase tracking-[0.3em] text-xs text-stone-300 mb-8">
            Le mot de la fin
          </p>

          <h2 className="text-5xl md:text-6xl font-light leading-tight mb-10">
            Les destinations qui émergent aujourd’hui promettent rarement plus.
          </h2>

          <p className="text-2xl leading-relaxed text-stone-200">
            Elles promettent souvent autre chose. Un peu plus d’espace mental, un peu moins de bruit et parfois simplement la sensation de pouvoir encore habiter pleinement un lieu.
          </p>

          <p className="mt-20 text-sm tracking-[0.3em] uppercase text-stone-400">
            Édition suivante : bientôt.
          </p>
        </div>
      </section>
    </div>
  );
