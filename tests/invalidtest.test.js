const { spec } = require('pactum');
const bookingSchema = require('../booking.schema.json');
const { createBookingRequest } = require('../helpers/bookingSetup');

describe('booking and updating a booking', () => {
    let bookingId;

    it('verify creating a successful booking', async () => {
        bookingId = await createBookingRequest();
    })
    it('should generate a 400 response for an invalid request', async () => {
        let url = `https://restful-booker.herokuapp.com/booking/${bookingId}`;

        await spec()
            .put(url)
            .withHeaders({
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': 'Basic YWRtaW46cGFzc3dvcmQxMjM='
            })
            .withJson({
                "lastname": "Brown",
                "totalprice": 567,
                "depositpaid": true,
                "bookingdates": {
                    "checkin": "2020-01-01",
                    "checkout": "2021-01-01"
                },
                "additionalneeds": "Breakfast, Lunch"
            })
            .expectStatus(400)
            .expectBody('Bad Request');
});
});