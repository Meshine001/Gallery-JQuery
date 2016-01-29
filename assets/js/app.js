/**
 * Created by xjtu on 16/1/29.
 */
$(document).ready(function(){
    var wookmark = new Wookmark('#container',[{
        align: 'center',
        autoResize: true,
        comparator: null,
        container: $('body'),
        direction: undefined,
        ignoreInactiveItems: true,
        itemWidth: 200,
        fillEmptySpace: true,
        flexibleWidth: true,
        offset: 2,
        onLayoutChanged: undefined,
        outerOffset: 0,
        possibleFilters: [],
        resizeDelay: 50,
        verticalOffset: undefined
    }]);

});