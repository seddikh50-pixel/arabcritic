import AddGameForm from "@/app/components/admin/AddGameForm";
import { getPlatforms } from "../../services/service.platform";
import { getGenres } from "../../services/service.genre";



export default async function NewGamePage() {

  const platforms = await getPlatforms()
  const genres = await getGenres()
  


  return (
    <div>
      <AddGameForm platforms={platforms.platforms} genres={genres.Genres}/>
    </div>
  );
}

