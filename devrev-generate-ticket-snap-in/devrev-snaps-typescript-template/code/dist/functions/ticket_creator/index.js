"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.run = void 0;
const typescript_sdk_1 = require("@devrev/typescript-sdk");
const run = (events) => __awaiter(void 0, void 0, void 0, function* () {
    for (const event of events) {
        const endpoint = event.execution_metadata.devrev_endpoint;
        const token = event.context.secrets.service_account_token;
        // Initialize the public SDK client
        const devrevSDK = typescript_sdk_1.client.setup({ endpoint, token });
        // Create a ticket. Name the ticket using the current date and time.
        const date = new Date();
        const ticketName = `Ticket created at ${date.toLocaleString()}`;
        const ticketBody = `This ticket was created by a snap-in at ${date.toLocaleString()}`;
        const reponse = yield devrevSDK.worksCreate({
            title: ticketName,
            body: ticketBody,
            // The ticket is created in the PROD-1 part. Rename this to match your part.
            applies_to_part: "PROD-1",
            // The ticket is owned by the DEVU-1 user. Rename this to match the required user.
            owned_by: ["DEVU-1"],
            type: typescript_sdk_1.publicSDK.WorkType.Ticket,
        });
        console.log(reponse);
    }
});
exports.run = run;
exports.default = exports.run;
