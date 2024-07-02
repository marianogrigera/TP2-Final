class Sonda {
    
    constructor() {
        this.listaSondas = [];
    }

    crearSonda = async (id, temperatura) => {
        this.listaSondas.push(sonda);
        return this.listaSondas[this.listaSondas.length - 1];
    };

    listar = async () => {
        return this.listaSondas
    };

    listarPorId = async () => {
        return this.listaSondas.filter(entry => entry.id === id);
    };
}

export default Sonda;
