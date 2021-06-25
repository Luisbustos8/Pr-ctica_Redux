import  { getAdvertDetail, getAdvertsList} from './selectors';


describe('getAdvertsList', () => {
    const data = [
        {updatedAt: '1', id: 'a'},
        {updatedAt: '2', id: 'b'},
    ];
    test('should return all adverts', () => {
        const result = getAdvertsList({adverts: {data: data}})
        expect(result).toHaveLength(data.length)
    })
})