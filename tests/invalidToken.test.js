const { spec } = require('pactum');
const bookingSchema = require('../booking.schema.json');

describe('booking and updating a booking', () => {
    let bookingId;

    it('verify creating a successful booking', async () => {
        let url = 'https://restful-booker.herokuapp.com/booking';

        const response = await spec()
            .post(url)
            .withHeaders({
                'content-type': 'application/json',
                'Accept': 'application/json'
            })
            .withJson({
                "firstname": "Wanda",
                "lastname": "Brown",
                "totalprice": 567,
                "depositpaid": true,
                "bookingdates": {
                    "checkin": "2020-01-01",
                    "checkout": "2021-01-01"
                },
                "additionalneeds": "Breakfast, Lunch"
            })
            .expectStatus(200);
        bookingId = response.body.bookingid;
    })
    it('should generate a 400 response when the token is invalid', async () => {
        let url = `https://restful-booker.herokuapp.com/booking/${bookingId}`;

        await spec()
            .put(url)
            .withHeaders({
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': 'Basic YWRtaW46cGFzc3dvcmQx'
            })
            .withJson({
                "firstname": "Wanda",
                "lastname": "Brown",
                "totalprice": 567,
                "depositpaid": true,
                "bookingdates": {
                    "checkin": "2020-01-01",
                    "checkout": "2021-01-01"
                },
                "additionalneeds": "Breakfast, Lunch"
            })
            .expectStatus(403)
            .expectBody('Forbidden');
});
});