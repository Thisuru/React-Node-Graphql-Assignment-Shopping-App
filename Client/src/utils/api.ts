import axios from 'axios';

const baseUrl = 'http://localhost:5001/graphql';

export const fetchProductData = async () => {
  try {
    const response = await axios.post(baseUrl, {
      query: `{
        categories {
          name
          articleCount
          childCategories {
            name
            urlPath
          }
          articles {
            name
            variantName
            prices {
              currency
              value
            }
            images {
              path
            }
          }
        }
      }`,
    });
    return response.data.data.categories;
  } catch (error) {
    console.error('Error fetching product data:', error);
    throw error; // Re-throw for handling in ProductList.tsx
  }
};
