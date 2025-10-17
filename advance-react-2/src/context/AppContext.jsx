import { createContext } from "react";
import { useEffect, useState } from "react";
import { baseUrl } from "../baseUrl";

export const AppContext = createContext();

export function AppContextProvider({ children }) {
    const [loading, setLoading] = useState(false);
    const [posts, setPosts] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(null);
    const [error, setError] = useState(null);

    // fetch data from api
    async function fetchBlogPosts(page = 1) {
        setLoading(true);
        let url = `${baseUrl}?page=${page}`;
        try {
            const res = await fetch(url);
            const data = await res.json();
            console.log(data);
            setPage(data.page);
            setPosts(data.posts);
            setTotalPages(data.totalPages);
            setLoading(false);
        }catch(err) {
            setError(err);
            setPage(1);
            setPosts([]);
            setTotalPages(null);
            setLoading(false);
        }

    }
    // call fetchBlogPosts when page changes
    useEffect(() => {
        fetchBlogPosts(page);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [page]);

    async function changePage(page) {
        setPage(page);
    }

    // value to be passed to provider
    const value = {
        loading,
        setLoading,
        posts,
        setPosts,
        page,
        setPage,
        totalPages,
        setTotalPages,
        error,
        setError,
        fetchBlogPosts,
        changePage,
    };

    return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}