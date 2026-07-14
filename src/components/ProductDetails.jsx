import { useState, useEffect } from "react";
import { Star, Minus, Plus, ShoppingCart } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProductDetailSkeleton from "./ProductDetailSkeleton";
import useCurrencyinr from "@/hooks/useCurrencyinr";

export default function ProductDetails({ product }) {
  const [isloading, setIsloading] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(
    product.images?.[0] || product.thumbnail,
  );
  const { convertedPrice, discountedPrice, currencyStatus } =
    useCurrencyinr(product);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsloading(true);
    if (product.images?.length > 0) {
      setSelectedImage(product.images[0]);
    }
    setIsloading(false);
  }, [product]);

  if (isloading || currencyStatus === "idle" || currencyStatus === "pending") {
    return <ProductDetailSkeleton />;
  }

  return (
    <section className="container mx-auto max-w-7xl px-6 py-10">
      <div className="grid gap-10 lg:grid-cols-2">
        {/* LEFT SIDE */}
        <div>
          {/* Main Image */}
          <Card className="overflow-hidden">
            <CardContent className="flex aspect-square items-center justify-center p-8">
              <img
                src={selectedImage}
                alt={product.title}
                className="max-h-full max-w-full object-contain"
              />
            </CardContent>
          </Card>

          {/* Thumbnails */}
          <div className="mt-5 flex gap-3">
            {product.images?.map((image, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(image)}
                className={`overflow-hidden rounded-lg border p-2 transition ${
                  selectedImage === image ? "border-primary" : "border-muted"
                }`}
              >
                <img src={image} alt="" className="h-20 w-20 object-contain" />
              </button>
            ))}
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="space-y-6">
          <Badge>{product.category}</Badge>

          <h1 className="text-4xl font-bold">{product.title}</h1>

          <p className="text-muted-foreground">
            Brand:{" "}
            <span className="font-medium text-foreground">{product.brand}</span>
          </p>

          {/* Rating */}
          <div className="flex items-center gap-2">
            <Star className="fill-yellow-400 text-yellow-400" />

            <span>{product.rating}</span>

            <span className="text-muted-foreground">
              ({product.reviews?.length} Reviews)
            </span>
          </div>

          {/* Price */}
          <div className="flex items-center gap-3">
            <span className="text-4xl font-bold">₹{discountedPrice}</span>

            <span className="text-xl text-muted-foreground line-through">
              ₹{convertedPrice}
            </span>

            <Badge variant="destructive">
              {Math.round(product.discountPercentage)}% OFF
            </Badge>
          </div>

          {/* Availability */}
          <div className="flex items-center gap-3">
            <Badge>{product.availabilityStatus}</Badge>

            <span className="text-muted-foreground">
              {product.stock} items available
            </span>
          </div>

          <Separator />

          {/* Quantity */}
          <div>
            <h3 className="mb-3 font-semibold">Quantity</h3>

            <div className="flex w-fit items-center rounded-lg border">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => quantity > 1 && setQuantity(quantity - 1)}
              >
                <Minus size={16} />
              </Button>

              <span className="w-12 text-center">{quantity}</span>

              <Button
                variant="ghost"
                size="icon"
                onClick={() =>
                  quantity < product.stock && setQuantity(quantity + 1)
                }
              >
                <Plus size={16} />
              </Button>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex gap-4">
            <Button className="flex-1">
              <ShoppingCart className="mr-2 h-4 w-4" />
              Add To Cart
            </Button>

            <Button variant="outline" className="flex-1">
              Buy Now
            </Button>
          </div>

          {/* Shipping */}
          <Card>
            <CardContent className="space-y-2 p-5 text-sm">
              <p>
                <strong>Shipping:</strong> {product.shippingInformation}
              </p>

              <p>
                <strong>Return Policy:</strong> {product.returnPolicy}
              </p>

              <p>
                <strong>Warranty:</strong> {product.warrantyInformation}
              </p>

              <p>
                <strong>SKU:</strong> {product.sku}
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Tabs */}
      <Tabs defaultValue="description" className="mt-14">
        <TabsList>
          <TabsTrigger value="description">Description</TabsTrigger>

          <TabsTrigger value="specifications">Specifications</TabsTrigger>

          <TabsTrigger value="reviews">Reviews</TabsTrigger>
        </TabsList>

        <TabsContent value="description" className="mt-6">
          <p className="leading-7 text-muted-foreground">
            {product.description}
          </p>
        </TabsContent>

        <TabsContent value="specifications" className="mt-6">
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardContent className="space-y-3 p-5">
                <p>
                  <strong>Brand:</strong> {product.brand}
                </p>

                <p>
                  <strong>Category:</strong> {product.category}
                </p>

                <p>
                  <strong>Weight:</strong> {product.weight}
                </p>

                <p>
                  <strong>Minimum Order:</strong> {product.minimumOrderQuantity}
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="space-y-3 p-5">
                <p>
                  <strong>Width:</strong> {product.dimensions?.width}
                </p>

                <p>
                  <strong>Height:</strong> {product.dimensions?.height}
                </p>

                <p>
                  <strong>Depth:</strong> {product.dimensions?.depth}
                </p>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="reviews" className="mt-6 space-y-4">
          {product.reviews?.map((review, index) => (
            <Card key={index}>
              <CardContent className="p-5">
                <div className="flex items-center justify-between">
                  <h4 className="font-semibold">{review.reviewerName}</h4>

                  <Badge>{review.rating} ★</Badge>
                </div>

                <p className="mt-3 text-muted-foreground">{review.comment}</p>
              </CardContent>
            </Card>
          ))}
        </TabsContent>
      </Tabs>
    </section>
  );
}
