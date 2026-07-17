import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { HashLink } from "react-router-hash-link";

function Categories({ setSelectedcategories }) {
  return (
    <div className="top-0 z-50 w-full border-b bg-white/80 backdrop-blur py-0.5 mb-5 lg:my-auto">
      <div className="mx-auto flex max-w-7xl items-center justify-center ">
        <HashLink smooth to="/#products">
          <Button
            size="sm"
            variant="ghost"
            onClick={() => setSelectedcategories("")}
          >
            All
          </Button>
        </HashLink>
        <DropdownMenu>
          <DropdownMenuTrigger
            render={
              <Button size="sm" variant="ghost">
                Electronics
              </Button>
            }
          />
          <HashLink smooth to="/#products">
            <DropdownMenuContent>
              <DropdownMenuGroup>
                <DropdownMenuItem
                  onClick={() => setSelectedcategories("smartphones")}
                >
                  Smartphones
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => {
                    setSelectedcategories("tablets");
                  }}
                >
                  Tablets
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => {
                    setSelectedcategories("laptops");
                  }}
                >
                  Laptops
                </DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </HashLink>
        </DropdownMenu>
        <HashLink smooth to="/#products">
          <Button
            size="sm"
            variant="ghost"
            onClick={() => {
              setSelectedcategories("furniture");
            }}
          >
            Furniture
          </Button>
        </HashLink>
        <HashLink smooth to="/#products">
          <Button
            size="sm"
            variant="ghost"
            onClick={() => {
              setSelectedcategories("groceries");
            }}
          >
            Groceries
          </Button>
        </HashLink>
        <DropdownMenu>
          <DropdownMenuTrigger
            render={
              <Button size="sm" variant="ghost">
                Fashion
              </Button>
            }
          />
          <DropdownMenuContent>
            <DropdownMenuGroup>
              <DropdownMenuLabel>Mens</DropdownMenuLabel>
              <HashLink smooth to="/#products">
                <DropdownMenuItem
                  onClick={() => {
                    setSelectedcategories("mens-shirts");
                  }}
                >
                  Shirts
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => {
                    setSelectedcategories("mens-shoes");
                  }}
                >
                  Shoes
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => {
                    setSelectedcategories("mens-watches");
                  }}
                >
                  Watches
                </DropdownMenuItem>
              </HashLink>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuLabel>Womens</DropdownMenuLabel>
              <HashLink smooth to="/#products">
                <DropdownMenuItem
                  onClick={() => {
                    setSelectedcategories("tops");
                  }}
                >
                  Tops
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => {
                    setSelectedcategories("womens-dresses");
                  }}
                >
                  Dresses
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => {
                    setSelectedcategories("womens-bags");
                  }}
                >
                  Bags
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => {
                    setSelectedcategories("womens-jewellery");
                  }}
                >
                  Jewellery
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => {
                    setSelectedcategories("womens-shoes");
                  }}
                >
                  Shoes
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => {
                    setSelectedcategories("womens-watches");
                  }}
                >
                  Watches
                </DropdownMenuItem>
              </HashLink>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
        <DropdownMenu>
          <DropdownMenuTrigger
            render={
              <Button size="sm" variant="ghost">
                Vehicle
              </Button>
            }
          />
          <HashLink smooth to="/#products">
            <DropdownMenuContent>
              <DropdownMenuGroup>
                <DropdownMenuItem
                  onClick={() => {
                    setSelectedcategories("vehicle");
                  }}
                >
                  Cars
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => {
                    setSelectedcategories("motorcycle");
                  }}
                >
                  Motorcycle
                </DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </HashLink>
        </DropdownMenu>
      </div>
    </div>
  );
}

export default Categories;
