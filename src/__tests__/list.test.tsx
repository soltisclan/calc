import { } from 'ts-jest'
import { Calc } from '../Calc'

describe('Class: Calc', () => {

    let calc: Calc;
    describe('function: sum()', () => {

        describe('Given an empty Calc', () => {
            beforeEach(() => {
                calc = new Calc()
            })
            it('should return the sum of supplied arguments', () => {
                expect(calc.sum(1,2)).toEqual(3)
            })
        })
    })
})
