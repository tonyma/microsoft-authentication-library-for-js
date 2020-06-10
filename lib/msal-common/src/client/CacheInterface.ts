/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */

import { BaseClient } from "./BaseClient";
import { ClientConfiguration } from "../config/ClientConfiguration";

/**
 * Oauth2.0 Authorization Code client
 */
export class CacheInterface extends BaseClient {
    constructor(configuration: ClientConfiguration) {
        super(configuration);
    }
}
