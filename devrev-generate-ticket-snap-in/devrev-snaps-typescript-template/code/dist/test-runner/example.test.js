"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ticket_creator_1 = require("../functions/ticket_creator");
describe('Test some function', () => {
    it('Something', () => {
        (0, ticket_creator_1.run)([{
                payload: {
                    work_created: {
                        work: {
                            id: 'some-id'
                        }
                    }
                }
            }]);
    });
});
