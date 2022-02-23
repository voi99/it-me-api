'use strict';

/**
 * salary service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::salary.salary');
