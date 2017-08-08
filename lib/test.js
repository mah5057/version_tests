/**
 * @namespace TEST
 */

/**
 * Class representing a test
 * @memberof TEST
 */
class Test {
    constructor(a, b,c) {
       /**
        * A
         * @property {string} a -- aaaa
         * @readonly
         *
        */
        this.a = a
        /**
         * @property {string} b -- b
         */
        this.b = b
        /**
         * @property {string} c -- c
         */
        this.c = c
    }

   /**
    * Test function
    * @method func1
    * @memberof TEST.Test
    * @throws {exception} description of exception
    */
    func1() {
        return True
    }

}
