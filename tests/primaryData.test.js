// write a text function to test the function on dataTypeConverter.js
// src/utils/dataTypeConverter.js
import { stringToNumber, numberToString, convertISODateToQBDate, formatPhoneNumber, formatInvoiceNumber, currencyStringToNumber, numberToCurrencyString, isValidEmail, isValidPhone } from '../src/utils/dataTypeConverter.js';
import assert from 'assert';


console.log('\n🧪 Testing Data Type Converter Functions...\n');

// Test stringToNumber
console.log('📊 Testing stringToNumber:');
console.log('  "450.00" →', stringToNumber("450.00"));
console.log('  "  123.45  " →', stringToNumber("  123.45  "));
console.log('  "invalid" →', stringToNumber("invalid"));
console.log('  null →', stringToNumber(null));

// Test numberToString
console.log('\n📊 Testing numberToString:');
console.log('  450 →', numberToString(450));
console.log('  123.45 →', numberToString(123.45));
console.log('  null →', numberToString(null));

// Test convertISODateToQBDate
console.log('\n📊 Testing convertISODateToQBDate:');
console.log('  "2025-09-11T16:30:00Z" →', convertISODateToQBDate("2025-09-11T16:30:00Z"));
console.log('  null →', convertISODateToQBDate(null));

// Test formatPhoneNumber
console.log('\n📊 Testing formatPhoneNumber:');
console.log("   +91-9876543210 ->", formatPhoneNumber("+91-9876543210"));
console.log("  1234567890 ->", formatPhoneNumber("1234567890"));
console.log("  555-123-4567 ->", formatPhoneNumber("555-123-4567"));

// Test formatInvoiceNumber
console.log('\n📊 Testing formatInvoiceNumber:');
console.log('  "ST-INV-001234" →', formatInvoiceNumber("ST-INV-001234"));
console.log('  "CUSTOM-INV-456" →', formatInvoiceNumber("CUSTOM-INV-456"));

// Test currency functions
console.log('\n📊 Testing currency functions:');
console.log('  currencyStringToNumber("$450.00") →', currencyStringToNumber("$450.00"));
console.log('  numberToCurrencyString(450) →', numberToCurrencyString(450));



console.log('\n✅ Data Type Converter tests completed!\n');
