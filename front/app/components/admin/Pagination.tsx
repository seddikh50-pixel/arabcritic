
"use client";

import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import {
  usePathname,
  useRouter,
  useSearchParams,
} from "next/navigation";

type Props = {
  total: number;
  currentPage: number;
};

export default function Paginations({
  total,
  currentPage,
}: Props) {

    
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const changing = (value: number) => {
    const params = new URLSearchParams(
      searchParams.toString()
    );

    // تغيير رقم الصفحة
    params.set("page", value.toString());

    router.push(`${pathname}?${params.toString()}`);
  };

  console.log(total);

  return (
    <div className="mt-10 flex justify-start">
      <Stack spacing={2}>
        <Pagination
          count={total}
          page={currentPage}
          variant="outlined"
          shape="rounded"
          onChange={(_event, value) => changing(value)}
          sx={{
            direction: "ltr",

            "& .MuiPaginationItem-root": {
              borderColor: "green",
              color: "green",
              fontWeight: "bold",
            },

            "& .MuiPaginationItem-root.Mui-selected": {
              backgroundColor: "green",
              color: "white",
              borderColor: "green",
            },
          }}
        />
      </Stack>
    </div>
  );
}

