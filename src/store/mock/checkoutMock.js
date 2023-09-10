import i11 from '../../img/i11.jpeg';
import i12 from '../../img/i12.jpeg';
import i13 from '../../img/i13.jpeg';
import i14 from '../../img/i14.jpeg';
import i15 from '../../img/i15.jpeg';

export default {
    id: 1,
    name: 'Заказ 1',
    price: 1550,
    products: [{
            id: 1,
            name: 'iPhone 11',
            description: 'Описание для iPhone 11',
            price: 15000,
            img: i11,
            count: 1
        },
        {
            id: 2,
            name: 'iPhone 12',
            description: 'Описание для iPhone 12',
            price: 25000,
            img: i12,
            count: 1
        },
        {
            id: 3,
            name: 'iPhone 13',
            description: 'Описание для iPhone 13',
            price: 35000,
            img: i13,
            count: 1
        },
        {
            id: 4,
            name: 'iPhone 14',
            description: 'Описание для iPhone 14',
            price: 45000,
            img: i14,
            count: 1
        },
        {
            id: 5,
            name: 'iPhone 15 Ultra',
            description: 'Описание для iPhone 15',
            price: 55000,
            img: i15,
            count: 1
        },
    ],
    selectedProducts: [],
}