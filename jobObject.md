## **Job Endpoints**

### **GET /job-planning/v2/tenant/{tenantId}/jobs**

#### Base Response Structure (No Query Parameters)
<details>
    <summary>Click to expand JSON example</summary>

```json
{
    "data": [
        {
            "id": 5678,
            "jobNumber": "JOB-2025-001234",
            "customerId": 1234,
            "locationId": 9876,
            "projectId": 4567,
            "businessUnitId": 101,
            "jobTypeId": 201,
            "campaignId": 301,
            "summary": "Kitchen sink repair and faucet replacement",
            "description": "Customer reported leaking kitchen sink. Technician to assess and repair/replace as needed.",
            "status": "Completed",
            "priority": "Normal",
            "noChargeBill": false,
            "createdOn": "2025-09-10T08:30:00Z",
            "modifiedOn": "2025-09-12T16:45:00Z",
            "completedOn": "2025-09-12T16:30:00Z",
            "invoiceId": 7890,
            "estimateId": 3456,
            "leadCallId": 8901,
            "soldBy": 456,
            "customFields": [
                {
                    "typeId": 501,
                    "name": "Service Type",
                    "value": "Emergency"
                },
                {
                    "typeId": 502,
                    "name": "Equipment Brand",
                    "value": "Kohler"
                }
            ],
            "tagTypeIds": [10, 15, 23],
            "externalData": [
                {
                    "key": "QuickBooks_Job_ID",
                    "value": "JOB-QB-001234"
                },
                {
                    "key": "Original_Lead_Source",
                    "value": "Google Ads"
                }
            ],
            "total": 285.50,
            "balance": 0.00,
            "tax": 22.85,
            "subtotal": 262.65,
            "receivedOn": "2025-09-10T08:30:00Z",
            "dispatchedOn": "2025-09-12T09:15:00Z",
            "startedOn": "2025-09-12T10:00:00Z",
            "arrivedOn": "2025-09-12T10:00:00Z",
            "technician": {
                "id": 789,
                "name": "Mike Johnson"
            },
            "customer": {
                "id": 1234,
                "name": "John Smith Plumbing Solutions"
            },
            "location": {
                "id": 9876,
                "name": "Main Property",
                "address": {
                    "street": "123 Main Street",
                    "city": "Phoenix",
                    "state": "AZ",
                    "zip": "85001"
                }
            },
            "businessUnit": {
                "id": 101,
                "name": "Plumbing - Service"
            },
            "jobType": {
                "id": 201,
                "name": "Repair Service"
            },
            "appointments": [
                {
                    "id": 1111,
                    "jobId": 5678,
                    "appointmentNumber": "APPT-001",
                    "start": "2025-09-12T09:00:00Z",
                    "end": "2025-09-12T17:00:00Z",
                    "arrivalWindowStart": "2025-09-12T09:00:00Z",
                    "arrivalWindowEnd": "2025-09-12T12:00:00Z",
                    "status": "Completed",
                    "specialInstructions": "Customer prefers morning appointments"
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

#### 1. Query: `createdOnOrAfter=2025-09-13T00:00:00Z`

**Purpose:** Get jobs created after a specific date

<details>
    <summary>Click to expand JSON example</summary>

```json
{
    "data": [
        {
            "id": 5679,
            "jobNumber": "JOB-2025-001235",
            "customerId": 1235,
            "locationId": 9877,
            "projectId": null,
            "businessUnitId": 102,
            "jobTypeId": 202,
            "campaignId": null,
            "summary": "New customer - bathroom pipe inspection",
            "description": "Initial service call for new commercial customer. Full bathroom plumbing inspection requested.",
            "status": "Scheduled",
            "priority": "Normal",
            "noChargeBill": false,
            "createdOn": "2025-09-13T14:20:30Z",
            "modifiedOn": "2025-09-13T14:20:30Z",
            "completedOn": null,
            "invoiceId": null,
            "estimateId": 3457,
            "leadCallId": 8902,
            "soldBy": 789,
            "customFields": [
                {
                    "typeId": 501,
                    "name": "Service Type",
                    "value": "Standard"
                }
            ],
            "tagTypeIds": [5, 12],
            "externalData": [],
            "total": 0.00,
            "balance": 0.00,
            "tax": 0.00,
            "subtotal": 0.00,
            "receivedOn": "2025-09-13T14:20:30Z",
            "dispatchedOn": null,
            "startedOn": null,
            "arrivedOn": null,
            "technician": null,
            "customer": {
                "id": 1235,
                "name": "New Customer LLC"
            },
            "location": {
                "id": 9877,
                "name": "Primary Location",
                "address": {
                    "street": "456 Business Blvd",
                    "city": "Scottsdale",
                    "state": "AZ",
                    "zip": "85250"
                }
            },
            "businessUnit": {
                "id": 102,
                "name": "Plumbing - Commercial"
            },
            "jobType": {
                "id": 202,
                "name": "Inspection"
            },
            "appointments": [
                {
                    "id": 1112,
                    "jobId": 5679,
                    "appointmentNumber": "APPT-002",
                    "start": "2025-09-15T08:00:00Z",
                    "end": "2025-09-15T12:00:00Z",
                    "arrivalWindowStart": "2025-09-15T08:00:00Z",
                    "arrivalWindowEnd": "2025-09-15T10:00:00Z",
                    "status": "Scheduled",
                    "specialInstructions": "Contact property manager before arrival"
                }
            ]
        }
    ],
    "hasMore": false,
    "totalCount": 1
}
```
</details>

**Mandatory Fields for New Jobs:**
- `id` (system generated)
- `jobNumber` (system generated)
- `customerId` (required - must exist)
- `locationId` (required - must exist)
- `businessUnitId` (required)
- `jobTypeId` (required)
- `summary` (required)
- `status` (defaults to "Open")
- `createdOn` (system generated)
- `modifiedOn` (system generated)
- `receivedOn` (system generated)

---

#### 2. Query: `modifiedOnOrAfter=2025-09-12T00:00:00Z`

**Purpose:** Get jobs created/modified after a specific date

<details>
    <summary>Click to expand JSON example</summary>

```json
{
    "data": [
        {
            "id": 5678,
            "jobNumber": "JOB-2025-001234",
            "customerId": 1234,
            "locationId": 9876,
            "projectId": 4567,
            "businessUnitId": 101,
            "jobTypeId": 201,
            "campaignId": 301,
            "summary": "Kitchen sink repair and faucet replacement - COMPLETED",
            "description": "Customer reported leaking kitchen sink. Technician assessed, repaired drain and replaced faucet. Job completed successfully.",
            "status": "Completed",
            "priority": "Normal",
            "noChargeBill": false,
            "createdOn": "2025-09-10T08:30:00Z",
            "modifiedOn": "2025-09-12T16:45:00Z",
            "completedOn": "2025-09-12T16:30:00Z",
            "invoiceId": 7890,
            "estimateId": 3456,
            "leadCallId": 8901,
            "soldBy": 456,
            "customFields": [
                {
                    "typeId": 501,
                    "name": "Service Type",
                    "value": "Emergency"
                },
                {
                    "typeId": 502,
                    "name": "Equipment Brand",
                    "value": "Kohler"
                },
                {
                    "typeId": 503,
                    "name": "Completion Notes",
                    "value": "Customer very satisfied with service"
                }
            ],
            "tagTypeIds": [10, 15, 23, 30],
            "externalData": [
                {
                    "key": "QuickBooks_Job_ID",
                    "value": "JOB-QB-001234"
                },
                {
                    "key": "Completion_Survey_Score",
                    "value": "5"
                }
            ],
            "total": 285.50,
            "balance": 0.00,
            "tax": 22.85,
            "subtotal": 262.65,
            "receivedOn": "2025-09-10T08:30:00Z",
            "dispatchedOn": "2025-09-12T09:15:00Z",
            "startedOn": "2025-09-12T10:00:00Z",
            "arrivedOn": "2025-09-12T10:00:00Z",
            "technician": {
                "id": 789,
                "name": "Mike Johnson"
            },
            "customer": {
                "id": 1234,
                "name": "John Smith Plumbing Solutions"
            },
            "location": {
                "id": 9876,
                "name": "Main Property",
                "address": {
                    "street": "123 Main Street",
                    "city": "Phoenix",
                    "state": "AZ",
                    "zip": "85001"
                }
            },
            "businessUnit": {
                "id": 101,
                "name": "Plumbing - Service"
            },
            "jobType": {
                "id": 201,
                "name": "Repair Service"
            },
            "appointments": [
                {
                    "id": 1111,
                    "jobId": 5678,
                    "appointmentNumber": "APPT-001",
                    "start": "2025-09-12T09:00:00Z",
                    "end": "2025-09-12T17:00:00Z",
                    "arrivalWindowStart": "2025-09-12T09:00:00Z",
                    "arrivalWindowEnd": "2025-09-12T12:00:00Z",
                    "status": "Completed",
                    "specialInstructions": "Customer prefers morning appointments"
                }
            ]
        },
        {
            "id": 5679,
            "jobNumber": "JOB-2025-001235",
            "customerId": 1235,
            "locationId": 9877,
            "projectId": null,
            "businessUnitId": 102,
            "jobTypeId": 202,
            "campaignId": null,
            "summary": "New customer - bathroom pipe inspection",
            "description": "Initial service call for new commercial customer. Full bathroom plumbing inspection requested.",
            "status": "Scheduled",
            "priority": "Normal",
            "noChargeBill": false,
            "createdOn": "2025-09-13T14:20:30Z",
            "modifiedOn": "2025-09-13T14:20:30Z",
            "completedOn": null,
            "invoiceId": null,
            "estimateId": 3457,
            "leadCallId": 8902,
            "soldBy": 789,
            "customFields": [
                {
                    "typeId": 501,
                    "name": "Service Type",
                    "value": "Standard"
                }
            ],
            "tagTypeIds": [5, 12],
            "externalData": [],
            "total": 0.00,
            "balance": 0.00,
            "tax": 0.00,
            "subtotal": 0.00,
            "receivedOn": "2025-09-13T14:20:30Z",
            "dispatchedOn": null,
            "startedOn": null,
            "arrivedOn": null,
            "technician": null,
            "customer": {
                "id": 1235,
                "name": "New Customer LLC"
            },
            "location": {
                "id": 9877,
                "name": "Primary Location",
                "address": {
                    "street": "456 Business Blvd",
                    "city": "Scottsdale",
                    "state": "AZ",
                    "zip": "85250"
                }
            },
            "businessUnit": {
                "id": 102,
                "name": "Plumbing - Commercial"
            },
            "jobType": {
                "id": 202,
                "name": "Inspection"
            },
            "appointments": [
                {
                    "id": 1112,
                    "jobId": 5679,
                    "appointmentNumber": "APPT-002",
                    "start": "2025-09-15T08:00:00Z",
                    "end": "2025-09-15T12:00:00Z",
                    "arrivalWindowStart": "2025-09-15T08:00:00Z",
                    "arrivalWindowEnd": "2025-09-15T10:00:00Z",
                    "status": "Scheduled",
                    "specialInstructions": "Contact property manager before arrival"
                }
            ]
        }
    ],
    "hasMore": false,
    "totalCount": 2
}
```
</details>

---

#### 3. Query: `completedOnOrAfter=2025-09-12T00:00:00Z`

**Purpose:** Get jobs completed after a specific date

<details>
    <summary>Click to expand JSON example</summary>

```json
{
    "data": [
        {
            "id": 5678,
            "jobNumber": "JOB-2025-001234",
            "customerId": 1234,
            "locationId": 9876,
            "projectId": 4567,
            "businessUnitId": 101,
            "jobTypeId": 201,
            "campaignId": 301,
            "summary": "Kitchen sink repair and faucet replacement",
            "description": "Customer reported leaking kitchen sink. Technician assessed, repaired drain and replaced faucet. Job completed successfully.",
            "status": "Completed",
            "priority": "Normal",
            "noChargeBill": false,
            "createdOn": "2025-09-10T08:30:00Z",
            "modifiedOn": "2025-09-12T16:45:00Z",
            "completedOn": "2025-09-12T16:30:00Z",
            "invoiceId": 7890,
            "estimateId": 3456,
            "leadCallId": 8901,
            "soldBy": 456,
            "customFields": [
                {
                    "typeId": 501,
                    "name": "Service Type",
                    "value": "Emergency"
                },
                {
                    "typeId": 502,
                    "name": "Equipment Brand",
                    "value": "Kohler"
                }
            ],
            "tagTypeIds": [10, 15, 23],
            "externalData": [
                {
                    "key": "QuickBooks_Job_ID",
                    "value": "JOB-QB-001234"
                }
            ],
            "total": 285.50,
            "balance": 0.00,
            "tax": 22.85,
            "subtotal": 262.65,
            "receivedOn": "2025-09-10T08:30:00Z",
            "dispatchedOn": "2025-09-12T09:15:00Z",
            "startedOn": "2025-09-12T10:00:00Z",
            "arrivedOn": "2025-09-12T10:00:00Z",
            "technician": {
                "id": 789,
                "name": "Mike Johnson"
            },
            "customer": {
                "id": 1234,
                "name": "John Smith Plumbing Solutions"
            },
            "location": {
                "id": 9876,
                "name": "Main Property",
                "address": {
                    "street": "123 Main Street",
                    "city": "Phoenix",
                    "state": "AZ",
                    "zip": "85001"
                }
            },
            "businessUnit": {
                "id": 101,
                "name": "Plumbing - Service"
            },
            "jobType": {
                "id": 201,
                "name": "Repair Service"
            },
            "appointments": [
                {
                    "id": 1111,
                    "jobId": 5678,
                    "appointmentNumber": "APPT-001",
                    "start": "2025-09-12T09:00:00Z",
                    "end": "2025-09-12T17:00:00Z",
                    "arrivalWindowStart": "2025-09-12T09:00:00Z",
                    "arrivalWindowEnd": "2025-09-12T12:00:00Z",
                    "status": "Completed",
                    "specialInstructions": "Customer prefers morning appointments"
                }
            ]
        }
    ],
    "hasMore": false,
    "totalCount": 1
}
```
</details>

**Mandatory Fields for Completed Jobs:**  
Same as base structure, but `completedOn` must have a valid timestamp and `status` typically shows "Completed".

---

### Field Importance Guide for Jobs API

#### Critical Fields (Required for QuickBooks Integration)
- `id` – Primary key for job mapping between systems
- `jobNumber` – Unique job reference number
- `customerId` – Links to customer record (foreign key)
- `locationId` – Links to service location
- `summary` – Job description for QuickBooks job/project
- `status` – Job status (Open, In Progress, Completed, Cancelled)
- `total` – Total job amount for revenue tracking
- `completedOn` – Essential for revenue recognition timing
- `invoiceId` – Links to invoice when available
- `modifiedOn` – Critical for incremental sync

#### Important Fields (Business Logic)
- `businessUnitId` – Department/division for job costing
- `jobTypeId` – Service classification
- `balance` – Outstanding amount on job
- `tax` – Tax amount for proper accounting
- `subtotal` – Pre-tax amount
- `technician` – Service provider information
- `createdOn` – Job creation tracking
- `dispatchedOn` – When technician was assigned
- `startedOn` – When work began
- `arrivedOn` – Actual arrival time

#### Useful Fields (Enhancement)
- `projectId` – Groups related jobs together
- `priority` – Job urgency level
- `customFields` – Business-specific job data
- `externalData` – Store QuickBooks job/project ID
- `tagTypeIds` – Job categorization
- `appointments` – Scheduling information
- `estimateId` – Links to original estimate
- `soldBy` – Sales person assignment

#### Optional Fields (Context)
- `description` – Detailed job notes
- `campaignId` – Marketing source tracking
- `leadCallId` – Original lead information
- `noChargeBill` – Warranty/no-charge indicator
- `receivedOn` – When job request received
- `customer`/`location`/`businessUnit` – Nested reference objects

#### Related Objects
- `appointments[]` – Array of scheduled appointments
- `customer` – Customer reference object
- `location` – Service location reference
- `businessUnit` – Department reference
- `jobType` – Job classification reference
- `technician` – Assigned technician reference

#### Appointment Sub-Object Fields
- `id` – Appointment unique ID
- `start`/`end` – Scheduled time window
- `status` – Appointment status
- `arrivalWindowStart`/`End` – Customer expectation window
- `specialInstructions` – Job-specific notes

#### Pagination Fields
- `hasMore` – Indicates additional pages
- `totalCount` – Total jobs matching query
- `pageSize`/`pageNumber` – Pagination control

---