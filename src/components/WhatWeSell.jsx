import { Truck, RotateCcw, ShieldCheck, Headphones } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";

export default function WhatWeSell() {
  const features = [
    {
      icon: <Truck className="h-8 w-8" />,
      title: "Free Shipping",
      description:
        "Enjoy free delivery on eligible orders with fast and reliable shipping.",
    },
    {
      icon: <RotateCcw className="h-8 w-8" />,
      title: "Easy Returns",
      description:
        "Not satisfied? Return your order within the return period with ease.",
    },
    {
      icon: <ShieldCheck className="h-8 w-8" />,
      title: "Secure Payments",
      description: "Shop confidently with safe and encrypted payment methods.",
    },
    {
      icon: <Headphones className="h-8 w-8" />,
      title: "24/7 Support",
      description:
        "Our support team is always available to help whenever you need us.",
    },
  ];

  return (
    <section className="container mx-auto max-w-7xl px-6 py-16">
      {/* Heading */}
      <div className="mb-12 text-center">
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
          Why Shop With Us?
        </h2>

        <p className="mt-3 text-muted-foreground">
          We make shopping simple, secure, and hassle-free with services
          designed around your convenience.
        </p>
      </div>

      {/* Cards */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((feature) => (
          <Card
            key={feature.title}
            className="transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            <CardContent className="flex flex-col items-center p-8 text-center">
              <div className="mb-5 rounded-full bg-primary/10 p-4 text-primary">
                {feature.icon}
              </div>

              <h3 className="text-lg font-semibold">{feature.title}</h3>

              <p className="mt-3 text-sm leading-6 text-muted-foreground">
                {feature.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
