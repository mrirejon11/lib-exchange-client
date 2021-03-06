/**
 * Blockchain.com Exchange REST API
 * ## Introduction Welcome to Blockchain.com's Exchange API and developer documentation. \\ These documents detail and give examples of various functionality offered by the API such as receiving real time market data, requesting balance information and performing trades. ## To Get Started Create or log into your existing Blockchain.com Exchange account \\ Select API from the drop down menu \\ Fill out form and click “Create New API Key Now” \\ Once generated you can view your keys under API Settings. \\ Please be aware that the API key can only be used once it was verified via email.  The API key must be set via the \\ `X-API-Token`\\ header.  The base URL to be used for all calls is \\ `https://api.blockchain.com/v3/exchange`  Autogenerated clients for this API can be found [here](https://github.com/blockchain/lib-exchange-client). 
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The PriceEvent model module.
 * @module com.blockchain.exchange.rest/com.blockchain.exchange.rest.model/PriceEvent
 * @version 1.0.0
 */
class PriceEvent {
    /**
     * Constructs a new <code>PriceEvent</code>.
     * @alias module:com.blockchain.exchange.rest/com.blockchain.exchange.rest.model/PriceEvent
     */
    constructor() { 
        
        PriceEvent.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PriceEvent</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.blockchain.exchange.rest/com.blockchain.exchange.rest.model/PriceEvent} obj Optional instance to populate.
     * @return {module:com.blockchain.exchange.rest/com.blockchain.exchange.rest.model/PriceEvent} The populated <code>PriceEvent</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PriceEvent();

            if (data.hasOwnProperty('symbol')) {
                obj['symbol'] = ApiClient.convertToType(data['symbol'], 'String');
            }
            if (data.hasOwnProperty('price_24h')) {
                obj['price_24h'] = ApiClient.convertToType(data['price_24h'], 'Number');
            }
            if (data.hasOwnProperty('volume_24h')) {
                obj['volume_24h'] = ApiClient.convertToType(data['volume_24h'], 'Number');
            }
            if (data.hasOwnProperty('last_trade_price')) {
                obj['last_trade_price'] = ApiClient.convertToType(data['last_trade_price'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * Blockchain symbol identifier
 * @member {String} symbol
 */
PriceEvent.prototype['symbol'] = undefined;

/**
 * @member {Number} price_24h
 */
PriceEvent.prototype['price_24h'] = undefined;

/**
 * @member {Number} volume_24h
 */
PriceEvent.prototype['volume_24h'] = undefined;

/**
 * @member {Number} last_trade_price
 */
PriceEvent.prototype['last_trade_price'] = undefined;






export default PriceEvent;

