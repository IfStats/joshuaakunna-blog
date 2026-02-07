// SEO Metadata Generation and Structured Data Utilities

/**
 * Generates SEO metadata for a given page.
 * @param {string} title - The title of the page.
 * @param {string} description - A description of the page.
 * @param {string} url - The URL of the page.
 * @param {string} image - The image to be used for the page.
 * @return {object} An object containing the SEO metadata.
 */
function generateSEOMetadata(title, description, url, image) {
    return {
        title,
        description,
        url,
        image,
        "meta": [
            { name: "description", content: description },
            { property: "og:title", content: title },
            { property: "og:description", content: description },
            { property: "og:url", content: url },
            { property: "og:image", content: image },
        ]
    };
}

/**
 * Generates structured data in JSON-LD format.
 * @param {string} type - The type of the structured data (e.g., "Article", "BlogPosting").
 * @param {object} properties - An object containing the properties of the structured data.
 * @return {string} JSON-LD formatted string.
 */
function generateStructuredData(type, properties) {
    return JSON.stringify({
        "@context": "https://schema.org",
        "@type": type,
        ...properties
    }, null, 2);
}

// Exporting the functions for use in other modules
module.exports = { generateSEOMetadata, generateStructuredData };