import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
} from "@/components/ui/pagination";
import { HashLink } from "react-router-hash-link";

export function PaginationIndex({ totalPages, currentPage, setCurrentPage }) {
  const pages = Array.from({ length: totalPages }, (_, index) => index + 1);

  return (
    <Pagination className="my-3">
      <PaginationContent>
        {pages.map((page) => (
          <PaginationItem key={page}>
            <HashLink smooth to="/#products">
              <PaginationLink
                onClick={() => {
                  setCurrentPage(page);
                }}
                isActive={currentPage === page}
              >
                {page}
              </PaginationLink>
            </HashLink>
          </PaginationItem>
        ))}
      </PaginationContent>
    </Pagination>
  );
}
