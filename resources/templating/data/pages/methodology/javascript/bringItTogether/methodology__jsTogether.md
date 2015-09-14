### Example

``` hbs
<div class="b-navigation" data-js-module="navigation" data-js-options='{"openOnInit": true}'>
    <h2 class="navigation__headline is-hidden">Navigation</h2>
    <ol class="navigation__anchorlist" role="tablist">
        <li class="navigation__anchorlist-item">
            <a class="navigation__anchorlist-link" role="tab" aria-controls="panel-1" data-js-atom="nav-anchor" href="#panel-1">Capital Markets</a>
        </li>
        <li class="navigation__anchorlist-item">
            <a class="navigation__anchorlist-link" role="tab" aria-controls="panel-2" data-js-atom="nav-anchor" href="#panel-2">Retail Banking</a>
        </li>
    </ol>

    <nav class="navigation__tabs" data-js-atom="nav-container">
        <ul class="navigation__tablist">
            <li id="panel-1" role="tabpanel" aria-hidden="true" class="navigation__tab" data-js-atom="nav-panel">
                <section class="navigation__tab-inner"></section>
            </li>

            <li id="panel-2" role="tabpanel" aria-hidden="true" class="navigation__tab" data-js-atom="nav-panel">
                <section class="navigation__tab-inner"></section>
            </li>
        </ul>
        <button class="navigation__close" data-js-atom="nav-close">Close Navigation</button>
    </nav>
</div>
```