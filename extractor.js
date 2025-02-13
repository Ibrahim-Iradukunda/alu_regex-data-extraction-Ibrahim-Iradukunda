#!/usr/bin/env node

/**
 * DataExtractor class for extracting structured data patterns from text using regular expressions.
 */
class DataExtractor {
    /**
     * Initialize the DataExtractor with text to process
     */
    constructor(sampleText) {
        this.sampleText = sampleText;
    }

    /**
     * Extract email addresses from the text
     */
    extractEmails() {
        const pattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/g;
        return this.sampleText.match(pattern) || [];
    }

    /**
     * Extract URLs from the text
     */
    extractUrls() {
        const pattern = /https?:\/\/(?:[-\w.]|(?:%[\da-fA-F]{2}))+[^\s,)"]*/g;
        return this.sampleText.match(pattern) || [];
    }

    /**
     * Extract phone numbers from the text
     */
    extractPhoneNumbers() {
        const pattern = /(?:\+\d{1,2}\s?)?\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}/g;
        return this.sampleText.match(pattern) || [];
    }

    /**
     * Extract credit card numbers from the text
     */
    extractCreditCards() {
        const pattern = /\b(?:\d{4}[-\s]?){3}\d{4}\b/g;
        return this.sampleText.match(pattern) || [];
    }

    /**
     * Extract time formats from the text
     */
    extractTime() {
        const pattern = /(?:(?:0?[1-9]|1[0-2]):[0-5]\d\s?(?:AM|PM)|(?:2[0-3]|[01]?\d):[0-5]\d)/g;
        return this.sampleText.match(pattern) || [];
    }

    /**
     * Extract HTML tags from the text
     */
    extractHtmlTags() {
        const pattern = /<[^>]+>/g;
        return this.sampleText.match(pattern) || [];
    }

    /**
     * Extract hashtags from the text
     */
    extractHashtags() {
        const pattern = /#[a-zA-Z0-9_]+\b/g;
        return this.sampleText.match(pattern) || [];
    }

    /**
     * Extract currency amounts from the text
     */
    extractCurrency() {
        const pattern = /\$\d{1,3}(?:,\d{3})*(?:\.\d{2})?/g;
        return this.sampleText.match(pattern) || [];
    }
}

module.exports = DataExtractor;
