import Button from "../ui/Button";

interface Props {
  page: number;
  setPage: (page: number) => void;
  total: number;
  limit: number;
}

export default function Pagination({ page, setPage, total, limit }: Props) {
  const totalPages = Math.ceil(total / limit); 

  const getPageNumbers = () => {
    const pages: (number | string)[] = [];

    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (page <= 3) {
        pages.push(1, 2, 3, 4, "...", totalPages);
      } else if (page >= totalPages - 2) {
        pages.push(1, "...", totalPages - 3, totalPages - 2, totalPages - 1, totalPages);
      } else {
        pages.push(1, "...", page - 1, page, page + 1, "...", totalPages);
      }
    }

    return pages;
  };

  const pageNumbers = getPageNumbers();

  return (
    <div className="flex justify-center gap-2 mt-6 items-center">
      <Button
        onClick={() => setPage(page - 1)}
        disabled={page === 1}
        className={`${page === 1 ? "opacity-50 cursor-not-allowed" : ""}`}
      >
        Prev
      </Button>

      {pageNumbers.map((p, idx) =>
        p === "..." ? (
          <span key={idx} className="w-10 h-10 flex items-center justify-center">
            ...
          </span>
        ) : (
          <Button
            key={idx}
            onClick={() => setPage(Number(p))}
            className={`w-9 h-9 rounded-lg ${
              page === p ? "bg-blue-500 text-white" : "bg-gray-100 text-gray-800"
            }`}
          >
            {p}
          </Button>
        )
      )}
      <Button
        onClick={() => setPage(page + 1)}
        disabled={page === totalPages}
        className={`${page === totalPages ? "opacity-50 cursor-not-allowed" : ""}`}
      >
        Next
      </Button>
    </div>
  );
}
