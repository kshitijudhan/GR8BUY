import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

export default function Banner({ products }) {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative overflow-hidden border-b">
      {/* Background */}
      <div
        className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[42px_42px]"
        style={{
          transform: `translateY(${scrollY * 0.12}px)`,
        }}
      />

      {/* Blur */}
      <div
        className="absolute -left-20 top-10 h-72 w-72 rounded-full bg-primary/10 blur-3xl"
        style={{
          transform: `translateY(${scrollY * 0.18}px)`,
        }}
      />

      <div className="container mx-auto max-w-7xl px-6 py-20">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* LEFT */}

          <div>
            <span className="rounded-full border px-4 py-2 text-sm">
              ✨ New Collection
            </span>

            <h1 className="mt-6 text-5xl font-bold leading-tight lg:text-6xl">
              Shop Smarter.
              <br />
              Live Better.
            </h1>

            <p className="mt-6 max-w-lg text-lg text-muted-foreground">
              Discover thousands of premium products across electronics,
              fashion, groceries, beauty, furniture and more.
            </p>

            <div className="mt-10 flex gap-4">
              <HashLink smooth to="/#products">
                <Button asChild size="lg">
                  <Link to="/products">Shop Now</Link>
                </Button>
              </HashLink>
            </div>
          </div>

          {/* RIGHT */}

          <div className="relative hidden h-125 lg:block">
            {products?.slice(97, 100).map((product, index) => {
              const positions = [
                {
                  top: "0%",
                  left: "10%",
                  speed: 0.08,
                },
                {
                  top: "20%",
                  right: "0%",
                  speed: -0.05,
                },
                {
                  bottom: "0%",
                  left: "25%",
                  speed: 0.12,
                },
              ];

              return (
                <div
                  key={product.id}
                  className="absolute w-56 rounded-2xl border bg-background p-4 shadow-xl transition hover:scale-105"
                  style={{
                    ...positions[index],
                    transform: `translateY(${scrollY * positions[index].speed}px)`,
                  }}
                >
                  <div className="aspect-square rounded-xl bg-muted p-4">
                    <img
                      src={product.thumbnail}
                      alt={product.title}
                      className="h-full w-full object-contain"
                    />
                  </div>

                  <p className="mt-4 text-sm text-muted-foreground">
                    {product.category}
                  </p>

                  <h3 className="line-clamp-2 font-semibold">
                    {product.title}
                  </h3>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
