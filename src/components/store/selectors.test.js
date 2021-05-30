import  { getAdvertDetail } from './selectors';

describe('getAdvertDetail', () => {
    const data = [
        {updatedAt: '1', id: 'a'},
        {updatedAt: '2', id: 'b'},
    ];
    test('should return the advert detail', () => {
        const result = getAdvertDetail({adverts: {data: data}})
        expect(data[0].id).toBe('a')
    })
})