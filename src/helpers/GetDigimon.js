import {useEffect} from 'react';

export const GetDigimon = ({setDigimons}) => {

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await fetch(
                    `https://digimon-api.vercel.app/api/digimon`
                );
                if (response.ok) {

                    const data = await response.json();
                    setTimeout(() => {
                        setDigimons(data) // ⬅️ Guardar datos
                        
                    }, 2000);

                } else {
                    console.error("Hubo un error al obtener el digimon");
                }
            } catch (error) {
                console.error("No pudimos hacer la solicitud para obtener el digimon");
            }
        }
        getData();
    }, [setDigimons]);
}
