### General 


A modifier change is a very simple change. This could be a different background color, float direction or font-size. 

This rule should be declared with `.is-` or `.isnt-` and is only changing a small context.

### Example Snippet

The following example shows you the usage of a modifier (`.is-active`) on a navigation element: 

``` html
<nav class="b-navbar" id="site-menu">
	<h2>Templating in PG</h2>
	<ul class="navbar__list">
		<li class="navbar__list-item">
			<a class="navbar__link" href="../templating-in-pg/template-overview.html">Assemble Overview</a>
		</li>
		<li class="navbar__list-item">
			<a class="navbar__link is-active" href="../templating-in-pg/template-layouts.html">Assemble Standard Layouts</a>
		</li>
		<li class="navbar__list-item">
			<a class="navbar__link" href="../templating-in-pg/template-layouts--extended.html">Assemble Extended Layouts</a>
		</li>
	</ul>
</nav>
```
