/**
 * Const for events (pub/sub)
 *
 * @author: Sebastian Fitzner
 */

const Events = {
	btnClose: 'button:close',
	btnOpen: 'button:open',
	DOMchanged: 'DOMchanged',
	DOMredirect: 'dom:redirect',
	equalRender: 'equal:render',
	formComplete: 'form:complete',
	formReset: 'form:reset',
	mediachange: 'mediachange',
	navigationToggle: 'navigation:toggle',
	paginationClose: 'pagination:closed',
	paginationRendered: 'pagination:rendered',
	resize: 'resize',
	scroll: 'scroll',
	selectChanged: 'select:changed',
	selectRendered: 'select:rendered',
	toggleGlobal: 'toggle:global',
	toggleContext: 'toggle:context',
	uiOverlayPopulate: 'overlay:populate',
	uiOverlayClose: 'uiOverlay:populate'
};

export default Events;
