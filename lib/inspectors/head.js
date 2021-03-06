var util = require('../util');

/**
 * 请使用req、res替代
 * @deprecated
 */
module.exports = function(req, res, next) {
	util.parseRuleJson(req.rules.head, function (data) {
		if (data) {
			var reqRule = req.rules.head.req = {};
			if (data.req) {
				reqRule.headers = data.req;
			}
			
			var resRule = req.rules.head.res = {};
			if (data.statusCode) {
				resRule.statusCode = data.statusCode;
			}
			
			if (data.body) {
				resRule.body = data.body;
			}
			
			if (data.res) {
				resRule.headers = data.res;
			}
			
		}
		
		next();
	});
};