import { client } from "@api/axios";
import { Response } from "types/common";
interface DataTypes {
  content: ContentItem[];
  pageable: Pageable;
  totalPages: number;
  totalElements: number;
  last: boolean;
  size: number;
  number: number;
  sort: Sort;
  numberOfElements: number;
  first: boolean;
  empty: boolean;
}
interface ContentItem {
  examImgUrl: string;
}

interface PageableSort {
  empty: boolean;
  sorted: boolean;
  unsorted: boolean;
}

interface Pageable {
  pageNumber: number;
  pageSize: number;
  sort: PageableSort;
  offset: number;
  paged: boolean;
  unpaged: boolean;
}
interface Sort {
  empty: boolean;
  sorted: boolean;
  unsorted: boolean;
}
export async function getUniversityExamImages(pageNum: number) {
  const response = await client.get<Response<DataTypes>>(`/university/exam/1/image?page=${pageNum}`);

  return response.data;
}
