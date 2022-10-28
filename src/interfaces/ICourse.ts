import { ITopic } from "./ITopic";

export interface ICourse {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  topics: ITopic[];
}
