import React from 'react';
import backgroundvector from "../assets/img/vector-2.png"

const ContactForm = () => {
    return (
        <div
            style={{
                backgroundImage: `url(${backgroundvector})`, // Replace with your actual image path
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
            }}
        >
            <div className="pt-10">
                <center>
                    <h2
                        style={{ color: "rgba(116, 123, 180, 1)" }}
                        className="mb-10 text-center text-3xl font-bold md:text-4xl"
                    >
                        Have questions?
                    </h2>
                </center>
            </div>
            <center>
                <p className="mx-4 mb-8 text-left  md:text-xl md:text-center">
                    Connect with us to delve into the world of HR tech & Talent Insights!
                </p>
            </center>

            <div className="mx-auto my-8 max-w-lg rounded-3xl bg-white p-8 shadow-lg">
                <form>
                    <div className="mb-4">
                        <input
                            type="text"
                            name="fullName"
                            placeholder="Full Name"
                            className="w-full rounded-md border border-gray-300 p-2"
                        />
                    </div>
                    <div className="mb-4">
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            className="w-full rounded-md border border-gray-300 p-2"
                        />
                    </div>
                    <div className="mb-4">
                        <textarea
                            name="message"
                            placeholder="Share Your Thoughts"
                            className="w-full rounded-md border border-gray-300 p-2"
                            rows={4}
                            maxLength={400}
                        ></textarea>
                        <div className="mt-1 text-right text-sm text-gray-500">0/400</div>
                    </div>
                    <div className="text-center">
                        <button
                            type="submit"
                            style={{ backgroundColor: "rgba(82, 96, 166, 1) " }}
                            className="w-full rounded-md px-6 py-2 text-white "
                        >
                            Send
                        </button>
                    </div>
                </form>
                <div className="mt-8 text-center text-sm text-gray-600">
                    sophia@talentinsights.us
                </div>
            </div>
        </div>

    )
}

export default ContactForm