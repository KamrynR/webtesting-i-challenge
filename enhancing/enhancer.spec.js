const enhancer = require('./enhancer.js');
// test away!
describe('tests the enchancer', () => {

    test('enhancement success', () => {
        expect(enhancer
            .success({
                enhancement: 20
            }))
            .toEqual({
                enhancement: 20
            })
        expect(enhancer
            .success({
                enhancement: 13
            }))
            .toEqual({
                enhancement: 14
            })
    })

    test('fails', () => {
        expect(enhancer
            .fail({
                enhancement: 13,
                durability: 80
            }))
            .toEqual({
                enhancement: 13,
                durability: 75
            })
        expect(enhancer
            .fail({
                enhancement: 18,
                durability: 80
            }))
            .toEqual({
                enhancement: 17,
                durability: 70
            })
    })
    
    test('repairs item', () => {
        expect(enhancer.repair({durability: 80})).toEqual({durability: 100})
    })
})
