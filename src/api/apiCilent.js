import axios from 'axios';
// export const products = [
//     { id: 1, name: 'Table', group: 'table', price: 100, image: 'https://cdn.popsww.com/blog/sites/2/2021/11/top-phim-co-trang-trung-quoc-moi.jpg', description: 'this is a table' },
//     { id: 2, name: 'Motobike', group: 'motobike', price: 100, image: 'https://cdn.popsww.com/blog/sites/2/2021/11/top-phim-co-trang-trung-quoc-moi.jpg', description: 'this is a motobike' },
//     { id: 3, name: 'Chair', group: 'chair', price: 100, image: 'https://cdn.popsww.com/blog/sites/2/2021/11/top-phim-co-trang-trung-quoc-moi.jpg', description: 'this is a chair' },
//     { id: 4, name: 'Cabinet', group: 'cabinet', price: 100, image: 'https://cdn.popsww.com/blog/sites/2/2021/11/top-phim-co-trang-trung-quoc-moi.jpg', description: 'this is a cabinet' },
//     { id: 5, name: 'Bed', group: 'bed', price: 100, image: 'https://cdn.popsww.com/blog/sites/2/2021/11/top-phim-co-trang-trung-quoc-moi.jpg', description: 'this is a bed' },
//     { id: 6, name: 'Desk', group: 'table', price: 100, image: 'https://cdn.popsww.com/blog/sites/2/2021/11/top-phim-co-trang-trung-quoc-moi.jpg', description: 'this is a bed' },
//     { id: 7, name: 'Desk', group: 'table', price: 100, image: 'https://cdn.popsww.com/blog/sites/2/2021/11/top-phim-co-trang-trung-quoc-moi.jpg', description: 'this is a bed' },
//     { id: 8, name: 'Desk', group: 'table', price: 100, image: 'https://cdn.popsww.com/blog/sites/2/2021/11/top-phim-co-trang-trung-quoc-moi.jpg', description: 'this is a bed' },
//     { id: 9, name: 'Desk', group: 'table', price: 100, image: 'https://cdn.popsww.com/blog/sites/2/2021/11/top-phim-co-trang-trung-quoc-moi.jpg', description: 'this is a bed' },
//     { id: 10, name: 'Desk', group: 'table', price: 100, image: 'https://cdn.popsww.com/blog/sites/2/2021/11/top-phim-co-trang-trung-quoc-moi.jpg', description: 'this is a bed' },
//     { id: 11, name: 'Desk', group: 'table', price: 100, image: 'https://cdn.popsww.com/blog/sites/2/2021/11/top-phim-co-trang-trung-quoc-moi.jpg', description: 'this is a bed' },
//     { id: 12, name: 'Desk', group: 'table', price: 100, image: 'https://cdn.popsww.com/blog/sites/2/2021/11/top-phim-co-trang-trung-quoc-moi.jpg', description: 'this is a bed' },
//     { id: 13, name: 'Desk', group: 'table', price: 100, image: 'https://cdn.popsww.com/blog/sites/2/2021/11/top-phim-co-trang-trung-quoc-moi.jpg', description: 'this is a bed' },
//     { id: 14, name: 'Desk', group: 'table', price: 100, image: 'https://cdn.popsww.com/blog/sites/2/2021/11/top-phim-co-trang-trung-quoc-moi.jpg', description: 'this is a bed' },
//     { id: 15, name: 'Desk', group: 'table', price: 100, image: 'https://cdn.popsww.com/blog/sites/2/2021/11/top-phim-co-trang-trung-quoc-moi.jpg', description: 'this is a bed' },
//     { id: 16, name: 'Desk', group: 'table', price: 100, image: 'https://cdn.popsww.com/blog/sites/2/2021/11/top-phim-co-trang-trung-quoc-moi.jpg', description: 'this is a bed' },

// ]
const axiosClient = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/',
    headers: {
        'Content-Type': 'application/json',
    },
});

axiosClient.interceptors.response.use(res => res.data)
export default axiosClient;