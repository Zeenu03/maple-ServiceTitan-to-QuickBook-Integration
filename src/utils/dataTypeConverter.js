// src/utils/dataTypeConverter.js
// Data type conversion utilities for ServiceTitan to QuickBooks integration
// Configured for Canadian market operations

/**
 * Convert string value to number with error handling
 * @param {string} stringValue - String representation of a number
 * @returns {number} Parsed number value or 0.00 on error
 */
export const stringToNumber = (stringValue) => {
  try {
    // Handle null, undefined, or empty strings
    if (!stringValue || stringValue === '') {
      console.warn('Empty or null string provided to stringToNumber');
      return 0.00;
    }
    
    const result = parseFloat(stringValue.trim());
    
    if (isNaN(result)) {
      throw new Error(`Invalid number format: "${stringValue}"`);
    }
    
    return result;
    
  } catch (error) {
    console.error('Error converting string to number:', {
      input: stringValue,
      error: error.message
    });
    return 0.00;
  }
};

/**
 * Convert number value to string
 * @param {number} numberValue - Number to convert
 * @returns {string} String representation of the number
 */
export const numberToString = (numberValue) => {
  if (numberValue === null || numberValue === undefined) {
    return '';
  }
  
  return numberValue.toString();
};

/**
 * Convert ISO datetime string to QuickBooks date format
 * @param {string} isoDateTime - ISO datetime string (e.g., "2025-09-11T16:30:00Z")
 * @returns {string|null} Date string in YYYY-MM-DD format or null
 */
export const convertISODateToQBDate = (isoDateTime) => {
  // "2025-09-11T16:30:00Z" → "2025-09-11"
  if (!isoDateTime || isoDateTime === null) {
    return null;
  }
  isoDateTime = isoDateTime.trim();
  try {
    // Split on 'T' to extract date part
    return isoDateTime.split('T')[0];
  } catch (error) {
    console.error('Error converting ISO date to QB date:', {
      input: isoDateTime,
      error: error.message
    });
    return null;
  }
};

/**
 * Standardize phone number format for QuickBooks
 * @param {string} stPhone - ServiceTitan phone number
 * @returns {string} Cleaned phone format
 */
export const formatPhoneNumber = (stPhone) => {
  // Standardize phone format for QB
  if (!stPhone) {
    return '';
  }
  stPhone = stPhone.trim();
  return cleanPhoneFormat(stPhone);
};

/**
 * Clean and standardize phone number format
 * @param {string} phone - Raw phone number
 * @returns {string} Cleaned phone number
 */
const cleanPhoneFormat = (phone) => {
  if (!phone || typeof phone !== 'string') {
    return '';
  }
  
  // Remove all non-digit characters except + for international numbers
  let cleaned = phone.replace(/[^\d+\-\(\)\s]/g, '');
  
  // Basic cleaning - remove extra spaces
  cleaned = cleaned.trim();
  
  // If it starts with +91 (India), keep the format
  if (cleaned.startsWith('+91')) {
    return cleaned;
  }
  
  // For US numbers, try to format as (XXX) XXX-XXXX
  const digitsOnly = cleaned.replace(/\D/g, '');
  
  if (digitsOnly.length === 10) {
    return `(${digitsOnly.slice(0, 3)}) ${digitsOnly.slice(3, 6)}-${digitsOnly.slice(6)}`;
  } else if (digitsOnly.length === 11 && digitsOnly.startsWith('1')) {
    return `+1 (${digitsOnly.slice(1, 4)}) ${digitsOnly.slice(4, 7)}-${digitsOnly.slice(7)}`;
  }
  
  // Return as-is if we can't format it
  return cleaned;
};

/**
 * Format ServiceTitan invoice reference number for QuickBooks
 * @param {string} stReferenceNumber - ServiceTitan reference number
 * @returns {string} Formatted QuickBooks document number
 */
export const formatInvoiceNumber = (stReferenceNumber) => {
  // "ST-INV-001234" → "INV-2025-001234"
  if (!stReferenceNumber) {
    return '';
  }
  stReferenceNumber = stReferenceNumber.trim();
  if (stReferenceNumber.startsWith('ST-INV-')) {
    const invoiceNum = extractNumberPart(stReferenceNumber);
    const year = getCurrentYear();
    return `INV-${year}-${invoiceNum}`;
  } else {
    return stReferenceNumber;
  }
};

/**
 * Extract number part from ServiceTitan reference number
 * @param {string} stReferenceNumber - ServiceTitan reference number
 * @returns {string} Extracted number part
 */
const extractNumberPart = (stReferenceNumber) => {
  // Extract number from "ST-INV-001234" → "001234"
  const parts = stReferenceNumber.split('-');
  if (parts.length >= 3) {
    return parts[2]; // Get the last part after second dash
  }
  
  // Fallback: extract all digits
  const digits = stReferenceNumber.replace(/\D/g, '');
  return digits || '000000';
};

/**
 * Get current year
 * @returns {number} Current year
 */
const getCurrentYear = () => {
  return new Date().getFullYear();
};

/**
 * Validate and convert currency string to number
 * @param {string} currencyString - Currency string (e.g., "$450.00", "450.00")
 * @returns {number} Numeric value
 */
export const currencyStringToNumber = (currencyString) => {
  if (!currencyString) {
    return 0.00;
  }
  currencyString = currencyString.trim();
  // Remove currency symbols and spaces
  const cleaned = currencyString.replace(/[$,\s]/g, '');
  return stringToNumber(cleaned);
};

/**
 * Format number as currency string
 * @param {number} amount - Numeric amount
 * @param {string} currency - Currency symbol (default: '$')
 * @returns {string} Formatted currency string
 */
export const numberToCurrencyString = (amount, currency = '$') => {
  if (isNaN(amount)) {
    return `${currency}0.00`;
  }
  
  return `${currency}${amount.toFixed(2)}`;
};

/**
 * Validate email format
 * @param {string} email - Email address
 * @returns {boolean} True if valid email format
 */
export const isValidEmail = (email) => {
  if (!email || typeof email !== 'string') {
    return false;
  }
  email = email.trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

/**
 * Validate phone number format
 * @param {string} phone - Phone number
 * @returns {boolean} True if valid phone format
 */
export const isValidPhone = (phone) => {
  if (!phone || typeof phone !== 'string') {
    return false;
  }
  
  // Basic validation - at least 10 digits
    phone = phone.trim();
  const digitsOnly = phone.replace(/\D/g, '');
  return digitsOnly.length >= 10;
};

/**
 * Convert boolean to string for QB
 * @param {boolean} boolValue - Boolean value
 * @returns {string} "true" or "false"
 */
export const booleanToString = (boolValue) => {
  return Boolean(boolValue).toString();
};

/**
 * Safe string conversion with null handling
 * @param {any} value - Value to convert to string
 * @returns {string} String representation or empty string
 */
export const safeStringConvert = (value) => {
  if (value === null || value === undefined) {
    return '';
  }
  
  return String(value);
};

/**
 * Round number to specified decimal places
 * @param {number} num - Number to round
 * @param {number} decimals - Number of decimal places (default: 2)
 * @returns {number} Rounded number
 */
export const roundToDecimals = (num, decimals = 2) => {
  if (isNaN(num)) {
    return 0;
  }
  
  return Math.round(num * Math.pow(10, decimals)) / Math.pow(10, decimals);
};

