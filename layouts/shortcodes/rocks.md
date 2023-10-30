{{ $img := resources.Get "/posts/images/banner/front.jpg" }}
{{ $img = $img.Filter (images.Text "Hugo rocks!" (dict
    "color" "#ffffff"
    "size" 60
    "linespacing" 2
    "x" 10
    "y" 20
))}}