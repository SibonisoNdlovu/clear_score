import { HeaderType } from "../enums/HeaderType";
import { InsightType } from "../enums/InsightType";
import { utils } from './utils'

describe("utils", () => {
    test("Happy path 1", () => {
        let result = utils.calcPercentage(0, 0)
        expect(result).toBe(0)
    })

    test("Edge case scenario 1", () => {
        let result = utils.calcPercentage(-Infinity, -Infinity)
        expect(result).toBe(NaN)
    })

    test("Happy path 2", () => {
        let result = utils.calcPercentage(0, 50)
        expect(result).toBe(0)
    })

    test("Happy path 3", () => {
        let result = utils.calcPercentage(1, 100)
        expect(result).toBe(1)
    })

    test("Happy path 4", () => {
        let result = utils.calcPercentage(10, 0)
        expect(result).toBe(0)
    })

    it('should test getElectrolRollInsight returns on track by default', () => {
        const result = utils.getElectrolRollInsight();
        expect(result).toEqual(InsightType.ON_TRACK);
    })

    it('should test getCreditUtilizationInsight returns on track by default', () => {
        const result = utils.getCreditUtilizationInsight();
        expect(result).toEqual(InsightType.ON_TRACK);
    })

    it('should test getPublicInformationInsight returns on track by default', () => {
        const result = utils.getPublicInformationInsight();
        expect(result).toEqual(InsightType.ON_TRACK);
    })


    it('should test getLanguage for credit utilization returns on track by default', () => {
        const result = utils.getLanguage(HeaderType.Credit_utilization);
        expect(result).toEqual(InsightType.ON_TRACK);
    })

    it('should test getLanguage for Public_Information and should return onTrack', () => {
        const result = utils.getLanguage(HeaderType.Public_Information);
        expect(result).toEqual(InsightType.ON_TRACK);
    })
})