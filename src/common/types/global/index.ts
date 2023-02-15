import { RgbaColor } from "react-colorful";

export type Shape = 'line' | 'circle' | 'rect' | 'image';
export type CtxMode = 'eraser' | 'draw' | 'select';

export interface CtxOptions {
    lineWidth: number;
    lineColor: RgbaColor;
    fillColor: RgbaColor;
    shape: Shape;
    mode: CtxMode;
    selection: {
        x: number;
        y: number;
        width: number;
        height: number;
    } | null;
};

export interface Move {
    circle: {
        cX: number;
        cY: number;
        radiusX: number;
        radiusY: number;
    };
    rect: {
        width: number;
        height: number;
    };
    img: {
        base64: string;
    };
    path: [number, number][];
    options: CtxOptions;
    timestamp: number;
    id: string;
};

export type Room = {
    usersMoves: Map<string, Move[]>;
    drawed: Move[];
    users: Map<string, string>;
};

export interface User {
    name: string;
    color: string;
};

export interface ClientRoom {
    id: string;
    usersMoves: Map<string, Move[]>;
    movesWithoutUser: Move[];
    myMoves: Move[];
    users: Map<string, User>;
};

export interface MessageType {
    userId: string;
    username: string;
    color: string;
    msg: string;
    id: number;
}

// export interface ServerToClientEvents {
// }

// export interface ClientToServerEvents {
// }
