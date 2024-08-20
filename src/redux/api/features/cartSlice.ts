import { baseApi } from "../baseApi";

const authApiSlice = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAddToCartProduct: builder.query({
      query: (email) => `/cart/get-cart/${email}`,
      providesTags: ["Cart"],
    }),
    // getSingleProduct: builder.query({
    //   query: (payload) => `/products/single-products/${payload?.id}`,
    //   //   providesTags: ["Cart"],
    // }),
    addToCart: builder.mutation({
      query: (payload) => ({
        url: "/cart/add-to-cart",
        method: "POST",
        body: payload,
      }),
      invalidatesTags: ["Cart"],
    }),
  }),
});
export const { useGetAddToCartProductQuery, useAddToCartMutation } =
  authApiSlice;
export default authApiSlice.reducer;
