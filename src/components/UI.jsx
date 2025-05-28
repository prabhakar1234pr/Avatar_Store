import { useConfiguratorStore } from "../store"
import { useEffect } from "react"
import {pb }from "../store"

const AssetsBox = () => {
    const { categories, currentCategory, fetchCategories, setCurrentCategory, assets, changeAsset, customization ,} = 
    useConfiguratorStore();

    useEffect(() => {
        fetchCategories();
    }, []);

    return (
        <div className="category-container">
            <div className="category-buttons">
                {categories.map((category) => (
                    <button key={category.id}
                        onClick={() => setCurrentCategory(category)}
                        className={`category-button${currentCategory === category ? " active" : ""}`}
                    >
                        {category.name}
                    </button>
                ))}
            </div>
            <div className="category-assets">
                {currentCategory?.assets.map((asset) => (
                    <button 
                        key={asset.Thumbnail} 
                        className={`asset-item ${customization && currentCategory && customization[currentCategory.name]?.asset?.id === asset.id ? "border-indigo-600 opacity-100"
        : "opacity-80 border-transparent"}`}
                        onClick={() => changeAsset(currentCategory.name, asset)}
                    >   
                          <img src={pb.files.getURL(asset, asset.Thumbnail)} alt={asset.name || 'thumbnail'} />
                    </button>
                ))}
            </div>
        </div>
    );
};

const DownloadButton = () => {
    return (
        <button className="download-fixed">
            Download
        </button>
    );
};

export const UI = ({ position }) => {
    if (position === "top") {
        return (
            <>
                {/* Logo at the top left */}
                <div className="ui-container flex items-center gap-4">
                    <img src="/images/1ea738fc-f5fa-4fec-a507-fd9035d84401.png" alt="logo" className="w-14 h-14 object-contain" />
                </div>
                {/* Download Button at the top right */}
                <DownloadButton />
            </>
        );
    }
    if (position === "bottom") {
        return (
            <div className="bottom-ui fixed bottom-0 left-0 w-full flex flex-col items-center justify-end z-10 pb-4">
                <div className="rounded-2xl">
                    <AssetsBox />
                </div>
            </div>
        );
    }
    return null;
};
