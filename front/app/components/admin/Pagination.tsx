import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
type Props = {
    count: number;
    setPage : React.Dispatch<React.SetStateAction<number>>
};
export default function Paginations({ count,setPage }: Props) {
    const changing = (value: number) => {
        setPage(value)
    }
    return (
        <div className="flex justify-start mt-10">
            <Stack spacing={2}>
                <Pagination
                    count={count}
                    variant="outlined"
                    shape="rounded"
                    onChange={(e , value)=> changing(value)}
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