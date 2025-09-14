# ServiceTitan API - Expected JSON Responses

## **Customer Endpoint**

`GET /crm/v2/tenant/{tenantId}/customers`


### Base Response Structure (No Query Parameters)
<details>
  <summary>Click to expand JSON example</summary>

```json
{
    "data": [
        {
            "id": 1234,
            "active": true,
            "name": "John Smith Plumbing Solutions",
            "type": {
                "id": 1,
                "name": "Residential"
            },
            "address": {
                "street": "123 Main Street",
                "unit": "Suite A",
                "city": "Phoenix",
                "state": "AZ",
                "zip": "85001",
                "country": "USA",
                "latitude": 33.4484,
                "longitude": -112.0740
            },
            "customFields": [
                {
                    "typeId": 101,
                    "name": "Customer Source",
                    "value": "Google Ads"
                },
                {
                    "typeId": 102,
                    "name": "Preferred Contact Method",
                    "value": "Email"
                }
            ],
            "balance": 250.75,
            "tagTypeIds": [5, 12, 8],
            "doNotMail": false,
            "doNotService": false,
            "createdOn": "2025-08-15T14:30:00Z",
            "createdById": 456,
            "modifiedOn": "2025-09-13T09:45:00Z",
            "mergedToId": null,
            "externalData": [
                {
                    "key": "QuickBooks_ID",
                    "value": "CUST-001234"
                },
                {
                    "key": "Lead_Score",
                    "value": "85"
                }
            ],
            "locations": [
                {
                    "taxZoneId": 7,
                    "id": 9876,
                    "customerId": 1234,
                    "active": true,
                    "name": "Main Property",
                    "address": {
                        "street": "123 Main Street",
                        "unit": "Suite A",
                        "city": "Phoenix",
                        "state": "AZ",
                        "zip": "85001",
                        "country": "USA",
                        "latitude": 33.4484,
                        "longitude": -112.0740
                    },
                    "customFields": [
                        {
                            "typeId": 201,
                            "name": "Property Type",
                            "value": "Commercial"
                        }
                    ],
                    "createdOn": "2025-08-15T14:30:00Z",
                    "createdById": 456,
                    "modifiedOn": "2025-09-10T16:20:00Z",
                    "mergedToId": null,
                    "zoneId": 3,
                    "tagTypeIds": [15, 22],
                    "externalData": [
                        {
                            "key": "Property_Value",
                            "value": "450000"
                        }
                    ],
                    "contacts": [
                        {
                            "id": 5678,
                            "type": {
                                "id": 1,
                                "name": "Phone"
                            },
                            "value": "+1-602-555-1234",
                            "memo": "Primary contact number"
                        },
                        {
                            "id": 5679,
                            "type": {
                                "id": 2,
                                "name": "Email"
                            },
                            "value": "john.smith@email.com",
                            "memo": "Business email"
                        }
                    ]
                }
            ]
        }
    ],
    "hasMore": false,
    "totalCount": 1,
    "pageSize": 50,
    "pageNumber": 1
}
```
</details>

---

### 1. Query: `createdOnOrAfter=2025-09-13T00:00:00Z`

**Purpose:** Get customers created after a specific date

**Expected Response:**
<details>
  <summary>Click to expand JSON example</summary>

```json
{
    "data": [
        {
            "id": 1235,
            "active": true,
            "name": "New Customer LLC",
            "type": {
                "id": 2,
                "name": "Commercial"
            },
            "address": {
                "street": "456 Business Blvd",
                "unit": null,
                "city": "Scottsdale",
                "state": "AZ",
                "zip": "85250",
                "country": "USA",
                "latitude": 33.6054,
                "longitude": -111.8770
            },
            "customFields": [],
            "balance": 0.00,
            "tagTypeIds": [1],
            "doNotMail": false,
            "doNotService": false,
            "createdOn": "2025-09-14T08:15:30Z",
            "createdById": 789,
            "modifiedOn": "2025-09-14T08:15:30Z",
            "mergedToId": null,
            "externalData": [],
            "locations": [
                {
                    "taxZoneId": 7,
                    "id": 9877,
                    "customerId": 1235,
                    "active": true,
                    "name": "Primary Location",
                    "address": {
                        "street": "456 Business Blvd",
                        "unit": null,
                        "city": "Scottsdale",
                        "state": "AZ",
                        "zip": "85250",
                        "country": "USA",
                        "latitude": 33.6054,
                        "longitude": -111.8770
                    },
                    "customFields": [],
                    "createdOn": "2025-09-14T08:15:30Z",
                    "createdById": 789,
                    "modifiedOn": "2025-09-14T08:15:30Z",
                    "mergedToId": null,
                    "zoneId": 3,
                    "tagTypeIds": [],
                    "externalData": [],
                    "contacts": [
                        {
                            "id": 5680,
                            "type": {
                                "id": 1,
                                "name": "Phone"
                            },
                            "value": "+1-480-555-9876",
                            "memo": null
                        }
                    ]
                }
            ]
        }
    ],
    "hasMore": false,
    "totalCount": 1
}
```
</details>

**Mandatory Fields for New Customers:**

- `id` (system generated)
- `name` (required)
- `active` (defaults to true)
- `createdOn` (system generated)
- `modifiedOn` (system generated)
- `locations` array with at least one location containing:
    - `id` (system generated)
    - `customerId` (system generated)
    - `address` object with at least `street` and `city`

---

### 2. Query: `modifiedOnOrAfter=2025-09-13T00:00:00Z`

**Purpose:** Get customers created/modified after a specific date

**Expected Response:**

<details>
  <summary>Click to expand JSON example</summary>

```json
{
    "data": [
        {
            "id": 1234,
            "active": true,
            "name": "John Smith Plumbing Solutions - UPDATED",
            "type": {
                "id": 1,
                "name": "Residential"
            },
            "address": {
                "street": "123 Main Street",
                "unit": "Suite B",
                "city": "Phoenix",
                "state": "AZ",
                "zip": "85001",
                "country": "USA",
                "latitude": 33.4484,
                "longitude": -112.0740
            },
            "customFields": [
                {
                    "typeId": 101,
                    "name": "Customer Source",
                    "value": "Referral"
                },
                {
                    "typeId": 103,
                    "name": "VIP Status",
                    "value": "Gold"
                }
            ],
            "balance": 175.50,
            "tagTypeIds": [5, 12, 8, 25],
            "doNotMail": false,
            "doNotService": false,
            "createdOn": "2025-08-15T14:30:00Z",
            "createdById": 456,
            "modifiedOn": "2025-09-13T15:22:45Z",
            "mergedToId": null,
            "externalData": [
                {
                    "key": "QuickBooks_ID",
                    "value": "CUST-001234"
                },
                {
                    "key": "Last_Service_Date",
                    "value": "2025-09-12"
                }
            ],
            "locations": [
                {
                    "taxZoneId": 7,
                    "id": 9876,
                    "customerId": 1234,
                    "active": true,
                    "name": "Main Property",
                    "address": {
                        "street": "123 Main Street",
                        "unit": "Suite B",
                        "city": "Phoenix",
                        "state": "AZ",
                        "zip": "85001",
                        "country": "USA",
                        "latitude": 33.4484,
                        "longitude": -112.0740
                    },
                    "customFields": [
                        {
                            "typeId": 201,
                            "name": "Property Type",
                            "value": "Commercial"
                        }
                    ],
                    "createdOn": "2025-08-15T14:30:00Z",
                    "createdById": 456,
                    "modifiedOn": "2025-09-13T15:22:45Z",
                    "mergedToId": null,
                    "zoneId": 3,
                    "tagTypeIds": [15, 22],
                    "externalData": [
                        {
                            "key": "Property_Value",
                            "value": "475000"
                        }
                    ],
                    "contacts": [
                        {
                            "id": 5678,
                            "type": {
                                "id": 1,
                                "name": "Phone"
                            },
                            "value": "+1-602-555-1234",
                            "memo": "Primary contact number"
                        },
                        {
                            "id": 5679,
                            "type": {
                                "id": 2,
                                "name": "Email"
                            },
                            "value": "john.smith@newemail.com",
                            "memo": "Updated business email"
                        }
                    ]
                }
            ]
        },
        {
            "id": 1235,
            "active": true,
            "name": "New Customer LLC",
            "type": {
                "id": 2,
                "name": "Commercial"
            },
            "address": {
                "street": "456 Business Blvd",
                "unit": null,
                "city": "Scottsdale",
                "state": "AZ",
                "zip": "85250",
                "country": "USA",
                "latitude": 33.6054,
                "longitude": -111.8770
            },
            "customFields": [],
            "balance": 0.00,
            "tagTypeIds": [1],
            "doNotMail": false,
            "doNotService": false,
            "createdOn": "2025-09-14T08:15:30Z",
            "createdById": 789,
            "modifiedOn": "2025-09-14T08:15:30Z",
            "mergedToId": null,
            "externalData": [],
            "locations": [
                {
                    "taxZoneId": 7,
                    "id": 9877,
                    "customerId": 1235,
                    "active": true,
                    "name": "Primary Location",
                    "address": {
                        "street": "456 Business Blvd",
                        "unit": null,
                        "city": "Scottsdale",
                        "state": "AZ",
                        "zip": "85250",
                        "country": "USA",
                        "latitude": 33.6054,
                        "longitude": -111.8770
                    },
                    "customFields": [],
                    "createdOn": "2025-09-14T08:15:30Z",
                    "createdById": 789,
                    "modifiedOn": "2025-09-14T08:15:30Z",
                    "mergedToId": null,
                    "zoneId": 3,
                    "tagTypeIds": [],
                    "externalData": [],
                    "contacts": [
                        {
                            "id": 5680,
                            "type": {
                                "id": 1,
                                "name": "Phone"
                            },
                            "value": "+1-480-555-9876",
                            "memo": null
                        }
                    ]
                }
            ]
        }
    ],
    "hasMore": false,
    "totalCount": 2
}
```
</details>

**Mandatory Fields for Modified Customers:**  
Same as base structure – all fields are returned regardless of what was modified.

---

### Field Importance Guide

#### Critical Fields (Required for QuickBooks Integration)
- `id` – Primary key for mapping between systems
- `name` – Customer name for QuickBooks customer record
- `active` – Determines if customer should be active in QuickBooks
- `balance` – Outstanding balance for accounts receivable
- `address` – Billing address (street, city, state, zip required)
- `locations[].contacts` – Phone and email for customer communication
- `modifiedOn` – Essential for incremental sync logic

#### Important Fields (Business Logic)
- `type` – Customer classification for reporting/categorization
- `doNotMail` – Marketing preferences
- `doNotService` – Service restrictions
- `customFields` – Business-specific data that may need to sync
- `locations[].taxZoneId` – Tax calculation requirements
- `createdOn` – Customer acquisition tracking
- `tagTypeIds` – Customer segmentation and categorization

#### Useful Fields (Enhancement)
- `externalData` – Store QuickBooks customer ID for reverse mapping
- `locations[].address` – Service location details
- `locations[].customFields` – Location-specific information
- `customFields` – Additional business data
- `mergedToId` – Handle customer merging scenarios

#### Optional Fields (Context)
- `createdById` – Audit trail information
- `locations[].zoneId` – Service territory management
- `contacts[].memo` – Additional contact context
- `address.latitude/longitude` – Mapping/routing (not needed for accounting)


#### Pagination Fields

- `hasMore` – Indicates if additional pages exist
- `totalCount` – Total records matching query
- `pageSize` – Records per page
- `pageNumber` – Current page number


---

# QuickBooks Customer API - Expected JSON Responses

## **Customer Endpoint**

`POST /v3/company/{realmId}/customers` 

**Expected Response Structure (Create Customer):**
<details>
    <summary>Click to expand JSON example</summary>

```json
{
    "Customer": {
        "Name": "John Smith Plumbing",
        "CompanyName": "John Smith Plumbing Solutions",
        "DisplayName": "John Smith Plumbing",
        "PrintOnCheckName": "John Smith Plumbing",
        "Active": true,
        "Taxable": true,
        "Job": false,
        "BillWithParent": false,
        "Balance": 0,
        "BalanceWithJobs": 0,
        "GivenName": "John",
        "MiddleName": "B",
        "FamilyName": "Smith",
        "FullyQualifiedName": "John Smith Plumbing",
        "BillAddr": {
            "Id": "45",
            "Line1": "123 Main Street",
            "Line2": "Suite A",
            "City": "Mountain View",
            "Country": "USA",
            "CountrySubDivisionCode": "CA",
            "PostalCode": "94042"
        },
        "ShipAddr": {
            "Id": "46",
            "Line1": "123 Main Street",
            "Line2": "Suite A",
            "City": "Mountain View",
            "Country": "USA",
            "CountrySubDivisionCode": "CA",
            "PostalCode": "94042"
        },
        "PrimaryPhone": {
            "FreeFormNumber": "(602) 555-1234"
        },
        "PrimaryEmailAddr": {
            "Address": "john.smith@email.com"
        },
        "WebAddr": {
            "URI": "http://johnsmithplumbing.com"
        },
        "DefaultTaxCodeRef": {
            "value": "2"
        },
        "PaymentMethodRef": {
            "value": "1"
        },
        "TermsRef": {
            "value": "3"
        },
        "CurrencyRef": {
            "value": "USD",
            "name": "United States Dollar"
        },
        "PreferredDeliveryMethod": "Print",
        "Notes": "Important customer - preferred client",
        "domain": "QBO",
        "sparse": false,
        "Id": "67",
        "SyncToken": "0",
        "MetaData": {
            "CreateTime": "2025-09-14T10:58:12-07:00",
            "LastUpdatedTime": "2025-09-14T10:58:12-07:00"
        }
    },
    "time": "2025-09-14T10:58:13.651-07:00"
}
```
</details>

**Mandatory Fields for Create Customer:**
- `Name` (either `DisplayName`, `CompanyName`, or `GivenName`/`FamilyName` combination)

---

### Endpoint: `POST /v3/company/{realmId}/customers` (Update Customer)

**Expected Request Structure (Update Customer):**
<details>
    <summary>Click to expand JSON example</summary>

```json
{
    "Customer": {
        "Id": "67",
        "SyncToken": "1",
        "sparse": true,
        "CompanyName": "John Smith Plumbing Solutions - UPDATED",
        "DisplayName": "John Smith Plumbing - UPDATED",
        "PrimaryPhone": {
            "FreeFormNumber": "(602) 555-9999"
        },
        "Notes": "Updated customer information - VIP status"
    }
}
```
</details>

**Expected Response Structure (Update Customer):**
<details>
    <summary>Click to expand JSON example</summary>

```json
{
    "Customer": {
        "Name": "John Smith Plumbing - UPDATED",
        "CompanyName": "John Smith Plumbing Solutions - UPDATED",
        "DisplayName": "John Smith Plumbing - UPDATED",
        "PrintOnCheckName": "John Smith Plumbing - UPDATED",
        "Active": true,
        "Taxable": true,
        "Job": false,
        "BillWithParent": false,
        "Balance": 0,
        "BalanceWithJobs": 0,
        "GivenName": "John",
        "MiddleName": "B",
        "FamilyName": "Smith",
        "FullyQualifiedName": "John Smith Plumbing - UPDATED",
        "BillAddr": {
            "Id": "45",
            "Line1": "123 Main Street",
            "Line2": "Suite A",
            "City": "Mountain View",
            "Country": "USA",
            "CountrySubDivisionCode": "CA",
            "PostalCode": "94042"
        },
        "ShipAddr": {
            "Id": "46",
            "Line1": "123 Main Street",
            "Line2": "Suite A",
            "City": "Mountain View",
            "Country": "USA",
            "CountrySubDivisionCode": "CA",
            "PostalCode": "94042"
        },
        "PrimaryPhone": {
            "FreeFormNumber": "(602) 555-9999"
        },
        "PrimaryEmailAddr": {
            "Address": "john.smith@email.com"
        },
        "WebAddr": {
            "URI": "http://johnsmithplumbing.com"
        },
        "DefaultTaxCodeRef": {
            "value": "2"
        },
        "PaymentMethodRef": {
            "value": "1"
        },
        "TermsRef": {
            "value": "3"
        },
        "CurrencyRef": {
            "value": "USD",
            "name": "United States Dollar"
        },
        "PreferredDeliveryMethod": "Print",
        "Notes": "Updated customer information - VIP status",
        "domain": "QBO",
        "sparse": false,
        "Id": "67",
        "SyncToken": "2",
        "MetaData": {
            "CreateTime": "2025-09-14T10:58:12-07:00",
            "LastUpdatedTime": "2025-09-14T15:30:25-07:00"
        }
    },
    "time": "2025-09-14T15:30:26.651-07:00"
}
```
</details>

**Mandatory Fields for Update Customer:**
- `Id` (required - customer to update)
- `SyncToken` (required - current sync token)

---

### Endpoint: `GET /v3/company/{realmId}/customers/{customerId}`

**Expected Response Structure (Get Single Customer):**
<details>
    <summary>Click to expand JSON example</summary>

```json
{
    "QueryResponse": {
        "Customer": [
            {
                "Name": "John Smith Plumbing",
                "CompanyName": "John Smith Plumbing Solutions",
                "DisplayName": "John Smith Plumbing",
                "PrintOnCheckName": "John Smith Plumbing",
                "Active": true,
                "Taxable": true,
                "Job": false,
                "BillWithParent": false,
                "Balance": 285.50,
                "BalanceWithJobs": 285.50,
                "GivenName": "John",
                "MiddleName": "B",
                "FamilyName": "Smith",
                "FullyQualifiedName": "John Smith Plumbing",
                "BillAddr": {
                    "Id": "45",
                    "Line1": "123 Main Street",
                    "Line2": "Suite A",
                    "City": "Mountain View",
                    "Country": "USA",
                    "CountrySubDivisionCode": "CA",
                    "PostalCode": "94042"
                },
                "ShipAddr": {
                    "Id": "46",
                    "Line1": "123 Main Street",
                    "Line2": "Suite A",
                    "City": "Mountain View",
                    "Country": "USA",
                    "CountrySubDivisionCode": "CA",
                    "PostalCode": "94042"
                },
                "PrimaryPhone": {
                    "FreeFormNumber": "(602) 555-1234"
                },
                "AlternatePhone": {
                    "FreeFormNumber": "(602) 555-5678"
                },
                "Mobile": {
                    "FreeFormNumber": "(602) 555-9012"
                },
                "Fax": {
                    "FreeFormNumber": "(602) 555-3456"
                },
                "PrimaryEmailAddr": {
                    "Address": "john.smith@email.com"
                },
                "WebAddr": {
                    "URI": "http://johnsmithplumbing.com"
                },
                "DefaultTaxCodeRef": {
                    "value": "2"
                },
                "PaymentMethodRef": {
                    "value": "1"
                },
                "TermsRef": {
                    "value": "3"
                },
                "CurrencyRef": {
                    "value": "USD",
                    "name": "United States Dollar"
                },
                "PreferredDeliveryMethod": "Print",
                "ResaleNum": "123456789",
                "Notes": "Important customer - preferred client",
                "domain": "QBO",
                "sparse": false,
                "Id": "67",
                "SyncToken": "2",
                "MetaData": {
                    "CreateTime": "2025-09-14T10:58:12-07:00",
                    "LastUpdatedTime": "2025-09-14T15:30:25-07:00"
                }
            }
        ],
        "startPosition": 1,
        "maxResults": 1
    },
    "time": "2025-09-14T16:15:33.651-07:00"
}
```
</details>

_No mandatory fields for GET request (customer ID provided in URL path)._

---

### Field Importance Guide for QuickBooks Customer API

#### Critical Fields (Required for ServiceTitan Integration)
- `Id` – QuickBooks customer unique identifier (primary key for mapping)
- `SyncToken` – Required for all update operations (concurrency control)
- `Name`/`DisplayName` – Customer identifier (maps to ServiceTitan customer name)
- `Active` – Whether customer is active (sync with ServiceTitan active status)
- `Balance` – Current customer balance (sync with ServiceTitan balance)
- `BillAddr` – Billing address (maps to ServiceTitan customer address)
- `PrimaryPhone` – Primary contact number (from ServiceTitan locations contacts)
- `PrimaryEmailAddr` – Primary email (from ServiceTitan locations contacts)

#### Important Fields (Business Logic)
- `CompanyName` – Business name (ServiceTitan customer name)
- `GivenName`/`FamilyName` – Individual names for personal customers
- `Job` – Whether this is a sub-customer (always false for main customers)
- `Taxable` – Tax status (important for invoice creation)
- `DefaultTaxCodeRef` – Default tax code (links to ServiceTitan tax zones)
- `TermsRef` – Payment terms (maps to ServiceTitan payment terms)
- `CurrencyRef` – Currency (typically USD)
- `Notes` – Additional customer information

#### Useful Fields (Enhancement)
- `ShipAddr` – Shipping address (can map to ServiceTitan location address)
- `AlternatePhone`/`Mobile`/`Fax` – Additional contact methods
- `WebAddr` – Customer website
- `PaymentMethodRef` – Preferred payment method
- `PreferredDeliveryMethod` – How to deliver invoices (Print, Email)
- `ResaleNum` – Resale certificate number
- `FullyQualifiedName` – Complete hierarchical name

#### System Fields (Metadata)
- `MetaData` – System-generated creation and update timestamps
- `domain` – Always "QBO" for QuickBooks Online
- `sparse` – Controls partial updates (true for sparse updates)
- `PrintOnCheckName` – Name to print on checks
- `BillWithParent` – Billing relationship (for sub-customers)
- `BalanceWithJobs` – Balance including sub-customers

#### Address Sub-Object Fields
- `Id` – Address unique identifier
- `Line1`/`Line2` – Street address lines
- `City` – City name
- `Country` – Country name
- `CountrySubDivisionCode` – State/Province code
- `PostalCode` – ZIP/Postal code

#### Reference Object Pattern
All reference fields follow the pattern:
- `value` – The ID of the referenced object
- `name` – Display name of the referenced object (optional)