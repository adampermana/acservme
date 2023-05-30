import React from "react";

const Testimonial = () => {
  return (
    <section className="py-20 bg-white sm:py-32">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <ul
          role="list"
          className="grid max-w-2xl grid-cols-1 gap-6 mx-auto sm:gap-8 lg:max-w-none lg:grid-cols-1"
          style={{ scrollBehavior: "smooth" }}
        >
          <li className="overflow-x-scroll">
            <ul role="list" className="flex flex-row gap-6 sm:gap-8">
              <li className="flex-shrink-0 w-80">
                <figure className="relative h-full p-6 bg-white shadow-lg shadow-zinc-200 rounded-3xl">
                  <blockquote className="relative">
                    <p className="text-base text-gray-500">
                      "Layanan perbaikan dan cuci AC terpercaya"
                    </p>
                  </blockquote>
                  <figcaption className="relative flex items-center justify-between pt-6 mt-6 border-t border-gray-100">
                    <div>
                      <div className="text-base text-black">Adam Permana</div>
                      <div className="mt-1 text-sm text-gray-500">
                        CEO at PT.ADP STORE
                      </div>
                    </div>
                    <div className="overflow-hidden rounded-full bg-gray-50">
                      <img
                        alt=""
                        src="https://i.ibb.co/BV5JYPW/adampp.jpg"
                        width="56"
                        height="56"
                        decoding="async"
                        data-nimg="future"
                        className="object-cover h-14 w-14"
                        loading="lazy"
                        style={{ color: "transparent" }}
                      />
                    </div>
                  </figcaption>
                </figure>
              </li>
              <li className="flex-shrink-0 w-80">
                <figure className="relative h-full p-6 bg-white shadow-lg shadow-zinc-200 rounded-3xl">
                  <blockquote className="relative">
                    <p className="text-base text-gray-500">
                      "Jasa perbaikan AC terbaik dan bertanggung jawab"
                    </p>
                  </blockquote>
                  <figcaption className="relative flex items-center justify-between pt-6 mt-6 border-t border-gray-100">
                    <div>
                      <div className="text-base text-black">
                        Agung Yuda Pratama
                      </div>
                      <div className="mt-1 text-sm text-gray-500">
                        Founder of PT.Istok
                      </div>
                    </div>
                    <div className="overflow-hidden rounded-full bg-gray-50">
                      <img
                        alt=""
                        src="https://i.ibb.co/gjZQjCN/agung.jpg"
                        width="56"
                        height="56"
                        decoding="async"
                        data-nimg="future"
                        className="object-cover h-14 w-14"
                        loading="lazy"
                        style={{ color: "transparent" }}
                      />
                    </div>
                  </figcaption>
                </figure>
              </li>
              {/*  */}
              <li className="flex-shrink-0 w-80">
                <figure className="relative h-full p-6 bg-white shadow-lg shadow-zinc-200 rounded-3xl">
                  <blockquote className="relative">
                    <p className="text-base text-gray-500">
                      "Sudah berlangganan lama, dan selalu menjadi andalan"
                    </p>
                  </blockquote>
                  <figcaption className="relative flex items-center justify-between pt-6 mt-6 border-t border-gray-100">
                    <div>
                      <div className="text-base text-black">Baiturrahman</div>
                      <div className="mt-1 text-sm text-gray-500">
                        CEO at PT.ADW Nusantara
                      </div>
                    </div>
                    <div className="overflow-hidden rounded-full bg-gray-50">
                      <img
                        alt=""
                        src="https://i.ibb.co/jvg4dFR/Whats-App-Image-2023-05-31-at-02-44-39.jpg"
                        width="56"
                        height="56"
                        decoding="async"
                        data-nimg="future"
                        className="object-cover h-14 w-14"
                        loading="lazy"
                        style={{ color: "transparent" }}
                      />
                    </div>
                  </figcaption>
                </figure>
              </li>
              {/*  */}
              <li className="flex-shrink-0 w-80">
                <figure className="relative h-full p-6 bg-white shadow-lg shadow-zinc-200 rounded-3xl">
                  <blockquote className="relative">
                    <p className="text-base text-gray-500">
                      "Service AC pokoknya harus sama ACSERVME deh, bagus
                      banget!"
                    </p>
                  </blockquote>
                  <figcaption className="relative flex items-center justify-between pt-6 mt-6 border-t border-gray-100">
                    <div>
                      <div className="text-base text-black">Muhammad Kahfi</div>
                      <div className="mt-1 text-sm text-gray-500">
                        Founder of PT.TRANS Studio
                      </div>
                    </div>
                    <div className="overflow-hidden rounded-full bg-gray-50">
                      <img
                        alt=""
                        src="https://i.ibb.co/4pBY6rj/kahfi.jpg"
                        width="56"
                        height="56"
                        decoding="async"
                        data-nimg="future"
                        className="object-cover h-14 w-14"
                        loading="lazy"
                        style={{ color: "transparent" }}
                      />
                    </div>
                  </figcaption>
                </figure>
              </li>
              <li className="flex-shrink-0 w-80">
                <figure className="relative h-full p-6 bg-white shadow-lg shadow-zinc-200 rounded-3xl">
                  <blockquote className="relative">
                    <p className="text-base text-gray-500">
                      "Pelayanan yang bagus dan tukang servis nya ramah banget"
                    </p>
                  </blockquote>
                  <figcaption className="relative flex items-center justify-between pt-6 mt-6 border-t border-gray-100">
                    <div>
                      <div className="text-base text-black">Alberd Romeo</div>
                      <div className="mt-1 text-sm text-gray-500">
                        Founder of PT.Jaya Nusantara
                      </div>
                    </div>
                    <div className="overflow-hidden rounded-full bg-gray-50">
                      <img
                        alt=""
                        src="https://images.unsplash.com/photo-1624224971170-2f84fed5eb5e?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1999&amp;q=80"
                        width="56"
                        height="56"
                        decoding="async"
                        data-nimg="future"
                        className="object-cover h-14 w-14"
                        loading="lazy"
                        style={{ color: "transparent" }}
                      />
                    </div>
                  </figcaption>
                </figure>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Testimonial;
