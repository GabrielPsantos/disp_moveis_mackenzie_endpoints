 


var funcoes = {
	cadastro :function(req,res){
		console.log(req.body.nome_usuario);
		if(req.body.nome_usuario && req.body.localizacao && req.body.grau_perigo){
			var aux = {
				nome_usuario : req.body.nome_usuario,
				localizacao : req.body.localizacao,
				grau_perigo : req.body.grau_perigo
			};
			res.json(aux);
		}else{
			res.json({msg : 'Cadastro invalido, por favor preencher todos os campos'});
		}
	},
	listagem : function(req,res){
		res.json({
			id : '000',
			nome_usuario : '',
			localizacao : '',
			grau_perigo : 1
		});
	}
}

module.exports = funcoes;