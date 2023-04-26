import { apiSlice } from "../../app/api/apiSlice";

export const membersApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getMembers: builder.query({
      query: () => "/members",
      providesTags: (result, error, arg) =>
        result
          ? [
              { type: "Member", id: "LIST" },
              ...result.map(({ _id }) => ({ type: "Member", id: _id })),
            ]
          : [{ type: "Member", id: "LIST" }],
    }),
    addNewMember: builder.mutation({
      query: (newMember) => ({
        url: "/boards",
        method: "POST",
        body: newMember,
      }),
      invalidatesTags: [{ type: "Member", id: "LIST" }],
    }),
  }),
});
export const { useGetMembersQuery } = membersApiSlice;
