// This file is auto-generated by @hey-api/openapi-ts

import type { CancelablePromise } from './core/CancelablePromise';
import { OpenAPI } from './core/OpenAPI';
import { request as __request } from './core/request';
import type { ListAllAppsResponse, ListAllConnectionsData, ListAllConnectionsResponse, CreateConnectionData, CreateConnectionResponse, GetConnectedAccountData, GetConnectedAccountResponse, DeleteConnectionData, DeleteConnectionResponse, GetIntegrationData, GetIntegrationResponse, UpdateIntegrationData, UpdateIntegrationResponse, ListAllIntegrationsData, ListAllIntegrationsResponse, CreateIntegrationData, CreateIntegrationResponse, GetActionData, GetActionResponse, GetListActionsData, GetListActionsResponse, ExecuteActionData, ExecuteActionResponse, ListTriggersData, ListTriggersResponse, ListActiveTriggersData, ListActiveTriggersResponse } from './types.gen';

/**
 * List All Apps
 * Retrieves a list of all available apps in the Composio platform.
 *
 * This endpoint allows clients to explore and discover the supported apps. It returns an array of app objects, each containing essential details such as the app's key, name, description, logo, categories, and unique identifier.
 *
 * Use this endpoint to build a catalog of available apps and provide your users with an overview of the apps they can integrate with.
 * @returns unknown OK
 * @throws ApiError
 */
export const listAllApps = (): CancelablePromise<ListAllAppsResponse> => { return __request(OpenAPI, {
    method: 'GET',
    url: '/v1/apps'
}); };

/**
 * List All Connected Accounts
 * Retrieves a list of all connected accounts in the Composio platform.
 *
 * It supports pagination and filtering based on various parameters such as app ID, integration ID, and connected  ID. The response includes an array of connection objects, each containing details like the connector ID, connection parameters, status, creation/update timestamps, and associated app information.
 *
 * Use this endpoint to manage and monitor all active connections.
 * @param data The data for the request.
 * @param data.page Page number to fetch
 * @param data.pageSize Page size to assume
 * @param data.integrationId Filter by using specific Integration
 * @returns unknown OK
 * @throws ApiError
 */
export const listAllConnections = (data: ListAllConnectionsData = {}): CancelablePromise<ListAllConnectionsResponse> => { return __request(OpenAPI, {
    method: 'GET',
    url: '/v1/connectedAccounts',
    query: {
        page: data.page,
        pageSize: data.pageSize,
        integrationId: data.integrationId
    }
}); };

/**
 * Connect an Account
 * Connect an account
 *
 * This endpoint allows you to connect an external app account with Composio. It requires the integration ID in the request body and returns the connection status, connection ID, and a redirect URL (if applicable) for completing the connection flow.
 *
 * Use this endpoint to initiate the process of connecting an external app for your end user.
 * @param data The data for the request.
 * @param data.requestBody
 * @returns unknown OK
 * @throws ApiError
 */
export const createConnection = (data: CreateConnectionData = {}): CancelablePromise<CreateConnectionResponse> => { return __request(OpenAPI, {
    method: 'POST',
    url: '/v1/connectedAccounts',
    body: data.requestBody,
    mediaType: 'application/json',
    errors: {
        404: `{
    "message": "Connector not found"
}`
    }
}); };

/**
 * Get a Connected Account
 * Retrieves details of a specific account connected to the Composio platform by providing its connected account ID.
 * The response includes the integration ID, connection parameters (such as scope, base URL, client ID, token type, access token, etc.), connection ID, status, and creation/update timestamps.
 * @param data The data for the request.
 * @param data.connectedAccountId The unique identifier of the connection.
 * @returns unknown OK
 * @throws ApiError
 */
export const getConnectedAccount = (data: GetConnectedAccountData): CancelablePromise<GetConnectedAccountResponse> => { return __request(OpenAPI, {
    method: 'GET',
    url: '/v1/connectedAccounts/{connectedAccountId}',
    path: {
        connectedAccountId: data.connectedAccountId
    },
    errors: {
        404: `{
    "message": "Connection not found or already deleted"
}`
    }
}); };

/**
 * Delete a Connected Account
 * Remove a specific account from the Composio platform by providing its connection ID. Upon successful deletion, the response includes a status indicating the success of the operation.
 * Use this endpoint to clean up unwanted connections for your end user and manage the connection lifecycle.
 * @param data The data for the request.
 * @param data.connectedAccountId The unique identifier of the connection.
 * @returns unknown {
 * "message": "Connection not found or already deleted"
 * }
 * @throws ApiError
 */
export const deleteConnection = (data: DeleteConnectionData): CancelablePromise<DeleteConnectionResponse> => { return __request(OpenAPI, {
    method: 'DELETE',
    url: '/v1/connectedAccounts/{connectedAccountId}',
    path: {
        connectedAccountId: data.connectedAccountId
    },
    errors: {
        404: 'Not Found'
    }
}); };

/**
 * Get an Integration
 * Retrieves details of a specific integration in the Composio platform by providing its unique identifier. The response includes the connector's name, authentication scheme, authentication configuration, creation and update timestamps, enabled status, associated app information, expected input fields, and logo.
 *
 * Use this endpoint to obtain detailed information about a integration and its configuration. It can be shown to end user for selection.
 *
 * You will also get parameters that are required to be captured from end user to connect an account using this connector.
 * ex. API Key or subdomain URL.
 *
 * If the end-user selects this flow, collect the parameters and connect an account using it.
 * @param data The data for the request.
 * @param data.integrationId The unique identifier of the integration.
 * @returns unknown OK
 * @throws ApiError
 */
export const getIntegration = (data: GetIntegrationData): CancelablePromise<GetIntegrationResponse> => { return __request(OpenAPI, {
    method: 'GET',
    url: '/v1/integrations/{integrationId}',
    path: {
        integrationId: data.integrationId
    },
    errors: {
        404: 'Not Found'
    }
}); };

/**
 * Update an Integration
 * Updates the settings of a specific integration in the Composio platform.
 *
 * This endpoint allows you to modify the settings of a integration, such as enabling or disabling it, by providing its unique identifier. The request body should include the updated settings, and the response indicates the success of the update operation.
 *
 * Use this endpoint to manage the configuration and behavior of integrations in the Composio platform.
 * @param data The data for the request.
 * @param data.integrationId The unique identifier of the integration.
 * @param data.requestBody
 * @returns unknown OK
 * @throws ApiError
 */
export const updateIntegration = (data: UpdateIntegrationData): CancelablePromise<UpdateIntegrationResponse> => { return __request(OpenAPI, {
    method: 'PATCH',
    url: '/v1/integrations/{integrationId}',
    path: {
        integrationId: data.integrationId
    },
    body: data.requestBody,
    mediaType: 'application/json',
    errors: {
        404: 'Not Found'
    }
}); };

/**
 * List All Integrations
 * Retrieves a list of all integrations in the Composio platform. It supports pagination to handle large numbers of connectors. The response includes an array of connector objects, each containing information such as the connector's ID, name, authentication scheme, creation/update timestamps, enabled status, associated app information, and logo.
 *
 * This are the integration you can showcase to end user, and let them select which integration they want to connect an account with.
 * @param data The data for the request.
 * @param data.page Page number to fetch
 * @param data.pageSize Page Size to assume
 * @returns unknown OK
 * @throws ApiError
 */
export const listAllIntegrations = (data: ListAllIntegrationsData = {}): CancelablePromise<ListAllIntegrationsResponse> => { return __request(OpenAPI, {
    method: 'GET',
    url: '/v1/integrations',
    query: {
        page: data.page,
        pageSize: data.pageSize
    }
}); };

/**
 * Create a new integration
 * This endpoint allows you to add a new integration by providing the necessary details such as the integration name, authentication scheme, associated app ID, and authentication configuration. Upon successful creation, the response includes the newly created connector object.
 * @param data The data for the request.
 * @param data.requestBody
 * @returns unknown OK
 * @throws ApiError
 */
export const createIntegration = (data: CreateIntegrationData = {}): CancelablePromise<CreateIntegrationResponse> => { return __request(OpenAPI, {
    method: 'POST',
    url: '/v1/integrations',
    body: data.requestBody,
    mediaType: 'application/json',
    errors: {
        400: 'Bad Request'
    }
}); };

/**
 * Get a Specific Action
 * Retrieves details of a specific action in the Composio platform.
 *
 * This endpoint allows you to fetch comprehensive information about a particular action by providing its unique identifier.
 * The response includes the action's name, display name, description, input parameters, expected response, associated app information, and enabled status.
 * Use this endpoint to obtain detailed information about an action, including its configuration and usage requirements.
 * You can then pass this to function calling or use LLM to fill in the parameters.
 * @param data The data for the request.
 * @param data.actionName The unique identifier of the action.
 * @returns unknown OK
 * @throws ApiError
 */
export const getAction = (data: GetActionData): CancelablePromise<GetActionResponse> => { return __request(OpenAPI, {
    method: 'GET',
    url: '/v1/actions/{actionName}',
    path: {
        actionName: data.actionName
    },
    errors: {
        404: 'Not Found'
    }
}); };

/**
 * Get List of Actions
 * Retrieves a list of all actions in the Composio platform.
 *
 * This endpoint allows you to fetch a list of all the available actions. It supports pagination to handle large numbers of actions. The response includes an array of action objects, each containing information such as the action's name, display name, description, input parameters, expected response, associated app information, and enabled status.
 *
 * Use this endpoint to explore and discover the actions supported by the Composio platform and showcase them to end user.
 * @param data The data for the request.
 * @param data.appNames Name of the app like "github", "linear"
 * @param data.useCase Natural language usecase
 * @param data.showEnabledOnly Show actions enabled for the API Key
 * @param data.limit Limit of apis
 * @param data.requestBody
 * @returns unknown OK
 * @throws ApiError
 */
export const getListActions = (data: GetListActionsData = {}): CancelablePromise<GetListActionsResponse> => { return __request(OpenAPI, {
    method: 'GET',
    url: '/v1/actions',
    query: {
        appNames: data.appNames,
        useCase: data.useCase,
        showEnabledOnly: data.showEnabledOnly,
        limit: data.limit
    },
    body: data.requestBody
}); };

/**
 * Execute action
 * Executes a specific action in the Composio platform.
 *
 * This endpoint allows you to trigger the execution of an action by providing its name and the necessary input parameters. The request includes the connected account ID to identify the app connection to use for the action, and the input parameters required by the action. The response provides details about the execution status and the response data returned by the action.
 *
 * Use this endpoint to execute actions available in the Composio platform for your end customer.
 *
 * Executed will indicate whether the action was successfully executed.
 * @param data The data for the request.
 * @param data.actionName The name of the action to execute.
 * @param data.requestBody
 * @returns unknown OK
 * @throws ApiError
 */
export const executeAction = (data: ExecuteActionData): CancelablePromise<ExecuteActionResponse> => { return __request(OpenAPI, {
    method: 'POST',
    url: '/v1/actions/{actionName}/execute',
    path: {
        actionName: data.actionName
    },
    body: data.requestBody,
    mediaType: 'application/json',
    errors: {
        404: 'Not Found'
    }
}); };

/**
 * Get List of Triggers
 * Retrieves a list of all triggers in the Composio platform.
 *
 * This endpoint allows you to fetch a list of all the available triggers. It supports pagination to handle large numbers of triggers. The response includes an array of trigger objects, each containing information such as the trigger's name, description, input parameters, expected response, associated app information, and enabled status.
 *
 * Use this endpoint to explore and discover the triggers supported by the Composio platform and showcase them to end user.
 * @param data The data for the request.
 * @param data.appNames Name of the apps like "github", "linear" seperated by a comma
 * @param data.showEnabledOnly Show triggers enabled for the API Key
 * @param data.connectedAccountIds Filter by Aonnected Account ids
 * @returns unknown OK
 * @throws ApiError
 */
export const listTriggers = (data: ListTriggersData = {}): CancelablePromise<ListTriggersResponse> => { return __request(OpenAPI, {
    method: 'GET',
    url: '/v1/triggers',
    query: {
        appNames: data.appNames,
        showEnabledOnly: data.showEnabledOnly,
        connectedAccountIds: data.connectedAccountIds
    }
}); };

/**
 * Get List of Active Triggers
 * @param data The data for the request.
 * @param data.connectedAccountIds Filter by Connected Account ids
 * @param data.integrationIds Filter by Integration ids
 * @param data.triggerIds Filter by Trigger ids
 * @param data.triggerNames Filter by Trigger names
 * @returns unknown A list of active triggers
 * @throws ApiError
 */
export const listActiveTriggers = (data: ListActiveTriggersData = {}): CancelablePromise<ListActiveTriggersResponse> => { return __request(OpenAPI, {
    method: 'GET',
    url: '/v1/triggers/active_triggers',
    query: {
        connectedAccountIds: data.connectedAccountIds,
        integrationIds: data.integrationIds,
        triggerIds: data.triggerIds,
        triggerNames: data.triggerNames
    }
}); };