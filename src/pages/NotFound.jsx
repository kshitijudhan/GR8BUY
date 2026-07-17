import { Link } from "react-router-dom";
import { Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet-async";
import crossIcon from "@/assets/circle-x.svg";

export default function NotFound() {
  return (
    <>
      <Helmet>
        <title>Not Found</title>
        <link rel="icon" href={crossIcon} />
      </Helmet>
      <section className="flex min-h-[calc(100vh-4rem)] items-center justify-center px-6">
        <div className="max-w-xl text-center">
          {/* 404 */}
          <h1 className="text-8xl font-extrabold tracking-tight text-primary">
            404
          </h1>

          {/* Heading */}
          <h2 className="mt-6 text-3xl font-bold">Oops! Page Not Found</h2>

          {/* Description */}
          <p className="mt-4 text-muted-foreground">
            The page you're looking for doesn't exist, may have been moved, or
            the URL might be incorrect.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <Button asChild size="lg">
              <Link to="/" className="flex items-center gap-2">
                <Home className="h-4 w-4" />
                Go Home
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
