import { create } from 'zustand';
import PocketBase from 'pocketbase';

export const pb = new PocketBase('https://pocketbase-u45988.vm.elestio.app');

export const useConfiguratorStore = create((set) => ({
  categories: [],
  currentCategory: null,
  assets: [],
  customization: {},
  fetchCategories: async () => {
    const categories = await pb.collection('Customization_groups').getFullList({
      sort: '-position',
    });

    const assets = await pb.collection('Customization_assets').getFullList({
      sort: '-created',
    });
    const customization = {};
    categories.forEach(category => {
      category.assets = assets.filter((asset) => asset.group === category.id);
      customization[category.name] = { asset: category.assets[0] };
    });

    set({ categories, currentCategory: categories[0], assets, customization });
    console.log(customization);
  },

  setCurrentCategory: (category) => set({ currentCategory: category }),
  changeAsset: (category, asset) => 
    set((state) => ({
      customization: {
        ...state.customization,
        [category]: {
          ...state.customization[category],
          asset,
        },
      },
      assets: [
        ...state.assets.filter(a => a.id !== asset.id),
        asset
      ],
    })),
}));

