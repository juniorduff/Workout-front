export enum Category {
    ABS = 'ABS',
    ARMS = 'ARMS',
    BACK = 'BACK',
    CHEST = 'CHEST',
    LEGS = 'LEGS',
    SHOULDERS = 'SHOULDERS',
}

export interface Exercice {
    id?: string;
    name: string;
    description: string;
    category: Category;
    created_at: Date;
    updated_at?: Date;


}
