const { spec } = require('pactum');

async function createBookingRequest() {
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
    return response.body.bookingid;
}

module.exports = { createBookingRequest };