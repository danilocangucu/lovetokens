import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { useFetchLoveTokensQuery } from "../store/loveTokensApi";
import { RootState } from "../models/Types";
import PageHeader from "../components/headers/PageHeader";
import CallToAction from "../components/calltoaction/CallToAction";
import CategoriesSection from "../components/lovearchive/CategoriesSection";
import { toggleCategory } from "../store/categoriesSlice";
import LoveTokensPreviewSection from "../components/lovearchive/LoveTokensPreviewSection";
import CreationSortInput from "../components/lovearchive/CreationSortInput";

function LoveTokens() {
    const selectedCategories = useSelector((state: RootState) => state.categories.selectedCategories);
    const dispatch = useDispatch();

    const { refetch: refetchLoveTokens } = useFetchLoveTokensQuery(selectedCategories);

    const handleCategorySelect = (category: string) => {
        dispatch(toggleCategory(category));
    };

    useEffect(() => {
        refetchLoveTokens()
    }, [selectedCategories, refetchLoveTokens]);

    return (
        <section className="p-4">
            <PageHeader
                title="Love Archive"
                subtitle="Explore our collection of Love Tokens"
            />
            <CallToAction />
            <CategoriesSection
                selectedCategories={selectedCategories}
                handleCategorySelect={handleCategorySelect}
            />
            <CreationSortInput />
            <LoveTokensPreviewSection
                selectedCategories={selectedCategories}
            />
        </section>
    )
}

export default LoveTokens