export const validateSonda = ( sonda ) => {
    const { id, temperatura } = sonda;

    if (id < 1 || id > 5) {
        throw new Error('id no válido');
    }
    if (temperatura < -20 || temperatura > 100) {
        throw new Error('temperatura no válida');
    }
};

export const validateId = (id) => {
    if (id < 1 || id > 5) {
        throw new Error('Id de sonda no válido');
    }
};