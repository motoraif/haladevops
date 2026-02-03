// Testimonials Configuration
// Add your real client testimonials here

const TESTIMONIALS = [
    {
        name: "Client Name",
        title: "Job Title, Company Name",
        avatar: "CN", // Initials
        rating: 5, // 1-5 stars
        text: "Your client's testimonial text goes here. Be specific about results and outcomes.",
        featured: false // Set to true for one testimonial to highlight it
    },
    // Add more testimonials below:
    /*
    {
        name: "Sarah Anderson",
        title: "CTO, TechStart Inc.",
        avatar: "SA",
        rating: 5,
        text: "HalaDevOps reduced our deployment time from 2 hours to 15 minutes. The CI/CD pipeline they built is rock solid.",
        featured: false
    },
    {
        name: "Michael Kim",
        title: "CEO, DataFlow Solutions",
        avatar: "MK",
        rating: 5,
        text: "We were spending $15k/month on AWS. After their cost optimization audit, we're down to $6k with better performance.",
        featured: true
    },
    */
];

// Stats Configuration
const TESTIMONIAL_STATS = {
    clientCount: "50+",
    satisfactionRate: "100%",
    averageRating: "4.9/5"
};

// Export for use in main page
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { TESTIMONIALS, TESTIMONIAL_STATS };
}
