const axios = require("axios");
const qs = require("qs");

exports.GoogleCalendarInitView = async (request, response, next) => {
    const rootURL = "https://accounts.google.com/o/oauth2/v2/auth";
    const params = {
        client_id: process.env.CLIENT_ID,
        redirect_uri: process.env.REDIRECT_URI,
        response_type: "code",
        scope: ["https://www.googleapis.com/auth/calendar", "https://www.googleapis.com/auth/calendar.events"].join(" "),
        access_type: "online",
        prompt: "consent",
    };

    const query = new URLSearchParams(params);
    const url = `${rootURL}?${query.toString()}`;

    response.render("init", {
        link: url,
    });
};

exports.GoogleCalendarRedirectView = async (request, response, next) => {
    const code = request.query.code;
    const error = request.query.error;

    if (error) {
        response.send(error);
        return;
    }

    const rootURL = "https://oauth2.googleapis.com/token";
    const params = {
        client_id: process.env.CLIENT_ID,
        client_secret: process.env.CLIENT_SECRET,
        code: code,
        grant_type: "authorization_code",
        redirect_uri: process.env.REDIRECT_URI,
    };

    try {
        const result = await axios.post(rootURL, qs.stringify(params), {
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            }
        });

        const data = result.data;
        const access_token = data.access_token;
        
		const events = await axios.get("https://www.googleapis.com/calendar/v3/calendars/primary/events?orderBy=updated", {
			headers: {
				"Authorization": `Bearer ${access_token}`,
				"Accept": "application/json"
			}
		});

        response.render("redirect", {
			events : events.data.items
		});

    } catch (error) {
        console.log(error);
        response.send("Error");
    }
};
