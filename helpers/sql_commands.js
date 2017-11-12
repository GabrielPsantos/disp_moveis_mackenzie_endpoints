module.exports = {
	insert : 'INSERT INTO `tb_buracos`(`nome_usuario`, `localizacao`, `grau_perigo`) VALUES (?, ?, ?)',
	select : 'SELECT * FROM tb_buracos order by id',
	find_id : 'SELECT * FROM tb_buracos where id = ?'
}