function exportMixins() {
    function computerQualityMixin(classToExtend) {
        classToExtend.prototype.getQuality = function() {
            return (this.processorSpeed + this.ram + this.hardDiskSpace) / 3;
        };

        classToExtend.prototype.ifFast = function() {
            return this.processorSpeed > (this.ram / 4);
        };

        classToExtend.prototype.isRoomy = function() {
            return this.hardDiskSpace > Math.floor(this.ram * this.processorSpeed);
        };
    };

    function styleMixin(classToExtend) {
        classToExtend.prototype.isFullSet = function() {
            if (this.manufacturer === this.keyboard.manufacturer && this.manufacturer === this.monitor.manufacturer) {
                return true;
            };

            return false;
        };

        classToExtend.prototype.isClassy = function() {
            if (this.battery.expectedLife >= 3) {
                if (this.color === 'Silver' || this.color === 'Black') {
                    if (this.weight < 3) {
                        return true;
                    };
                };
            };

            return false;
        };
    };

    return {
        styleMixin,
        computerQualityMixin
    };
};
