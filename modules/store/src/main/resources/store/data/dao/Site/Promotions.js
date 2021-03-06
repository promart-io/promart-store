var query = require('db/v3/query');
var daoApi = require('db/v3/dao');
var dao = daoApi.create({
	'table': 'PROMART_ECOMM_SITE_PROMOTIONS',
	'properties': [
		{
			'name': 'Id',
			'column': 'ID',
			'type': 'INTEGER',
			'id': true,
		}, {
			'name': 'Image',
			'column': 'IMAGE',
			'type': 'VARCHAR',
		}, {
			'name': 'Link',
			'column': 'LINK',
			'type': 'VARCHAR',
		}, {
			'name': 'IndexId',
			'column': 'INDEXID',
			'type': 'INTEGER',
		}]
}, 'db.dao.PROMART_ECOMM_SITE_PROMOTIONS', "ECOMMERCE", "custom");

exports.list = function(settings) {
	return dao.list(settings);
};

exports.get = function(id) {
	return dao.find(id);
};

exports.create = function(entity) {
	return dao.insert(entity);
};

exports.update = function(entity) {
	return dao.update(entity);
};

exports.delete = function(id) {
	dao.remove(id);
};

exports.count = function() {
	return dao.count();
};

exports.customDataCount = function() {
	var resultSet = query.execute("SELECT COUNT(*) as COUNT FROM PROMART_ECOMM_SITE_PROMOTIONS");
	return resultSet !== null ? resultSet[0].COUNT : 0;
};