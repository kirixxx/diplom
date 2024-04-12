import {makeAutoObservable} from "mobx";

export default class GameStore {
    constructor() {
        this._types = [
            {id:1, name: 'Холодильники'},
            {id:2, name: 'Смартфоны'},
            {id:3, name: 'Машины'},
            {id:4, name: 'Мебель'}
        ]
        this._brands = [
            {id:1, name: 'Samsung'},
            {id:3, name: 'Apple'},
            {id:4, name: 'Xiaomi'},
            {id:5, name: 'Lenovo'},
            {id:6, name: 'Atlant'},
            
           
        ]
        this._games = [
            {
                "id": 1,
                "name": "12 pro",
                "price": 100000,
                "rating": 0,
                "img": "1c344d3f-9d27-4049-a127-72def0c26a5c.jpg",
                "typeId": 2,
                "brandId": 3
            },
            {
                "id": 2,
                "name": "a51",
                "price": 100000,
                "rating": 0,
                "img": "af21b04c-7a12-45b5-87b3-6517793e93c7.jpg",
                "typeId": 2,
                "brandId": 1
            },
            {
                "id": 3,
                "name": "pro max 15",
                "price": 100000,
                "rating": 0,
                "img": "0506141d-3422-4eee-9d01-6340572efcb1.jpg",
                "typeId": 1,
                "brandId": 3
            },
            {
                "id": 4,
                "name": "atlant",
                "price": 100000,
                "rating": 0,
                "img": "5a73bdfe-e846-46d3-9f84-286404cd28f9.jpg",
                "typeId": 1,
                "brandId": 1
            },
            {
                "id": 5,
                "name": "pro max 15",
                "price": 100000,
                "rating": 0,
                "img": "0506141d-3422-4eee-9d01-6340572efcb1.jpg",
                "typeId": 1,
                "brandId": 3
            },
            {
                "id": 6,
                "name": "atlant",
                "price": 100000,
                "rating": 0,
                "img": "5a73bdfe-e846-46d3-9f84-286404cd28f9.jpg",
                "typeId": 1,
                "brandId": 1
            }
        ]
        this._selectedType={}
        this._selectedBrand={}
        makeAutoObservable(this)
    }

    setTypes(types) {
        this._types = types
    }

    setBrands(brands) {
        this._brands = brands
    }
    
    setGames(games) {
        this._games = games
    }

    setSelectedType(type) {
        this._selectedType = type
    }

    setSelectedBrand(brand) {
        this._selectedBrand = brand
    }

    get types() {
        return this._types
    }  

    get brands() {
        return this._brands
    }   

    get games() {
        return this._games
    }

    get selectedType() {
        return this._selectedType
    }

    get selectedBrand() {
        return this._selectedBrand
    }
}