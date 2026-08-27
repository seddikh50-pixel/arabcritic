const getReview = (review: number | null): [string, string] => {

  if (review === null) {
    return ["bg-gradient-to-br from-gray-400 to-gray-600", "لم يُقيّم بعد"];
  }
  if (review >= 90)
    return ["bg-gradient-to-br from-blue-400 to-blue-600", "تجربة استثنائية"];

  if (review >= 80)
    return ["bg-gradient-to-br from-green-300 to-green-600", "تجربة موصى بها"];

  if (review >= 70)
    return ["bg-gradient-to-br from-yellow-300 to-yellow-500", "تجربة مقبولة"];

  if (review >= 60)
    return ["bg-gradient-to-br from-orange-300 to-orange-500", "تجربة عادية"];

  return ["bg-gradient-to-br from-red-400 to-red-600", "تجربة مخيبة"];
};

export default getReview;