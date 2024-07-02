class Sonda {
    
    listaSondas = [];

    crearSonda = async (id, temperatura) => {
        this.listaSondas.push(sonda);
        return this.listaSondas[this.listaSondas.length - 1];
    };

    listar = async () => {
        return this.listaSondas
    };

    listarPorId = async () => {
        return listaSondas.filter(entry => entry.id === id);
    };
}

export default Sonda;