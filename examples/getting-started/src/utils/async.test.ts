import {describe , test , it , expect} from 'vitest';
import { delay, fetchUsers } from './async';

describe("async utils" , () => {
    it("should delay execution", async () => {
        const start = Date.now();
        await delay(100);
        const end = Date.now();
        expect(end - start).toBeGreaterThanOrEqual(100);
    });
});

describe.skip("fetching users" , () => {
    test("fetching users return resolved data" , async () => {
        expect.assertions(3);
        const response = await fetchUsers();
        
        expect(response).toBeDefined();
        expect(response.length).toBeGreaterThan(0);
        expect(response).toEqual(expect.arrayContaining([
            expect.objectContaining({
            id : expect.any(Number),
            name : expect.any(String),
            email : expect.any(String),
            username : expect.any(String),
            address: {
                street : expect.any(String),
                suite : expect.any(String),
                city : expect.any(String),
                zipcode : expect.any(String),
                geo: {
                    lat : expect.any(String),
                    lng : expect.any(String)
                }
            }
        })
        ]))

    })
})