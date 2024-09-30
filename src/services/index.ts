import { API_URL } from "../constants";
import { Category } from "../interfaces";

interface CategoriesResponse {
  trivia_categories: Category[];
}

export const fetchQuizCategories = async () => {
  try {
    const response = await fetch(`${API_URL}/api_category.php`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data: CategoriesResponse = await response.json();
    return data?.trivia_categories || [];
  } catch (error) {
    console.error('error', error);
    throw new Error('Internal Server Error');
  }
};