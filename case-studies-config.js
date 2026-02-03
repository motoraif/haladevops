// Case Studies Configuration
// Add your real case studies here

const CASE_STUDIES = [
    {
        title: "Project Title",
        client: "Company Name (or 'Confidential Client')",
        industry: "Industry (e.g., FinTech, E-commerce, SaaS)",
        challenge: "Brief description of the problem/challenge",
        solution: "What you implemented",
        results: [
            "Specific result 1 (e.g., 60% cost reduction)",
            "Specific result 2 (e.g., Deployment time: 2hr → 10min)",
            "Specific result 3 (e.g., Zero downtime achieved)"
        ],
        technologies: ["AWS", "Docker", "Kubernetes", "Terraform"],
        duration: "Project duration (e.g., 4 weeks)",
        featured: false // Set ONE to true for highlight
    },
    // Add more case studies below:
    /*
    {
        title: "E-commerce Platform Migration",
        client: "Confidential E-commerce Client",
        industry: "E-commerce",
        challenge: "Legacy infrastructure causing frequent outages and slow deployments",
        solution: "Migrated to AWS with containerized microservices, implemented CI/CD pipeline",
        results: [
            "99.99% uptime achieved",
            "Deployment time reduced from 4 hours to 15 minutes",
            "40% reduction in infrastructure costs"
        ],
        technologies: ["AWS", "Docker", "Kubernetes", "Jenkins", "Terraform"],
        duration: "6 weeks",
        featured: true
    },
    */
];

// Export for use in main page
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { CASE_STUDIES };
}
