
import type { ProjectCaseStudy } from '../types/projectDetails'

export const projectCaseStudies: ProjectCaseStudy[] = [
  {
    projectId: 'pcms',

    overview:
    'Personal Cashflow Management System (PCMS) is a personal finance management application designed to help users organize wallets, record income and expenses, and monitor their financial activities. The project uses a Spring Boot backend, a React Native mobile application, and a MySQL database.',

    problem:
    'Managing personal cashflow requires keeping track of income, expenses, and balances across financial records and wallets. PCMS aims to provide a centralized application for organizing these records and making personal financial activities easier to monitor.',

    objectives: [
    {
        title: 'Manage Financial Wallets',
        description:
        'Provide wallet management capabilities for organizing personal financial accounts and their balances.',
    },
    {
        title: 'Record Income and Expenses',
        description:
        'Allow users to organize financial transactions into income and expense records.',
    },
    {
        title: 'Organize Daily Financial Activities',
        description:
        'Provide a structured way to maintain daily financial records and review cashflow activity.',
    },
    {
        title: 'Support Data Synchronization',
        description:
        'Establish a synchronization approach between local application data and the backend, including handling pending, successful, failed, and conflicting updates.',
    },
    {
        title: 'Provide Financial Insights',
        description:
        'Establish a foundation for reviewing financial activity and analyzing personal cashflow.',
    },
    ],

    keyFeatures: [
    {
        title: 'Wallet Management',
        description:
        'Organize financial wallets and manage wallet information and balances.',
    },
    {
        title: 'Income Management',
        description:
        'Maintain income transactions to keep track of money received.',
    },
    {
        title: 'Expense Management',
        description:
        'Maintain expense transactions to organize and review spending activities.',
    },
    {
        title: 'Daily Financial Records',
        description:
        'Organize financial activities into daily records for structured cashflow management.',
    },
    {
        title: 'Local Data Storage',
        description:
        'Use local storage to support the mobile application’s data management and offline-first direction.',
    },
    {
        title: 'Data Synchronization',
        description:
        'Use synchronization states to represent pending, synchronized, failed, and conflicting data updates.',
    },
    {
        title: 'Financial Analytics',
        description:
        'Provide a foundation for reviewing income, expenses, and financial activity through analytical views.',
    },
    ],

    architecture: {
        summary:
            'PCMS follows a client-server architecture with a React Native mobile application, a Spring Boot REST API, and a MySQL database. Local SQLite storage supports the mobile application, while a self-hosted n8n instance is planned for workflow automation through API and webhook integrations.',

        layers: [
            {
            name: 'Mobile Application',
            responsibility:
                'Provides the user interface, mobile application functionality, and local data management.',
            technologies: [
                'React Native',
                'Expo',
                'TypeScript',
                'SQLite',
            ],
            },
            {
            name: 'API Layer',
            responsibility:
                'Exposes versioned REST endpoints and handles incoming client requests.',
            technologies: [
                'Spring Boot',
                'Spring Web',
            ],
            },
            {
            name: 'Business Logic Layer',
            responsibility:
                'Handles application rules, validation, and financial business operations.',
            technologies: [
                'Java',
                'Spring Boot',
                'Bean Validation',
            ],
            },
            {
            name: 'Data Access Layer',
            responsibility:
                'Manages communication between backend business logic and persistent database records.',
            technologies: [
                'Spring Data JPA',
                'Hibernate',
            ],
            },
            {
            name: 'Database Layer',
            responsibility:
                'Stores persistent application data, including financial records and wallet information.',
            technologies: [
                'MySQL',
                'SQL',
            ],
            },
            {
            name: 'Automation Layer',
            responsibility:
                'Provides a foundation for external workflow automation and integrations.',
            technologies: [
                'n8n',
                'REST API',
                'Webhooks',
            ],
            },
        ],
        },

    technicalDecisions: [
    {
        decision: 'Use BigDecimal for Financial Calculations',
        reason:
        'Java BigDecimal provides precise decimal arithmetic for financial values and avoids the rounding problems associated with binary floating-point types such as float and double.',
    },
    {
        decision: 'Use SQL DECIMAL for Monetary Storage',
        reason:
        'The SQL DECIMAL data type provides fixed-point decimal storage, making it appropriate for monetary values that require predictable precision.',
    },
    {
        decision: 'Separate API DTOs from JPA Entities',
        reason:
        'DTOs provide explicit API request and response structures, reducing coupling between the external API contract and the internal database model.',
    },
    {
        decision: 'Use Controller-Service-Repository Architecture',
        reason:
        'Separating request handling, business logic, and data access improves maintainability, testability, and responsibility boundaries.',
    },
    {
        decision: 'Use Versioned REST API Endpoints',
        reason:
        'The /api/v1 endpoint structure provides a foundation for evolving API contracts while maintaining compatibility with existing clients.',
    },
    {
        decision: 'Use Explicit Synchronization States',
        reason:
        'PENDING, SYNCED, FAILED, and CONFLICT states provide a structured way to represent synchronization progress and identify records requiring further handling.',
    },
    {
        decision: 'Keep Core Functionality Independent of n8n',
        reason:
        'Treating n8n as an optional automation integration prevents core application functionality from depending on the availability of an external workflow automation service.',
    },
    ],

    technicalChallenges: [
    {
        challenge: 'Maintaining Financial Calculation Accuracy',

        solution:
        'Use Java BigDecimal for monetary calculations and SQL DECIMAL for database storage to avoid floating-point precision problems.',
    },
    {
        challenge: 'Managing Local and Remote Data Synchronization',

        solution:
        'Use local SQLite storage and explicit synchronization states to provide a structured foundation for synchronizing mobile application data with the backend.',
    },
    {
        challenge: 'Handling Synchronization Conflicts',

        solution:
        'Define synchronization states and an update-conflict handling strategy. The current design considers updatedAt timestamps when determining which version should take precedence.',
    },
    {
        challenge: 'Maintaining a Clean Backend Architecture',

        solution:
        'Separate controllers, services, and repositories, and use DTOs to keep API contracts independent of persistence entities.',
    },
    {
        challenge: 'Reducing Dependencies on External Automation',

        solution:
        'Keep core application functionality independent of n8n so that the application can continue operating when the automation service is unavailable.',
    },
    ],

    outcomes: [
    {
        title: 'Backend Foundation',
        description:
        'Established a Spring Boot backend foundation with wallet management functionality and successful wallet CRUD testing.',
    },
    {
        title: 'Structured Financial Data Model',
        description:
        'Defined a data model for users, wallets, daily records, and financial transactions, including income and expense types.',
    },
    {
        title: 'Synchronization Design',
        description:
        'Established synchronization states for representing pending, synchronized, failed, and conflicting records.',
    },
    {
        title: 'Mobile and Backend Architecture',
        description:
        'Established a technical direction combining a React Native mobile application, local SQLite storage, a Spring Boot backend, and MySQL.',
    },
    ],

    learnings: [
    'Handling financial values accurately using Java BigDecimal and SQL DECIMAL.',
    'Designing REST APIs with Spring Boot and versioned endpoints.',
    'Separating API DTOs from JPA persistence entities.',
    'Structuring backend applications using Controller-Service-Repository architecture.',
    'Designing local-first mobile application data storage.',
    'Understanding synchronization states and data conflict-resolution strategies.',
    'Designing application integrations that remain independent of optional external automation services.',
    ],

    gallery: [],
  },
]
