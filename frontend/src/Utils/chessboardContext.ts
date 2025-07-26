import { createContext } from "react";
import { Chess } from "chess.js";

const chessboardContext = createContext<React.MutableRefObject<Chess>>({} as React.MutableRefObject<Chess>);

export default chessboardContext;