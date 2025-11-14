import React from 'react';
import Banner from '@/components/common/Banner';
import FadeIn from '@/components/common/FadeIn';
import Image from 'next/image';

function page() {
  return (
    <div className="font-[family-name:var(--font-montserrat)] pt-120">
      <Banner
        slides={[
          {
            imgPath: '/recipes.png',
            title: 'Recipes using our Christmas gifts',
          },
        ]}
        dimmed={
          <div className="bg-neutral-900/20 w-full h-screen md:h-700 absolute z-10" />
        }
      />

      <div className="px-20 xl:px-80 max-w-[1600px] mx-auto py-50">
        {/* Marinade Recipe */}
        <FadeIn>
          <div className="mb-80">
            <h2 className="text-3xl md:text-4xl font-bold mb-40 text-center">
              Chili Oil
            </h2>

            <div className="bg-white rounded-20 shadow-lg p-40 md:p-60 space-y-30 flex gap-20 flex-wrap justify-center items-center md:justify-start md:items-start">
              <div className="relative w-300 h-300 md:h-300 md:w-300 mb-30 rounded-10 overflow-hidden">
                <Image
                  src="/recipes/chili_oil.png"
                  alt="Chili Oil"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <div className="space-y-20">
                  <h3 className="text-2xl font-bold text-primary">Marinade</h3>
                  <p className="text-neutral-700 text-lg">
                    Combine chilli oil with soy sauce, garlic, ginger for
                    chicken, pork or fish
                  </p>
                </div>

                <div className="space-y-20">
                  <h3 className="text-2xl font-bold text-primary">
                    Drizzle on Your Favourites
                  </h3>
                  <p className="text-neutral-700 text-lg">
                    Perfect for pizza, pasta, seafood, and roast vegetables
                  </p>
                </div>

                <div className="space-y-20">
                  <h3 className="text-2xl font-bold text-primary">
                    Dipping Sauce
                  </h3>
                  <p className="text-neutral-700 text-lg">
                    Mix soy sauce, vinegar and chilli oil for a delicious
                    dipping sauce
                  </p>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
        <FadeIn>
          <div className="mb-80">
            <h2 className="text-3xl md:text-4xl font-bold mb-40 text-center">
              Flavoured Salt
            </h2>
            <div className="bg-white rounded-20 shadow-lg p-40 md:p-60 space-y-30 flex gap-20 flex-wrap">
              <div className="relative w-300 h-300 md:h-300 md:w-300 mb-30 rounded-10 overflow-hidden">
                <Image
                  src="/recipes/herb_salt.png"
                  alt="Flavoured Salt"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="space-y-20">
                <h3 className="text-2xl font-bold text-primary">
                  Flavoured Salt
                </h3>
                <p className="text-neutral-700 text-lg mb-20">
                  Season your steak, chicken, pork or fish
                </p>
                <p className="text-neutral-700 text-lg">
                  Add on top of your Focaccia bread, or mix into freshly made
                  popcorn
                </p>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Spiced Cucumber Salad Recipe */}
        <FadeIn delay={0.1}>
          <div className="mb-80">
            <h2 className="text-3xl md:text-4xl font-bold mb-40 text-center">
              Spiced Cucumber Salad
            </h2>

            <div className="bg-white rounded-20 shadow-lg p-40 md:p-60">
              <div className="relative w-full h-200 md:h-200 mb-40 rounded-10 overflow-hidden">
                <Image
                  src="/recipes/cucumber_salad.png"
                  alt="Spiced Cucumber Salad"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-40">
                {/* Ingredients */}
                <div>
                  <h3 className="text-2xl font-bold text-primary mb-30">
                    Ingredients
                  </h3>
                  <div className="space-y-20">
                    <div>
                      <h4 className="font-semibold text-lg mb-15">Main</h4>
                      <ul className="space-y-10 text-neutral-700">
                        <li>
                          • 1 large cucumber (approx 300g in total if using
                          small cucumbers)
                        </li>
                        <li>• Salt</li>
                        <li>• 2 cloves garlic, finely chopped or grated</li>
                        <li>• 2 tsp toasted black and white sesame seeds</li>
                        <li>• ½-1 tbsp chilli oil</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-lg mb-15">Dressing</h4>
                      <ul className="space-y-10 text-neutral-700">
                        <li>• 1 tbsp light soy sauce</li>
                        <li>
                          • 1½ tsp rice vinegar (regular or black Chinkiang)
                        </li>
                        <li>• 1 tsp sesame oil</li>
                        <li>• 1-2 tsp sugar</li>
                        <li>• 1 pinch salt (optional)</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Instructions */}
                <div>
                  <h3 className="text-2xl font-bold text-primary mb-30">
                    Instructions
                  </h3>
                  <ol className="space-y-20 text-neutral-700">
                    <li className="flex gap-15">
                      <span className="font-bold text-primary flex-shrink-0">
                        1.
                      </span>
                      <span>Trim the ends of the cucumber and discard.</span>
                    </li>
                    <li className="flex gap-15">
                      <span className="font-bold text-primary flex-shrink-0">
                        2.
                      </span>
                      <span>
                        Take a cleaver, heavy knife or rolling pin and firmly
                        hit the cucumber along its length so that it breaks
                        open.
                      </span>
                    </li>
                    <li className="flex gap-15">
                      <span className="font-bold text-primary flex-shrink-0">
                        3.
                      </span>
                      <span>
                        If it hasn&apos;t naturally broken into 4 lengths, cut
                        it so.
                      </span>
                    </li>
                    <li className="flex gap-15">
                      <span className="font-bold text-primary flex-shrink-0">
                        4.
                      </span>
                      <span>
                        Slice each length into bite sized pieces, removing and
                        discarding most of the seeds.
                      </span>
                    </li>
                    <li className="flex gap-15">
                      <span className="font-bold text-primary flex-shrink-0">
                        5.
                      </span>
                      <span>
                        Put the cucumber pieces in a sieve or colander over a
                        bowl.
                      </span>
                    </li>
                    <li className="flex gap-15">
                      <span className="font-bold text-primary flex-shrink-0">
                        6.
                      </span>
                      <span>
                        Sprinkle lightly with salt, toss, then leave to drain
                        for 10 minutes.
                      </span>
                    </li>
                    <li className="flex gap-15">
                      <span className="font-bold text-primary flex-shrink-0">
                        7.
                      </span>
                      <span>
                        Make the dressing by stirring all the dressing
                        ingredients together.
                      </span>
                    </li>
                    <li className="flex gap-15">
                      <span className="font-bold text-primary flex-shrink-0">
                        8.
                      </span>
                      <span>
                        Taste and add more of any ingredient if necessary: it
                        should taste salty, sweet and sour.
                      </span>
                    </li>
                    <li className="flex gap-15">
                      <span className="font-bold text-primary flex-shrink-0">
                        9.
                      </span>
                      <span>
                        Dry the cucumber on kitchen paper then transfer to a
                        serving bowl.
                      </span>
                    </li>
                    <li className="flex gap-15">
                      <span className="font-bold text-primary flex-shrink-0">
                        10.
                      </span>
                      <span>Toss with the chopped garlic.</span>
                    </li>
                    <li className="flex gap-15">
                      <span className="font-bold text-primary flex-shrink-0">
                        11.
                      </span>
                      <span>
                        Just before serving, toss with the dressing and toasted
                        sesame seeds.
                      </span>
                    </li>
                    <li className="flex gap-15">
                      <span className="font-bold text-primary flex-shrink-0">
                        12.
                      </span>
                      <span>
                        Drizzle or spoon over the chilli oil and serve.
                      </span>
                    </li>
                  </ol>

                  <div className="mt-30 p-20 bg-gray-50 rounded-10">
                    <p className="text-neutral-600 italic">
                      Best eaten as soon as possible on the day of making,
                      although can be kept in the fridge for 2 days.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}

export default page;
