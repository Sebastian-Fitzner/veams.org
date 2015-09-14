module.exports = function(Handlebars) {

window["App"] = window["App"] || {};
window["App"]["Templates"] = window["App"]["Templates"] || {};

window["App"]["Templates"]["TOC"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "	<li class=\"toc__list-item\">\r\n		<a class=\"toc__link\" href=\"#"
    + alias3(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" data-js-atom=\"toc-link\">\r\n			"
    + alias3(((helper = (helper = helpers.text || (depth0 != null ? depth0.text : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"text","hash":{},"data":data}) : helper)))
    + "\r\n		</a>\r\n	</li>\r\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0,depth0,{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "");
},"useData":true});

window["App"]["Templates"]["TOGGLE"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var stack1;

  return "--"
    + this.escapeExpression(this.lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.blocks : depth0)) != null ? stack1.content : stack1)) != null ? stack1.hash : stack1)) != null ? stack1.modifier : stack1), depth0));
},"3":function(depth0,helpers,partials,data) {
    return "";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, alias1=this.lambda, alias2=this.escapeExpression;

  return "---\r\nmodule: toggle\r\n---\r\n\r\n<ui-toggle id=\""
    + alias2(alias1(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.blocks : depth0)) != null ? stack1.content : stack1)) != null ? stack1.hash : stack1)) != null ? stack1.id : stack1), depth0))
    + "\" class=\"toggle"
    + ((stack1 = helpers['if'].call(depth0,((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.blocks : depth0)) != null ? stack1.content : stack1)) != null ? stack1.hash : stack1)) != null ? stack1.modifier : stack1),{"name":"if","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "\" data-js-module=\"toggle\" data-js-options='"
    + alias2(alias1(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.blocks : depth0)) != null ? stack1.content : stack1)) != null ? stack1.hash : stack1)) != null ? stack1.options : stack1), depth0))
    + "'>\r\n	"
    + ((stack1 = (helpers.block || (depth0 && depth0.block) || helpers.helperMissing).call(depth0,"content",{"name":"block","hash":{},"fn":this.program(3, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "\r\n</ui-toggle>";
},"useData":true});

return window["App"]["Templates"];

};