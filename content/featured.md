---
title: ""
identifier: featured
date: 2023-10-23T22:03:27+02:00
draft: false
featured_image: "/posts/images/banner/front.jpg"
#omit_header_text: true
description: "Article en vedette"
type: page
#layout: single-featured
menu: main
---



## Featured Posts


<section>
  <ul>
    {{ range $key, $taxonomy := .Site.Taxonomies.featured }}
      <li>{{ $key }}</li>
      <ul>
        {{ range $taxonomy.Pages }}
          <li hugo-nav="{{ .RelPermalink }}"><a href="{{ .Permalink }}">{{ .LinkTitle }}</a></li>
        {{ end }}
      </ul>
    {{ end }}
  </ul>
  <ul>
	{{ if isset .Params "featured_post" }}
  		{{ with .Site.GetPage .Params.featured_post }}{{ .Title }}{{ end }}
		{{ end }}
	</ul>
	<ul>
  	{{ range .Data.Terms.Alphabetical }}
    <li><a href="{{ .Page.Permalink }}">{{ .Page.Title }}</a> {{ .Count }}</li>
  	{{ end }}
	</ul>

	{{ partial "featured.html" . }}
	{{ end }}

</section>



