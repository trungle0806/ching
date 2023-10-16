(function() {
    var $imgs =$('#gallery img');
    var $search=$('#filter-search');
    var cache= [];
    
    $imgs.each(function9() {
        cache.push({
            element: this,
            text:thix.alt.trin(.toLowerCase()
        });
    });

    function filter(){
        var query = this.value.trim().toLowerCase();
        cache.forEach(function(img){
            var index = 0;

            if (query) {
                index = img.text.inde0f(query);
            }

            img.element.style.display = index === -1 ? 'none' :
        });
    }

    if ('oninput' in $search[0]){
        $search.on('input', filter);
    } else {
        $search.on('keyup', filter);
    }
}());
