import AddGameForm from "@/app/components/admin/AddGameForm";
import { getPlatforms } from "../../services/service.platform";



export default async function NewGamePage() {

  const data = await getPlatforms()
  


  return (
    <div>
      <AddGameForm platforms={data.platforms}/>
    </div>
  );
}

