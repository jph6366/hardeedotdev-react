import { SinglePageApp } from "../../Domain/Model/SinglePageApp";

export interface DataSource {
    setSPA(spa: SinglePageApp): Promise<void>
    getSPA(): Promise<SinglePageApp>
}