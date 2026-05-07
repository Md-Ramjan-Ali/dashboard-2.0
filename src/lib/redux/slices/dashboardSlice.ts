import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface DashboardState {
  isSidebarOpen: boolean;
  activeTab: string;
}

const initialState: DashboardState = {
  isSidebarOpen: true,
  activeTab: 'overview',
};

const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {
    toggleSidebar: (state) => {
      state.isSidebarOpen = !state.isSidebarOpen;
    },
    setSidebarOpen: (state, action: PayloadAction<boolean>) => {
      state.isSidebarOpen = action.payload;
    },
    setActiveTab: (state, action: PayloadAction<string>) => {
      state.activeTab = action.payload;
    },
  },
});

export const { toggleSidebar, setSidebarOpen, setActiveTab } = dashboardSlice.actions;
export default dashboardSlice.reducer;
