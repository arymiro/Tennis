interface UnitMeasurement {
    value: number;
    description: string;
}

export interface Product {
    id: number;
    size: UnitMeasurement;
    length: UnitMeasurement;
    tamiz: UnitMeasurement;
    price: UnitMeasurement;
    name: string;
    brand: string;
    model: string;
    pattern: string;
    image: string;
} 
