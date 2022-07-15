function initMap(){
    var coordinates = {
        lat:parseFloat(19.3416551), 
        lng:parseFloat(-98.985995)
        };
    var map = new google.maps.Map(
        document.getElementById('map'),{
            zoom:10,
            center:coordinates,
            map:map            
        });
        var marker = new google.maps.Marker({
            position:coordinates,
            map:map
        });
}
