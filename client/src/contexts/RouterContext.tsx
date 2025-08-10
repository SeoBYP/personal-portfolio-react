// contexts/RouterContext.tsx (타입 오류 수정 버전)
import React, { createContext, useContext, useState, useEffect } from 'react';

interface RouterParams {
    id?: string;
    [key: string]: any;
}

interface HistoryEntry {
    page: string;
    params: RouterParams;
    scrollPosition: number;
}

interface RouterState {
    currentPage: string;
    params: RouterParams;
    navigate: (page: string, params?: RouterParams) => void;
    goBack: () => void;
}

const RouterContext = createContext<RouterState>({
    currentPage: 'home',
    params: {},
    navigate: () => {},
    goBack: () => {}
});

interface RouterProviderProps {
    children: React.ReactNode;
}

export function RouterProvider({ children }: RouterProviderProps) {
    const [currentPage, setCurrentPage] = useState('home');
    const [params, setParams] = useState<RouterParams>({});
    const [history, setHistory] = useState<HistoryEntry[]>([
        { page: 'home', params: {}, scrollPosition: 0 }
    ]);
    const [historyIndex, setHistoryIndex] = useState(0);

    const navigate = (page: string, newParams: RouterParams = {}) => {
        // 현재 스크롤 위치 저장
        const currentScrollPosition = window.pageYOffset;
        const updatedHistory = [...history];
        updatedHistory[historyIndex] = {
            ...updatedHistory[historyIndex],
            scrollPosition: currentScrollPosition
        };

        const newEntry: HistoryEntry = {
            page,
            params: newParams,
            scrollPosition: 0
        };
        const newHistory = [...updatedHistory.slice(0, historyIndex + 1), newEntry];

        setHistory(newHistory);
        setHistoryIndex(newHistory.length - 1);
        setCurrentPage(page);
        setParams(newParams);

        // 새 페이지는 최상단으로 스크롤
        setTimeout(() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 50);
    };

    const goBack = () => {
        if (historyIndex > 0) {
            const newIndex = historyIndex - 1;
            const entry = history[newIndex];
            setHistoryIndex(newIndex);
            setCurrentPage(entry.page);
            setParams(entry.params);

            // 이전 페이지의 스크롤 위치로 복원
            if (entry.page === 'home') {
                setTimeout(() => {
                    // Projects 섹션으로 스크롤
                    const projectsElement = document.getElementById('projects');
                    if (projectsElement) {
                        const offsetTop = projectsElement.offsetTop - 80;
                        window.scrollTo({ top: offsetTop, behavior: 'smooth' });
                    } else if (entry.scrollPosition) {
                        window.scrollTo({ top: entry.scrollPosition, behavior: 'smooth' });
                    }
                }, 50);
            }
        }
    };

    useEffect(() => {
        const handlePopState = (event: PopStateEvent) => {
            event.preventDefault();
            goBack();
        };

        window.addEventListener('popstate', handlePopState);
        return () => window.removeEventListener('popstate', handlePopState);
    }, [historyIndex]);

    // 페이지 변경 시 히스토리 API 업데이트
    useEffect(() => {
        if (currentPage === 'project' && params.id) {
            window.history.pushState(null, '', `#project-${params.id}`);
        } else if (currentPage === 'home') {
            window.history.pushState(null, '', '#home');
        }
    }, [currentPage, params]);

    return (
        <RouterContext.Provider value={{
            currentPage,
            params,
            navigate,
            goBack
        }}>
            {children}
        </RouterContext.Provider>
    );
}

export function useRouter() {
    return useContext(RouterContext);
}