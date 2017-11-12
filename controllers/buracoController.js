var mysql = require('../helpers/mysql');
var modelo_resposta = require('../config/modelo_resposta');
var sql_commands = require('../helpers/sql_commands');

var funcoes = {
	cadastro :function(req,res){
		console.log(req.body.nome_usuario);
		if(req.body.nome_usuario && req.body.localizacao && req.body.grau_perigo){
			var aux = [
			req.body.nome_usuario,
			req.body.localizacao,
			req.body.grau_perigo
			];
			mysql.getConnection(function(err,connection){
				connection.query(sql_commands.insert,aux,function(error,results,fields){
					connection.release();
					if (error){
						modelo_resposta.status = 'erro';
						modelo_resposta.erro = error;
					}else{
						modelo_resposta.status = 'sucesso',
						modelo_resposta.resultado = {resultado : results};
					}
					res.json(modelo_resposta)
				});
			});
		}else{
			res.json({msg : 'Cadastro invalido, por favor preencher todos os campos'});
		};
	},
	listagem : function(req,res){
		mysql.getConnection(function(err,connection){
			connection.query(sql_commands.select,function(error,results,fields){
				connection.release();
				if (error){
					modelo_resposta.status = 'erro';
					modelo_resposta.erro = error;
				}else{
					modelo_resposta.status = 'sucesso',
					modelo_resposta.resultado = {buracos : results};
				}
				res.json(modelo_resposta);
			});
		});
	},
	find_id : function(req,res){
		if(req.params.id_buraco){
			mysql.getConnection(function(err,connection){
				var aux = [req.params.id_buraco];
				connection.query(sql_commands.find_id,aux,function(error,results,fields){
					connection.release();
					if (error){
						modelo_resposta.status = 'erro';
						modelo_resposta.erro = error;
					}else{
						modelo_resposta.status = 'sucesso',
						modelo_resposta.resultado = {buraco : results};
					}
					res.json(modelo_resposta);
				});
			});
		}else{
			res.json({msg : 'Cadastro invalido, por favor preencher id que deseja buscar'});
		}
	}
}


module.exports = funcoes;