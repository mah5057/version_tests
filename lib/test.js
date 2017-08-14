/**
 * @namespace TEST
 */

/**
 * Class representing a test
 * @memberof TEST
 */
class Test {
    constructor(a, b) {
       /**
        * @property {string} a -- aaaa
        * @readonly
        *
        */
        this.a = a
        /**
         * @property {string} b -- b
         */
        this.b = b
    }

   /**
    * @typedef typedeftest
    * @type {object}
    * @property {object} val -- The saved object
    * @property {boolean} created -- A flag indicating whether the object was created or replaced
    */

   /**
    * @method func1
    * @description Test Function description
    * @throws {exception} description of exception
    * @returns {undefined}
    */
    func1() {
        return True
    }

}
