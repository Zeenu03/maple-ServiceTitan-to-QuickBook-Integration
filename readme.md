# ServiceTitan API Guide

## Project Overview
This document compiles all necessary API endpoints and information needed for building a ServiceTitan to QuickBooks integration application for plumbing enterprises.


## 1. ServiceTitan Customer API Endpoints

### Get Customers Endpoint

```
GET /crm/v2/tenant/{tenantId}/customers
```

#### Key Query Parameters for New Customers

| Parameter           | Description                                               |
|---------------------|----------------------------------------------------------|
| modifiedOnOrAfter   | Get customers created/modified after a specific date     |
| modifiedBefore      | Get customers created/modified before a specific date    |
| createdOnOrAfter    | Get customers created after a specific date              |
| createdBefore       | Get customers created before a specific date             |


## 2. ServiceTitan Jobs API Endpoints

### Get Jobs Endpoint

```
GET /job-planning/v2/tenant/{tenantId}/jobs
```

### Get Appointments Endpoint

```
GET /job-planning/v2/tenant/{tenantId}/appointments
```

#### Key Query Parameters for Jobs

| Parameter           | Description                                               |
|---------------------|----------------------------------------------------------|
| modifiedOnOrAfter   | Get jobs created/modified after a specific date          |
| modifiedBefore      | Get jobs created/modified before a specific date         |
| createdOnOrAfter    | Get jobs created after a specific date                   |
| createdBefore       | Get jobs created before a specific date                  |
| completedOnOrAfter  | Get jobs completed after a specific date                 |
| completedBefore     | Get jobs completed before a specific date                |
| projectId           | Get all jobs associated with a specific project          |

#### Key Query Parameters for Appointments

| Parameter           | Description                                               |
|---------------------|----------------------------------------------------------|
| modifiedOnOrAfter   | Get appointments modified after a specific date          |
| modifiedBefore      | Get appointments modified before a specific date         |
| scheduledOnOrAfter  | Get appointments scheduled after a specific date         |
| scheduledBefore     | Get appointments scheduled before a specific date        |
| jobId               | Get all appointments for a specific job                  |
| projectId           | Get all appointments for jobs in a specific project      |

#### Additional Job-Related Endpoints

| Endpoint                                                                 | Description                                    |
|--------------------------------------------------------------------------|------------------------------------------------|
| `GET /job-planning/v2/tenant/{tenantId}/jobs/{jobId}/history`            | Get job history details                        |
| `GET /job-planning/v2/tenant/{tenantId}/jobs/{jobId}/appointments`       | Get all appointments for a specific job        |
| `GET /job-planning/v2/tenant/{tenantId}/appointment-assignments`         | Get technician assignments for appointments    |
| `GET /job-planning/v2/tenant/{tenantId}/job-splits?jobId={jobId}`        | Get job split information                      |


## 3. ServiceTitan Invoice API Endpoints

### Get Invoices Endpoint

```
GET /accounting/v2/tenant/{tenantId}/invoices
```

#### Key Query Parameters for Invoices

| Parameter           | Description                                               |
|---------------------|----------------------------------------------------------|
| modifiedOnOrAfter   | Get invoices created/modified after a specific date      |
| modifiedBefore      | Get invoices created/modified before a specific date     |
| createdOnOrAfter    | Get invoices created after a specific date               |
| createdBefore       | Get invoices created before a specific date              |
| jobId               | Get invoices for a specific job                          |
| projectId           | Get all invoices for a specific project                  |
| customerId          | Get all invoices for a specific customer                 |
| pageSize            | Number of records per page (default: 50, max: 3000)      |
| pageNumber          | Page number for pagination                               |
| status              | Filter by invoice status (e.g., Posted, Draft)           |

#### Invoice Types Available

- **Job Invoices**: Most common, generated when job is booked
- **Membership Invoices**: Sales, billing, service, cancellation, refund
- **Point of Sale Invoices**: Sales with no job association
- **Project Invoices**: Multi-job billing at same location
- **Financing Invoices**: Split payment responsibility
- **Refund Invoices**: Revenue write-offs
- **Balance Write-off Invoices**: Clear outstanding balances

#### Additional Invoice-Related Endpoints

| Endpoint                                                                 | Description                           |
|--------------------------------------------------------------------------|---------------------------------------|
| `GET /accounting/v2/tenant/{tenantId}/invoices/{invoiceId}`              | Get specific invoice details          |
| `PUT /accounting/v2/tenant/{tenantId}/invoices/{invoiceId}`              | Update invoice information            |
| `POST /accounting/v2/tenant/{tenantId}/invoices`                         | Create new invoice                    |
| `GET /accounting/v2/tenant/{tenantId}/payments`                          | Get payment information               |
| `GET /accounting/v2/tenant/{tenantId}/payment-terms`                     | Get payment terms                     |
| `GET /accounting/v2/tenant/{tenantId}/tax-zones`                         | Get tax zone information              |


## 4. ServiceTitan Payment API Endpoints

### Get Payments Endpoint

```
GET /accounting/v2/tenant/{tenantId}/payments
```

#### Key Query Parameters for Payments

| Parameter           | Description                                               |
|---------------------|----------------------------------------------------------|
| modifiedOnOrAfter   | Get payments created/modified after a specific date      |
| modifiedBefore      | Get payments created/modified before a specific date     |
| createdOnOrAfter    | Get payments created after a specific date               |
| createdBefore       | Get payments created before a specific date              |
| paidOnOrAfter       | Get payments paid after a specific date                  |
| paidBefore          | Get payments paid before a specific date                 |
| customerId          | Get all payments for a specific customer                 |
| invoiceId           | Get payments applied to a specific invoice               |
| pageSize            | Number of records per page (default: 50)                 |
| pageNumber          | Page number for pagination                               |

#### Payment Types Available

- **Due on Receipt Payments**: Collected at time work is performed
- **Membership Billing Payments**: Collected when membership billing invoice generated
- **Term Payments**: Collected after work completion with payment terms
- **Deposits**: Collected before work is done
- **Unapplied Payments**: Collected but not yet applied to invoice
- **Multi-invoice Payments**: Applied across multiple invoices
- **Refund Payments**: Money returned to customer for adjustments/overpayments

#### Additional Payment-Related Endpoints

| Endpoint                                                                 | Description                           |
|--------------------------------------------------------------------------|---------------------------------------|
| `GET /accounting/v2/tenant/{tenantId}/payments/{paymentId}`              | Get specific payment details          |
| `POST /accounting/v2/tenant/{tenantId}/payments`                         | Create new payment                    |
| `PUT /accounting/v2/tenant/{tenantId}/payments/{paymentId}`              | Update payment information            |
| `GET /accounting/v2/tenant/{tenantId}/payment-terms`                     | Get payment terms details             |

---

# QuickBooks API Integration Guide

## Project Overview
This section outlines the necessary API endpoints for the ServiceTitan to QuickBooks integration project.

## 1. QuickBooks Customer API Endpoints

### Get Customers Endpoint

```
GET /v3/company/{realmId}/customers
```

#### Key Query Parameters for Customers

| Parameter      | Description                                         |
|----------------|-----------------------------------------------------|
| fetchAll       | Retrieve all customers (no pagination)              |
| maxResults     | Maximum number of results per page (default: 20, max: 1000) |
| startPosition  | Starting position for pagination                    |
| where          | Filter criteria (e.g., Active = true)               |
| orderBy        | Sort results by field (e.g., Name ASC)              |

### Create Customer Endpoint

```
POST /v3/company/{realmId}/customers
```

### Update Customer Endpoint

```
POST /v3/company/{realmId}/customers
```

### Get Single Customer Endpoint

```
GET /v3/company/{realmId}/customers/{customerId}
```

## 2. QuickBooks Invoice API Endpoints

### Get Invoices Endpoint

```
GET /v3/company/{realmId}/invoices
```

#### Key Query Parameters for Invoices

| Parameter      | Description                                         |
|----------------|-----------------------------------------------------|
| fetchAll       | Retrieve all invoices (no pagination)               |
| maxResults     | Maximum number of results per page (default: 20, max: 1000) |
| startPosition  | Starting position for pagination                    |
| where          | Filter criteria (e.g., CustomerRef = '123')         |
| orderBy        | Sort results by field (e.g., TxnDate ASC)           |

### Create Invoice Endpoint

```
POST /v3/company/{realmId}/invoices
```

### Update Invoice Endpoint

```
POST /v3/company/{realmId}/invoices
```

### Get Single Invoice Endpoint

```
GET /v3/company/{realmId}/invoices/{invoiceId}
```

### Delete Invoice Endpoint

```
POST /v3/company/{realmId}/invoices?operation=delete
```

### Send Invoice Endpoint

```
POST /v3/company/{realmId}/invoices/{invoiceId}/send
```

## 3. QuickBooks Payment API Endpoints

### Get Payments Endpoint

```
GET /v3/company/{realmId}/payments
```

#### Key Query Parameters for Payments

| Parameter      | Description                                         |
|----------------|-----------------------------------------------------|
| fetchAll       | Retrieve all payments (no pagination)               |
| maxResults     | Maximum number of results per page (default: 20, max: 1000) |
| startPosition  | Starting position for pagination                    |
| where          | Filter criteria (e.g., CustomerRef = '123')         |
| orderBy        | Sort results by field (e.g., TxnDate ASC)           |

### Create Payment Endpoint

```
POST /v3/company/{realmId}/payments
```

### Update Payment Endpoint

```
POST /v3/company/{realmId}/payments
```

### Get Single Payment Endpoint

```
GET /v3/company/{realmId}/payments/{paymentId}
```

### Delete Payment Endpoint

```
POST /v3/company/{realmId}/payments?operation=delete
```