const BASE_URL = "https://666c833c49dbc5d7145e4568.mockapi.io/api/v1";

export interface commentType {
  id: string;
  name: string;
  avatar: string;
  comment: string;
}

export const getCommentData = async () => {
  const data = await fetch(`${BASE_URL}/comments/`);
  return data.json();
};

export function getRandomSubset(
  arr: commentType[],
  size: number
): commentType[] {
  const shuffled = arr.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, size);
}
