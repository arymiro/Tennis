interface ItemMenu {
    id: number;
    name: string;    
    path: string;
}

export interface Menu {
    items: ItemMenu[];    
}
