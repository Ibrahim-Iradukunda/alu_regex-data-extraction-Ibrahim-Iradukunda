#!/usr/bin/env node

const text = `
  Emails: user@example.com, firstname.lastname@company.co.uk, invalid-email@com
  URLs: https://www.example.com, http://subdomain.example.org/page, invalid-url
  Phones: (123) 456-7890, 123-456-7890, 123.456.7890, 999999999
  Credit Cards: 1234 5678 9012 3456, 1234-5678-9012-3456, 1234567890123456
  Time: 14:30, 2:30 PM, 25:99
  Hashtags: #example, #ThisIsAHashtag
  Currency: $19.99, $1,234.56, 1000 USD
  HTML: <p>Hello</p>, <div class="example">Test</div>, <img src="image.jpg">
`;

// Regular Expressions (with strict validation)
const emailRegex = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,7}\b/g;
const urlRegex = /\bhttps?:\/\/[^\s/$.?#].[^\s]*\b/g;
const phoneRegex = /\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}/g;
const creditCardRegex = /\b\d{4}[- ]?\d{4}[- ]?\d{4}[- ]?\d{4}\b/g;
const timeRegex = /\b(1[0-9]|2[0-3]):[0-5][0-9]\b|\b(1[0-2]|0?[1-9]):[0-5][0-9] (AM|PM)\b/g;
const hashtagRegex = /#[A-Za-z0-9_]+/g;
const currencyRegex = /\$\d{1,3}(,\d{3})*(\.\d{2})?/g;
const htmlTagRegex = /<\/?[a-z][\s\S]*?>/gi; // **NEW: Extracts HTML tags**

// Extract & Validate Matches
const extractData = (label, regex) => {
    const matches = text.match(regex) || [];
    console.log(`${label}:`, matches.length > 0 ? matches : "No valid matches found");
};

// Run Extraction
extractData("Emails", emailRegex);
extractData("URLs", urlRegex);
extractData("Phones", phoneRegex);
extractData("Credit Cards", creditCardRegex);
extractData("Time", timeRegex);
extractData("Hashtags", hashtagRegex);
extractData("Currency", currencyRegex);
extractData("HTML Tags", htmlTagRegex);
