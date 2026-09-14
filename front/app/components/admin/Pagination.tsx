
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


    if (value <= 1) {
      params.delete('page')
    } else { params.set("page", value.toString()); }


    // تغيير رقم الصفحة

    router.push(`${pathname}?${params.toString()}`);
  };


  return (
    <div className="mt-5 flex justify-center">
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
borderColor: "#d1d5db",
              color: "gray",
                    fontWeight: "bold",
             
            },

            "& .MuiPaginationItem-root.Mui-selected": {
              backgroundColor: "green",
              color: "white",
              borderColor: "green", 
                    fontWeight: "bold",

            },
          }}
        />
      </Stack>
    </div>
  );
}

