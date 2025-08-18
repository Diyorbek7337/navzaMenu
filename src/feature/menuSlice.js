import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Ma'lumotlarni serverdan olish uchun (API call)
export const fetchMenu = createAsyncThunk("menu/fetchMenu", async () => {
  const response = await fetch("https://api.example.com/menu"); 
  return await response.json();
});

const menuSlice = createSlice({
  name: "menu",
  initialState: {
    items: [],
    status: "idle",
    error: null,
    searchQuery: "", // qidiruv uchun joy
  },
  reducers: {
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMenu.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchMenu.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload;
      })
      .addCase(fetchMenu.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { setSearchQuery } = menuSlice.actions;
export default menuSlice.reducer;

export const selectFilteredMenu = (state) => {
  const { items, searchQuery } = state.menu;
  if (!searchQuery) return items;
  return items.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
};