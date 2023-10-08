
/**
 * Repository managing the history of TicTacToe steps.
 * Each step consists of a board.
 */

import { SinglePageApp } from "../Model/SinglePageApp";

export interface PageAppRepository {
    setPageContent(spa: SinglePageApp): Promise<void>;
    getPageContent(): Promise<SinglePageApp>;
};