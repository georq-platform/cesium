/*global define*/
define([
        '../Core/Color',
        '../Core/defined',
        '../Core/defineProperties',
        './ConstantProperty'
    ], function(
        Color,
        defined,
        defineProperties,
        ConstantProperty) {
    "use strict";

    /**
     * A utility class for processing CZML color materials.
     * @alias ColorMaterialProperty
     * @constructor
     */
    var ColorMaterialProperty = function() {
        /**
         * A DynamicProperty of type Color which determines the material's color.
         * @type {DynamicProperty}
         * @default undefined
         */
        this.color = new ConstantProperty(Color.WHITE);
    };

    ColorMaterialProperty.prototype.getType = function(time) {
        return 'Color';
    };

    ColorMaterialProperty.prototype.getValue = function(time, result) {
        if (!defined(result)) {
            result = {};
        }
        result.color = defined(this.color) ? this.color.getValue(time, result.color) : undefined;
        return result;
    };

    return ColorMaterialProperty;
});
