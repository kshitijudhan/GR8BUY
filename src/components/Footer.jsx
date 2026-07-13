import { Mail, Phone, MapPin } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

export default function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto max-w-7xl px-6 py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Company */}
          <div>
            <h2 className="text-2xl font-bold">ShopVerse</h2>

            <p className="mt-4 text-sm leading-6 text-muted-foreground">
              Your one-stop destination for quality products across multiple
              categories. We strive to deliver a seamless shopping experience
              with trusted products and excellent customer service.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold">Quick Links</h3>

            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li>
                <a href="/" className="transition-colors hover:text-foreground">
                  Home
                </a>
              </li>

              <li>
                <a
                  href="/products"
                  className="transition-colors hover:text-foreground"
                >
                  Products
                </a>
              </li>

              <li>
                <a
                  href="/categories"
                  className="transition-colors hover:text-foreground"
                >
                  Categories
                </a>
              </li>

              <li>
                <a
                  href="/about"
                  className="transition-colors hover:text-foreground"
                >
                  About Us
                </a>
              </li>

              <li>
                <a
                  href="/contact"
                  className="transition-colors hover:text-foreground"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold">Contact</h3>

            <div className="mt-4 space-y-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4" />
                <span>+91 98765 43210</span>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4" />
                <span>support@shopverse.com</span>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="mt-1 h-4 w-4" />
                <span>
                  Navi Mumbai,
                  <br />
                  Maharashtra, India
                </span>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold">Newsletter</h3>

            <p className="mt-4 text-sm text-muted-foreground">
              Subscribe to receive the latest product updates, exclusive offers,
              and special discounts.
            </p>

            <div className="mt-5 space-y-3">
              <Input type="email" placeholder="Enter your email" />

              <Button className="w-full">Subscribe</Button>
            </div>
          </div>
        </div>

        <Separator className="my-10" />

        <div className="flex flex-col items-center justify-between gap-4 text-center text-sm text-muted-foreground md:flex-row">
          <p>© {new Date().getFullYear()} ShopVerse. All rights reserved.</p>

          <div className="flex gap-6">
            <a
              href="/privacy"
              className="transition-colors hover:text-foreground"
            >
              Privacy Policy
            </a>

            <a
              href="/terms"
              className="transition-colors hover:text-foreground"
            >
              Terms & Conditions
            </a>

            <a href="/faq" className="transition-colors hover:text-foreground">
              FAQ
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
