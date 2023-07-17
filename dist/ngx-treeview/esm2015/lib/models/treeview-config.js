import { Injectable } from '@angular/core';
export class TreeviewConfig {
    constructor() {
        this.hasAllCheckBox = true;
        this.hasFilter = false;
        this.hasCollapseExpand = false;
        this.decoupleChildFromParent = false;
        this.filterHidden = false;
        this.maxHeight = 500;
    }
    get hasDivider() {
        return this.hasFilter || this.hasAllCheckBox || this.hasCollapseExpand;
    }
    static create(fields) {
        const config = new TreeviewConfig();
        Object.assign(config, fields);
        return config;
    }
}
TreeviewConfig.decorators = [
    { type: Injectable }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZXZpZXctY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LXRyZWV2aWV3L3NyYy9saWIvbW9kZWxzL3RyZWV2aWV3LWNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRzNDLE1BQU0sT0FBTyxjQUFjO0lBRDNCO1FBRUUsbUJBQWMsR0FBRyxJQUFJLENBQUM7UUFDdEIsY0FBUyxHQUFHLEtBQUssQ0FBQztRQUNsQixzQkFBaUIsR0FBRyxLQUFLLENBQUM7UUFDMUIsNEJBQXVCLEdBQUcsS0FBSyxDQUFDO1FBQ2hDLGlCQUFZLEdBQUcsS0FBSyxDQUFDO1FBQ3JCLGNBQVMsR0FBRyxHQUFHLENBQUM7SUFrQmxCLENBQUM7SUFoQkMsSUFBSSxVQUFVO1FBQ1osT0FBTyxJQUFJLENBQUMsU0FBUyxJQUFJLElBQUksQ0FBQyxjQUFjLElBQUksSUFBSSxDQUFDLGlCQUFpQixDQUFDO0lBQ3pFLENBQUM7SUFFTSxNQUFNLENBQUMsTUFBTSxDQUFDLE1BT3BCO1FBQ0MsTUFBTSxNQUFNLEdBQUcsSUFBSSxjQUFjLEVBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUMsQ0FBQztRQUM5QixPQUFPLE1BQU0sQ0FBQztJQUNoQixDQUFDOzs7WUF4QkYsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFRyZWV2aWV3Q29uZmlnIHtcbiAgaGFzQWxsQ2hlY2tCb3ggPSB0cnVlO1xuICBoYXNGaWx0ZXIgPSBmYWxzZTtcbiAgaGFzQ29sbGFwc2VFeHBhbmQgPSBmYWxzZTtcbiAgZGVjb3VwbGVDaGlsZEZyb21QYXJlbnQgPSBmYWxzZTtcbiAgZmlsdGVySGlkZGVuID0gZmFsc2U7XG4gIG1heEhlaWdodCA9IDUwMDtcblxuICBnZXQgaGFzRGl2aWRlcigpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5oYXNGaWx0ZXIgfHwgdGhpcy5oYXNBbGxDaGVja0JveCB8fCB0aGlzLmhhc0NvbGxhcHNlRXhwYW5kO1xuICB9XG5cbiAgcHVibGljIHN0YXRpYyBjcmVhdGUoZmllbGRzPzoge1xuICAgIGhhc0FsbENoZWNrQm94PzogYm9vbGVhbixcbiAgICBoYXNGaWx0ZXI/OiBib29sZWFuLFxuICAgIGhhc0NvbGxhcHNlRXhwYW5kPzogYm9vbGVhbixcbiAgICBkZWNvdXBsZUNoaWxkRnJvbVBhcmVudD86IGJvb2xlYW5cbiAgICBmaWx0ZXJIaWRkZW4/OiBib29sZWFuXG4gICAgbWF4SGVpZ2h0PzogbnVtYmVyLFxuICB9KTogVHJlZXZpZXdDb25maWcge1xuICAgIGNvbnN0IGNvbmZpZyA9IG5ldyBUcmVldmlld0NvbmZpZygpO1xuICAgIE9iamVjdC5hc3NpZ24oY29uZmlnLCBmaWVsZHMpO1xuICAgIHJldHVybiBjb25maWc7XG4gIH1cbn1cbiJdfQ==