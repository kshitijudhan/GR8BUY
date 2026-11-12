import { SearchX } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function ProductNotFound({
  setSearchitem,
  setSelectedcategories,
}) {
  return (
    <section className="container mx-auto flex min-h-[70vh] max-w-7xl items-center justify-center px-6">
      <Card className="w-full max-w-lg">
        <CardContent className="flex flex-col items-center p-10 text-center">
          <div className="mb-6 rounded-full bg-muted p-5">
            <SearchX className="h-12 w-12 text-muted-foreground" />
          </div>

          <h1 className="text-3xl font-bold tracking-tight">
            Product Not Found
          </h1>

          <p className="mt-4 max-w-sm text-muted-foreground">
            The product you're looking for doesn't exist, may have been removed,
            or the link is incorrect.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button
              variant="outline"
              asChild
              onClick={() => {
                setSearchitem("");
                setSelectedcategories("");
              }}
            >
              Back to Home
            </Button>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
