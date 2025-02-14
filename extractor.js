#!/usr/bin/env node

console.log("Running Data Extractor...");

/**
 * DataExtractor class for extracting structured data patterns from text using regular expressions.
 */
class DataExtractor {
    /**
     * Initialize the DataExtractor with text to process
     */
    constructor(sampleText) {
        this.sampleText = sampleText;
        console.log("DataExtractor initialized with sample text.");
    }

    /**
     * Extract email addresses from the text
     */
    extractEmails() {
        const emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/g;
        return this.sampleText.match(emailPattern) || [];
    }

    /**
     * Extract URLs from the text
     */
    extractUrls() {
        const urlPattern = /https?:\/\/(?:[-\w.]|(?:%[\da-fA-F]{2}))+[^\s,)"]*/g;
        return this.sampleText.match(urlPattern) || [];
    }

    /**
     * Extract phone numbers from the text
     */
    extractPhoneNumbers() {
        const phonePattern = /(?:\+\d{1,2}\s?)?\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}/g;
        return this.sampleText.match(phonePattern) || [];
    }

    /**
     * Extract credit card numbers from the text
     */
    extractCreditCards() {
        const creditCardPattern = /\b(?:\d{4}[-\s]?){3}\d{4}\b/g;
        return this.sampleText.match(creditCardPattern) || [];
    }

    /**
     * Extract time formats from the text
     */
    extractTime() {
        const timePattern = /(?:(?:0?[1-9]|1[0-2]):[0-5]\d\s?(?:AM|PM)|(?:2[0-3]|[01]?\d):[0-5]\d)/g;
        return this.sampleText.match(timePattern) || [];
    }

    /**
     * Extract HTML tags from the text
     */
    extractHtmlTags() {
        const htmlPattern = /<[^>]+>/g;
        return this.sampleText.match(htmlPattern) || [];
    }

    /**
     * Extract hashtags from the text
     */
    extractHashtags() {
        const hashtagPattern = /#[a-zA-Z0-9_]+\b/g;
        return this.sampleText.match(hashtagPattern) || [];
    }

    /**
     * Extract currency amounts from the text
     */
    extractCurrency() {
        const currencyPattern = /\$\d{1,3}(?:,\d{3})*(?:\.\d{2})?/g;
        return this.sampleText.match(currencyPattern) || [];
    }
}

module.exports = DataExtractor;

