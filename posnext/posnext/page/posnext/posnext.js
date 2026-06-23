// frappe.provide('OmniPOS');
// (function() {
// 	console.log("HEREREssssssww")
//     var scriptPath = '/assets/OmniPOS/js/pos_controller.js';
//     var scriptUrl = scriptPath + '?v=' + Date.now();
//
//     var script = document.createElement('script');
//     script.src = scriptUrl;
//
//     document.head.appendChild(script);
// })();'console.log("OmniPOS POINTSALE")
frappe.pages['OmniPOS'].on_page_load = function(wrapper) {
	frappe.ui.make_app_page({
		parent: wrapper,
		title: __('Point of Sales'),
		single_column: true
	});

		window.wrapper = wrapper
		wrapper.pos = new OmniPOS.PointOfSale.Controller(wrapper);
		window.cur_pos = wrapper.pos;
}
frappe.pages['OmniPOS'].refresh = function(wrapper,onscan = "",value="") {
	// if (document.scannerDetectionData) {
		if(!onscan){
			window.onScan.detachFrom(document)
		}
		wrapper.pos.wrapper.html("");
		wrapper.pos.check_opening_entry(value);
	// }
};