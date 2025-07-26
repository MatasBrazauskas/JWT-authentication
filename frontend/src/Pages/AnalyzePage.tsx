import { useState, useRef, lazy } from 'react';
import { BarLoader } from 'react-spinners';

import Board  from '../Components/Board';
import type { RootState } from '../Store/store';

import { useSelector } from 'react-redux';
import chessboardContext from '../Utils/chessboardContext';
import { Chess } from 'chess.js';

const SearchBar = lazy(() => import("../Components/SearchBar"));
const Games = lazy(() => import("../Components/DisplayMonthsGames"));
const Analyzation = lazy(() => import("../Components/AnalyzePlayersGames"));

function AnalyzePage(){
    const [loading, ] = useState<boolean>(useSelector((state: RootState) => state.loadingState.phase) === 'LOADING');
    const chessRef = useRef(new Chess());

    const activeComponent = useSelector((state: RootState) => state.pageState.state);

    const renderActiveComponents = () => {
        switch(activeComponent){
            case 'SEARCH':
                return <SearchBar />;
            case 'GAMES':
                return <Games username='sigmundfloid'/>
            case 'ANALYZE':
                return <Analyzation />
            default:
                return <div>Error 404</div>
        }
    }

    return (
        <chessboardContext.Provider value={chessRef.current}>
            <div>
                <BarLoader loading={loading} width='700px'/>
                <Board/>
                {renderActiveComponents()}
            </div>
        </chessboardContext.Provider>
    );
}

export default AnalyzePage;