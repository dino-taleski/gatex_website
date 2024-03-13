import React from "react";

const LocationPage = () => {
    return (
        <>
            <p
                style={{
                    textAlign: "center",
                    fontSize: "34px",
                    fontWeight: "700",
                    paddingTop: "20px",
                    paddingBottom: "20px",
                    marginBottom: "0px",
                }}
            >
                OUR LOCATION
            </p>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d824.541487252512!2d21.548504377364367!3d41.34247404230848!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1356ebe0f91925c1%3A0x2bc5d609cc20185d!2sGATEKS!5e0!3m2!1sen!2smk!4v1710315850393!5m2!1sen!2smk"
                width="100%"
                height="450"
                style={{ border: "0", paddingBottom: "20px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
        </>
    );
};

export default LocationPage;
